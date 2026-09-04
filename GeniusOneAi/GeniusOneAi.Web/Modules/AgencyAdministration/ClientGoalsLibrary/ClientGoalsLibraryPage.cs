using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.AgencyAdministration.Pages
{

    [PageAuthorize(typeof(ClientGoalsLibraryRow))]
    public class ClientGoalsLibraryController : Controller
    {
        [Route("AgencyAdministration/ClientGoalsLibrary")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ClientGoalsLibrary/ClientGoalsLibraryIndex.cshtml");
        }
    }
}