namespace GeniusOneAi.CrisisEpisodes.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("CrisisEpisodes/CrisisEpisodes/[action]")]
    [PageAuthorize(typeof(Entities.CrisisEpisodesRow))]
    public class CrisisEpisodesController : Controller
    {
        [Route("~/CrisisEpisodes/CrisisEpisodes")]
        public ActionResult Index()
        {
            return View("~/Modules/CrisisEpisodes/CrisisEpisodes/CrisisEpisodesIndex.cshtml");
        }
    }
}
