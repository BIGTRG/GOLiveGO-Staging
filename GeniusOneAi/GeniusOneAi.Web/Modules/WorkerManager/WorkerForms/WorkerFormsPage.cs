
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/WorkerForms/[action]")]
    [PageAuthorize(typeof(Entities.WorkerFormsRow))]
    public class WorkerFormsController : Controller
    {
        [Route("~/WorkerManager/WorkerForms")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/WorkerForms/WorkerFormsIndex.cshtml");
        }
    }
}