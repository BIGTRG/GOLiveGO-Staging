using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.CrisisEpisodes;
using GeniusOneAi.CrisisEpisodes.Services;
using EpRow = GeniusOneAi.CrisisEpisodes.Entities.CrisisEpisodesRow;

namespace GeniusOneAi.FieldMode.Endpoints
{
    public class FieldEpisode
    {
        public int EpisodeId { get; set; }
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string RecordNumber { get; set; }
        public string Phase { get; set; }
        public string PhaseLabel { get; set; }
        public DateTime? OpenedAt { get; set; }
        public int EncounterCount { get; set; }
        public string NextAction { get; set; }
        public int? OpenActivityId { get; set; }
        public bool ConsentOk { get; set; }
        public string ConsentSummary { get; set; }
        public int? NextFollowUpId { get; set; }
        public int? NextFollowUpDay { get; set; }
        public bool WaitingApproval { get; set; }
        public bool Closed { get; set; }
        public int? AssignedWorkerId { get; set; }
        public string AssignedWorkerName { get; set; }
        public string PresentingTrigger { get; set; }
        public DateTime? AssessmentSignedAt { get; set; }
        public string ClinicianName { get; set; }
        public string Needs { get; set; }
        public int? ClinicianId { get; set; }
    }
    public class TonightGoal
    {
        public int ClientGoalId { get; set; } public string Code { get; set; } public string Description { get; set; } public string Phase { get; set; }
        public bool IsProtocol { get; set; } public string NeedKey { get; set; } public string Target { get; set; } public string Status { get; set; }
        public List<string> Interventions { get; set; } = new(); public List<string> Outcomes { get; set; } = new();
    }
    public class WorkerPick { public int UserId { get; set; } public string DisplayName { get; set; } public string Username { get; set; } }
    public class TonightResponse : ServiceResponse
    {
        public string WorkerName { get; set; }
        public int? WorkerId { get; set; }
        /// <summary>The one client this worker is on right now (assigned open episode), or null.</summary>
        public FieldEpisode Assignment { get; set; }
        /// <summary>Goals of the current encounter phase when no note is open yet (preview before Start).</summary>
        public List<TonightGoal> Goals { get; set; } = new();
        /// <summary>The open note of the assignment, ready for the goal cards; null until the encounter starts.</summary>
        public NoteData Note { get; set; }
        /// <summary>Other open episodes (unassigned or assigned to someone else), for the queue / take-over.</summary>
        public List<FieldEpisode> Queue { get; set; } = new();
    }
    public class AssignRequest : ServiceRequest { public int? EpisodeId { get; set; } public int? WorkerId { get; set; } }
    public class WorkersResponse : ServiceResponse { public List<WorkerPick> Workers { get; set; } = new(); }
    public class FieldClient
    {
        public int ClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string RecordNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string Zip { get; set; }
        public string Email { get; set; }
    }
    public class FieldAssessment { public int AssessmentId { get; set; } public string FormType { get; set; } public string Status { get; set; } public DateTime? ServiceDate { get; set; } public int? Score { get; set; } public bool? HighRisk { get; set; } public int? EpisodeId { get; set; } }
    public class HomeResponse : ServiceResponse { public string WorkerName { get; set; } public List<FieldEpisode> Episodes { get; set; } = new(); public List<FieldClient> Recent { get; set; } = new(); }
    public class SearchRequest : ServiceRequest { public string Text { get; set; } }
    public class SearchResponse : ServiceResponse { public List<FieldClient> Clients { get; set; } = new(); }
    public class ClientRequest : ServiceRequest { public int? ClientId { get; set; } }
    public class ClientResponse : ServiceResponse
    {
        public FieldClient Client { get; set; }
        public FieldEpisode OpenEpisode { get; set; }
        public EpisodeTimeline Timeline { get; set; }
        public List<FieldAssessment> Assessments { get; set; } = new();
        public List<FieldEpisode> PastEpisodes { get; set; } = new();
    }

    /// <summary>Phone-specific aggregates for Field mode. Read-only; every write goes through the existing services.</summary>
    [Route("Services/Field/[action]")]
    [ConnectionKey(typeof(EpRow)), ServiceAuthorize(typeof(EpRow))]
    public class FieldController : ServiceEndpoint
    {
        private int? Uid => int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
        private static IEnumerable<T> Q<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.Query<T>(c, sql, p);

        private const string ClientSelect = @"SELECT c.ClientId, c.FirstName, c.LastName, c.RecordNumber, c.BirthDate, COALESCE(NULLIF(c.CellPhone,''), NULLIF(c.PrimaryPhone,''), c.SecondaryPhone) AS Phone, c.City, c.County, c.Zipcode AS Zip, c.Email FROM Clients c";

        private static FieldEpisode Describe(IDbConnection c, dynamic e, int? uid)
        {
            var t = EncounterNoteService.Timeline(c, (int)e.EpisodeId);
            var fe = new FieldEpisode
            {
                EpisodeId = e.EpisodeId, ClientId = e.ClientId, ClientName = (string)e.ClientName, RecordNumber = (string)e.RecordNumber,
                Phase = t.Phase, PhaseLabel = t.PhaseLabel, OpenedAt = e.OpenedAt, EncounterCount = t.Encounters.Count(x => EncounterNoteService.SignedStatuses.Contains(x.Status ?? "")),
                NextAction = t.NextAction, OpenActivityId = t.OpenActivityId, Closed = t.Closed,
                WaitingApproval = t.OpenActivityId == null && !t.Closed && t.Encounters.Any(x => x.Status == "Submitted" || x.Status == "Re-Submitted")
            };
            try { fe.AssignedWorkerId = e.AssignedWorkerId; fe.AssignedWorkerName = (string)e.AssignedWorkerName; } catch { }
            try { fe.PresentingTrigger = (string)e.PresentingTrigger; fe.ClinicianName = (string)e.ClinicianName; fe.ClinicianId = e.ClinicianId; fe.AssessmentSignedAt = e.AssessmentSignedAt; fe.Needs = (string)e.Needs; } catch { }
            var fu = t.FollowUps.FirstOrDefault(f => f.Status != "Completed" && f.Status != "Skipped");
            if (t.Phase == EpisodePhase.FollowUp && fu != null) { fe.NextFollowUpId = fu.FollowUpId; fe.NextFollowUpDay = fu.Day; }
            if (!t.Closed)
            {
                try { var cs = ConsentService.GetState(c, fe.EpisodeId, uid); fe.ConsentOk = cs.GateOk; fe.ConsentSummary = cs.Summary; }
                catch (Exception ex) { fe.ConsentSummary = "Consent status unavailable: " + ex.Message; }
            }
            return fe;
        }

        private const string EpisodeSelect = @"SELECT e.EpisodeId, e.ClientId, LTRIM(RTRIM(ISNULL(c.FirstName,'') + ' ' + ISNULL(c.LastName,''))) AS ClientName, c.RecordNumber, e.OpenedAt, e.ClosedAt,
       e.AssignedWorkerId, w.DisplayName AS AssignedWorkerName, e.PresentingTrigger, e.ClinicianId, cl.DisplayName AS ClinicianName,
       (SELECT TOP 1 a.SignedAt FROM CrisisAssessments a WHERE a.EpisodeId = e.EpisodeId ORDER BY a.AssessmentId DESC) AS AssessmentSignedAt,
       STUFF((SELECT ', ' + ISNULL(n.Label, x.NeedKey) FROM CrisisAssessmentNeeds x LEFT JOIN CrisisNeeds n ON n.NeedKey = x.NeedKey WHERE x.EpisodeId = e.EpisodeId AND x.Accepted = 1 ORDER BY x.SortOrder FOR XML PATH('')), 1, 2, '') AS Needs
FROM CrisisEpisodes e JOIN Clients c ON c.ClientId = e.ClientId LEFT JOIN Users w ON w.UserId = e.AssignedWorkerId LEFT JOIN Users cl ON cl.UserId = e.ClinicianId";

        /// <summary>The worker's one client right now, its goals for this encounter (or the open note), and the queue.</summary>
        [HttpPost]
        public TonightResponse Tonight(IDbConnection connection)
        {
            var uid = Uid;
            var r = new TonightResponse { WorkerName = User?.Identity?.Name, WorkerId = uid };
            var open = Q<dynamic>(connection, EpisodeSelect + " WHERE e.ClosedAt IS NULL ORDER BY CASE WHEN e.AssignedWorkerId = @uid THEN 0 ELSE 1 END, e.OpenedAt DESC", new { uid }).ToList();
            var eps = new List<FieldEpisode>(); foreach (var e in open) eps.Add(Describe(connection, e, uid));
            // 1) assigned to me with a note open, 2) assigned to me, 3) an unassigned episode whose open note I created
            var mine = eps.FirstOrDefault(e => e.AssignedWorkerId == uid && e.OpenActivityId != null) ?? eps.FirstOrDefault(e => e.AssignedWorkerId == uid);
            if (mine == null && uid != null)
            {
                var myOpenNote = Q<int>(connection, @"SELECT TOP 1 e.EpisodeId FROM CrisisEpisodes e JOIN ProgramNotes n ON n.EpisodeId = e.EpisodeId JOIN Activities a ON a.ActivityId = n.ActivityId
WHERE e.ClosedAt IS NULL AND e.AssignedWorkerId IS NULL AND a.UserId = @uid ORDER BY n.ProgramNoteId DESC", new { uid }).FirstOrDefault();
                if (myOpenNote > 0) mine = eps.FirstOrDefault(e => e.EpisodeId == myOpenNote);
            }
            if (mine != null)
            {
                r.Assignment = mine;
                if (mine.OpenActivityId != null) r.Note = EncounterNoteService.GetNoteData(connection, mine.OpenActivityId.Value);
                else if (!mine.Closed && mine.Phase != EpisodePhase.FollowUp) r.Goals = PhaseGoals(connection, mine.EpisodeId, mine.Phase);
                else if (mine.Phase == EpisodePhase.FollowUp) r.Goals = PhaseGoals(connection, mine.EpisodeId, "FU");
            }
            r.Queue = eps.Where(e => mine == null || e.EpisodeId != mine.EpisodeId).ToList();
            return r;
        }

        private static List<TonightGoal> PhaseGoals(IDbConnection c, int episodeId, string phase)
        {
            var goals = Q<TonightGoal>(c, @"SELECT g.ClientGoalId, g.Goal AS Code, g.Description, g.Phase, ISNULL(g.IsProtocol, 0) AS IsProtocol, g.NeedKey, g.EffectivenessMeasure AS Target, g.Status
FROM ClientGoals g WHERE g.EpisodeId = @episodeId AND g.Phase = @phase AND ISNULL(g.Status, '') <> 'Completed' ORDER BY CASE WHEN ISNULL(g.IsProtocol,0) = 1 THEN 0 ELSE 1 END, g.ClientGoalId", new { episodeId, phase }).ToList();
            if (goals.Count == 0) return goals;
            var ids = goals.Select(g => g.ClientGoalId).ToArray();
            foreach (var i in Q<(int ClientGoalId, string Desc)>(c, "SELECT ClientGoalId, InterDesc AS [Desc] FROM ClientGoalInterventions WHERE ClientGoalId IN @ids ORDER BY InterNumber, ClientGoalInterventionId", new { ids }))
                goals.First(g => g.ClientGoalId == i.ClientGoalId).Interventions.Add(i.Desc);
            foreach (var o in Q<(int ClientGoalId, string Text)>(c, "SELECT ClientGoalId, OutcomeText AS Text FROM ClientGoalOutcomes WHERE ClientGoalId IN @ids ORDER BY SortOrder", new { ids }))
                goals.First(g => g.ClientGoalId == o.ClientGoalId).Outcomes.Add(o.Text);
            return goals;
        }

        /// <summary>Assign (or take) an open episode. WorkerId null = the signed-in user.</summary>
        [HttpPost]
        public TonightResponse Assign(IUnitOfWork uow, AssignRequest request)
        {
            var id = request?.EpisodeId ?? throw new ValidationError("EpisodeId is required.");
            var w = request.WorkerId ?? Uid ?? throw new ValidationError("No worker.");
            var n = Dapper.SqlMapper.Execute(uow.Connection, "UPDATE CrisisEpisodes SET AssignedWorkerId = @w, AssignedAt = GETDATE(), AssignedBy = @u WHERE EpisodeId = @id AND ClosedAt IS NULL", new { w, u = Uid, id });
            if (n == 0) throw new ValidationError("Episode not found or already closed.");
            return Tonight(uow.Connection);
        }

        [HttpPost]
        public WorkersResponse Workers(IDbConnection connection) => new WorkersResponse
        {
            Workers = Q<WorkerPick>(connection, "SELECT UserId, DisplayName, Username FROM Users WHERE IsActive = 1 ORDER BY DisplayName").ToList()
        };

        [HttpPost]
        public HomeResponse Home(IDbConnection connection)
        {
            var r = new HomeResponse { WorkerName = User?.Identity?.Name };
            var open = Q<dynamic>(connection, EpisodeSelect + " WHERE e.ClosedAt IS NULL ORDER BY CASE WHEN e.AssignedWorkerId = @uid THEN 0 ELSE 1 END, e.OpenedAt DESC", new { uid = Uid }).Take(40);
            foreach (var e in open) r.Episodes.Add(Describe(connection, e, Uid));
            r.Recent = Q<FieldClient>(connection, "SELECT TOP 8 * FROM (" + ClientSelect + " WHERE c.ClientId IN (SELECT TOP 8 ClientId FROM CrisisAssessments ORDER BY AssessmentId DESC)) x ORDER BY x.LastName, x.FirstName").ToList();
            return r;
        }

        [HttpPost]
        public SearchResponse Search(IDbConnection connection, SearchRequest request)
        {
            var text = (request?.Text ?? "").Trim();
            if (text.Length < 2) return new SearchResponse();
            var like = "%" + text.Replace("[", "[[]").Replace("%", "[%]") + "%";
            return new SearchResponse
            {
                Clients = Q<FieldClient>(connection, "SELECT TOP 25 * FROM (" + ClientSelect + @" WHERE (c.FirstName LIKE @l OR c.LastName LIKE @l OR c.RecordNumber LIKE @l OR ISNULL(c.FirstName,'') + ' ' + ISNULL(c.LastName,'') LIKE @l)
AND ISNULL(c.SystemStatus, 'Active') <> 'Deleted') x ORDER BY x.LastName, x.FirstName", new { l = like }).ToList()
            };
        }

        [HttpPost]
        public ClientResponse Client(IDbConnection connection, ClientRequest request)
        {
            var id = request?.ClientId ?? throw new ValidationError("ClientId is required.");
            var r = new ClientResponse { Client = Q<FieldClient>(connection, ClientSelect + " WHERE c.ClientId = @id", new { id }).FirstOrDefault() ?? throw new ValidationError("Client not found.") };
            var eps = Q<dynamic>(connection, EpisodeSelect + " WHERE e.ClientId = @id ORDER BY e.OpenedAt DESC", new { id }).ToList();
            foreach (var e in eps)
            {
                var fe = Describe(connection, e, Uid);
                if (e.ClosedAt == null && r.OpenEpisode == null) { r.OpenEpisode = fe; r.Timeline = EncounterNoteService.Timeline(connection, fe.EpisodeId); }
                else r.PastEpisodes.Add(fe);
            }
            r.Assessments = Q<FieldAssessment>(connection, "SELECT AssessmentId, FormType, Status, ServiceDate, Score, HighRisk, EpisodeId FROM CrisisAssessments WHERE ClientId = @id ORDER BY AssessmentId DESC", new { id }).ToList();
            return r;
        }
    }
}
