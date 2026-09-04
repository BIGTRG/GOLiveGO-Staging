
namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

   [PageAuthorize(typeof(Entities.ActivitiesRow))]
    public class MyActivitiesController : Controller
    {
        [Route("WorkerPortal/Activities")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerPortal/Activities/ActivitiesIndex.cshtml");
        }
    }
}