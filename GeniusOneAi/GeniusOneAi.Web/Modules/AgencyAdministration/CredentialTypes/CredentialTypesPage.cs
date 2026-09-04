
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/CredentialTypes/[action]")]
    [PageAuthorize(typeof(Entities.CredentialTypesRow))]
    public class CredentialTypesController : Controller
    {
        [Route("AgencyAdministration/CredentialTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/CredentialTypes/CredentialTypesIndex.cshtml");
        }
    }
}