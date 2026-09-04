
namespace GeniusOneAi.ClientManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("ClientManager/Clients/[action]")]
    [PageAuthorize(typeof(Entities.ClientsRow))]
    public class ClientsController : Controller
    {
        [Route("ClientManager/Clients")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/Clients/ClientsIndex.cshtml");
        }
    }
}