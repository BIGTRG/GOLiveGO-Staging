using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using GeniusOneAi.AgencyAdministration.Entities;
namespace GeniusOneAi.AgencyAdministration.Pages
{

    [PageAuthorize(typeof(ProgramNoteTypeRow))]
    public class ProgramNoteTypeController : Controller
    {
        [Route("AgencyAdministration/ProgramNoteType")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ProgramNoteType/ProgramNoteTypeIndex.cshtml");
        }
    }
}