
namespace GeniusOneAi.DocumentManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DocumentsRow))]
    public class DocumentsController : Controller
    {
        [Route("DocumentManager/Documents")]
        public ActionResult Index()
        {
            return View("~/Modules/DocumentManager/Documents/DocumentsIndex.cshtml");
        }
    }
}