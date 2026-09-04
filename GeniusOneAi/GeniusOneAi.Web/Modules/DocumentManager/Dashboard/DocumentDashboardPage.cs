using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Web;

namespace GeniusOneAi.DocumentManager.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using Microsoft.AspNetCore.Mvc;

    [Route("DocumentManager/DocumentDashboardViewer/[action]")]

    public class DocumentDashboardController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("DocumentManager/DocumentDashboardViewer")]
        public ActionResult Index()
        {
            var model = new DocumentDashboardPageModel();
            model.CompletedCount = 0;
            model.DraftCount = 0;
            model.ExpiredCount = 0;
            model.ForApprovalCount = 0;
            model.RejectedCount = 0;
            model.SentCount = 0;
            model.ViewedCount = 0;

            return View("~/Modules/DocumentManager/Dashboard/DocumentDashboardIndex.cshtml",model);
        }
    }
}