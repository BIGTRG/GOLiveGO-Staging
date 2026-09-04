using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using GeniusOneAi.ClientManager;

namespace GeniusOneAi.ClientManager.Pages
{

    [PageAuthorize(typeof(ClientGoalInterventionsRow))]
    public class ClientGoalInterventionsController : Controller
    {
        [Route("ClientManager/ClientGoalInterventions")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/ClientGoalInterventions/ClientGoalInterventionsIndex.cshtml");
        }
    }
}