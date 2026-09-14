using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace GeniusOneAi.CrisisAssessments.Pages
{
    [Route("CrisisAssessments/CrisisAssessments/[action]")]
    [PageAuthorize(typeof(CrisisAssessmentsRow))]
    public class CrisisAssessmentsController : Controller
    {
        [Route("~/CrisisAssessments/CrisisAssessments")]
        public ActionResult Index() => View("~/Modules/CrisisAssessments/CrisisAssessments/CrisisAssessmentsIndex.cshtml");
    }
}
