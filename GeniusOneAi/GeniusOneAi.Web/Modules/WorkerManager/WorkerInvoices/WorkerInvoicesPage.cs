
namespace GeniusOneAi.WorkerManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerManager/WorkerInvoices/[action]")]
    [PageAuthorize(typeof(Entities.WorkerInvoicesRow))]
    public class WorkerInvoicesController : Controller
    {
        [Route("~/WorkerManager/WorkerInvoices")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/WorkerInvoices/WorkerInvoicesIndex.cshtml");
        }
    }
}