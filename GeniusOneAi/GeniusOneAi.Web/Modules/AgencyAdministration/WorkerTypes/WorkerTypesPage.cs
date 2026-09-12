
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/WorkerTypes/[action]")]
    [PageAuthorize(typeof(Entities.WorkerTypesRow))]
    public class WorkerTypesController : Controller
    {
        [Route("~/AgencyAdministration/WorkerTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/WorkerTypes/WorkerTypesIndex.cshtml");
        }
    }
}