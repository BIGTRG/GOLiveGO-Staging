
namespace GeniusOneAi.Archives.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

   [PageAuthorize(typeof(Entities.ProgressNotesArchiveRow))]
    public class ProgressNotesArchiveController : Controller
    {
        [Route("Archives/ProgressNotesArchive")]
        public ActionResult Index()
        {
            return View("~/Modules/Archives/ProgressNotes/ProgressNotesArchiveIndex.cshtml");
        }
    }
}