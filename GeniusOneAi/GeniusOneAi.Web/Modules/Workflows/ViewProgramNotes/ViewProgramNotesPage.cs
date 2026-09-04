using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Microsoft.AspNetCore.Mvc;

    
    public class ViewProgressNotesController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("Workflow/ViewProgressNote/{activityId=null}")]
        public ActionResult Index(int activityId)
        {
            var model = TimesheetExtension.GetTimeSheetNoteDataAll(activityId);
            return View("~/Modules/Workflows/ViewProgramNotes/ViewProgramNotesIndex.cshtml", model);
        }
    }
}