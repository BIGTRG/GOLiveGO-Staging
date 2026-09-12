
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/ProgramNoteTemplates/[action]")]
    [PageAuthorize(typeof(Entities.ProgramNoteTemplatesRow))]
    public class ProgramNoteTemplatesController : Controller
    {
        [Route("~/AgencyAdministration/ProgramNoteTemplates")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ProgramNoteTemplates/ProgramNoteTemplatesIndex.cshtml");
        }
    }
}