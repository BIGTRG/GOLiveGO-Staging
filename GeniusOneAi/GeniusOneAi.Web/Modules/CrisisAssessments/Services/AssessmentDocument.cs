using GeniusOneAi.AgencyAdministration;
using GeniusOneAi.ClientManager;
using GeniusOneAi.ClientManager.Entities;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace GeniusOneAi.CrisisAssessments.Services
{
    /// <summary>
    /// Renders a completed crisis assessment as a print-ready document: the paper form as answered, the score and
    /// Columbia/ASQ result, the library recommendations with the clinician's keep/decline decisions, the service plan
    /// (Encounter 1 goals with interventions and responsible person), projected discharge and signature block.
    /// Same conventions as the progress-note document (NoteID line, table header, signature thumbprint).
    /// </summary>
    public static class AssessmentDocument
    {
        const string Css = @"body{font-family:'Times New Roman',Georgia,serif;font-size:11.5px;color:#111;margin:0;background:#fff}
.pg{width:816px;margin:0 auto;padding:28px 40px 40px;box-sizing:border-box}
h1{font-size:15px;text-align:center;margin:0 0 2px;letter-spacing:.2px}.sub{text-align:center;font-size:10.5px;color:#444;margin-bottom:6px}
.nid{font-weight:bold;margin:6px 0 8px}.sec{background:#1f2d44;color:#fff;font-weight:bold;font-size:11px;padding:3px 7px;margin-top:10px;letter-spacing:.3px}
table{width:100%;border-collapse:collapse}td,th{border:1px solid #9aa4b5;padding:3px 6px;vertical-align:top;text-align:left;font-size:11px}
th{background:#e9edf4}td.l{width:24%;font-weight:bold;background:#f4f6fa}.cols{display:flex;border:1px solid #9aa4b5;border-top:0}.cols>div{flex:1;padding:4px 8px}
.cols>div>div{padding:1px 0}.on{font-weight:bold}.off{color:#555}.q td.n{width:22px;text-align:right}.q td.a{white-space:nowrap;width:190px}
.score td{font-weight:bold;background:#f4f6fa}.rec td.k{width:44px;font-weight:bold}.keep{color:#1a6b2f;font-weight:bold}.nokeep{color:#8a2b2b}
.note{border:1px solid #9aa4b5;border-top:0;padding:5px 8px;background:#fbfbfd;font-size:10.5px}.scr{font-family:'Brush Script MT','Segoe Script',cursive;font-size:17px}
.sg{display:flex;justify-content:space-between;font-size:10px;color:#333;margin-top:6px}.pn{text-align:center;font-size:9.5px;color:#666;margin-top:18px}
.prio{display:inline-block;font-size:9px;font-weight:bold;padding:0 4px;border-radius:2px;background:#e3e8f2;margin-right:4px}.prio-Urgent{background:#f6d5d5}.prio-High{background:#fbe6c8}
.draft{position:fixed;top:40%;left:15%;font-size:80px;color:rgba(160,30,30,.13);transform:rotate(-25deg);pointer-events:none}
@media print{.pg{padding:0}.noprint{display:none}}";

        static string E(string s) => string.IsNullOrEmpty(s) ? "" : System.Net.WebUtility.HtmlEncode(s);
        static string Box(bool on) => on ? "&#9746;" : "&#9744;";
        static string Ck(bool on, string t) => "<div>" + Box(on) + " <span class=\"" + (on ? "on" : "off") + "\">" + E(t) + "</span></div>";
        static HashSet<string> Split(string v) => new(string.IsNullOrEmpty(v) ? new string[0] : v.Split('|').Select(x => x.Trim()).Where(x => x.Length > 0));
        static string Yn(string v) => v == "Yes" ? "<b>&#9746; YES</b> &nbsp;&#9744; NO" : v == "No" ? "&#9744; YES &nbsp;<b>&#9746; NO</b>" : "&#9744; YES &nbsp;&#9744; NO";
        static string Radio(IEnumerable<KeyValuePair<string, string>> opts, HashSet<string> selected) =>
            string.Join(" &nbsp; ", opts.Select(o => selected.Contains(o.Key) ? Box(true) + " <b>" + E(o.Value) + "</b>" : Box(false) + " " + E(o.Value)));
        static string D(DateTime? d) => d == null ? "" : d.Value.ToString("MM/dd/yyyy");

        public static string Render(IDbConnection conn, int assessmentId)
        {
            var f = CrisisAssessmentsRow.Fields;
            var a = conn.TryById<CrisisAssessmentsRow>(assessmentId, q => q.SelectTableFields().Select(f.ClientName).Select(f.ClientRecordNumber).Select(f.TeamMember1Name).Select(f.TeamMember2Name));
            if (a == null) throw new ValidationError("Assessment not found.");
            var client = conn.TryById<ClientsRow>(a.ClientId.Value);
            bool child = a.FormType == "Child";
            var ev = AssessmentEngine.Evaluate(conn, a);
            var needs = conn.List<CrisisAssessmentNeedsRow>(q => q.SelectTableFields().Where(CrisisAssessmentNeedsRow.Fields.AssessmentId == assessmentId).OrderBy(CrisisAssessmentNeedsRow.Fields.SortOrder));
            var decisions = conn.List<CrisisAssessmentGoalDecisionsRow>(q => q.SelectTableFields().Where(CrisisAssessmentGoalDecisionsRow.Fields.AssessmentId == assessmentId));
            var needLabels = conn.List<CrisisNeedsRow>(q => q.SelectTableFields()).ToDictionary(n => n.NeedKey, n => n.Label);
            var gf = ClientGoalsRow.Fields;
            var goals = a.EpisodeId == null ? new List<ClientGoalsRow>() : conn.List<ClientGoalsRow>(q => q.SelectTableFields().Select(gf.WorkerFullName).Where(gf.EpisodeId == a.EpisodeId.Value & gf.ClientId == a.ClientId.Value).OrderBy(gf.ClientGoalId));
            var ivf = ClientGoalInterventionsRow.Fields;
            var goalIds = goals.Select(g => g.ClientGoalId.Value).ToArray();
            var inters = goalIds.Length == 0 ? new List<ClientGoalInterventionsRow>() : conn.List<ClientGoalInterventionsRow>(q => q.SelectTableFields().Where(ivf.ClientGoalId.In(goalIds)).OrderBy(ivf.InterNumber));

            var sb = new StringBuilder();
            sb.Append("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Crisis Assessment ").Append(assessmentId).Append("</title><style>").Append(Css).Append("</style></head><body>");
            if (a.Status != "Signed") sb.Append("<div class=\"draft\">").Append(a.Status == "Completed" ? "UNSIGNED" : "DRAFT").Append("</div>");
            sb.Append("<div class=\"pg\"><h1>OneCare Behavioral Health Services - Mobile Crisis Management<br>").Append(child ? "Child" : "Adult").Append(" Crisis Assessment</h1>");
            sb.Append("<div class=\"sub\">Adapted from the CCP Individual Crisis Counseling Services Encounter Log &nbsp;|&nbsp; Completed in GeniusOne</div>");
            sb.Append("<div class=\"nid\">AssessmentID: GenOneAi-CA-").Append(assessmentId.ToString("0000")).Append(a.EpisodeId != null ? " &nbsp; Episode #" + a.EpisodeId : "").Append(" &nbsp; Status: ").Append(E(a.Status)).Append("</div>");

            // encounter information
            sb.Append("<div class=\"sec\">ENCOUNTER INFORMATION</div><table>");
            sb.Append("<tr><td class=\"l\">Consumer:</td><td colspan=\"3\">").Append(E(a.ClientName)).Append(client?.BirthDate != null ? " &nbsp; DOB " + D(client.BirthDate) : "").Append(" &nbsp; MRN ").Append(E(a.ClientRecordNumber))
              .Append(!string.IsNullOrEmpty(client?.PrimaryInsuranceNumber) ? " &nbsp; Insurance ID " + E(client.PrimaryInsuranceNumber) : "").Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Date of Service:</td><td>").Append(D(a.ServiceDate)).Append("</td><td class=\"l\">Start time / End time:</td><td>").Append(E(a.StartTime)).Append(" / ").Append(E(a.EndTime)).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">County of Service:</td><td>").Append(E(a.County)).Append("</td><td class=\"l\">Zip Code of Service:</td><td>").Append(E(a.Zip)).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">1st Team Member:</td><td>").Append(E(a.TeamMember1Name)).Append("</td><td class=\"l\">2nd Team Member:</td><td>").Append(E(a.TeamMember2Name)).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Team member responding in person and credentials:</td><td colspan=\"3\">").Append(E(a.ResponderCredentials)).Append("</td></tr>");
            if (child) sb.Append("<tr><td class=\"l\">Parent / legal guardian present:</td><td>").Append(E(a.ParentPresent)).Append("</td><td class=\"l\">Parent / guardian:</td><td>").Append(E(a.ParentName)).Append(" ").Append(E(a.ParentPhone)).Append("</td></tr>");
            sb.Append("</table>");

            // location
            var locs = AssessmentLabels.Locations.Where(kv => child || kv.Key != "school").ToList();
            var loc = Split(a.Location);
            sb.Append("<div class=\"sec\">LOCATION OF SERVICE (select one)</div><div class=\"cols\"><div>");
            int half = (locs.Count + 1) / 2;
            for (int i = 0; i < locs.Count; i++) { if (i == half) sb.Append("</div><div>"); sb.Append(Ck(loc.Contains(locs[i].Key), locs[i].Value)); }
            sb.Append(Ck(a.ChildrenInHome == true, "If temporary or permanent home: children under 18 live in this home")).Append("</div></div>");

            // risk
            var risks = Split(a.RiskCategories);
            var riskOpts = AssessmentLabels.Risks.ToList();
            sb.Append("<div class=\"sec\">RISK CATEGORIES (select all that apply)</div><div class=\"cols\"><div>");
            half = (riskOpts.Count + 1) / 2;
            for (int i = 0; i < riskOpts.Count; i++) { if (i == half) sb.Append("</div><div>"); sb.Append(Ck(risks.Contains(riskOpts[i].Key), riskOpts[i].Value)); }
            sb.Append("</div></div><table style=\"margin-top:-1px\"><tr><td class=\"l\">Primary risk category:</td><td>").Append(Radio(AssessmentLabels.PrimaryRisk, Split(a.PrimaryRisk))).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Current diagnoses:</td><td>").Append(E(a.Diagnoses)).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">If Substance Abuse:</td><td>Type: ").Append(E(a.SubstanceType)).Append(" &nbsp; Amount: ").Append(E(a.SubstanceAmount)).Append(" &nbsp; Frequency: ").Append(AssessmentLabels.SubstanceFreq.TryGetValue(a.SubstanceFrequency ?? "", out var sf) ? E(sf) : E(a.SubstanceFrequency)).Append("</td></tr></table>");

            // demographics
            sb.Append("<div class=\"sec\">DEMOGRAPHIC INFORMATION (select all that apply)</div><table>");
            sb.Append("<tr><td class=\"l\">Age</td><td>").Append(Radio(AssessmentLabels.AgeBands, Split(a.AgeBand))).Append(child && !string.IsNullOrEmpty(a.GradeLevel) ? " &nbsp; Grade: " + E(a.GradeLevel) : "").Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Disability / access or functional need</td><td>").Append(Radio(AssessmentLabels.Disabilities, Split(a.Disabilities))).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Gender</td><td>").Append(Radio(AssessmentLabels.Genders, Split(a.Gender))).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Primary language</td><td>").Append(Radio(AssessmentLabels.Languages, Split(a.Language))).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Race/Ethnicity</td><td>").Append(Radio(AssessmentLabels.Races, Split(a.RaceEthnicity))).Append("</td></tr>");
            sb.Append("<tr><td class=\"l\">Immigrated in past 5 years</td><td>").Append(Radio(new Dictionary<string, string> { ["Yes"] = "Yes", ["No"] = "No" }, Split(a.Immigrated))).Append("</td></tr></table>");

            // questions
            var qs = child ? AssessmentLabels.ChildQ : AssessmentLabels.AdultQ;
            var scale = child ? AssessmentLabels.ChildScale : AssessmentLabels.AdultScale;
            sb.Append("<div class=\"sec\">ASSESSMENT QUESTIONS (").Append(child ? "0 = not at all, 1 = a little bit, 2 = somewhat, 3 = quite a bit, 4 = very much" : "reactions IN THE PAST MONTH; 1 = not at all, 2 = a little bit, 3 = somewhat, 4 = quite a bit, 5 = very").Append(")</div>");
            sb.Append("<table class=\"q\"><tr><th></th><th>QUESTIONS TO BE READ</th><th>RESPONDENT'S ANSWERS</th></tr>");
            for (int i = 0; i < qs.Length; i++)
            {
                var v = AssessmentRules.Q(a, i + 1);
                sb.Append("<tr><td class=\"n\">").Append(i + 1).Append(".</td><td>").Append(E(qs[i])).Append("</td><td class=\"a\">");
                sb.Append(string.Join(" ", scale.Keys.Select(k => v != null && v.ToString() == k ? "<b>&#9746;" + k + "</b>" : "&#9744;" + k)));
                sb.Append("</td></tr>");
            }
            sb.Append("<tr class=\"score\"><td colspan=\"2\">NUMBER OF RESPONSES OF ").Append(child ? "3 OR 4" : "4 OR 5").Append(" (recipient's score)</td><td>").Append(ev.Score).Append(ev.ScoreReached ? " - at or above the referral line (" + ev.ScoreCutoff + "): mental health referral indicated" : " - below the referral line (" + ev.ScoreCutoff + ")").Append("</td></tr>");
            if (!string.IsNullOrEmpty(a.QuestionNotes)) sb.Append("<tr><td colspan=\"3\"><b>Clinician observations:</b> ").Append(E(a.QuestionNotes)).Append("</td></tr>");
            sb.Append("</table>");

            // suicide screen
            var ss = child ? AssessmentLabels.ChildS : AssessmentLabels.AdultS;
            string[] sv = { a.S1, a.S2, a.S3, a.S4, a.S5, a.S6 };
            sb.Append("<div class=\"sec\">").Append(child ? "ASK SUICIDE-SCREENING QUESTIONS (ASQ)" : "COLUMBIA PROTOCOL - IN THE PAST MONTH").Append("</div><table class=\"q\">");
            for (int i = 0; i < ss.Length; i++)
                sb.Append("<tr><td class=\"n\">").Append(i + 1).Append(".</td><td>").Append(E(ss[i])).Append("</td><td class=\"a\">").Append(Yn(sv[i])).Append("</td></tr>");
            if (!child) sb.Append("<tr><td class=\"n\"></td><td>").Append(E(AssessmentLabels.AdultS6b)).Append("</td><td class=\"a\">").Append(Yn(a.S6b)).Append("</td></tr>");
            sb.Append("<tr><td colspan=\"3\"><b>Protocol result:</b> ").Append(E(a.ProtocolResult ?? ev.ProtocolResult));
            foreach (var hs in ev.HardStops) sb.Append("<br><b>").Append(E(hs.Title)).Append(":</b> ").Append(E(hs.Instruction));
            if (!string.IsNullOrEmpty(a.SuicideNotes)) sb.Append("<br><b>Observations:</b> ").Append(E(a.SuicideNotes));
            sb.Append("</td></tr></table>");

            // referral
            var refs = Split(a.Referrals); var refOpts = AssessmentLabels.Referrals.ToList();
            sb.Append("<div class=\"sec\">REFERRAL (select all that apply)</div><div class=\"cols\"><div>");
            half = (refOpts.Count + 1) / 2;
            for (int i = 0; i < refOpts.Count; i++) { if (i == half) sb.Append("</div><div>"); sb.Append(Ck(refs.Contains(refOpts[i].Key), refOpts[i].Value)); }
            sb.Append("</div></div><table style=\"margin-top:-1px\"><tr><td class=\"l\">Did the participant accept one or more of the referral(s)?</td><td>").Append(Yn(a.ReferralAccepted));
            if (child) sb.Append(" &nbsp; Child: ").Append(E(a.ReferralAcceptedChild)).Append(" &nbsp; Parent / caregiver: ").Append(E(a.ReferralAcceptedParent));
            sb.Append("</td></tr>");
            if (!string.IsNullOrEmpty(a.Narrative)) sb.Append("<tr><td class=\"l\">Narrative / other:</td><td>").Append(E(a.Narrative)).Append("</td></tr>");
            sb.Append("</table>");

            // library recommendations
            var kept = decisions.Count(d => d.Kept == true);
            sb.Append("<div class=\"sec\">LIBRARY RECOMMENDATIONS (generated from the answers above").Append(decisions.Count > 0 ? "; clinician kept " + kept + " of " + decisions.Count : "").Append(")</div>");
            var recRows = decisions.Count > 0
                ? decisions.OrderByDescending(d => d.Kept).ThenBy(d => d.Code).Select(d => (d.Code, d.Description, d.Source, d.Kept == true, d.Reason))
                : ev.TonightGoals.Select(g => (g.Code, g.Description, g.Source, g.Preselected, g.Locked ? "Protocol goal" : (g.Preselected ? "Suggested" : "Optional")));
            sb.Append("<table class=\"rec\"><tr><th>Lib</th><th>Suggested goal (Encounter 1)</th><th>Because</th><th>Clinician decision</th></tr>");
            int gi = 0;
            foreach (var (code, desc, src, isKept, reason) in recRows)
            {
                gi++;
                sb.Append("<tr><td class=\"k\">").Append(E(code)).Append("</td><td>").Append(E(desc)).Append("</td><td>").Append(E(src)).Append("</td><td class=\"").Append(isKept ? "keep" : "nokeep").Append("\">")
                  .Append(isKept ? "KEPT" + (reason == "Protocol goal" ? " (protocol)" : "") : "Not kept - " + E(reason ?? "")).Append("</td></tr>");
            }
            if (gi == 0) sb.Append("<tr><td colspan=\"4\">No Encounter 1 goals suggested by the answers so far.</td></tr>");
            sb.Append("</table>");
            var needList = needs.Count > 0 ? needs.Select(n => (needLabels.TryGetValue(n.NeedKey, out var l) ? l : n.NeedKey, n.Priority)) : ev.Needs.Select(n => (n.Label, n.Priority));
            sb.Append("<div class=\"note\"><b>Needs ").Append(needs.Count > 0 ? "confirmed" : "identified").Append(" for the Encounter 2 Needs Assessment:</b> ")
              .Append(string.Join(", ", needList.Select(n => "<span class=\"prio prio-" + E(n.Item2) + "\">" + E(n.Item2) + "</span>" + E(n.Item1)))).Append("</div>");

            // service plan
            var e1 = goals.Where(g => g.Phase == "E1").ToList();
            sb.Append("<div class=\"sec\">SERVICE PLAN</div><table><tr><th></th><th>Goal</th><th>Service(s)/Intervention(s) from the library</th><th>Responsible Person / Position</th></tr>");
            int gn = 0;
            foreach (var g in e1)
            {
                gn++;
                var iv = inters.Where(x => x.ClientGoalId == g.ClientGoalId).Select(x => E(x.InterDesc)).ToList();
                sb.Append("<tr><td class=\"l\">Goal #").Append(gn).Append(g.IsProtocol == true ? "<br><small>protocol</small>" : "").Append("</td><td>").Append(E(g.Description))
                  .Append(!string.IsNullOrEmpty(g.EffectivenessMeasure) ? "<br><i>Measured by: " + E(g.EffectivenessMeasure) + "</i>" : "").Append("</td><td>")
                  .Append(iv.Count > 0 ? string.Join("; ", iv) : "-").Append("</td><td>").Append(E(g.WorkerFullName ?? a.TeamMember1Name)).Append("</td></tr>");
            }
            if (gn == 0) sb.Append("<tr><td colspan=\"4\">Service plan goals are filled in when the assessment is completed and the recommendations confirmed.</td></tr>");
            var byPhase = goals.GroupBy(g => g.Phase).ToDictionary(g => g.Key ?? "", g => g.Count());
            string cnt(string p) => byPhase.TryGetValue(p, out var c) ? c.ToString() : "0";
            sb.Append("<tr><td class=\"l\" colspan=\"2\">Projected Discharge Date (within 7 days; Program Director contacted if additional hours or goals are needed):</td><td colspan=\"2\"><b>").Append(D(a.ProjectedDischarge)).Append("</b>");
            if (goals.Count > 0) sb.Append(" - goals staged per encounter: E2 Needs Assessment ").Append(cnt("E2")).Append(", E3 Act on Needs ").Append(cnt("E3")).Append(", E4 Confirm and Link ").Append(cnt("E4")).Append(", E5 Pre-discharge ").Append(cnt("E5")).Append(", Day 7/14/21 follow-up ").Append(cnt("FU"));
            sb.Append("</td></tr></table>");

            // signature
            sb.Append("<div class=\"sec\">SIGNATURE</div><table><tr><th>Print Name and Credentials</th><th>Signature</th><th>Date</th></tr><tr><td>")
              .Append(E(a.SignedName ?? a.TeamMember1Name)).Append("</td><td>").Append(a.Status == "Signed" ? "<span class=\"scr\">" + E(a.SignedName) + "</span> (electronically signed)" : "<i>not yet signed</i>").Append("</td><td>")
              .Append(a.SignedAt != null ? a.SignedAt.Value.ToString("MM/dd/yyyy HH:mm") : "").Append("</td></tr></table>");
            sb.Append("<div class=\"sg\"><span>Signature Thumbprint: ").Append(a.Status == "Signed" ? Thumb(a) : "-").Append("</span><span>")
              .Append(a.CompletedAt != null ? "Completed " + a.CompletedAt.Value.ToString("MM/dd/yyyy HH:mm") : "").Append(a.EpisodeId != null ? " - Episode #" + a.EpisodeId + " - Encounter 1 First Responder note pre-loaded with the service plan goals" : "").Append("</span></div>");
            sb.Append("<div class=\"pn\">Page: 1 of 1</div></div>");
            sb.Append("<div class=\"noprint\" style=\"text-align:center;margin:14px\"><button onclick=\"window.print()\">Print / Save as PDF</button></div>");
            sb.Append("</body></html>");
            return sb.ToString();
        }

        static string Thumb(CrisisAssessmentsRow a)
        {
            using var sha = System.Security.Cryptography.SHA256.Create();
            var raw = a.AssessmentId + "|" + a.SignedBy + "|" + a.SignedAt?.ToString("O") + "|" + a.Score + "|" + a.EpisodeId;
            var h = sha.ComputeHash(Encoding.UTF8.GetBytes(raw));
            return new Guid(h.Take(16).ToArray()).ToString();
        }
    }
}
