
namespace GeniusOneAi.ClientManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("ClientManager/ClientAuthorizations/[action]")]
    [PageAuthorize(typeof(Entities.ClientAuthorizationsRow))]
    public class ClientAuthorizationsController : Controller
    {
        [Route("ClientManager/ClientAuthorizations")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/ClientAuthorizations/ClientAuthorizationsIndex.cshtml");
        }
    }
}