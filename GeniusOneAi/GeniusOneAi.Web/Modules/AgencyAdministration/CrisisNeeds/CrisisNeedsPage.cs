using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace GeniusOneAi.AgencyAdministration.Pages
{
    [Route("AgencyAdministration/CrisisNeeds/[action]")]
    [PageAuthorize(typeof(CrisisNeedsRow))]
    public class CrisisNeedsController : Controller
    {
        [Route("~/AgencyAdministration/CrisisNeeds")]
        public ActionResult Index() => View("~/Modules/AgencyAdministration/CrisisNeeds/CrisisNeedsIndex.cshtml");
    }
}
