using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.DocumentManager.Pages
{

    [PageAuthorize(typeof(DocumentWorkflowTemplatesRow))]
    public class DocumentWorkflowTemplatesController : Controller
    {
        [Route("DocumentManager/DocumentWorkflowTemplates")]
        public ActionResult Index()
        {
            return View("~/Modules/DocumentManager/DocumentWorkflowTemplates/DocumentWorkflowTemplatesIndex.cshtml");
        }
    }
}