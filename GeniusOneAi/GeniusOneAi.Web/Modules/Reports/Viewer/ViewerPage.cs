using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.Reports.Pages
{
    public class ViewerController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("Reports/Viewer/{FileName=null}")]
        public ActionResult Index(string fileName)
        {
            var model = GeniusOneAi.Modules.Common.CustomClasses.Reports.GetReportData(fileName);
            return View("~/Modules/Reports/Viewer/ViewerIndex.cshtml",model);
        }


    }
}