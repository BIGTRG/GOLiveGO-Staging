
namespace GeniusOneAi.ClientManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("ClientManager/ClientGoals/[action]")]
    [PageAuthorize(typeof(Entities.ClientGoalsRow))]
    public class ClientGoalsController : Controller
    {
        [Route("ClientManager/ClientGoals")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/ClientGoals/ClientGoalsIndex.cshtml");
        }
    }
}