
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/ClientSiteTypes/[action]")]
    [PageAuthorize(typeof(Entities.ClientSiteTypesRow))]
    public class ClientSiteTypesController : Controller
    {
        [Route("AgencyAdministration/ClientSiteTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ClientSiteTypes/ClientSiteTypesIndex.cshtml");
        }
    }
}