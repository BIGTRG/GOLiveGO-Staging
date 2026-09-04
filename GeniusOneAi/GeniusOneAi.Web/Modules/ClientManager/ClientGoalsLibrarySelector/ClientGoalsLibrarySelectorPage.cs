using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.ClientManager.Pages
{

    [PageAuthorize(typeof(ClientGoalsLibrarySelectorRow))]
    public class ClientGoalsLibrarySelectorController : Controller
    {
        [Route("ClientManager/ClientGoalsLibrarySelector")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/ClientGoalsLibrarySelector/ClientGoalsLibrarySelectorIndex.cshtml");
        }
    }
}