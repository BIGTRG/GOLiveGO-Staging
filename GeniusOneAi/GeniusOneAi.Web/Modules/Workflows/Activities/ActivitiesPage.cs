
namespace GeniusOneAi.Workflows.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ActivitiesRow))]
    public class ActivitiesController : Controller
    {
        [Route("Workflows/Activities")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/Activities/ActivitiesIndex.cshtml");
        }
    }
}