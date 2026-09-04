using Serenity.Web;

namespace GeniusOneAi.Common.Pages
{
    using Microsoft.AspNetCore.Mvc;

    [Route("Alerts/[action]")]
    public class HomeController : Controller
    {
        [PageAuthorize][HttpPost]
        public ActionResult SubmitActivity()
        {
            return View("~/Modules/Common/Alerts/AlertsIndex.cshtml");
        }
    }
}