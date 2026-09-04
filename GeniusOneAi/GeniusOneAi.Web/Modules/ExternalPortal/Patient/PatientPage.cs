using Serenity.Web;

namespace GeniusOneAi.Home.Pages
{
    using Microsoft.AspNetCore.Mvc;

    public class PatientController : Controller
    {
        [HttpGet, Route("ExternalPortal/Patient")]
        public ActionResult Index()
        {
            //get the document
            return View("~/Modules/ExternalPortal/Patient/PatientIndex.cshtml");
        }
    }
}