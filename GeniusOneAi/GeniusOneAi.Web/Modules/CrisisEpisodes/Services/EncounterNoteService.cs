using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Serenity.Data;
using Serenity.Services;

namespace GeniusOneAi.CrisisEpisodes.Services
{
    // ------------------------------------------------------------------ DTOs (PascalCase on the wire)
    public class NoteQuestion
    {
        public int QuestionId { get; set; }
        public int SortOrder { get; set; }
        public string Prompt { get; set; }
        public string AnswerType { get; set; }
        public string[] Options { get; set; }
        public string SentenceTemplate { get; set; }
        public string ResourceType { get; set; }
        public bool SendsToCrisisPlan { get; set; }
        public bool IsRequired { get; set; }
        public string ShowWhen { get; set; }
        public string Answer { get; set; }
    }
    public class NoteOutcome
    {
        public int OutcomeId { get; set; }
        public int? LibraryOutcomeId { get; set; }
        public string Text { get; set; }
        public string StatusRule { get; set; }
        public string EffectivenessTemplate { get; set; }
        public bool? IsMet { get; set; }
        public List<NoteQuestion> Questions { get; set; } = new();
    }
    public class NoteIntervention
    {
        public int ClientGoalInterventionId { get; set; }
        public int? Number { get; set; }
        public string Desc { get; set; }
        public bool Provided { get; set; }
        public string Detail { get; set; }
    }
    public class NoteGoal
    {
        public int ClientGoalId { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Phase { get; set; }
        public bool IsProtocol { get; set; }
        public bool IsCarried { get; set; }
        public string NeedKey { get; set; }
        public string EffectivenessMeasure { get; set; }
        public string Status { get; set; }
        public bool StatusOverride { get; set; }
        public string OutcomeText { get; set; }
        public string EffectivenessText { get; set; }
        public string WorkerNote { get; set; }
        public List<NoteIntervention> Interventions { get; set; } = new();
        public List<NoteOutcome> Outcomes { get; set; } = new();
    }
    public class GateState { public bool Ready { get; set; } public List<string> Missing { get; set; } = new(); }
    public class PlanEntry { public int EntryId { get; set; } public string EntryType { get; set; } public string EntryText { get; set; } public int? SourceGoalId { get; set; } public int? SourceNoteId { get; set; } }
    public class EpisodeGoalSummary { public int ClientGoalId { get; set; } public string Code { get; set; } public string Description { get; set; } public string Phase { get; set; } public string Status { get; set; } public string LastOutcome { get; set; } public int? LastEncounter { get; set; } }
    public class NoteData
    {
        public int ActivityId { get; set; }
        public int ProgramNoteId { get; set; }
        public int EpisodeId { get; set; }
        public int EncounterNo { get; set; }
        public string Phase { get; set; }
        public string PhaseLabel { get; set; }
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public DateTime? ServiceDate { get; set; }
        public string NoteStatus { get; set; }
        public bool Locked { get; set; }
        public int? FollowUpDay { get; set; }
        public string ContactMethod { get; set; }
        public bool? SafetyConcern { get; set; }
        public string SafetyText { get; set; }
        public bool? LongTermAdmission { get; set; }
        public string Summary { get; set; }
        public string DischargeSummary { get; set; }
        public List<NoteGoal> Goals { get; set; } = new();
        public GateState Gate { get; set; } = new();
        public string ConsentGateMessage { get; set; }
        public List<PlanEntry> CrisisPlan { get; set; } = new();
        public List<EpisodeGoalSummary> EpisodeGoals { get; set; } = new();
        public string Field01 { get; set; }
        public string Field02 { get; set; }
        public string Field03 { get; set; }
        public string Field04 { get; set; }
    }
    public class SaveGoal
    {
        public int ClientGoalId { get; set; }
        public string Status { get; set; }
        public bool StatusOverride { get; set; }
        public string WorkerNote { get; set; }
        public List<NoteIntervention> Interventions { get; set; } = new();
        public List<SaveAnswer> Answers { get; set; } = new();
    }
    public class SaveAnswer { public int OutcomeId { get; set; } public int QuestionId { get; set; } public string Answer { get; set; } }
    public class SaveNoteDataRequest : ServiceRequest
    {
        public int? ActivityId { get; set; }
        public List<SaveGoal> Goals { get; set; } = new();
        public bool? SafetyConcern { get; set; }
        public string SafetyText { get; set; }
        public string ContactMethod { get; set; }
        public bool? LongTermAdmission { get; set; }
    }
    public class StartEncounterRequest : ServiceRequest
    {
        public int? EpisodeId { get; set; }
        public DateTime? ServiceDate { get; set; }
        public string FromTime { get; set; }
        public string ToTime { get; set; }
        public string Location { get; set; }
        public bool? IsBillable { get; set; }
        public int? FollowUpId { get; set; }
        public string ContactMethod { get; set; }
    }
    public class StartEncounterResponse : ServiceResponse { public int ActivityId { get; set; } public int ProgramNoteId { get; set; } public bool Resumed { get; set; } }
    public class TimelineEncounter { public int ActivityId { get; set; } public int ProgramNoteId { get; set; } public int? EncounterNo { get; set; } public string Phase { get; set; } public string PhaseLabel { get; set; } public DateTime? ServiceDate { get; set; } public string Status { get; set; } public int? FollowUpDay { get; set; } public string Summary { get; set; } }
    public class TimelineFollowUp { public int FollowUpId { get; set; } public int Day { get; set; } public DateTime DueDate { get; set; } public string Status { get; set; } public int? ActivityId { get; set; } public string Result { get; set; } }
    public class EpisodeTimeline : ServiceResponse
    {
        public int EpisodeId { get; set; }
        public string Phase { get; set; }
        public string PhaseLabel { get; set; }
        public bool Closed { get; set; }
        public string Disposition { get; set; }
        public string NextAction { get; set; }
        public int? OpenActivityId { get; set; }
        public List<TimelineEncounter> Encounters { get; set; } = new();
        public List<TimelineFollowUp> FollowUps { get; set; } = new();
        public List<EpisodeGoalSummary> Goals { get; set; } = new();
    }

    /// <summary>
    /// Encounter notes: pre-loads a note with the episode goals of its phase, records intervention checks
    /// and outcome-question answers, derives per-goal status / outcome / effectiveness, writes the four
    /// MCM note sections into the existing ProgramNotes Field01..Field04 so the approval pipeline and the
    /// PDF generator keep working unchanged, feeds the Crisis Plan, schedules Day 7/14/21 follow-ups.
    /// </summary>
    public static class EncounterNoteService
    {
        public const string TemplateName = "Mobile Crisis Management (MCM)";
        public static readonly string[] SignedStatuses = { "Submitted", "Re-Submitted", "Approved" };
        public static readonly Dictionary<string, string> StatusLabels = new()
        {
            ["Met"] = "Met", ["PartiallyMet"] = "Partially met", ["NotMet"] = "Not met", ["Carried"] = "In progress - carried to the next encounter"
        };
        public static string StatusLabel(string s) => s != null && StatusLabels.TryGetValue(s, out var l) ? l : (s ?? "Open");

        // Dapper (real one, fully qualified - Serenity ships a fork under Serenity.Data that collides on Query/Execute)
        private static IEnumerable<T> Q<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.Query<T>(c, sql, p);
        private static int X(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.Execute(c, sql, p);
        private static T S<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.ExecuteScalar<T>(c, sql, p);
        private static T F<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.QueryFirstOrDefault<T>(c, sql, p);

        private class AuthInfo { public int? AuthorizationId { get; set; } public string BillCode { get; set; } }
        private class OpenNote { public int ActivityId { get; set; } public int ProgramNoteId { get; set; } }
        private class NoteHead
        {
            public int ProgramNoteId; public int ActivityId; public int? EpisodeId; public int? EncounterNo; public string Phase; public string Status;
            public int? FollowUpDay; public string ContactMethod; public bool? SafetyConcern; public string SafetyText; public bool? LongTermAdmission; public string Summary; public string DischargeSummary;
            public int? ClientId; public DateTime? ActivityDate; public int? TenantId; public string FirstName; public string LastName;
            public string Field01; public string Field02; public string Field03; public string Field04;
        }
        private static NoteHead Head(IDbConnection c, int activityId)
        {
            return F<NoteHead>(c, @"
SELECT n.ProgramNoteId, n.ActivityId, n.EpisodeId, n.EncounterNo, n.Phase, n.Status, n.FollowUpDay, n.ContactMethod, n.SafetyConcern, n.SafetyText,
       n.LongTermAdmission, n.Summary, n.DischargeSummary, a.ClientId, a.ActivityDate, a.TenantId, cl.FirstName, cl.LastName,
       n.Field01, n.Field02, n.Field03, n.Field04
FROM ProgramNotes n JOIN Activities a ON a.ActivityId = n.ActivityId LEFT JOIN Clients cl ON cl.ClientId = a.ClientId
WHERE n.ActivityId = @activityId", new { activityId });
        }

        // ------------------------------------------------------------------ start an encounter
        public static StartEncounterResponse StartEncounter(IUnitOfWork uow, StartEncounterRequest r, int userId)
        {
            var c = uow.Connection;
            if (r.EpisodeId == null) throw new ValidationError("Episode is required.");
            var ep = F<dynamic>(c, "SELECT EpisodeId, ClientId, Phase, ClosedAt, TenantId, EncounterCount FROM CrisisEpisodes WHERE EpisodeId = @id", new { id = r.EpisodeId });
            if (ep == null) throw new ValidationError("Episode not found.");
            if (ep.ClosedAt != null) throw new ValidationError("This episode is closed. Open a new episode for a new crisis.");

            // Resume an unsigned note of this episode instead of creating a second one.
            var open = F<OpenNote>(c, 
                "SELECT TOP 1 n.ActivityId, n.ProgramNoteId FROM ProgramNotes n WHERE n.EpisodeId = @id AND (n.Status IS NULL OR n.Status NOT IN ('Submitted','Re-Submitted','Approved')) ORDER BY n.ProgramNoteId DESC", new { id = r.EpisodeId });
            if (open != null) return new StartEncounterResponse { ActivityId = open.ActivityId, ProgramNoteId = open.ProgramNoteId, Resumed = true };

            string phase = ep.Phase; int? followUpDay = null; string contact = r.ContactMethod;
            if (r.FollowUpId != null)
            {
                var fu = F<dynamic>(c, "SELECT FollowUpId, Day, Status FROM CrisisEpisodeFollowUps WHERE FollowUpId = @id AND EpisodeId = @ep", new { id = r.FollowUpId, ep = r.EpisodeId });
                if (fu == null) throw new ValidationError("Follow-up not found.");
                if ((string)fu.Status == "Completed") throw new ValidationError("This follow-up is already completed.");
                phase = EpisodePhase.FollowUp; followUpDay = (int)fu.Day; contact ??= "Phone";
            }
            else if (phase == EpisodePhase.FollowUp) throw new ValidationError("This episode is in follow-up. Start the Day 7 / 14 / 21 call from the follow-up list.");
            else if (phase == EpisodePhase.Closed) throw new ValidationError("Episode is closed.");
            contact ??= "Face to Face";

            var templateId = F<int?>(c, "SELECT TOP 1 ProgramNoteTemplateId FROM ProgramNoteTemplates WHERE Name = @n", new { n = TemplateName })
                ?? throw new ValidationError("The MCM note template is missing. Run the Phase 4 migration.");
            var date = (r.ServiceDate ?? DateTime.Today).Date;
            TimeSpan? from = ParseTime(r.FromTime), to = ParseTime(r.ToTime);
            decimal? hours = (from != null && to != null && to > from) ? Math.Round((decimal)(to.Value - from.Value).TotalHours, 2) : null;
            var encounterNo = EpisodeService.NextEncounterNumber(c, (int)ep.EpisodeId);
            // Billing: reuse the client's case assignment / authorization when one is on file (worker first, then any).
            var auth = F<AuthInfo>(c, "SELECT TOP 1 AuthorizationId, BillCode FROM vClientAssignments WHERE ClientId = @cid ORDER BY CASE WHEN UserId = @uid THEN 0 ELSE 1 END, EndDate DESC", new { cid = (int)ep.ClientId, uid = userId });
            var label = followUpDay != null ? $"Post-Discharge Follow-up - Day {followUpDay}" : EpisodePhase.Label(phase);

            var activityId = S<int>(c, @"
INSERT INTO Activities (UserId, ClientId, Activity, ActivityDate, ActivityFromTime, ActivityToTime, IsBillable, Status, ProgressNoteTemplateId, ProgressNoteInOut, ProgressNoteLocation, Hours, TenantId, EpisodeId, Phase, AuthorizationId, BillCode)
VALUES (@UserId, @ClientId, 'Patient', @Date, @From, @To, @Billable, 'Notes Pending', @TemplateId, @Loc, @LocCode, @Hours, @TenantId, @EpisodeId, @Phase, @AuthId, @BillCode);
SELECT CAST(SCOPE_IDENTITY() AS INT);",
                new { UserId = userId, ClientId = (int)ep.ClientId, Date = date, From = from, To = to, Billable = r.IsBillable ?? true, TemplateId = templateId, Loc = r.Location, LocCode = contact == "Face to Face" ? 1 : contact == "Video" ? 2 : 4, Hours = hours, TenantId = (int?)ep.TenantId, EpisodeId = (int)ep.EpisodeId, Phase = phase, AuthId = auth?.AuthorizationId, BillCode = auth?.BillCode ?? "H2011" });
            var noteId = S<int>(c, @"
INSERT INTO ProgramNotes (ActivityId, ProgramNoteTemplateId, Status, Field00, EpisodeId, EncounterNo, Phase, FollowUpDay, ContactMethod, GateComplete)
VALUES (@ActivityId, @TemplateId, 'Not Started', @Label, @EpisodeId, @EncounterNo, @Phase, @FollowUpDay, @Contact, 0);
SELECT CAST(SCOPE_IDENTITY() AS INT);",
                new { ActivityId = activityId, TemplateId = templateId, Label = label, EpisodeId = (int)ep.EpisodeId, EncounterNo = encounterNo, Phase = phase, FollowUpDay = followUpDay, Contact = contact });
            X(c, "UPDATE Activities SET ProgressNoteId = @noteId WHERE ActivityId = @activityId", new { noteId, activityId });
            if (r.FollowUpId != null)
                X(c, "UPDATE CrisisEpisodeFollowUps SET Status = 'Started', ActivityId = @activityId, ProgramNoteId = @noteId WHERE FollowUpId = @id", new { activityId, noteId, id = r.FollowUpId });

            PreloadGoals(c, noteId, (int)ep.EpisodeId, phase, (int?)ep.TenantId);
            ComposeAndStore(c, activityId);
            return new StartEncounterResponse { ActivityId = activityId, ProgramNoteId = noteId, Resumed = false };
        }

        private static TimeSpan? ParseTime(string s) => TimeSpan.TryParse(s, out var t) ? t : (TimeSpan?)null;

        /// <summary>Goals of this phase + every earlier-phase goal of the episode that is not yet met (carried).
        /// Follow-up (Day 7/14/21) goals are recurring check-ins: they are re-presented on every follow-up note even when met on an earlier day.</summary>
        private static void PreloadGoals(IDbConnection c, int noteId, int episodeId, string phase, int? tenantId)
        {
            var order = EpisodePhase.Ordered.ToList();
            var idx = order.IndexOf(phase); if (idx < 0) idx = order.Count - 1;
            var earlier = order.Take(idx).ToArray();
            var goals = Q<(int ClientGoalId, string Phase, bool? IsProtocol)>(c, @"
SELECT ClientGoalId, Phase, IsProtocol FROM ClientGoals
WHERE EpisodeId = @episodeId
  AND ( (Phase = @phase AND (@phase = 'FU' OR Status IS NULL OR Status NOT IN ('Completed','Incomplete','Cancelled')))
     OR (Phase IN @earlier AND (Status IS NULL OR Status NOT IN ('Completed','Incomplete','Cancelled'))) )
ORDER BY CASE WHEN Phase = @phase THEN 0 ELSE 1 END, IsProtocol DESC, ClientGoalId", new { episodeId, phase, earlier }).ToList();
            int sort = 1;
            foreach (var g in goals)
            {
                var carried = g.Phase != phase;
                // A protocol goal from Encounter 1 (safety plan / crisis plan) follows the client through every encounter; other carried goals only when still open.
                X(c, "INSERT INTO EncounterNoteGoals (ProgramNoteId, ClientGoalId, SortOrder, IsCarried, StatusOverride, TenantId) VALUES (@noteId, @gid, @sort, @carried, 0, @tenantId)",
                    new { noteId, gid = g.ClientGoalId, sort = sort++, carried, tenantId });
                X(c, @"INSERT INTO EncounterNoteInterventions (ProgramNoteId, ClientGoalId, ClientGoalInterventionId, Provided, TenantId)
SELECT @noteId, ClientGoalId, ClientGoalInterventionId, 0, @tenantId FROM ClientGoalInterventions WHERE ClientGoalId = @gid", new { noteId, gid = g.ClientGoalId, tenantId });
            }
        }

        // ------------------------------------------------------------------ read
        public static NoteData GetNoteData(IDbConnection c, int activityId)
        {
            var h = Head(c, activityId) ?? throw new ValidationError("Note not found.");
            if (h.EpisodeId == null) throw new ValidationError("This note is not part of a crisis episode.");
            var d = new NoteData
            {
                ActivityId = h.ActivityId, ProgramNoteId = h.ProgramNoteId, EpisodeId = h.EpisodeId.Value, EncounterNo = h.EncounterNo ?? 0, Phase = h.Phase,
                PhaseLabel = h.FollowUpDay != null ? $"Post-Discharge Follow-up - Day {h.FollowUpDay}" : EpisodePhase.Label(h.Phase),
                ClientId = h.ClientId ?? 0, ClientName = ($"{h.FirstName} {h.LastName}").Trim(), ServiceDate = h.ActivityDate, NoteStatus = h.Status,
                Locked = SignedStatuses.Contains(h.Status ?? ""), FollowUpDay = h.FollowUpDay, ContactMethod = h.ContactMethod, SafetyConcern = h.SafetyConcern, SafetyText = h.SafetyText,
                LongTermAdmission = h.LongTermAdmission, Summary = h.Summary, DischargeSummary = h.DischargeSummary,
                Field01 = h.Field01, Field02 = h.Field02, Field03 = h.Field03, Field04 = h.Field04,
            };
            d.Goals = LoadGoals(c, h.ProgramNoteId);
            if (h.Phase == EpisodePhase.FirstResponder && h.EpisodeId != null) d.ConsentGateMessage = ConsentService.GateMessage(c, h.EpisodeId.Value);
            d.Gate = Gate(d);
            d.CrisisPlan = Q<PlanEntry>(c, @"SELECT e.EntryId, e.EntryType, e.EntryText, e.SourceGoalId, e.SourceNoteId FROM ClientCrisisPlanEntries e JOIN ClientCrisisPlans p ON p.PlanId = e.PlanId
WHERE p.EpisodeId = @ep AND e.IsActive = 1 ORDER BY e.EntryId", new { ep = h.EpisodeId }).ToList();
            if (h.Phase == EpisodePhase.PreDischarge || h.Phase == EpisodePhase.FollowUp) d.EpisodeGoals = EpisodeGoals(c, h.EpisodeId.Value);
            return d;
        }

        private static List<NoteGoal> LoadGoals(IDbConnection c, int noteId)
        {
            var goals = Q<NoteGoal>(c, @"
SELECT g.ClientGoalId, g.Goal AS Code, g.Description, g.Phase, ISNULL(g.IsProtocol,0) AS IsProtocol, ng.IsCarried, g.NeedKey, g.EffectivenessMeasure,
       ng.Status, ng.StatusOverride, ng.OutcomeText, ng.EffectivenessText, ng.WorkerNote
FROM EncounterNoteGoals ng JOIN ClientGoals g ON g.ClientGoalId = ng.ClientGoalId
WHERE ng.ProgramNoteId = @noteId ORDER BY ng.SortOrder, ng.NoteGoalId", new { noteId }).ToList();
            if (goals.Count == 0) return goals;
            var ids = goals.Select(g => g.ClientGoalId).ToArray();
            var inters = Q<(int ClientGoalId, int ClientGoalInterventionId, int? Number, string Desc, bool Provided, string Detail)>(c, @"
SELECT ni.ClientGoalId, ni.ClientGoalInterventionId, i.InterNumber AS Number, i.InterDesc AS [Desc], ni.Provided, ni.Detail
FROM EncounterNoteInterventions ni JOIN ClientGoalInterventions i ON i.ClientGoalInterventionId = ni.ClientGoalInterventionId
WHERE ni.ProgramNoteId = @noteId ORDER BY i.InterNumber", new { noteId }).ToList();
            var outs = Q<(int ClientGoalId, int OutcomeId, int? LibraryOutcomeId, string Text, string StatusRule, string EffectivenessTemplate, bool? IsMet, int? CheckedInNoteId)>(c, @"
SELECT ClientGoalId, OutcomeId, LibraryOutcomeId, OutcomeText AS Text, StatusRule, EffectivenessTemplate, IsMet, CheckedInNoteId FROM ClientGoalOutcomes WHERE ClientGoalId IN @ids ORDER BY SortOrder", new { ids }).ToList();
            var libIds = outs.Where(o => o.LibraryOutcomeId != null).Select(o => o.LibraryOutcomeId.Value).Distinct().ToArray();
            var qs = libIds.Length == 0 ? new List<(int LibraryOutcomeId, int QuestionId, int SortOrder, string Prompt, string AnswerType, string Options, string SentenceTemplate, string ResourceType, bool? SendsToCrisisPlan, bool? IsRequired, string ShowWhen)>()
                : Q<(int LibraryOutcomeId, int QuestionId, int SortOrder, string Prompt, string AnswerType, string Options, string SentenceTemplate, string ResourceType, bool? SendsToCrisisPlan, bool? IsRequired, string ShowWhen)>(c, 
                    "SELECT LibraryOutcomeId, QuestionId, SortOrder, Prompt, AnswerType, Options, SentenceTemplate, ResourceType, SendsToCrisisPlan, IsRequired, ShowWhen FROM OutcomeQuestions WHERE LibraryOutcomeId IN @libIds ORDER BY SortOrder", new { libIds }).ToList();
            var answers = Q<(int ClientGoalId, int OutcomeId, int QuestionId, string Answer)>(c, "SELECT ClientGoalId, OutcomeId, QuestionId, Answer FROM EncounterNoteAnswers WHERE ProgramNoteId = @noteId", new { noteId })
                .ToDictionary(a => (a.OutcomeId, a.QuestionId), a => a.Answer);
            foreach (var g in goals)
            {
                g.Interventions = inters.Where(i => i.ClientGoalId == g.ClientGoalId).Select(i => new NoteIntervention { ClientGoalInterventionId = i.ClientGoalInterventionId, Number = i.Number, Desc = i.Desc, Provided = i.Provided, Detail = i.Detail }).ToList();
                foreach (var o in outs.Where(o => o.ClientGoalId == g.ClientGoalId))
                {
                    var no = new NoteOutcome { OutcomeId = o.OutcomeId, LibraryOutcomeId = o.LibraryOutcomeId, Text = o.Text, StatusRule = o.StatusRule, EffectivenessTemplate = o.EffectivenessTemplate,
                        IsMet = o.CheckedInNoteId == noteId ? o.IsMet : null };
                    foreach (var q in qs.Where(q => q.LibraryOutcomeId == o.LibraryOutcomeId))
                    {
                        answers.TryGetValue((o.OutcomeId, q.QuestionId), out var ans);
                        no.Questions.Add(new NoteQuestion { QuestionId = q.QuestionId, SortOrder = q.SortOrder, Prompt = q.Prompt, AnswerType = q.AnswerType,
                            Options = string.IsNullOrEmpty(q.Options) ? new string[0] : q.Options.Split('|'), SentenceTemplate = q.SentenceTemplate, ResourceType = q.ResourceType,
                            SendsToCrisisPlan = q.SendsToCrisisPlan ?? false, IsRequired = q.IsRequired ?? false, ShowWhen = q.ShowWhen, Answer = ans });
                    }
                    // Q1 answer decides met / not met when the outcome was recorded in this note
                    var q1 = no.Questions.OrderBy(q => q.SortOrder).FirstOrDefault();
                    if (q1 != null && q1.Answer != null) no.IsMet = q1.Answer == "Yes";
                    g.Outcomes.Add(no);
                }
            }
            return goals;
        }

        private static List<EpisodeGoalSummary> EpisodeGoals(IDbConnection c, int episodeId)
        {
            return Q<EpisodeGoalSummary>(c, @"
SELECT g.ClientGoalId, g.Goal AS Code, g.Description, g.Phase, g.Status,
       (SELECT TOP 1 ng.OutcomeText FROM EncounterNoteGoals ng JOIN ProgramNotes n ON n.ProgramNoteId = ng.ProgramNoteId WHERE ng.ClientGoalId = g.ClientGoalId AND ng.Status IS NOT NULL ORDER BY n.EncounterNo DESC, ng.NoteGoalId DESC) AS LastOutcome,
       (SELECT TOP 1 n.EncounterNo FROM EncounterNoteGoals ng JOIN ProgramNotes n ON n.ProgramNoteId = ng.ProgramNoteId WHERE ng.ClientGoalId = g.ClientGoalId AND ng.Status IS NOT NULL ORDER BY n.EncounterNo DESC, ng.NoteGoalId DESC) AS LastEncounter
FROM ClientGoals g WHERE g.EpisodeId = @episodeId ORDER BY CASE g.Phase WHEN 'E1' THEN 1 WHEN 'E2' THEN 2 WHEN 'E3' THEN 3 WHEN 'E4' THEN 4 WHEN 'E5' THEN 5 ELSE 6 END, g.ClientGoalId", new { episodeId }).ToList();
        }

        // ------------------------------------------------------------------ save
        public static NoteData SaveNoteData(IUnitOfWork uow, SaveNoteDataRequest r, int userId)
        {
            var c = uow.Connection;
            if (r.ActivityId == null) throw new ValidationError("ActivityId is required.");
            var h = Head(c, r.ActivityId.Value) ?? throw new ValidationError("Note not found.");
            if (SignedStatuses.Contains(h.Status ?? "")) throw new ValidationError("This note is signed and can no longer be edited.");
            var noteId = h.ProgramNoteId;
            foreach (var sg in r.Goals ?? new List<SaveGoal>())
            {
                foreach (var i in sg.Interventions ?? new List<NoteIntervention>())
                    X(c, "UPDATE EncounterNoteInterventions SET Provided = @p, Detail = @d WHERE ProgramNoteId = @noteId AND ClientGoalId = @gid AND ClientGoalInterventionId = @iid",
                        new { p = i.Provided, d = i.Detail, noteId, gid = sg.ClientGoalId, iid = i.ClientGoalInterventionId });
                X(c, "DELETE FROM EncounterNoteAnswers WHERE ProgramNoteId = @noteId AND ClientGoalId = @gid", new { noteId, gid = sg.ClientGoalId });
                foreach (var a in (sg.Answers ?? new List<SaveAnswer>()).Where(a => !string.IsNullOrWhiteSpace(a.Answer)))
                    X(c, "INSERT INTO EncounterNoteAnswers (ProgramNoteId, ClientGoalId, OutcomeId, QuestionId, Answer, AnsweredAt, TenantId) VALUES (@noteId, @gid, @oid, @qid, @ans, GETDATE(), @t)",
                        new { noteId, gid = sg.ClientGoalId, oid = a.OutcomeId, qid = a.QuestionId, ans = a.Answer.Trim(), t = h.TenantId });
                X(c, "UPDATE EncounterNoteGoals SET WorkerNote = @wn, StatusOverride = @so, Status = CASE WHEN @so = 1 THEN @st ELSE Status END WHERE ProgramNoteId = @noteId AND ClientGoalId = @gid",
                    new { wn = sg.WorkerNote, so = sg.StatusOverride, st = sg.Status, noteId, gid = sg.ClientGoalId });
            }
            X(c, "UPDATE ProgramNotes SET SafetyConcern = @sc, SafetyText = @stx, ContactMethod = ISNULL(@cm, ContactMethod), LongTermAdmission = @lta, Status = CASE WHEN Status = 'Not Started' THEN 'In Progress' ELSE Status END WHERE ProgramNoteId = @noteId",
                new { sc = r.SafetyConcern, stx = r.SafetyText, cm = r.ContactMethod, lta = r.LongTermAdmission, noteId });

            DeriveGoals(c, noteId, userId, h.TenantId, h.ClientId ?? 0, h.EpisodeId ?? 0);
            ComposeAndStore(c, r.ActivityId.Value);
            return GetNoteData(c, r.ActivityId.Value);
        }

        /// <summary>Per goal: outcome met/not met from Q1, sentences from the answers, status, outcome text, effectiveness text; Crisis Plan entries.</summary>
        private static void DeriveGoals(IDbConnection c, int noteId, int userId, int? tenantId, int clientId, int episodeId)
        {
            var goals = LoadGoals(c, noteId);
            int? planId = null;
            foreach (var g in goals)
            {
                var sentences = new List<string>(); var notMet = new List<string>(); bool anyAnswer = false; int met = 0, required = 0, requiredMet = 0, answered = 0;
                foreach (var o in g.Outcomes)
                {
                    var q1 = o.Questions.OrderBy(q => q.SortOrder).FirstOrDefault();
                    if (q1 == null) continue;
                    if (q1.Answer == null) continue;
                    anyAnswer = true; answered++;
                    var isMet = q1.Answer == "Yes";
                    if (o.StatusRule == "Required") { required++; if (isMet) requiredMet++; }
                    if (isMet) met++;
                    var detail = o.Questions.Where(q => q.SortOrder > 1 && !string.IsNullOrWhiteSpace(q.Answer) && Visible(q, q1.Answer))
                        .Select(q => Sentence(q)).Where(s => s != null).ToList();
                    if (isMet) sentences.Add((o.Text.TrimEnd('.') + ": achieved. " + string.Join(" ", detail)).Trim());
                    else notMet.Add((o.Text.TrimEnd('.') + ": not achieved. " + string.Join(" ", detail)).Trim());
                    X(c, "UPDATE ClientGoalOutcomes SET IsMet = @m, CheckedInNoteId = @noteId, CheckedAt = GETDATE(), Summary = @s WHERE OutcomeId = @oid",
                        new { m = isMet, noteId, s = string.Join(" ", detail), oid = o.OutcomeId });
                    // Crisis Plan feed
                    foreach (var q in o.Questions.Where(q => q.SendsToCrisisPlan && !string.IsNullOrWhiteSpace(q.Answer) && Visible(q, q1.Answer)))
                    {
                        planId ??= EnsurePlan(c, clientId, episodeId, userId, tenantId);
                        var text = Sentence(q) ?? q.Answer;
                        X(c, "UPDATE ClientCrisisPlanEntries SET IsActive = 0 WHERE PlanId = @planId AND SourceQuestionId = @qid AND SourceGoalId = @gid AND SourceNoteId = @noteId AND EntryText <> @text", new { planId, qid = q.QuestionId, gid = g.ClientGoalId, noteId, text });
                        if (S<int>(c, "SELECT COUNT(*) FROM ClientCrisisPlanEntries WHERE PlanId = @planId AND IsActive = 1 AND EntryText = @text", new { planId, text }) > 0) continue;
                        X(c, @"INSERT INTO ClientCrisisPlanEntries (PlanId, Revision, EntryType, EntryText, SourceGoalId, SourceQuestionId, SourceNoteId, CreatedAt, CreatedBy, IsActive, TenantId)
VALUES (@planId, 1, @type, @text, @gid, @qid, @noteId, GETDATE(), @userId, 1, @tenantId)",
                            new { planId, type = q.ResourceType ?? "Plan", text, gid = g.ClientGoalId, qid = q.QuestionId, noteId, userId, tenantId });
                    }
                }
                var provided = g.Interventions.Where(i => i.Provided).ToList();
                string status = g.StatusOverride ? g.Status : null;
                if (!g.StatusOverride)
                {
                    if (!anyAnswer) status = null;
                    else if (required > 0 ? requiredMet == required && met == answered : met == answered) status = "Met";
                    else if (met > 0) status = "PartiallyMet";
                    else status = provided.Count > 0 ? "NotMet" : "Carried";
                }
                var outcomeText = string.Join(" ", sentences.Concat(notMet));
                if (!string.IsNullOrWhiteSpace(g.WorkerNote)) outcomeText = (outcomeText + " " + g.WorkerNote.Trim()).Trim();
                var eff = status == null ? null : Effectiveness(g, status, provided.Count, sentences, notMet);
                X(c, "UPDATE EncounterNoteGoals SET Status = @status, OutcomeText = @ot, EffectivenessText = @et WHERE ProgramNoteId = @noteId AND ClientGoalId = @gid",
                    new { status, ot = outcomeText, et = eff, noteId, gid = g.ClientGoalId });
                // Goal record follows the note: met goals complete, everything else stays active for the next encounter.
                if (status == "Met") X(c, "UPDATE ClientGoals SET Status = 'Completed', CompletionDate = GETDATE() WHERE ClientGoalId = @gid", new { gid = g.ClientGoalId });
                else if (status != null) X(c, "UPDATE ClientGoals SET Status = 'Started', CompletionDate = NULL WHERE ClientGoalId = @gid", new { gid = g.ClientGoalId });
            }
        }

        private static bool Visible(NoteQuestion q, string q1Answer)
        {
            if (string.IsNullOrEmpty(q.ShowWhen)) return true;
            var parts = q.ShowWhen.Split('='); return parts.Length == 2 && string.Equals(parts[1], q1Answer, StringComparison.OrdinalIgnoreCase);
        }
        private static string Sentence(NoteQuestion q)
        {
            if (string.IsNullOrWhiteSpace(q.Answer)) return null;
            if (string.IsNullOrWhiteSpace(q.SentenceTemplate)) return q.Prompt.TrimEnd('?') + ": " + q.Answer + ".";
            var s = q.SentenceTemplate.Replace("{answer}", q.Answer.Trim());
            return s.EndsWith(".") ? s : s + ".";
        }
        private static string Effectiveness(NoteGoal g, string status, int providedCount, List<string> met, List<string> notMet)
        {
            var label = StatusLabel(status);
            var sb = new StringBuilder();
            sb.Append("Effectiveness toward the acute problem: ").Append(label).Append(". ");
            switch (status)
            {
                case "Met": sb.Append("The interventions provided resolved the need this goal targets; the acute risk tied to it is reduced for this encounter. "); break;
                case "PartiallyMet": sb.Append("The interventions provided reduced but did not resolve the need; the open portion carries to the next encounter. "); break;
                case "NotMet": sb.Append(providedCount > 0 ? "The interventions provided did not achieve the projected outcome; the need remains acute and is carried with a revised plan. " : "No intervention could be provided this encounter; the need remains acute and is carried. "); break;
                case "Carried": sb.Append("Work on this goal continues at the next encounter. "); break;
            }
            if (!string.IsNullOrWhiteSpace(g.EffectivenessMeasure)) sb.Append("Measured by: ").Append(g.EffectivenessMeasure.TrimEnd('.')).Append(". ");
            if (notMet.Count > 0) sb.Append("Areas needing continued improvement: ").Append(string.Join(" ", notMet)).Append(' ');
            return sb.ToString().Trim();
        }
        private static int EnsurePlan(IDbConnection c, int clientId, int episodeId, int userId, int? tenantId)
        {
            var id = F<int?>(c, "SELECT TOP 1 PlanId FROM ClientCrisisPlans WHERE EpisodeId = @episodeId ORDER BY PlanId DESC", new { episodeId });
            if (id != null) return id.Value;
            return S<int>(c, @"INSERT INTO ClientCrisisPlans (ClientId, EpisodeId, Status, CurrentRevision, InitiatedAt, TenantId, Owner, OwnerCreateDate) VALUES (@clientId, @episodeId, 'Draft', 1, GETDATE(), @tenantId, @userId, GETDATE()); SELECT CAST(SCOPE_IDENTITY() AS INT);",
                new { clientId, episodeId, tenantId, userId });
        }

        // ------------------------------------------------------------------ gate + composition
        public static GateState Gate(NoteData d)
        {
            var g = new GateState();
            int n = 1;
            foreach (var goal in d.Goals)
            {
                if (goal.Status == null) g.Missing.Add($"Goal {n}: answer the outcome question(s) or set the status");
                foreach (var o in goal.Outcomes)
                {
                    var q1 = o.Questions.OrderBy(q => q.SortOrder).FirstOrDefault();
                    if (q1 == null || q1.Answer == null) continue;
                    foreach (var q in o.Questions.Where(q => q.IsRequired && q.SortOrder > 1 && Visible(q, q1.Answer) && string.IsNullOrWhiteSpace(q.Answer)))
                        g.Missing.Add($"Goal {n}: {q.Prompt}");
                }
                n++;
            }
            if (d.ConsentGateMessage != null) g.Missing.Add(d.ConsentGateMessage);
            if (d.SafetyConcern == null) g.Missing.Add("Safety: answer whether there were immediate safety concerns");
            else if (d.SafetyConcern == true && string.IsNullOrWhiteSpace(d.SafetyText)) g.Missing.Add("Safety: explain the concern and who was notified");
            if (d.Phase == EpisodePhase.PreDischarge && d.LongTermAdmission == null) g.Missing.Add("Discharge: state whether the client was admitted to a long-term service (skips Day 7/14/21)");
            g.Ready = g.Missing.Count == 0;
            return g;
        }
        public static void EnsureGate(IDbConnection c, int activityId)
        {
            var d = GetNoteData(c, activityId);
            if (!d.Gate.Ready) throw new ValidationError("NoteGateIncomplete", "The note cannot be signed yet:\n- " + string.Join("\n- ", d.Gate.Missing));
        }

        private const string Box = "\u2611", Empty = "\u2610";
        /// <summary>Writes the four MCM sections + summary into ProgramNotes so the existing note page, approval view and PDF show the encounter content.</summary>
        public static void ComposeAndStore(IDbConnection c, int activityId)
        {
            var d = GetNoteData(c, activityId);
            var f1 = new StringBuilder(); var f2 = new StringBuilder(); var f3 = new StringBuilder(); var sum = new StringBuilder();
            var enc = d.FollowUpDay != null ? $"Post-discharge follow-up Day {d.FollowUpDay} (episode #{d.EpisodeId}, {d.ContactMethod ?? "Phone"})" : $"Encounter {d.EncounterNo} of episode #{d.EpisodeId} - {d.PhaseLabel}";
            f1.AppendLine(enc + ".");
            f1.AppendLine(Purpose(d.Phase));
            int n = 1;
            foreach (var g in d.Goals)
            {
                var tag = (g.IsProtocol ? " [protocol]" : "") + (g.IsCarried ? $" [carried from {EpisodePhase.Label(g.Phase)}]" : "");
                f1.AppendLine($"Goal {n} ({g.Code}): {g.Description}{tag}");
                f2.AppendLine($"Goal {n}:");
                foreach (var i in g.Interventions) f2.AppendLine($"  {(i.Provided ? Box : Empty)} {i.Desc}{(i.Provided && !string.IsNullOrWhiteSpace(i.Detail) ? " - " + i.Detail : "")}");
                if (g.Interventions.Count == 0) f2.AppendLine("  (no library interventions on this goal)");
                f3.AppendLine($"Goal {n} - {StatusLabel(g.Status)}.");
                var prov = g.Interventions.Where(i => i.Provided).Select(i => i.Desc.TrimEnd('.')).ToList();
                f3.AppendLine("  Interventions provided: " + (prov.Count > 0 ? string.Join("; ", prov) + "." : "none this encounter."));
                f3.AppendLine("  Outcome: " + (string.IsNullOrWhiteSpace(g.OutcomeText) ? "pending - outcome questions not answered." : g.OutcomeText));
                f3.AppendLine("  " + (g.EffectivenessText ?? "Effectiveness toward the acute problem: pending."));
                n++;
            }
            var counts = d.Goals.GroupBy(g => g.Status ?? "Open").ToDictionary(x => x.Key, x => x.Count());
            sum.Append($"{d.Goals.Count} goal(s) worked: ").Append(string.Join(", ", new[] { "Met", "PartiallyMet", "NotMet", "Carried", "Open" }.Where(counts.ContainsKey).Select(k => $"{counts[k]} {StatusLabel(k).ToLower()}"))).Append('.');
            if (d.CrisisPlan.Count > 0) sum.Append($" Crisis Plan entries on file: {d.CrisisPlan.Count}.");
            var f4 = d.SafetyConcern == null ? "" : d.SafetyConcern == true ? "YES - " + (d.SafetyText ?? "") : "NO - no immediate safety concerns identified or reported during this encounter." + (string.IsNullOrWhiteSpace(d.SafetyText) ? "" : " " + d.SafetyText);
            string discharge = null;
            if (d.Phase == EpisodePhase.PreDischarge)
            {
                var ds = new StringBuilder("PRE-DISCHARGE SUMMARY - all goals of this episode reviewed with the client:\n");
                foreach (var eg in d.EpisodeGoals) ds.AppendLine($"  {(eg.Status == "Completed" ? Box : Empty)} {eg.Code} ({EpisodePhase.Label(eg.Phase)}): {eg.Description} - {(eg.Status == "Completed" ? "Met" : "Open")}{(eg.LastOutcome != null ? " - " + eg.LastOutcome : "")}");
                if (d.CrisisPlan.Count > 0) { ds.AppendLine("Crisis Plan reviewed with the client:"); foreach (var p in d.CrisisPlan) ds.AppendLine($"  - [{p.EntryType}] {p.EntryText}"); }
                ds.AppendLine(d.LongTermAdmission == true ? "Client admitted to a long-term service at discharge; Day 7/14/21 follow-up not required." : "Post-discharge follow-up calls scheduled: Day 7, Day 14, Day 21.");
                discharge = ds.ToString();
                f3.AppendLine(); f3.Append(discharge);
            }
            X(c, "UPDATE ProgramNotes SET Field00 = @f0, Field01 = @f1, Field02 = @f2, Field03 = @f3, Field04 = @f4, Summary = @sum, DischargeSummary = @ds, GateComplete = @gate WHERE ProgramNoteId = @id",
                new { f0 = d.PhaseLabel, f1 = f1.ToString().TrimEnd(), f2 = f2.ToString().TrimEnd(), f3 = f3.ToString().TrimEnd(), f4, sum = sum.ToString(), ds = discharge, gate = d.Gate.Ready, id = d.ProgramNoteId });
        }
        private static string Purpose(string phase) => phase switch
        {
            "E1" => "Purpose: first responder contact for the acute presenting problem identified on the crisis assessment; stabilize, keep the client safe and meet tonight's needs.",
            "E2" => "Purpose: care coordination - needs assessment; verify Encounter 1 outcomes and confirm every need the client has with the client.",
            "E3" => "Purpose: care coordination - act on each confirmed need (applications, intakes, appointments, resources).",
            "E4" => "Purpose: care coordination - confirm and link; verify each appointment and connection made at Encounter 3 is in place.",
            "E5" => "Purpose: pre-discharge; review every goal of the episode and the Crisis Plan with the client, confirm appointments hold, set follow-up.",
            "FU" => "Purpose: post-discharge follow-up call; confirm the client is safe, connected and the Crisis Plan is holding.",
            _ => "Purpose: mobile crisis encounter."
        };

        // ------------------------------------------------------------------ after approval
        public static void AfterApproval(IUnitOfWork uow, int programNoteId, int userId)
        {
            var c = uow.Connection;
            var n = F<dynamic>(c, "SELECT n.ProgramNoteId, n.EpisodeId, n.Phase, n.FollowUpDay, n.LongTermAdmission, n.ActivityId, a.ActivityDate FROM ProgramNotes n JOIN Activities a ON a.ActivityId = n.ActivityId WHERE n.ProgramNoteId = @id", new { id = programNoteId });
            if (n == null || n.EpisodeId == null) return;
            int episodeId = (int)n.EpisodeId; string phase = n.Phase; DateTime date = n.ActivityDate ?? DateTime.Today;
            if (phase == EpisodePhase.PreDischarge)
            {
                if ((bool?)n.LongTermAdmission == true) { EpisodeService.Close(uow, episodeId, EpisodeDisposition.LongTermAdmission, "Admitted to a long-term service at pre-discharge; follow-up calls not required.", userId); return; }
                foreach (var day in new[] { 7, 14, 21 })
                    if (S<int>(c, "SELECT COUNT(*) FROM CrisisEpisodeFollowUps WHERE EpisodeId = @e AND Day = @d", new { e = episodeId, d = day }) == 0)
                        X(c, "INSERT INTO CrisisEpisodeFollowUps (EpisodeId, Day, DueDate, Status) VALUES (@e, @d, @due, 'Scheduled')", new { e = episodeId, d = day, due = date.AddDays(day) });
                X(c, "UPDATE CrisisEpisodes SET Phase = 'FU' WHERE EpisodeId = @e", new { e = episodeId });
            }
            else if (phase == EpisodePhase.FollowUp && n.FollowUpDay != null)
            {
                X(c, "UPDATE CrisisEpisodeFollowUps SET Status = 'Completed', ProgramNoteId = @nid, ActivityId = @aid WHERE EpisodeId = @e AND Day = @d", new { nid = programNoteId, aid = (int)n.ActivityId, e = episodeId, d = (int)n.FollowUpDay });
                var open = S<int>(c, "SELECT COUNT(*) FROM CrisisEpisodeFollowUps WHERE EpisodeId = @e AND Status <> 'Completed' AND Status <> 'Skipped'", new { e = episodeId });
                if (open == 0) EpisodeService.Close(uow, episodeId, EpisodeDisposition.Discharged, "Day 7 / 14 / 21 follow-up complete.", userId);
            }
        }

        // ------------------------------------------------------------------ timeline
        public static EpisodeTimeline Timeline(IDbConnection c, int episodeId)
        {
            var ep = F<dynamic>(c, "SELECT EpisodeId, Phase, ClosedAt, Disposition FROM CrisisEpisodes WHERE EpisodeId = @id", new { id = episodeId }) ?? throw new ValidationError("Episode not found.");
            var t = new EpisodeTimeline { EpisodeId = episodeId, Phase = ep.Phase, PhaseLabel = EpisodePhase.Label((string)ep.Phase), Closed = ep.ClosedAt != null, Disposition = ep.Disposition };
            t.Encounters = Q<TimelineEncounter>(c, @"SELECT n.ActivityId, n.ProgramNoteId, n.EncounterNo, n.Phase, n.Field00 AS PhaseLabel, a.ActivityDate AS ServiceDate, n.Status, n.FollowUpDay, n.Summary
FROM ProgramNotes n JOIN Activities a ON a.ActivityId = n.ActivityId WHERE n.EpisodeId = @id ORDER BY n.EncounterNo, n.ProgramNoteId", new { id = episodeId }).ToList();
            t.FollowUps = Q<TimelineFollowUp>(c, "SELECT FollowUpId, Day, DueDate, Status, ActivityId, Result FROM CrisisEpisodeFollowUps WHERE EpisodeId = @id ORDER BY Day", new { id = episodeId }).ToList();
            t.Goals = EpisodeGoals(c, episodeId);
            var openNote = t.Encounters.FirstOrDefault(e => !SignedStatuses.Contains(e.Status ?? ""));
            if (openNote != null) { t.OpenActivityId = openNote.ActivityId; t.NextAction = $"Continue the open note: {openNote.PhaseLabel}"; }
            else if (t.Closed) t.NextAction = "Episode closed" + (ep.Disposition != null ? $" - {ep.Disposition}" : "");
            else if ((string)ep.Phase == EpisodePhase.FollowUp)
            {
                var next = t.FollowUps.FirstOrDefault(f => f.Status != "Completed" && f.Status != "Skipped");
                t.NextAction = next != null ? $"Start the Day {next.Day} follow-up call (due {next.DueDate:MM/dd/yyyy})" : "All follow-ups complete";
            }
            else
            {
                var signedNotApproved = t.Encounters.Any(e => e.Status == "Submitted" || e.Status == "Re-Submitted");
                t.NextAction = signedNotApproved ? "Waiting for team lead approval of the signed note" : $"Start {EpisodePhase.Label((string)ep.Phase)}";
            }
            return t;
        }
    }
}
