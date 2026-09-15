using Microsoft.AspNetCore.Mvc;
using Serenity.Web;
using GeniusOneAi.WorkerPortal.Entities;

namespace GeniusOneAi.WorkerPortal.Pages
{
    /// <summary>Worker Tonight dashboard: the assigned client's goals for this encounter, worked and signed on one screen.
    /// Same services and the same goal card as Field mode (wwwroot/field/goalcard.js), so phone, tablet and desktop match.</summary>
    [Route("WorkerPortal/Tonight/[action]")]
    [PageAuthorize(typeof(ClientsRow))]
    public class TonightController : Controller
    {
        [HttpGet, Route("~/WorkerPortal/Tonight")]
        public ActionResult Index() => View("~/Modules/WorkerPortal/Tonight/TonightIndex.cshtml");
    }
}
