
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/ProgramTypes/[action]")]
    [PageAuthorize(typeof(Entities.ProgramTypesRow))]
    public class ProgramTypesController : Controller
    {
        [Route("AgencyAdministration/ProgramTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ProgramTypes/ProgramTypesIndex.cshtml");
        }
    }
}