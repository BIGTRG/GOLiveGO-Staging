using System;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using GeniusOneAi.CrisisEpisodes.Services;
using EpRow = GeniusOneAi.CrisisEpisodes.Entities.CrisisEpisodesRow;

namespace GeniusOneAi.CrisisEpisodes.Pages
{
    /// <summary>Anonymous signing portal reached from the emailed link. Token (single use, 72 h) + DOB and phone last-4 identity check.
    /// No Serenity session, no PHI before the identity check passes.</summary>
    [IgnoreAntiforgeryToken]
    public class ConsentPortalController : Controller
    {
        public class VerifyBody { public string Dob { get; set; } public string Last4 { get; set; } }
        public class FormsBody { public string Vt { get; set; } }
        public class SignBody { public string Vt { get; set; } public int RequestId { get; set; } public string SignerName { get; set; } public string SignerRelationship { get; set; } public string SignatureImage { get; set; } public string FieldData { get; set; } }
        private string Ip => HttpContext?.Connection?.RemoteIpAddress?.ToString();

        [HttpGet, Route("~/Consent/{token}")]
        public IActionResult Landing(string token, [FromServices] ISqlConnections sqlConnections)
        {
            using var c = sqlConnections.NewFor<EpRow>();
            var st = ConsentService.PortalLanding(c, token);
            var model = JsonSerializer.Serialize(new { Mode = "portal", Token = token, st.Ok, st.Error, st.ClientFirstName });
            return Content(ConsentPages.SignPage(model, inApp: false), "text/html; charset=utf-8");
        }
        [HttpPost, Route("~/Consent/{token}/verify")]
        public IActionResult Verify(string token, [FromBody] VerifyBody b, [FromServices] ISqlConnections sqlConnections)
        {
            using var c = sqlConnections.NewFor<EpRow>(); using var uow = new UnitOfWork(c);
            var st = ConsentService.PortalVerify(uow, token, b?.Dob, b?.Last4, Ip); uow.Commit();
            return Json(st);
        }
        [HttpPost, Route("~/Consent/{token}/forms")]
        public IActionResult Forms(string token, [FromBody] FormsBody b, [FromServices] ISqlConnections sqlConnections)
        {
            using var c = sqlConnections.NewFor<EpRow>();
            return Json(ConsentService.PortalForms(c, token, b?.Vt));
        }
        [HttpPost, Route("~/Consent/{token}/sign")]
        public IActionResult Sign(string token, [FromBody] SignBody b, [FromServices] ISqlConnections sqlConnections)
        {
            using var c = sqlConnections.NewFor<EpRow>(); using var uow = new UnitOfWork(c);
            var st = ConsentService.PortalSign(uow, token, b?.Vt, new ConsentSignRequest { RequestId = b?.RequestId, SignerName = b?.SignerName, SignerRelationship = b?.SignerRelationship, SignatureImage = b?.SignatureImage, FieldData = b?.FieldData }, Ip, Request.Headers["User-Agent"].ToString());
            uow.Commit();
            return Json(st);
        }
    }
}
