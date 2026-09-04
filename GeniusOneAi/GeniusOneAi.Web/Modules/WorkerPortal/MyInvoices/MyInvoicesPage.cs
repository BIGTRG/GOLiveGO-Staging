
namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MyInvoicesRow))]
    public class MyInvoicesController : Controller
    {
        [Route("WorkerPortal/MyInvoices")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerPortal/MyInvoices/MyInvoicesIndex.cshtml");
        }
    }
}