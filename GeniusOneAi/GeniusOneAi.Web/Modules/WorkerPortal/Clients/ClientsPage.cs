
namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("WorkerPortal/Clients/[action]")]
    [PageAuthorize(typeof(Entities.ClientsRow))]
    public class ClientsController : Controller
    {
        [Route("~/WorkerPortal/Clients")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerPortal/Clients/ClientsIndex.cshtml");
        }
    }
}