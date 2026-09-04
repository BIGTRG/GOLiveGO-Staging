
namespace GeniusOneAi.AgencyAdministration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("AgencyAdministration/FormTypes/[action]")]
    [PageAuthorize(typeof(Entities.FormTypesRow))]
    public class FormTypesController : Controller
    {
        [Route("AgencyAdministration/FormTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/AgencyAdministration/FormTypes/FormTypesIndex.cshtml");
        }
    }
}