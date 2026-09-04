
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/WorkerSites/[action]")]
    [PageAuthorize(typeof(Entities.WorkerSitesRow))]
    public class WorkerSitesController : Controller
    {
        [Route("WorkerManager/WorkerSites")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/WorkerSites/WorkerSitesIndex.cshtml");
        }
    }
}