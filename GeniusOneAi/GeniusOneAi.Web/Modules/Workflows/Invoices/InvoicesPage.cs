
namespace GeniusOneAi.Workflows.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Workflows/Invoices/[action]")]
    [PageAuthorize(typeof(Entities.InvoicesRow))]
    public class InvoicesController : Controller
    {
        [Route("Workflows/Invoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/Invoices/InvoicesIndex.cshtml");
        }
    }
}