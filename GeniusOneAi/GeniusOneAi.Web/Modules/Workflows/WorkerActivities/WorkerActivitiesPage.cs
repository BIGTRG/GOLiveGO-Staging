
namespace GeniusOneAi.Workflows.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WorkerActivitiesRow))]
    public class WorkerActivitiesController : Controller
    {
        [Route("Workflows/WorkerActivities")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/WorkerActivities/WorkerActivitiesIndex.cshtml");
        }
    }
}