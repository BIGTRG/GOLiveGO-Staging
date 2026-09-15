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
    }
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
            var fu = t.FollowUps.FirstOrDefault(f => f.Status != "Completed" && f.Status != "Skipped");
            if (t.Phase == EpisodePhase.FollowUp && fu != null) { fe.NextFollowUpId = fu.FollowUpId; fe.NextFollowUpDay = fu.Day; }
            if (!t.Closed)
            {
                try { var cs = ConsentService.GetState(c, fe.EpisodeId, uid); fe.ConsentOk = cs.GateOk; fe.ConsentSummary = cs.Summary; }
                catch (Exception ex) { fe.ConsentSummary = "Consent status unavailable: " + ex.Message; }
            }
            return fe;
        }

        [HttpPost]
        public HomeResponse Home(IDbConnection connection)
        {
            var r = new HomeResponse { WorkerName = User?.Identity?.Name };
            var open = Q<dynamic>(connection, @"SELECT TOP 40 e.EpisodeId, e.ClientId, LTRIM(RTRIM(ISNULL(c.FirstName,'') + ' ' + ISNULL(c.LastName,''))) AS ClientName, c.RecordNumber, e.OpenedAt
FROM CrisisEpisodes e JOIN Clients c ON c.ClientId = e.ClientId WHERE e.ClosedAt IS NULL ORDER BY e.OpenedAt DESC");
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
            var eps = Q<dynamic>(connection, @"SELECT e.EpisodeId, e.ClientId, LTRIM(RTRIM(ISNULL(c.FirstName,'') + ' ' + ISNULL(c.LastName,''))) AS ClientName, c.RecordNumber, e.OpenedAt, e.ClosedAt
FROM CrisisEpisodes e JOIN Clients c ON c.ClientId = e.ClientId WHERE e.ClientId = @id ORDER BY e.OpenedAt DESC", new { id }).ToList();
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
