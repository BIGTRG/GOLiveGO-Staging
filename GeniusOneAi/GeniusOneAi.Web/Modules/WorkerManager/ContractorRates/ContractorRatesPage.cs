using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.WorkerManager.Pages
{

    [PageAuthorize(typeof(ContractorRatesRow))]
    public class ContractorRatesController : Controller
    {
        [Route("WorkerManager/ContractorRates")]
        public ActionResult Index()
        {
            return View("~/Modules/WorkerManager/ContractorRates/ContractorRatesIndex.cshtml");
        }
    }
}