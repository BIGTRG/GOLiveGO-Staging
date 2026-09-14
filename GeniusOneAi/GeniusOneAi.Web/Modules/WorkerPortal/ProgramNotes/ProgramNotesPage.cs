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
            // Encounter engine: notes that belong to a crisis episode get the encounter panel instead of the weekday goal fill.
            using (var conn = new System.Data.SqlClient.SqlConnection(GeniusOneBase.DbConn))
            {
                var ep = Dapper.SqlMapper.QueryFirstOrDefault<int?>(conn, "SELECT EpisodeId FROM ProgramNotes WHERE ActivityId = @id", new { id = activityId });
                ViewData["EpisodeId"] = ep;
            }
            return View("~/Modules/WorkerPortal/ProgramNotes/ProgramNotesIndex.cshtml", model);
        }
    }
}