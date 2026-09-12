
namespace GeniusOneAi.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/ProgramCodeTypes/[action]")]
    [PageAuthorize(typeof(Entities.ProgramCodeTypesRow))]
    public class ProgramCodeTypesController : Controller
    {
        [Route("~/Administration/ProgramCodeTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/ProgramCodeTypes/ProgramCodeTypesIndex.cshtml");
        }
    }
}