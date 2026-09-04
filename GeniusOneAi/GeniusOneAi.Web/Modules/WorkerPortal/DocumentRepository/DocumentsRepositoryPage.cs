
namespace GeniusOneAi.WorkerPortal.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DocumentsRow))]
    public class DocumentRepositoryController : Controller
    {
        [Route("DocumentManager/DocumentRepository")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerPortal/DocumentRepository/DocumentRepositoryIndex.cshtml");
        }
    }
}