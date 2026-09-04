using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.AgencyAdministration.Pages
{

    [PageAuthorize(typeof(TemplateCodeListRow))]
    public class TemplateCodeListController : Controller
    {
        [Route("AgencyAdministration/TemplateCodeList")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/TemplateCodeList/TemplateCodeListIndex.cshtml");
        }
    }
}