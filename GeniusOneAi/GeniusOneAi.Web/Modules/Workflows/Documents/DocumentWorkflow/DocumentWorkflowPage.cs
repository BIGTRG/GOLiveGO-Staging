using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.Workflows.Pages
{

    [PageAuthorize(typeof(DocumentWorkflowRow))]
    public class DocumentWorkflowController : Controller
    {
        [Route("Workflows/DocumentWorkflow")]
        public ActionResult Index()
        {
            return View("~/Modules/Workflows/Documents/DocumentWorkflow/DocumentWorkflowIndex.cshtml");
        }
    }
}