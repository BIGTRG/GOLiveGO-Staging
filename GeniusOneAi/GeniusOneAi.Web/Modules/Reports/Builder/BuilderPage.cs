using Serenity.Web;

namespace GeniusOneAi.Reports.Pages
{
    using Microsoft.AspNetCore.Mvc;

    public class BuilderController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("Reports/Builder/{FileName=null}")]
        public ActionResult Index(string fileName)
        {
            var model = GeniusOneAi.Modules.Common.CustomClasses.Reports.GetReportData(fileName);
            return View("~/Modules/Reports/Builder/BuilderIndex.cshtml", model);
        }
    }
}