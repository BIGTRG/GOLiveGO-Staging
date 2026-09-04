using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Microsoft.AspNetCore.Mvc;

    
    public class WorkerViewProgressNotesController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("Workflow/WorkerViewProgressNote/{activityId=null}")]
        public ActionResult Index(int activityId)
        {
            var model = TimesheetExtension.GetTimeSheetNoteDataAll(activityId);
            return View("~/Modules/Workflows/WorkerViewProgramNotes/WorkerViewProgramNotesIndex.cshtml", model);
        }
    }
}