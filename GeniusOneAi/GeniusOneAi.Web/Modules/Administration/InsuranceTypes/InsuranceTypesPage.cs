
namespace GeniusOneAi.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/InsuranceTypes/[action]")]
    [PageAuthorize(typeof(Entities.InsuranceTypesRow))]
    public class InsuranceTypesController : Controller
    {
        [Route("~/Administration/InsuranceTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/InsuranceTypes/InsuranceTypesIndex.cshtml");
        }
    }
}