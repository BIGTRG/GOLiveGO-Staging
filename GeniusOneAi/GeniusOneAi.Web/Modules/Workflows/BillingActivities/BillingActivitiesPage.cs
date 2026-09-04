
namespace GeniusOneAi.Workflows.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BillingActivitiesRow))]
    public class BillingActivitiesController : Controller
    {
        [Route("Workflows/BillingActivities")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/BillingActivities/BillingActivitiesIndex.cshtml");
        }
    }
}