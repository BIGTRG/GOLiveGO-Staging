
namespace GeniusOneAi.Archives.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

   [PageAuthorize(typeof(Entities.ActivitiesArchiveRow))]
    public class ActivitiesArchiveController : Controller
    {
        [Route("Archives/ActivitiesArchive")]
        public ActionResult Index()
        {
            return View("~/Modules/Archives/Activities/ActivitiesArchiveIndex.cshtml");
        }
    }
}