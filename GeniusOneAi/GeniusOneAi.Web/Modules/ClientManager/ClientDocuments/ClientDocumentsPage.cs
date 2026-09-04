using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.ClientManager.Pages
{

    [PageAuthorize(typeof(ClientDocumentsRow))]
    public class ClientDocumentsController : Controller
    {
        [Route("ClientManager/ClientDocuments")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientManager/ClientDocuments/ClientDocumentsIndex.cshtml");
        }
    }
}