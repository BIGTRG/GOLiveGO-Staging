using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace GeniusOneAi.AgencyAdministration.Pages
{
    [Route("AgencyAdministration/ResourceDirectory/[action]")]
    [PageAuthorize(typeof(ResourceDirectoryRow))]
    public class ResourceDirectoryController : Controller
    {
        [Route("~/AgencyAdministration/ResourceDirectory")]
        public ActionResult Index() => View("~/Modules/AgencyAdministration/ResourceDirectory/ResourceDirectoryIndex.cshtml");
    }
}
