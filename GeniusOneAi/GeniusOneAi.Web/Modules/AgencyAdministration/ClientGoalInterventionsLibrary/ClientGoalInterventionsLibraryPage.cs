using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.AgencyAdministration.Pages
{

    [PageAuthorize(typeof(ClientGoalInterventionsLibraryRow))]
    public class ClientGoalInterventionsLibraryController : Controller
    {
        [Route("AgencyAdministration/ClientGoalInterventionsLibrary")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/ClientGoalInterventionsLibrary/ClientGoalInterventionsLibraryIndex.cshtml");
        }
    }
}