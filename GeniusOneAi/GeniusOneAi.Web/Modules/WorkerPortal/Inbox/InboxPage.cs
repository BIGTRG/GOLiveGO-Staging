using GeniusOneAi.Dashboards;
using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerPortal/Inbox/[action]")]
    public class InboxController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("WorkerPortal/Inbox")]
        public ActionResult Index()
        {
            //var data = Inbox.GetWorkerInboxData();
            var model = new InboxPageModel();
            return View("~/Modules/WorkerPortal/Inbox/InboxIndex.cshtml", model);
        }
    }
}