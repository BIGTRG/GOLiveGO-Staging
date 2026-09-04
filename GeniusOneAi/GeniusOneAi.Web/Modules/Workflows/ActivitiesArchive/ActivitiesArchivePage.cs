
namespace GeniusOneAi.Workflows.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ActivitiesArchiveRow))]
    public class ActivitiesArchiveController : Controller
    {
        [Route("Workflows/ActivitiesArchive")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/ActivitiesArchive/ActivitiesArchiveIndex.cshtml");
        }
    }
}