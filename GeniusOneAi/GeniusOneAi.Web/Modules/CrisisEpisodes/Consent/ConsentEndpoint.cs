using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.CrisisEpisodes.Services;
using EpRow = GeniusOneAi.CrisisEpisodes.Entities.CrisisEpisodesRow;

namespace GeniusOneAi.CrisisEpisodes.Endpoints
{
    /// <summary>Authenticated consent services for the episode dialog and the in-person signing page.</summary>
    [Route("Services/CrisisEpisodes/Consent/[action]")]
    [ConnectionKey(typeof(EpRow)), ServiceAuthorize(typeof(EpRow))]
    public class ConsentController : ServiceEndpoint
    {
        private int Uid => int.Parse(User?.GetIdentifier() ?? "0");
        private string Ip => HttpContext?.Connection?.RemoteIpAddress?.ToString();
        private string Ua => HttpContext?.Request?.Headers["User-Agent"].ToString();

        [HttpPost] public ConsentState State(IDbConnection connection, ConsentEpisodeRequest request) => ConsentService.GetState(connection, request.EpisodeId ?? throw new ValidationError("EpisodeId is required."), Uid);
        [HttpPost] public ConsentItem SignInPerson(IUnitOfWork uow, ConsentSignRequest request) => ConsentService.SignInPerson(uow, request, Uid, Ip, Ua);
        [HttpPost] public ConsentState SendInvite(IUnitOfWork uow, ConsentInviteRequest request) => ConsentService.SendInvite(uow, request, Uid, Ip);
        [HttpPost] public ConsentState RecordVerbal(IUnitOfWork uow, ConsentVerbalRequest request) => ConsentService.RecordVerbal(uow, request, Uid, Ip);
        [HttpPost] public ConsentState RecordRefusal(IUnitOfWork uow, ConsentRefuseRequest request) => ConsentService.RecordRefusal(uow, request, Uid, Ip);
    }
}
