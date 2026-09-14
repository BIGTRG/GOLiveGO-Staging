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
            using (var conn = new System.Data.SqlClient.SqlConnection(GeniusOneAi.Modules.Common.CustomClasses.GeniusOneBase.DbConn))
                ViewData["EpisodeSummary"] = Dapper.SqlMapper.QueryFirstOrDefault<string>(conn, "SELECT CASE WHEN EpisodeId IS NULL THEN NULL ELSE ISNULL(Field00,'') + ' - ' + ISNULL(Summary,'') END FROM ProgramNotes WHERE ActivityId = @id", new { id = activityId });
            return View("~/Modules/Workflows/ViewProgramNotes/ViewProgramNotesIndex.cshtml", model);
        }
    }
}