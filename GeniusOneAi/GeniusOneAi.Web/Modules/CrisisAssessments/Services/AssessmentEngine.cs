using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.AgencyAdministration;
using GeniusOneAi.CrisisEpisodes.Services;
using EpisodeRow = GeniusOneAi.CrisisEpisodes.Entities.CrisisEpisodesRow;

namespace GeniusOneAi.CrisisAssessments.Services
{
    public class EvaluateRequest : ServiceRequest { public CrisisAssessmentsRow Entity { get; set; } }

    public class HardStop { public string Title { get; set; } public string Instruction { get; set; } public string Source { get; set; } }
    public class EvalNeed
    {
        public string NeedKey { get; set; } public string Label { get; set; } public string Category { get; set; } public string CategoryLabel { get; set; }
        public string Priority { get; set; } public string Sources { get; set; } public int E3E4Goals { get; set; }
    }
    public class EvalGoal
    {
        public int LibraryGoalId { get; set; } public string Code { get; set; } public string Phase { get; set; } public string Description { get; set; }
        public string NeedKey { get; set; } public bool IsProtocol { get; set; } public bool Locked { get; set; } public bool Preselected { get; set; } public string Source { get; set; }
    }
    public class EvaluationResult : ServiceResponse
    {
        public string FormType { get; set; }
        public int Score { get; set; } public int ScoreCutoff { get; set; } public bool ScoreReached { get; set; } public int Answered { get; set; } public int QuestionCount { get; set; }
        public bool HighRisk { get; set; }
        public List<HardStop> HardStops { get; set; } = new();
        public List<EvalNeed> Needs { get; set; } = new();
        public List<EvalGoal> TonightGoals { get; set; } = new();
        public List<int> FiredRuleIds { get; set; } = new();
        public int E2ProtocolGoals { get; set; } public int E5ProtocolGoals { get; set; } public int FollowUpGoals { get; set; }
        public bool RepeatEpisode { get; set; }
        public string ProtocolResult { get; set; }
    }

    public class DeclinedGoal { public int LibraryGoalId { get; set; } public string Reason { get; set; } }
    public class CompleteRequest : ServiceRequest
    {
        public int? AssessmentId { get; set; }
        public string[] NeedKeys { get; set; }
        public int[] GoalIds { get; set; }
        public List<DeclinedGoal> Declined { get; set; }
    }
    public class CompleteResponse : ServiceResponse
    {
        public int EpisodeId { get; set; } public bool EpisodeOpened { get; set; } public int NeedsCreated { get; set; }
        public Dictionary<string, int> GoalsByPhase { get; set; } = new();
    }

    /// <summary>
    /// The assessment engine: answers -> score / hard stops -> needs -> library goals per encounter.
    /// Evaluate() is pure (used live while the clinician types); Complete() persists the confirmed plan.
    /// </summary>
    public static class AssessmentEngine
    {
        static readonly string[] PriorityOrder = { "Urgent", "High", "Medium", "Low" };
        static int Prio(string p) { var i = Array.IndexOf(PriorityOrder, p); return i < 0 ? 9 : i; }

        /// <summary>Update requests carry only assigned fields; merge them over the stored row before evaluating.</summary>
        public static CrisisAssessmentsRow Merge(CrisisAssessmentsRow old, CrisisAssessmentsRow patch)
        {
            var m = new CrisisAssessmentsRow();
            foreach (Field f in old.GetFields()) if (old.IsAssigned(f)) f.Copy(old, m);
            foreach (Field f in patch.GetFields()) if (patch.IsAssigned(f)) f.Copy(patch, m);
            return m;
        }

        public static EvaluationResult Evaluate(IDbConnection conn, CrisisAssessmentsRow a, bool forSave = false)
        {
            var res = new EvaluationResult { FormType = AssessmentRules.IsChild(a) ? "Child" : "Adult" };
            bool child = AssessmentRules.IsChild(a);
            res.QuestionCount = child ? AssessmentRules.ChildQuestions : AssessmentRules.AdultQuestions;
            res.Answered = Enumerable.Range(1, res.QuestionCount).Count(i => AssessmentRules.Q(a, i) != null);
            res.Score = AssessmentRules.Score(a);
            res.ScoreCutoff = child ? AssessmentRules.ChildCutoff : AssessmentRules.AdultCutoff;
            res.ScoreReached = res.Score >= res.ScoreCutoff;
            res.RepeatEpisode = a.ClientId != null && Repeat90(conn, a.ClientId.Value);

            var needs = new Dictionary<string, EvalNeed>();
            var goalCodes = new Dictionary<string, (bool preselected, bool locked, string source)>();
            foreach (var r in AssessmentRules.All)
            {
                if (!AssessmentRules.Eval(r, a, res.Score, res.RepeatEpisode)) continue;
                res.FiredRuleIds.Add(r.Id);
                if (r.Phase == "HARD_STOP")
                {
                    res.HighRisk = true;
                    if (!res.HardStops.Any(h => h.Title == r.HardStopTitle && h.Instruction == r.HardStopInstruction))
                        res.HardStops.Add(new HardStop { Title = r.HardStopTitle, Instruction = r.HardStopInstruction, Source = r.Item });
                }
                foreach (var nk in r.Needs)
                {
                    if (!needs.TryGetValue(nk, out var n)) needs[nk] = n = new EvalNeed { NeedKey = nk, Priority = r.Priority, Sources = r.Item };
                    else { if (Prio(r.Priority) < Prio(n.Priority)) n.Priority = r.Priority; if (!n.Sources.Contains(r.Item)) n.Sources += "; " + r.Item; }
                }
                bool tonight = r.Phase == "E1" || r.Phase == "HARD_STOP";
                bool locked = r.Phase == "HARD_STOP" || r.Predicate == "always";
                for (int gi = 0; gi < r.GoalCodes.Length; gi++)
                {
                    var code = r.GoalCodes[gi];
                    // rules that list several variants (e.g. grief by cause of death) preselect only the first; the rest stay optional
                    bool pre = tonight && (r.Phase == "HARD_STOP" || gi == 0 || r.GoalCodes.Length <= 2);
                    if (!goalCodes.TryGetValue(code, out var g)) goalCodes[code] = (pre, locked, r.Item);
                    else goalCodes[code] = (g.preselected || pre, g.locked || locked, g.source.Contains(r.Item) ? g.source : g.source + "; " + r.Item);
                }
            }
            res.ProtocolResult = ProtocolText(a, child, res.HighRisk);
            if (forSave) return res;   // save path only needs score / hard stops

            // decorate needs from CrisisNeeds
            var nf = CrisisNeedsRow.Fields;
            var needRows = conn.List<CrisisNeedsRow>(q => q.SelectTableFields().Where(nf.IsActive == 1));
            var lf = ClientGoalsLibraryRow.Fields;
            foreach (var n in needs.Values)
            {
                var row = needRows.FirstOrDefault(x => x.NeedKey == n.NeedKey);
                n.Label = row?.Label ?? n.NeedKey; n.Category = row?.Category; n.CategoryLabel = row?.CategoryLabel;
                n.E3E4Goals = conn.Count<ClientGoalsLibraryRow>(lf.NeedKey == n.NeedKey & lf.Phase.In("E3", "E4") & lf.IsActive == 1);
            }
            res.Needs = needs.Values.OrderBy(n => Prio(n.Priority)).ThenBy(n => n.Label).ToList();

            // tonight's goals from the library by code
            if (goalCodes.Count > 0)
            {
                var libs = conn.List<ClientGoalsLibraryRow>(q => q.SelectTableFields().Where(lf.Code.In(goalCodes.Keys.ToArray()) & lf.IsActive == 1));
                foreach (var l in libs)
                {
                    var g = goalCodes[l.Code];
                    bool locked = (l.IsProtocol ?? false) && g.locked;
                    res.TonightGoals.Add(new EvalGoal
                    {
                        LibraryGoalId = l.ClientGoalId.Value, Code = l.Code, Phase = l.Phase, Description = l.Description, NeedKey = l.NeedKey,
                        IsProtocol = l.IsProtocol ?? false, Locked = locked, Preselected = g.preselected || locked, Source = g.source
                    });
                }
                res.TonightGoals = res.TonightGoals.OrderByDescending(g => g.Locked).ThenByDescending(g => g.Preselected).ThenBy(g => g.Code).ToList();
            }
            res.E2ProtocolGoals = conn.Count<ClientGoalsLibraryRow>(lf.Phase == "E2" & lf.IsActive == 1);
            res.E5ProtocolGoals = conn.Count<ClientGoalsLibraryRow>(lf.Phase == "E5" & lf.IsActive == 1);
            res.FollowUpGoals = conn.Count<ClientGoalsLibraryRow>(lf.Phase == "FU" & lf.IsActive == 1);
            return res;
        }

        /// <summary>Plain-language Columbia / ASQ result line, printed on the document and shown in the rail.</summary>
        public static string ProtocolText(CrisisAssessmentsRow a, bool child, bool highRisk)
        {
            string[] s = { a.S1, a.S2, a.S3, a.S4, a.S5, a.S6 };
            int n = child ? 5 : 6;
            var yes = new List<int>(); var no = new List<int>();
            for (int i = 0; i < n; i++) { if (s[i] == "Yes") yes.Add(i + 1); else if (s[i] == "No") no.Add(i + 1); }
            if (yes.Count + no.Count == 0) return null;
            string ans = (yes.Count > 0 ? "YES to " + string.Join(", ", yes) : "No YES answers") + (no.Count > 0 ? "; NO to " + string.Join(", ", no) : "") + ".";
            if (child)
            {
                if (highRisk) return "ASQ: " + ans + " ACUTE POSITIVE - imminent risk. Patient requires a STAT safety / full mental health evaluation; cannot leave until evaluated.";
                if (yes.Count > 0) return "ASQ: " + ans + " Non-acute positive screen. Brief suicide safety assessment required before the child leaves; refer for full mental health evaluation.";
                return "ASQ: " + ans + " Negative screen. No further suicide-risk action required by protocol.";
            }
            if (highRisk) return "Columbia: " + ans + " HIGH RISK (YES to 4, 5 or 6). Follow the IVC / emergency protocol; client is not left alone; safety plan and lethal-means counseling are protocol goals.";
            if (yes.Count > 0) return "Columbia: " + ans + " Positive screen, not high risk. Per protocol: behavioral health evaluation and safety plan; safety plan goal is locked.";
            return "Columbia: " + ans + " Negative screen. Suicide-risk protocol goals not indicated.";
        }

        static bool Repeat90(IDbConnection conn, int clientId)
        {
            var e = EpisodeRow.Fields;
            return conn.Exists<EpisodeRow>(e.ClientId == clientId & e.ClosedAt.IsNotNull() & e.ClosedAt >= DateTime.Today.AddDays(-90));
        }

        public static CompleteResponse Complete(IUnitOfWork uow, CompleteRequest req, int? userId)
        {
            var conn = uow.Connection;
            if (req.AssessmentId == null) throw new ValidationError("AssessmentId is required.");
            var a = conn.TryById<CrisisAssessmentsRow>(req.AssessmentId.Value) ?? throw new ValidationError("Assessment not found.");
            if (a.Status == "Completed" || a.Status == "Signed")
                throw new ValidationError("AlreadyCompleted", "This assessment was already completed; its goals are on episode #" + a.EpisodeId + ".");
            var ev = Evaluate(conn, a);
            var res = new CompleteResponse();

            // 1. episode: reuse the open one or open a new one from the presenting picture
            var ep = EpisodeService.GetOpen(conn, a.ClientId.Value);
            if (ep == null)
            {
                ep = EpisodeService.Open(uow, a.ClientId.Value, Trigger(a, ev), userId, a.TenantId, a.ProjectedDischarge);
                res.EpisodeOpened = true;
            }
            res.EpisodeId = ep.EpisodeId.Value;
            conn.UpdateById(new EpisodeRow { EpisodeId = ep.EpisodeId, AssessmentId = a.AssessmentId });

            // 2. needs the clinician accepted
            var accepted = new HashSet<string>(req.NeedKeys ?? new string[0]);
            int order = 0;
            var needRecIds = new Dictionary<string, int>();
            foreach (var n in ev.Needs.Where(n => accepted.Contains(n.NeedKey)))
            {
                needRecIds[n.NeedKey] = Convert.ToInt32(conn.InsertAndGetID(new CrisisAssessmentNeedsRow
                {
                    AssessmentId = a.AssessmentId, EpisodeId = ep.EpisodeId, ClientId = a.ClientId, TenantId = a.TenantId,
                    NeedKey = n.NeedKey, Priority = n.Priority, Source = n.Sources, Accepted = true, Status = "Identified", SortOrder = ++order
                }));
                res.NeedsCreated++;
            }

            // 3. goals per encounter phase
            var lf = ClientGoalsLibraryRow.Fields;
            var tonight = new List<int>(req.GoalIds ?? new int[0]);
            foreach (var g in ev.TonightGoals.Where(g => g.Locked)) if (!tonight.Contains(g.LibraryGoalId)) tonight.Add(g.LibraryGoalId);
            int copy(string phase, IEnumerable<int> ids)
            {
                var list = ids.Distinct().ToList(); if (list.Count == 0) return 0;
                var r = LibraryCopyService.Copy(uow, a.ClientId.Value, ep.EpisodeId, phase, list, userId);
                res.GoalsByPhase[phase] = res.GoalsByPhase.TryGetValue(phase, out var c) ? c + r.Copied : r.Copied;
                return r.Copied;
            }
            int[] byPhase(string phase, string needKey = null) => conn.List<ClientGoalsLibraryRow>(q =>
            {
                q.Select(lf.ClientGoalId).Where(lf.Phase == phase & lf.IsActive == 1);
                if (needKey != null) q.Where(lf.NeedKey == needKey);
                q.OrderBy(lf.Code);
            }).Select(x => x.ClientGoalId.Value).ToArray();

            copy("E1", tonight);
            // record what the clinician kept or declined among the suggested goals (printed on the document)
            var declined = (req.Declined ?? new List<DeclinedGoal>()).ToDictionary(d => d.LibraryGoalId, d => d.Reason);
            foreach (var g in ev.TonightGoals)
            {
                bool kept = tonight.Contains(g.LibraryGoalId);
                if (!kept && !g.Preselected) continue;   // optional library extras that were not chosen are not "declined"
                conn.Insert(new CrisisAssessmentGoalDecisionsRow
                {
                    AssessmentId = a.AssessmentId, EpisodeId = ep.EpisodeId, LibraryGoalId = g.LibraryGoalId, Code = g.Code, Description = g.Description,
                    Source = g.Source, Kept = kept, Reason = kept ? (g.Locked ? "Protocol goal" : null) : (declined.TryGetValue(g.LibraryGoalId, out var why) && !string.IsNullOrWhiteSpace(why) ? why : "Not kept by clinician")
                });
            }
            copy("E2", byPhase("E2"));
            foreach (var nk in accepted)
            {
                int made = copy("E3", byPhase("E3", nk)) + copy("E4", byPhase("E4", nk));
                if (needRecIds.TryGetValue(nk, out var recId))
                    conn.UpdateById(new CrisisAssessmentNeedsRow { NeedRecId = recId, GoalsCreated = made });
            }
            copy("E5", byPhase("E5"));
            copy("FU", byPhase("FU"));

            // 4. close out the assessment
            conn.UpdateById(new CrisisAssessmentsRow
            {
                AssessmentId = a.AssessmentId, Status = "Completed", CompletedAt = DateTime.Now, EpisodeId = ep.EpisodeId,
                Score = ev.Score, HighRisk = ev.HighRisk, ProtocolResult = ev.ProtocolResult,
                HardStopReasons = ev.HardStops.Count == 0 ? null : string.Join(" | ", ev.HardStops.Select(h => h.Title + ": " + h.Source))
            });
            return res;
        }

        static string Trigger(CrisisAssessmentsRow a, EvaluationResult ev)
        {
            var parts = new List<string>();
            if (ev.HardStops.Count > 0) parts.AddRange(ev.HardStops.Select(h => h.Title).Distinct());
            if (a.PrimaryRisk == "MentalHealth") parts.Add("Mental health crisis"); else if (a.PrimaryRisk == "SubstanceAbuse") parts.Add("Substance use crisis");
            if (!string.IsNullOrEmpty(a.RiskCategories)) parts.AddRange(a.RiskCategories.Split('|').Take(4).Select(k => k.Replace('_', ' ')));
            var t = string.Join("; ", parts);
            return string.IsNullOrEmpty(t) ? (ev.FormType + " crisis assessment") : (t.Length > 480 ? t.Substring(0, 480) : t);
        }
    }
}
