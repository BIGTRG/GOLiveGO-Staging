
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/SitesTypes/[action]")]
    [PageAuthorize(typeof(Entities.SitesTypesRow))]
    public class SitesTypesController : Controller
    {
        [Route("~/AgencyAdministration/SitesTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/SitesTypes/SitesTypesIndex.cshtml");
        }
    }
}