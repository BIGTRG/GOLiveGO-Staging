
namespace GeniusOneAi.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BillingRow))]
    public class BillingController : Controller
    {
        [Route("Administration/Billing")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Billing/BillingIndex.cshtml");
        }
    }
}