using Serenity.Web;

namespace GeniusOneAi.Home.Pages
{
    using Microsoft.AspNetCore.Mvc;

    [Route("Home/[action]")]
    public class HomeController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return View("~/Modules/Home/Index.cshtml");
        }
    }
}