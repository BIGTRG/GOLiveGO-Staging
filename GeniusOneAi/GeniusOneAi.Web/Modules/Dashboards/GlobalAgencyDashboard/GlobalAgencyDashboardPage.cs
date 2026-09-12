using GeniusOneAi.Dashboards;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using GeniusOneAi.Reports;

namespace GeniusOneAi.Dashboards.Pages
{


    [Route("Dashboards/GlobalAgencyDashboard/[action]")]
    [PageAuthorize(typeof(GlobalAgencyDashboardRow))]
    public class GlobalAgencyDashboardController : Controller
    {
        [HttpGet]
        [Route("~/Dashboards/GlobalAgencyDashboard")]
        public ActionResult Index()
        {
            var model = GeniusOneAi.Modules.Common.CustomClasses.Dashboards.GetGlobalDashboardData();
            return View("~/Modules/Dashboards/GlobalAgencyDashboard/GlobalAgencyDashboardIndex.cshtml", model);
        }
    }
}