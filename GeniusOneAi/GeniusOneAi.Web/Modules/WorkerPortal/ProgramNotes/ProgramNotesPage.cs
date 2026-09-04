using GeniusOneAi.Modules.Common.CustomClasses;
using GeniusOneAi.WorkerPortal.Entities;
using Serenity;
using Serenity.Web;

namespace GeniusOneAi.WorkerPortal.Pages
{
    using Microsoft.AspNetCore.Mvc;

  public class ProgressNotesController : Controller
    {
        [HttpGet]
        [PageAuthorize(typeof(ClientsRow))]
        [Route("WorkerPortal/ProgramNotes/{activityId=null}")]
        public ActionResult Index(int activityId)
        {
            var uid = int.Parse(User?.GetIdentifier());
            var model = TimesheetExtension.GetTimeSheetNoteDate(activityId, uid);
            return View("~/Modules/WorkerPortal/ProgramNotes/ProgramNotesIndex.cshtml", model);
        }
    }
}