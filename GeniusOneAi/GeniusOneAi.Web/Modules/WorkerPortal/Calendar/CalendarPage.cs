using GeniusOneAi.Dashboards;
using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Authorization;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using Microsoft.AspNetCore.Mvc;
    public class CalendarController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("WorkerPortal/Calendar")]
        public ActionResult Index()
        {
            var model = Calendar.GetWorkerScheduleData();
            return View("~/Modules/WorkerPortal/Calendar/CalendarIndex.cshtml");
        }
        

      
    }
}