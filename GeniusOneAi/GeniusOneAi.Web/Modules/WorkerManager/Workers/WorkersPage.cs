
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/Workers/[action]")]
    [PageAuthorize(typeof(Entities.WorkersRow))]
    public class WorkersController : Controller
    {
        [Route("~/WorkerManager/Workers")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/Workers/WorkersIndex.cshtml");
        }
    }
}