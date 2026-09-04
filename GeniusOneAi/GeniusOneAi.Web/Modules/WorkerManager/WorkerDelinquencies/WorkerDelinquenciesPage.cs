
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/WorkerDelinquencies/[action]")]
    [PageAuthorize(typeof(Entities.WorkerDelinquenciesRow))]
    public class WorkerDelinquenciesController : Controller
    {
        [Route("WorkerManager/WorkerDelinquencies")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/WorkerDelinquencies/WorkerDelinquenciesIndex.cshtml");
        }
    }
}