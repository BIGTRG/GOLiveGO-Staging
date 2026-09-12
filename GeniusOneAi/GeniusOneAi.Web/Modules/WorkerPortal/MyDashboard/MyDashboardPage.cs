using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using GeniusOneAi.Administration;
    using GeniusOneAi.WorkerPortal.Entities;

    [Route("WorkerPortal/MyDashboard/[action]")]
    [PageAuthorize(typeof(ClientsRow))]
    public class MyDashboardController : Controller
    {
        [HttpGet]
        [Route("~/WorkerPortal/MyDashboard")]
        public ActionResult Index()
        {
            var userId = int.Parse(User?.GetIdentifier() ?? string.Empty);
            var model = Modules.Common.CustomClasses.Dashboards.GetWorkerDashboardData(userId);
            return View("~/Modules/WorkerPortal/MyDashboard/MyDashboardIndex.cshtml", model);
        }
    }
}