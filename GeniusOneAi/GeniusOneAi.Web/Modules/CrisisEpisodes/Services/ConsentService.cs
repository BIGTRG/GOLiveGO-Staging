using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.Modules.Common.CustomClasses;

namespace GeniusOneAi.CrisisEpisodes.Services
{
    // ------------------------------------------------------------------ DTOs
    public class ConsentItem
    {
        public int RequestId { get; set; }
        public int TemplateId { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string SignerRoles { get; set; }
        public bool RequiredAtIntake { get; set; }
        public string Status { get; set; }
        public string Channel { get; set; }
        public DateTime? SignedAt { get; set; }
        public string SignerName { get; set; }
        public string SignerRelationship { get; set; }
        public string WorkerName { get; set; }
        public DateTime? WrittenDueAt { get; set; }
        public string RefusalReason { get; set; }
        public string DocumentHash { get; set; }
        public int? ClientDocumentId { get; set; }
    }
    public class ConsentInviteInfo { public int InviteId { get; set; } public string SentTo { get; set; } public DateTime? SentAt { get; set; } public DateTime ExpiresAt { get; set; } public DateTime? UsedAt { get; set; } public DateTime? RevokedAt { get; set; } public int Attempts { get; set; } public DateTime? LockedAt { get; set; } }
    public class ConsentState : ServiceResponse
    {
        public int EpisodeId { get; set; }
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string ClientEmail { get; set; }
        public bool IsMinor { get; set; }
        public bool Complete { get; set; }
        public bool Verbal { get; set; }
        public bool GateOk { get; set; }
        public string Summary { get; set; }
        public List<ConsentItem> Items { get; set; } = new();
        public ConsentInviteInfo Invite { get; set; }
        public List<string> Audit { get; set; } = new();
    }
    public class ConsentEpisodeRequest : ServiceRequest { public int? EpisodeId { get; set; } }
    public class ConsentSignRequest : ServiceRequest
    {
        public int? RequestId { get; set; }
        public string SignerName { get; set; }
        public string SignerRelationship { get; set; }
        public string SignatureImage { get; set; }
        public string WorkerSignatureImage { get; set; }
        public string FieldData { get; set; }
    }
    public class ConsentInviteRequest : ServiceRequest { public int? EpisodeId { get; set; } public string Email { get; set; } }
    public class ConsentVerbalRequest : ServiceRequest { public int? EpisodeId { get; set; } public string FieldData { get; set; } public string WorkerSignatureImage { get; set; } }
    public class ConsentRefuseRequest : ServiceRequest { public int? RequestId { get; set; } public string Reason { get; set; } }
    public class PortalForm { public int RequestId { get; set; } public string Code { get; set; } public string Title { get; set; } public string Summary { get; set; } public string Citation { get; set; } public string Revision { get; set; } public string BodyHtml { get; set; } public string FieldSchema { get; set; } public string Status { get; set; } public bool NeedsClient { get; set; } }
    public class PortalState { public bool Ok { get; set; } public string Error { get; set; } public string Vt { get; set; } public string ClientFirstName { get; set; } public List<PortalForm> Forms { get; set; } = new(); public bool AllDone { get; set; } }

    /// <summary>
    /// Consent at intake for a crisis episode. Creates one request per required template when an episode is opened,
    /// signs in person (tablet handoff) or through an emailed single-use link (72 h, DOB + phone last-4 identity check),
    /// records the OC-VCD-003 verbal-consent exception with a 72 h written-consent task, documents refusals,
    /// hashes and files every signed document to ClientDocuments, and feeds the Encounter 1 note gate.
    /// </summary>
    public static class ConsentService
    {
        private static IEnumerable<T> Q<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.Query<T>(c, sql, p);
        private static int X(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.Execute(c, sql, p);
        private static T F<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.QueryFirstOrDefault<T>(c, sql, p);
        private static T S<T>(IDbConnection c, string sql, object p = null) => Dapper.SqlMapper.ExecuteScalar<T>(c, sql, p);
        public const int InviteHours = 72, WrittenDueHours = 72, MaxAttempts = 5;
        public static readonly string[] Relationships = { "Self", "Parent", "Legal guardian", "Authorized representative" };

        private class Ep { public int EpisodeId; public int ClientId; public int? TenantId; public DateTime? ClosedAt; public string FirstName; public string LastName; public DateTime? BirthDate; public string Email; public string CellPhone; public string PrimaryPhone; public string RecordNumber; public string Address1; public string City; public string State; public string Zipcode; public string NextOfKinName; public string NextOfKinPhone; }
        private static Ep LoadEp(IDbConnection c, int episodeId) => F<Ep>(c, @"SELECT e.EpisodeId, e.ClientId, e.TenantId, e.ClosedAt, cl.FirstName, cl.LastName, cl.BirthDate, cl.Email, cl.CellPhone, cl.PrimaryPhone, cl.RecordNumber, cl.Address1, cl.City, cl.State, cl.Zipcode, cl.NextOfKinName, cl.NextOfKinPhone
FROM CrisisEpisodes e JOIN Clients cl ON cl.ClientId = e.ClientId WHERE e.EpisodeId = @id", new { id = episodeId }) ?? throw new ValidationError("Episode not found.");
        private static bool Minor(DateTime? dob) => dob != null && dob.Value.AddYears(18) > DateTime.Today;

        // ------------------------------------------------------------------ state
        /// <summary>Creates the missing Pending requests for every active template required at intake (idempotent).</summary>
        public static void EnsureRequests(IDbConnection c, int episodeId, int? userId)
        {
            var ep = LoadEp(c, episodeId);
            var missing = Q<int>(c, @"SELECT t.TemplateId FROM ConsentTemplates t WHERE t.IsActive = 1 AND t.RequiredAtIntake = 1
AND NOT EXISTS (SELECT 1 FROM ConsentRequests r WHERE r.EpisodeId = @ep AND r.TemplateId = t.TemplateId)", new { ep = episodeId }).ToList();
            foreach (var tid in missing)
            {
                X(c, "INSERT INTO ConsentRequests (EpisodeId, ClientId, TemplateId, Status, CreatedAt, CreatedBy, TenantId) VALUES (@ep, @cl, @t, 'Pending', GETDATE(), @u, @ten)", new { ep = episodeId, cl = ep.ClientId, t = tid, u = userId, ten = ep.TenantId });
            }
            if (missing.Count > 0) Audit(c, episodeId, null, "RequestsCreated", $"{missing.Count} consent request(s) created for the intake set", userId, null);
        }

        public static ConsentState GetState(IDbConnection c, int episodeId, int? userId)
        {
            EnsureRequests(c, episodeId, userId);
            var ep = LoadEp(c, episodeId);
            var st = new ConsentState { EpisodeId = episodeId, ClientId = ep.ClientId, ClientName = ($"{ep.FirstName} {ep.LastName}").Trim(), ClientEmail = ep.Email, IsMinor = Minor(ep.BirthDate) };
            st.Items = Q<ConsentItem>(c, @"SELECT r.RequestId, r.TemplateId, t.Code, t.Title, t.Summary, t.SignerRoles, t.RequiredAtIntake, r.Status, r.Channel, r.SignedAt, r.SignerName, r.SignerRelationship, r.WorkerName, r.WrittenDueAt, r.RefusalReason, r.DocumentHash, r.ClientDocumentId
FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.EpisodeId = @ep ORDER BY t.SortOrder", new { ep = episodeId }).ToList();
            var req = st.Items.Where(i => i.RequiredAtIntake).ToList();
            st.Complete = req.Count > 0 && req.All(i => i.Status == "Signed" || i.Status == "Refused");
            st.Verbal = st.Items.Any(i => i.Code == "OC-VCD-003" && i.Status == "Verbal");
            st.GateOk = st.Complete || st.Verbal;
            var outstanding = req.Count(i => i.Status != "Signed" && i.Status != "Refused");
            var verbalItem = st.Items.FirstOrDefault(i => i.Code == "OC-VCD-003" && i.Status == "Verbal");
            st.Summary = st.Complete ? "Intake consent complete" + (st.Items.Any(i => i.Status == "Refused") ? " (with documented refusal)" : "")
                : st.Verbal ? $"Verbal consent on file - written consent due {verbalItem.WrittenDueAt:MM/dd h:mm tt} ({outstanding} form(s) outstanding)"
                : $"{outstanding} of {req.Count} intake form(s) outstanding";
            st.Invite = F<ConsentInviteInfo>(c, "SELECT TOP 1 InviteId, SentTo, SentAt, ExpiresAt, UsedAt, RevokedAt, Attempts, LockedAt FROM ConsentInvites WHERE EpisodeId = @ep AND RevokedAt IS NULL ORDER BY InviteId DESC", new { ep = episodeId });
            st.Audit = Q<string>(c, "SELECT TOP 12 CONVERT(varchar(16), At, 120) + ' - ' + Event + ISNULL(': ' + Detail, '') FROM ConsentAudit WHERE EpisodeId = @ep ORDER BY AuditId DESC", new { ep = episodeId }).ToList();
            return st;
        }

        /// <summary>Encounter 1 gate: consent set complete, or verbal consent recorded. Returns null when OK, else the gate line.</summary>
        public static string GateMessage(IDbConnection c, int episodeId)
        {
            var st = GetState(c, episodeId, null);
            if (st.GateOk) return null;
            return "Consent: sign the intake consent set on the episode (in person or by emailed link), or record verbal consent (OC-VCD-003) - " + st.Summary.ToLower();
        }

        private static void Audit(IDbConnection c, int episodeId, int? requestId, string ev, string detail, int? userId, string ip)
            => X(c, "INSERT INTO ConsentAudit (EpisodeId, RequestId, Event, Detail, At, UserId, IpAddress) VALUES (@ep, @r, @e, @d, GETDATE(), @u, @ip)", new { ep = episodeId, r = requestId, e = ev, d = detail == null ? null : (detail.Length > 1000 ? detail.Substring(0, 1000) : detail), u = userId, ip });

        private static string WorkerName(IDbConnection c, int? uid) => uid == null ? null : F<string>(c, "SELECT DisplayName FROM Users WHERE UserId = @u", new { u = uid });
        private static string WorkerStoredSignature(IDbConnection c, int? uid) => uid == null ? null : F<string>(c, "SELECT eSignatureBase64 FROM Users WHERE UserId = @u", new { u = uid });

        // ------------------------------------------------------------------ in-person signing (authenticated worker, device handed to the client)
        public static ConsentItem SignInPerson(IUnitOfWork uow, ConsentSignRequest r, int uid, string ip, string ua)
        {
            var c = uow.Connection;
            var row = F<dynamic>(c, "SELECT r.RequestId, r.EpisodeId, r.ClientId, r.Status, t.Code, t.SignerRoles FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = r.RequestId ?? throw new ValidationError("RequestId is required.") }) ?? throw new ValidationError("Consent request not found.");
            if ((string)row.Status == "Signed") throw new ValidationError("This form is already signed.");
            var roles = ((string)row.SignerRoles ?? "Client");
            if (roles.Contains("Client"))
            {
                if (string.IsNullOrWhiteSpace(r.SignerName)) throw new ValidationError("Printed name of the person signing is required.");
                if (string.IsNullOrWhiteSpace(r.SignatureImage) || !r.SignatureImage.StartsWith("data:image/")) throw new ValidationError("A signature is required.");
            }
            string wsig = null; DateTime? wat = null;
            if (roles.Contains("Worker"))
            {
                wsig = !string.IsNullOrWhiteSpace(r.WorkerSignatureImage) ? r.WorkerSignatureImage : WorkerStoredSignature(c, uid);
                if (string.IsNullOrWhiteSpace(wsig)) throw new ValidationError("Worker signature is required on this form (draw it, or save an eSignature on your account).");
                wat = DateTime.Now;
            }
            ValidateFieldData(c, (int)row.RequestId, r.FieldData);
            X(c, @"UPDATE ConsentRequests SET Status = 'Signed', Channel = 'InPerson', SignedAt = GETDATE(), SignerName = @n, SignerRelationship = @rel, SignatureImage = @sig,
WorkerUserId = @u, WorkerName = @wn, WorkerSignatureImage = @wsig, WorkerSignedAt = @wat, FieldData = @fd, IpAddress = @ip, UserAgent = @ua WHERE RequestId = @id",
                new { n = r.SignerName?.Trim(), rel = string.IsNullOrWhiteSpace(r.SignerRelationship) ? "Self" : r.SignerRelationship, sig = r.SignatureImage, u = uid, wn = WorkerName(c, uid), wsig, wat, fd = r.FieldData, ip, ua = Trunc(ua, 400), id = (int)row.RequestId });
            Finalize(c, (int)row.RequestId, uid, ip);
            Audit(c, (int)row.EpisodeId, (int)row.RequestId, "SignedInPerson", $"{row.Code} signed by {r.SignerName} ({r.SignerRelationship ?? "Self"}), witnessed by {WorkerName(c, uid)}", uid, ip);
            CloseVerbalIfComplete(c, (int)row.EpisodeId, uid);
            return GetState(c, (int)row.EpisodeId, uid).Items.First(i => i.RequestId == (int)row.RequestId);
        }

        private static string Trunc(string s, int n) => s == null ? null : (s.Length > n ? s.Substring(0, n) : s);

        private static void ValidateFieldData(IDbConnection c, int requestId, string fieldData)
        {
            var schemaJson = F<string>(c, "SELECT t.FieldSchema FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = requestId });
            if (string.IsNullOrWhiteSpace(schemaJson) || schemaJson == "[]") return;
            using var schema = JsonDocument.Parse(schemaJson);
            using var data = JsonDocument.Parse(string.IsNullOrWhiteSpace(fieldData) ? "{}" : fieldData);
            foreach (var f in schema.RootElement.EnumerateArray())
            {
                if (!(f.TryGetProperty("required", out var rq) && rq.GetBoolean())) continue;
                var key = f.GetProperty("key").GetString();
                if (!data.RootElement.TryGetProperty(key, out var v) || v.ValueKind == JsonValueKind.Null || (v.ValueKind == JsonValueKind.Array && v.GetArrayLength() == 0) || (v.ValueKind == JsonValueKind.String && string.IsNullOrWhiteSpace(v.GetString())))
                    throw new ValidationError($"'{f.GetProperty("label").GetString()}' must be completed before signing.");
            }
        }

        /// <summary>Hash + file the signed document (HTML today; PDF renderer decision pending).</summary>
        private static void Finalize(IDbConnection c, int requestId, int? uid, string ip)
        {
            var html = RenderDocument(c, requestId, forHash: true);
            var hash = Sha256(html);
            X(c, "UPDATE ConsentRequests SET DocumentHash = @h WHERE RequestId = @id", new { h = hash, id = requestId });
            var meta = F<dynamic>(c, "SELECT r.ClientId, r.EpisodeId, t.Code, t.Title FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = requestId });
            var fileName = $"consent-{requestId}.html";
            try
            {
                var dir = Path.Combine(AppContext.BaseDirectory, "App_Data", "ClientDocumentRepository");
                Directory.CreateDirectory(dir);
                File.WriteAllText(Path.Combine(dir, fileName), RenderDocument(c, requestId, forHash: false), Encoding.UTF8);
            }
            catch (Exception ex) { System.Diagnostics.Debug.WriteLine("Consent document file write failed: " + ex.Message); }
            var title = Trunc($"{meta.Code} {meta.Title}", 100);
            var docId = S<int>(c, "INSERT INTO ClientDocuments (ClientId, Title, FileName, IsFinalized, FinalizedDate) OUTPUT INSERTED.DocumentId VALUES (@cl, @t, @f, 1, CAST(GETDATE() AS date))", new { cl = (int)meta.ClientId, t = title, f = fileName });
            X(c, "UPDATE ConsentRequests SET ClientDocumentId = @d WHERE RequestId = @id", new { d = docId, id = requestId });
        }
        private static string Sha256(string s) { using var h = SHA256.Create(); return string.Concat(h.ComputeHash(Encoding.UTF8.GetBytes(s)).Select(b => b.ToString("x2"))); }

        private static void CloseVerbalIfComplete(IDbConnection c, int episodeId, int? uid)
        {
            var st = GetState(c, episodeId, uid);
            if (!st.Complete) return;
            var v = st.Items.FirstOrDefault(i => i.Code == "OC-VCD-003" && i.Status == "Verbal");
            if (v == null) return;
            X(c, "UPDATE ConsentRequests SET Status = 'Signed', SignedAt = GETDATE(), WrittenDueAt = NULL, FieldData = JSON_MODIFY(ISNULL(FieldData, '{}'), '$.writtenObtainedOn', CONVERT(varchar(19), GETDATE(), 120)) WHERE RequestId = @id", new { id = v.RequestId });
            Audit(c, episodeId, v.RequestId, "VerbalResolved", "Written consent set completed; OC-VCD-003 closed", uid, null);
        }

        // ------------------------------------------------------------------ verbal consent (OC-VCD-003)
        public static ConsentState RecordVerbal(IUnitOfWork uow, ConsentVerbalRequest r, int uid, string ip)
        {
            var c = uow.Connection;
            var episodeId = r.EpisodeId ?? throw new ValidationError("EpisodeId is required.");
            EnsureRequests(c, episodeId, uid);
            var ep = LoadEp(c, episodeId);
            var tid = F<int?>(c, "SELECT TemplateId FROM ConsentTemplates WHERE Code = 'OC-VCD-003' AND IsActive = 1") ?? throw new ValidationError("OC-VCD-003 template is not loaded.");
            var wsig = !string.IsNullOrWhiteSpace(r.WorkerSignatureImage) ? r.WorkerSignatureImage : WorkerStoredSignature(c, uid);
            if (string.IsNullOrWhiteSpace(wsig)) throw new ValidationError("Worker signature is required for verbal consent (draw it, or save an eSignature on your account).");
            using (var d = JsonDocument.Parse(string.IsNullOrWhiteSpace(r.FieldData) ? "{}" : r.FieldData))
            {
                foreach (var k in new[] { "reason", "identity", "details" })
                    if (!d.RootElement.TryGetProperty(k, out var v) || v.ValueKind == JsonValueKind.Null) throw new ValidationError($"Verbal consent: '{k}' section must be completed.");
                var det = d.RootElement.GetProperty("details");
                if (!det.TryGetProperty("person", out var p) || string.IsNullOrWhiteSpace(p.GetString())) throw new ValidationError("Verbal consent: name of the person giving consent is required.");
            }
            var existing = F<int?>(c, "SELECT RequestId FROM ConsentRequests WHERE EpisodeId = @ep AND TemplateId = @t", new { ep = episodeId, t = tid });
            int reqId;
            if (existing == null)
                reqId = S<int>(c, @"INSERT INTO ConsentRequests (EpisodeId, ClientId, TemplateId, Status, Channel, WorkerUserId, WorkerName, WorkerSignatureImage, WorkerSignedAt, FieldData, IpAddress, WrittenDueAt, CreatedAt, CreatedBy, TenantId)
OUTPUT INSERTED.RequestId VALUES (@ep, @cl, @t, 'Verbal', 'Verbal', @u, @wn, @ws, GETDATE(), @fd, @ip, DATEADD(hour, @h, GETDATE()), GETDATE(), @u, @ten)",
                    new { ep = episodeId, cl = ep.ClientId, t = tid, u = uid, wn = WorkerName(c, uid), ws = wsig, fd = r.FieldData, ip, h = WrittenDueHours, ten = ep.TenantId });
            else
            {
                reqId = existing.Value;
                X(c, "UPDATE ConsentRequests SET Status = 'Verbal', Channel = 'Verbal', WorkerUserId = @u, WorkerName = @wn, WorkerSignatureImage = @ws, WorkerSignedAt = GETDATE(), FieldData = @fd, IpAddress = @ip, WrittenDueAt = DATEADD(hour, @h, GETDATE()) WHERE RequestId = @id", new { u = uid, wn = WorkerName(c, uid), ws = wsig, fd = r.FieldData, ip, h = WrittenDueHours, id = reqId });
            }
            var hash = Sha256(RenderDocument(c, reqId, forHash: true));
            X(c, "UPDATE ConsentRequests SET DocumentHash = @h WHERE RequestId = @id", new { h = hash, id = reqId });
            Audit(c, episodeId, reqId, "VerbalRecorded", $"Verbal consent documented by {WorkerName(c, uid)}; written consent due in {WrittenDueHours} h", uid, ip);
            return GetState(c, episodeId, uid);
        }

        // ------------------------------------------------------------------ refusal (good-faith documentation)
        public static ConsentState RecordRefusal(IUnitOfWork uow, ConsentRefuseRequest r, int uid, string ip)
        {
            var c = uow.Connection;
            var row = F<dynamic>(c, "SELECT r.RequestId, r.EpisodeId, r.Status, t.Code FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = r.RequestId ?? throw new ValidationError("RequestId is required.") }) ?? throw new ValidationError("Consent request not found.");
            if ((string)row.Status == "Signed") throw new ValidationError("This form is already signed.");
            if ((string)row.Code == "OC-CST-002") throw new ValidationError("Informed consent for services cannot be refused and services continued. Record verbal consent or stop services.");
            if (string.IsNullOrWhiteSpace(r.Reason)) throw new ValidationError("Document the reason given (or 'no reason given').");
            X(c, "UPDATE ConsentRequests SET Status = 'Refused', Channel = 'InPerson', RefusalReason = @rs, WorkerUserId = @u, WorkerName = @wn, WorkerSignedAt = GETDATE(), SignedAt = GETDATE(), IpAddress = @ip WHERE RequestId = @id", new { rs = Trunc(r.Reason, 500), u = uid, wn = WorkerName(c, uid), ip, id = (int)row.RequestId });
            Audit(c, (int)row.EpisodeId, (int)row.RequestId, "Refused", $"{row.Code} refused: {r.Reason}", uid, ip);
            CloseVerbalIfComplete(c, (int)row.EpisodeId, uid);
            return GetState(c, (int)row.EpisodeId, uid);
        }

        // ------------------------------------------------------------------ emailed signing link
        public static ConsentState SendInvite(IUnitOfWork uow, ConsentInviteRequest r, int uid, string ip)
        {
            var c = uow.Connection;
            var episodeId = r.EpisodeId ?? throw new ValidationError("EpisodeId is required.");
            EnsureRequests(c, episodeId, uid);
            var ep = LoadEp(c, episodeId);
            var email = (r.Email ?? ep.Email ?? "").Trim();
            if (email.Length == 0 || !email.Contains('@')) throw new ValidationError("A valid email address is required.");
            var st = GetState(c, episodeId, uid);
            if (!st.Items.Any(i => i.RequiredAtIntake && i.Status != "Signed" && i.Status != "Refused")) throw new ValidationError("Every intake form is already signed.");
            if (string.IsNullOrWhiteSpace(ep.CellPhone) && string.IsNullOrWhiteSpace(ep.PrimaryPhone)) throw new ValidationError("The client needs a phone number on file - the link asks for the last 4 digits as the second identity check.");
            if (ep.BirthDate == null) throw new ValidationError("The client needs a date of birth on file - the link asks for it as the identity check.");
            X(c, "UPDATE ConsentInvites SET RevokedAt = GETDATE() WHERE EpisodeId = @ep AND RevokedAt IS NULL AND UsedAt IS NULL", new { ep = episodeId });
            var token = NewToken();
            X(c, "INSERT INTO ConsentInvites (EpisodeId, Token, SentTo, SentAt, ExpiresAt, CreatedBy, TenantId) VALUES (@ep, @t, @to, GETDATE(), DATEADD(hour, @h, GETDATE()), @u, @ten)", new { ep = episodeId, t = token, to = email, h = InviteHours, u = uid, ten = ep.TenantId });
            X(c, "UPDATE ConsentRequests SET Status = 'Sent', Channel = 'Email' WHERE EpisodeId = @ep AND Status = 'Pending'", new { ep = episodeId });
            var link = (GeniusOneBase.BaseUrl ?? "/").TrimEnd('/') + "/Consent/" + token;
            var body = InviteEmail(ep.FirstName, link, st.Items.Where(i => i.RequiredAtIntake && i.Status != "Signed" && i.Status != "Refused").Select(i => i.Code + " - " + i.Title).ToList());
            SendMail(email, "OneCare Behavioral Health Services - your consent forms", body);
            Audit(c, episodeId, null, "InviteSent", $"Signing link emailed to {email}; expires in {InviteHours} h", uid, ip);
            return GetState(c, episodeId, uid);
        }
        private static string NewToken() { var b = RandomNumberGenerator.GetBytes(24); return Convert.ToBase64String(b).Replace('+', '-').Replace('/', '_').TrimEnd('='); }
        private static string InviteEmail(string first, string link, List<string> forms) =>
            "<!DOCTYPE html><html><body style=\"font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1c2b3a\">" +
            $"<p>Hello {WebUtility.HtmlEncode(first ?? "")},</p>" +
            "<p>OneCare Behavioral Health Services has consent forms for you to review and sign for your Mobile Crisis Management services:</p><ul>" +
            string.Concat(forms.Select(f => "<li>" + WebUtility.HtmlEncode(f) + "</li>")) + "</ul>" +
            $"<p><a href=\"{link}\" style=\"display:inline-block;padding:10px 18px;background:#1b5e9e;color:#fff;text-decoration:none;border-radius:4px\">Review and sign</a></p>" +
            $"<p style=\"font-size:12px;color:#555\">The link works once, for {InviteHours} hours. You will be asked for your date of birth and the last four digits of your phone number. If you did not expect this email, ignore it or call your crisis worker.</p>" +
            "<p>OneCare Behavioral Health Services</p></body></html>";
        /// <summary>Uses the EmailParms keys the app already reads (Sender / Password / Smtp / Port) plus optional Username and Ssl.</summary>
        private static void SendMail(string to, string subject, string html)
        {
            var sender = GeniusOneBase.EmailSender; var pass = GeniusOneBase.EmailPassword; var host = GeniusOneBase.EmailSmtp;
            var port = int.TryParse(GeniusOneBase.EmailPort, out var p) ? p : 587;
            var user = AppConfig.Get("EmailParms:Keys:Username") ?? sender;
            var ssl = !string.Equals(AppConfig.Get("EmailParms:Keys:Ssl"), "false", StringComparison.OrdinalIgnoreCase);
            if (string.IsNullOrWhiteSpace(host) || string.IsNullOrWhiteSpace(sender) || pass == "hidden" || string.IsNullOrWhiteSpace(pass)) throw new ValidationError("Outgoing email is not configured on this server (EmailParms).");
            using var client = new SmtpClient(host, port) { EnableSsl = ssl, UseDefaultCredentials = false, Credentials = new NetworkCredential(user, pass) };
            using var msg = new MailMessage(sender, to) { Subject = subject, Body = html, IsBodyHtml = true };
            try { client.Send(msg); }
            catch (Exception ex) { throw new ValidationError("The consent email could not be sent: " + ex.Message); }
        }

        // ------------------------------------------------------------------ portal (anonymous, token + identity check)
        private class Inv { public int InviteId; public int EpisodeId; public DateTime ExpiresAt; public DateTime? UsedAt; public DateTime? RevokedAt; public int Attempts; public DateTime? LockedAt; }
        private static Inv LoadInvite(IDbConnection c, string token) => string.IsNullOrWhiteSpace(token) || token.Length > 64 ? null : F<Inv>(c, "SELECT InviteId, EpisodeId, ExpiresAt, UsedAt, RevokedAt, Attempts, LockedAt FROM ConsentInvites WHERE Token = @t", new { t = token });
        private static string InviteProblem(Inv inv)
        {
            if (inv == null) return "This link is not valid.";
            if (inv.UsedAt != null) return "These forms are already signed and on file. Nothing more is needed.";
            if (inv.RevokedAt != null) return "A newer link was sent. Please use the most recent email.";
            if (inv.ExpiresAt < DateTime.Now) return "This link has expired. Ask your crisis worker to send a new one.";
            if (inv.LockedAt != null) return "Too many failed attempts. Ask your crisis worker to send a new link.";
            return null;
        }
        public static PortalState PortalLanding(IDbConnection c, string token)
        {
            var inv = LoadInvite(c, token); var prob = InviteProblem(inv);
            if (prob != null) return new PortalState { Ok = false, Error = prob };
            var ep = LoadEp(c, inv.EpisodeId);
            return new PortalState { Ok = true, ClientFirstName = ep.FirstName };
        }
        private static string Vt(string token, int episodeId) => Sha256(token + "|" + episodeId + "|" + (AppConfig.Get("Data:Default:ConnectionString") ?? "vt")).Substring(0, 40);
        public static PortalState PortalVerify(IUnitOfWork uow, string token, string dob, string last4, string ip)
        {
            var c = uow.Connection; var inv = LoadInvite(c, token); var prob = InviteProblem(inv);
            if (prob != null) return new PortalState { Ok = false, Error = prob };
            var ep = LoadEp(c, inv.EpisodeId);
            var phone = new string(((ep.CellPhone ?? "") + (ep.PrimaryPhone ?? "")).Where(char.IsDigit).ToArray());
            var cell = new string((ep.CellPhone ?? "").Where(char.IsDigit).ToArray()); var prim = new string((ep.PrimaryPhone ?? "").Where(char.IsDigit).ToArray());
            var okPhone = (cell.Length >= 4 && cell.EndsWith(last4 ?? "x")) || (prim.Length >= 4 && prim.EndsWith(last4 ?? "x"));
            var okDob = DateTime.TryParse(dob, out var d) && ep.BirthDate != null && d.Date == ep.BirthDate.Value.Date;
            if (!(okPhone && okDob))
            {
                X(c, "UPDATE ConsentInvites SET Attempts = Attempts + 1, LockedAt = CASE WHEN Attempts + 1 >= @m THEN GETDATE() ELSE LockedAt END WHERE InviteId = @id", new { m = MaxAttempts, id = inv.InviteId });
                Audit(c, inv.EpisodeId, null, "PortalVerifyFailed", $"Identity check failed (attempt {inv.Attempts + 1})", null, ip);
                return new PortalState { Ok = false, Error = inv.Attempts + 1 >= MaxAttempts ? "Too many failed attempts. Ask your crisis worker to send a new link." : "The date of birth or phone digits did not match. Please try again." };
            }
            Audit(c, inv.EpisodeId, null, "PortalVerified", "Identity confirmed (DOB + phone last 4)", null, ip);
            return PortalForms(c, token, Vt(token, inv.EpisodeId));
        }
        public static PortalState PortalForms(IDbConnection c, string token, string vt)
        {
            var inv = LoadInvite(c, token); var prob = InviteProblem(inv);
            if (prob != null) return new PortalState { Ok = false, Error = prob };
            if (vt != Vt(token, inv.EpisodeId)) return new PortalState { Ok = false, Error = "Please confirm your identity first." };
            var ep = LoadEp(c, inv.EpisodeId);
            var st = new PortalState { Ok = true, Vt = vt, ClientFirstName = ep.FirstName };
            st.Forms = Q<PortalForm>(c, @"SELECT r.RequestId, t.Code, t.Title, t.Summary, t.Citation, t.Revision, t.BodyHtml, t.FieldSchema, r.Status
FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.EpisodeId = @ep AND t.RequiredAtIntake = 1 ORDER BY t.SortOrder", new { ep = inv.EpisodeId }).ToList();
            foreach (var f in st.Forms) { f.NeedsClient = f.Status != "Signed" && f.Status != "Refused"; f.BodyHtml = FillClientBlock(f.BodyHtml, ep); }
            st.AllDone = st.Forms.All(f => !f.NeedsClient);
            return st;
        }
        public static PortalState PortalSign(IUnitOfWork uow, string token, string vt, ConsentSignRequest r, string ip, string ua)
        {
            var c = uow.Connection; var inv = LoadInvite(c, token); var prob = InviteProblem(inv);
            if (prob != null) return new PortalState { Ok = false, Error = prob };
            if (vt != Vt(token, inv.EpisodeId)) return new PortalState { Ok = false, Error = "Please confirm your identity first." };
            var row = F<dynamic>(c, "SELECT r.RequestId, r.EpisodeId, r.Status, t.Code, t.SignerRoles FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id AND r.EpisodeId = @ep", new { id = r.RequestId ?? 0, ep = inv.EpisodeId });
            if (row == null) return new PortalState { Ok = false, Error = "Form not found." };
            if ((string)row.Status == "Signed") return PortalForms(c, token, vt);
            if (string.IsNullOrWhiteSpace(r.SignerName)) return new PortalState { Ok = false, Error = "Please type your full name." };
            if (string.IsNullOrWhiteSpace(r.SignatureImage) || !r.SignatureImage.StartsWith("data:image/")) return new PortalState { Ok = false, Error = "Please sign in the box." };
            try { ValidateFieldData(c, (int)row.RequestId, r.FieldData); } catch (ValidationError ve) { return new PortalState { Ok = false, Error = ve.Message }; }
            X(c, @"UPDATE ConsentRequests SET Status = 'Signed', Channel = 'Email', SignedAt = GETDATE(), SignerName = @n, SignerRelationship = @rel, SignatureImage = @sig, FieldData = @fd, IpAddress = @ip, UserAgent = @ua WHERE RequestId = @id",
                new { n = r.SignerName.Trim(), rel = string.IsNullOrWhiteSpace(r.SignerRelationship) ? "Self" : r.SignerRelationship, sig = r.SignatureImage, fd = r.FieldData, ip, ua = Trunc(ua, 400), id = (int)row.RequestId });
            Finalize(c, (int)row.RequestId, null, ip);
            Audit(c, inv.EpisodeId, (int)row.RequestId, "SignedByLink", $"{row.Code} signed remotely by {r.SignerName} ({r.SignerRelationship ?? "Self"})", null, ip);
            var st = PortalForms(c, token, vt);
            if (st.AllDone) { X(c, "UPDATE ConsentInvites SET UsedAt = GETDATE() WHERE InviteId = @id", new { id = inv.InviteId }); Audit(c, inv.EpisodeId, null, "InviteCompleted", "All forms signed through the link", null, ip); CloseVerbalIfComplete(c, inv.EpisodeId, null); }
            return st;
        }

        // ------------------------------------------------------------------ rendering
        private static string E(string s) => WebUtility.HtmlEncode(s ?? "");
        private static string FillClientBlock(string body, Ep ep)
        {
            var block = "<table class=\"cf-client-tbl\">" +
                $"<tr><th>Client full name</th><td>{E(($"{ep.FirstName} {ep.LastName}").Trim())}</td><th>Date of birth</th><td>{(ep.BirthDate?.ToString("MM/dd/yyyy") ?? "")}</td></tr>" +
                $"<tr><th>Client ID / case number</th><td>{E(ep.RecordNumber)} (episode #{ep.EpisodeId})</td><th>Phone</th><td>{E(ep.CellPhone ?? ep.PrimaryPhone)}</td></tr>" +
                $"<tr><th>Address</th><td colspan=\"3\">{E(string.Join(", ", new[] { ep.Address1, ep.City, ep.State, ep.Zipcode }.Where(x => !string.IsNullOrWhiteSpace(x))))}</td></tr></table>";
            return (body ?? "").Replace("<div class=\"cf-client\" data-slot=\"client\"></div>", block);
        }
        /// <summary>Signing page data for the in-app (in-person) page.</summary>
        public static PortalForm FormForRequest(IDbConnection c, int requestId, out Ep_ ep_)
        {
            var f = F<PortalForm>(c, @"SELECT r.RequestId, t.Code, t.Title, t.Summary, t.Citation, t.Revision, t.BodyHtml, t.FieldSchema, r.Status FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = requestId }) ?? throw new ValidationError("Consent request not found.");
            var epId = F<int>(c, "SELECT EpisodeId FROM ConsentRequests WHERE RequestId = @id", new { id = requestId });
            var ep = LoadEp(c, epId);
            f.BodyHtml = FillClientBlock(f.BodyHtml, ep); f.NeedsClient = f.Status != "Signed" && f.Status != "Refused";
            ep_ = new Ep_ { EpisodeId = ep.EpisodeId, ClientId = ep.ClientId, ClientName = ($"{ep.FirstName} {ep.LastName}").Trim(), IsMinor = Minor(ep.BirthDate), NextOfKin = string.Join(" ", new[] { ep.NextOfKinName, ep.NextOfKinPhone }.Where(x => !string.IsNullOrWhiteSpace(x))) };
            return f;
        }
        public class Ep_ { public int EpisodeId; public int ClientId; public string ClientName; public bool IsMinor; public string NextOfKin; }

        /// <summary>Signed (or verbal) consent document as print-ready HTML. forHash renders without volatile chrome so the hash is stable.</summary>
        public static string RenderDocument(IDbConnection c, int requestId, bool forHash = false)
        {
            var r = F<dynamic>(c, @"SELECT r.*, t.Code, t.Title, t.Revision, t.Citation, t.BodyHtml, t.FieldSchema, t.SignerRoles FROM ConsentRequests r JOIN ConsentTemplates t ON t.TemplateId = r.TemplateId WHERE r.RequestId = @id", new { id = requestId }) ?? throw new ValidationError("Consent request not found.");
            var ep = LoadEp(c, (int)r.EpisodeId);
            string body = FillClientBlock((string)r.BodyHtml, ep);
            body = FillFields(body, (string)r.FieldSchema, (string)r.FieldData);
            var sb = new StringBuilder();
            sb.Append("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>").Append(E((string)r.Code + " " + (string)r.Title)).Append("</title><style>").Append(DocCss).Append("</style></head><body><div class=\"cf-doc\">");
            sb.Append("<div class=\"cf-head\"><div><div class=\"cf-org\">OneCare Behavioral Health Services</div><div class=\"cf-sub\">Mobile Crisis Management - Licensed by NC DHSR</div></div><div class=\"cf-code\"><b>").Append(E((string)r.Code)).Append("</b><br>Rev. ").Append(E((string)r.Revision)).Append("</div></div>");
            sb.Append("<h1>").Append(E((string)r.Title)).Append("</h1><div class=\"cf-cite\">").Append(E((string)r.Citation)).Append("</div>");
            sb.Append(body);
            sb.Append("<section class=\"cf-sec cf-sign\"><h3>Signatures</h3><table class=\"cf-sig-tbl\"><tr>");
            var status = (string)r.Status;
            if (((string)r.SignerRoles).Contains("Client"))
            {
                sb.Append("<td class=\"cf-sig\"><div class=\"cf-sig-lbl\">Signature of client (or legal guardian / authorized representative)</div>");
                if (status == "Signed" && r.SignatureImage != null) sb.Append("<img src=\"").Append((string)r.SignatureImage).Append("\" alt=\"signature\">");
                else if (status == "Refused") sb.Append("<div class=\"cf-refused\">DECLINED TO SIGN - reason documented: ").Append(E((string)r.RefusalReason)).Append("</div>");
                else sb.Append("<div class=\"cf-blank\">not yet signed</div>");
                sb.Append("<div class=\"cf-sig-meta\">Printed name: <b>").Append(E((string)r.SignerName)).Append("</b> &nbsp; Relationship: ").Append(E((string)r.SignerRelationship ?? "")).Append(" &nbsp; Date: ").Append(r.SignedAt == null ? "" : ((DateTime)r.SignedAt).ToString("MM/dd/yyyy h:mm tt")).Append("</div></td>");
            }
            if (((string)r.SignerRoles).Contains("Worker") || status == "Refused")
            {
                sb.Append("<td class=\"cf-sig\"><div class=\"cf-sig-lbl\">").Append(((string)r.Code) == "OC-CST-002" ? "Crisis worker signature / credentials" : ((string)r.Code) == "OC-VCD-003" ? "Worker attestation signature" : "Staff member documenting").Append("</div>");
                if (r.WorkerSignatureImage != null) sb.Append("<img src=\"").Append((string)r.WorkerSignatureImage).Append("\" alt=\"worker signature\">"); else sb.Append("<div class=\"cf-blank\"></div>");
                sb.Append("<div class=\"cf-sig-meta\">").Append(E((string)r.WorkerName)).Append(" &nbsp; Date: ").Append(r.WorkerSignedAt == null ? "" : ((DateTime)r.WorkerSignedAt).ToString("MM/dd/yyyy h:mm tt")).Append("</div></td>");
            }
            sb.Append("</tr></table>");
            if (status == "Verbal") sb.Append("<p class=\"cf-verbal\">VERBAL CONSENT ON FILE - written consent due by ").Append(r.WrittenDueAt == null ? "" : ((DateTime)r.WrittenDueAt).ToString("MM/dd/yyyy h:mm tt")).Append(".</p>");
            sb.Append("</section>");
            if (!forHash)
            {
                sb.Append("<div class=\"cf-audit\"><b>Electronic record</b> - ").Append(status == "Signed" ? "Signed " + ((string)r.Channel == "Email" ? "through emailed link after DOB + phone identity check" : "in person on the worker's device") : status).Append(". ");
                if (r.IpAddress != null) sb.Append("IP ").Append(E((string)r.IpAddress)).Append(". ");
                if (r.DocumentHash != null) sb.Append("SHA-256 ").Append(E((string)r.DocumentHash)).Append(". ");
                sb.Append("Request #").Append((int)r.RequestId).Append(", episode #").Append((int)r.EpisodeId).Append(". Electronic signatures under NC UETA (G.S. 66-311 et seq.) and ESIGN.</div>");
                sb.Append("<div class=\"cf-foot\">").Append(E((string)r.Citation)).Append("<br>OneCare Behavioral Health Services - Licensed by NC DHSR</div>");
                sb.Append("<div class=\"cf-print\"><button onclick=\"window.print()\">Print</button></div>");
            }
            sb.Append("</div></body></html>");
            return sb.ToString();
        }
        /// <summary>Replaces field slots with the signer's answers (read-only rendering).</summary>
        private static string FillFields(string body, string schemaJson, string dataJson)
        {
            if (string.IsNullOrWhiteSpace(schemaJson)) return body;
            using var schema = JsonDocument.Parse(schemaJson);
            using var data = JsonDocument.Parse(string.IsNullOrWhiteSpace(dataJson) ? "{}" : dataJson);
            foreach (var f in schema.RootElement.EnumerateArray())
            {
                var key = f.GetProperty("key").GetString(); var type = f.GetProperty("type").GetString();
                data.RootElement.TryGetProperty(key, out var v);
                var sb = new StringBuilder("<div class=\"cf-fields\">");
                switch (type)
                {
                    case "checks":
                        foreach (var o in f.GetProperty("options").EnumerateArray()) { var t = o.GetString(); var on = v.ValueKind == JsonValueKind.Array && v.EnumerateArray().Any(x => x.GetString() == t); sb.Append("<div class=\"cf-chk\">").Append(on ? "&#9745;" : "&#9744;").Append(" ").Append(E(t)).Append("</div>"); }
                        if (v.ValueKind == JsonValueKind.Array) foreach (var x in v.EnumerateArray().Where(x => x.GetString()?.StartsWith("Other: ") == true)) sb.Append("<div class=\"cf-chk\">&#9745; ").Append(E(x.GetString())).Append("</div>");
                        break;
                    case "radio":
                        string sel = null, extra = null;
                        if (v.ValueKind == JsonValueKind.Object) { sel = v.TryGetProperty("v", out var sv) ? sv.GetString() : null; extra = v.TryGetProperty("x", out var xv) ? xv.GetString() : null; }
                        else if (v.ValueKind == JsonValueKind.String) sel = v.GetString();
                        foreach (var o in f.GetProperty("options").EnumerateArray()) { var val = o.GetProperty("v").GetString(); var on = val == sel; sb.Append("<div class=\"cf-chk\">").Append(on ? "&#9673;" : "&#9675;").Append(" ").Append(E(o.GetProperty("t").GetString())).Append(on && !string.IsNullOrWhiteSpace(extra) ? ": <b>" + E(extra) + "</b>" : "").Append("</div>"); }
                        break;
                    case "orgs":
                        sb.Append("<table class=\"cf-tbl\"><tr><th>Name / organization</th><th>Address / phone / fax</th></tr>");
                        if (v.ValueKind == JsonValueKind.Array) foreach (var o in v.EnumerateArray()) sb.Append("<tr><td>").Append(E(o.TryGetProperty("name", out var n) ? n.GetString() : "")).Append("</td><td>").Append(E(o.TryGetProperty("contact", out var ct) ? ct.GetString() : "")).Append("</td></tr>");
                        sb.Append("</table>"); break;
                    case "kv":
                        sb.Append("<table class=\"cf-tbl\">");
                        foreach (var it in f.GetProperty("items").EnumerateArray()) { var k = it.GetProperty("k").GetString(); string val = ""; if (v.ValueKind == JsonValueKind.Object && v.TryGetProperty(k, out var kv)) val = kv.ValueKind == JsonValueKind.Array ? string.Join("; ", kv.EnumerateArray().Select(x => x.GetString())) : kv.ToString(); sb.Append("<tr><th>").Append(E(it.GetProperty("t").GetString())).Append("</th><td>").Append(E(val)).Append("</td></tr>"); }
                        sb.Append("</table>"); break;
                    default:
                        sb.Append("<div class=\"cf-kv\"><b>").Append(E(f.GetProperty("label").GetString())).Append(":</b> ").Append(E(v.ValueKind == JsonValueKind.String ? v.GetString() : "")).Append("</div>"); break;
                }
                sb.Append("</div>");
                body = body.Replace($"<div class=\"cf-fields\" data-slot=\"fields-{key}\"></div>", sb.ToString());
            }
            return body;
        }
        public const string DocCss = @"body{font-family:Arial,Helvetica,sans-serif;color:#1c2b3a;margin:0;background:#fff}.cf-doc{max-width:860px;margin:0 auto;padding:28px 34px;font-size:13px;line-height:1.45}
.cf-head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1b3a5c;padding-bottom:8px}.cf-org{font-size:18px;font-weight:700;color:#1b3a5c}.cf-sub{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#5a6b7d}.cf-code{text-align:right;font-size:12px;color:#5a6b7d}
h1{font-size:19px;margin:14px 0 2px;color:#1b3a5c}.cf-cite{font-size:10px;color:#5a6b7d;letter-spacing:.5px;margin-bottom:10px}.cf-sec{margin:14px 0}.cf-sec h3{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#1b3a5c;border-bottom:1px solid #d5dde6;padding-bottom:3px;margin:0 0 8px}
.cf-tbl,.cf-client-tbl,.cf-sig-tbl{width:100%;border-collapse:collapse;margin:6px 0}.cf-tbl th,.cf-tbl td,.cf-client-tbl th,.cf-client-tbl td{border:1px solid #d5dde6;padding:5px 7px;text-align:left;vertical-align:top}.cf-tbl th,.cf-client-tbl th{background:#f1f5f9;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#5a6b7d;width:22%}
ol,ul{margin:4px 0 4px 20px;padding:0}li{margin:2px 0}blockquote{border-left:3px solid #1b3a5c;margin:6px 0;padding:6px 12px;background:#f7f9fc;font-style:italic}.cf-fine{font-size:10.5px;color:#5a6b7d;border-top:1px dashed #d5dde6;padding-top:6px}
.cf-fields{margin:4px 0 8px}.cf-chk{margin:2px 0}.cf-kv{margin:3px 0}.cf-sig-tbl td.cf-sig{width:50%;vertical-align:top;padding:8px;border:1px solid #d5dde6}.cf-sig img{display:block;max-width:320px;max-height:110px;border-bottom:1px solid #1c2b3a;margin:6px 0}.cf-sig-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#5a6b7d}.cf-sig-meta{font-size:11px;margin-top:4px}.cf-blank{height:70px;border-bottom:1px solid #1c2b3a;color:#98a4b3;font-size:11px}.cf-refused{padding:16px 8px;color:#a33;font-weight:700}
.cf-verbal{color:#8a5a00;font-weight:700}.cf-audit{margin-top:14px;padding:8px 10px;background:#f1f5f9;border:1px solid #d5dde6;font-size:10.5px;word-break:break-all}.cf-foot{margin-top:10px;font-size:10px;color:#5a6b7d;text-align:center}.cf-print{text-align:right;margin-top:10px}@media print{.cf-print{display:none}}";
    }
}
