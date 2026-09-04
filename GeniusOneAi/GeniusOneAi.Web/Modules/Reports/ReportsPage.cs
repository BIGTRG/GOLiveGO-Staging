using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.Reports.Pages
{

    [PageAuthorize(typeof(ReportsRow))]
    public class ReportsController : Controller
    {
        [Route("Reports")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/ReportsIndex.cshtml");
        }
    }
}