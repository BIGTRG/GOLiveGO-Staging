using System;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Web;
using GeniusOneAi.CrisisEpisodes.Services;
using EpRow = GeniusOneAi.CrisisEpisodes.Entities.CrisisEpisodesRow;

namespace GeniusOneAi.CrisisEpisodes.Pages
{
    /// <summary>In-person signing page (worker opens, hands the device to the client) and the signed-document view.</summary>
    [PageAuthorize(typeof(EpRow))]
    public class ConsentPageController : Controller
    {
        [HttpGet, Route("~/CrisisEpisodes/Consent/Sign/{id:int}")]
        public IActionResult Sign(int id, [FromServices] ISqlConnections sqlConnections, string returnUrl = null)
        {
            using var c = sqlConnections.NewFor<EpRow>();
            var form = ConsentService.FormForRequest(c, id, out var ep);
            var model = JsonSerializer.Serialize(new { form.RequestId, form.Code, form.Title, form.Summary, form.Citation, form.Revision, form.BodyHtml, form.FieldSchema, form.Status, form.NeedsClient, ep.EpisodeId, ep.ClientName, ep.IsMinor, ep.NextOfKin, WorkerSigned = false, Mode = "inperson", ReturnUrl = (returnUrl != null && returnUrl.StartsWith("/") && !returnUrl.StartsWith("//")) ? returnUrl : "/CrisisEpisodes/CrisisEpisodes" });
            return Content(ConsentPages.SignPage(model, inApp: true), "text/html; charset=utf-8");
        }

        [HttpGet, Route("~/CrisisEpisodes/Consent/Document/{id:int}")]
        public IActionResult Document(int id, [FromServices] ISqlConnections sqlConnections)
        {
            using var c = sqlConnections.NewFor<EpRow>();
            return Content(ConsentService.RenderDocument(c, id), "text/html; charset=utf-8");
        }
    }
}
