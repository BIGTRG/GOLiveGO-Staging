
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/WorkerCredentials/[action]")]
    [PageAuthorize(typeof(Entities.WorkerCredentialsRow))]
    public class WorkerCredentialsController : Controller
    {
        [Route("WorkerManager/WorkerCredentials")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/WorkerCredentials/WorkerCredentialsIndex.cshtml");
        }
    }
}