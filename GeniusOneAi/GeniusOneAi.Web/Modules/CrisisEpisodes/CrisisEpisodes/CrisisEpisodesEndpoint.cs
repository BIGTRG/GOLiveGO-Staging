namespace GeniusOneAi.CrisisEpisodes.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CrisisEpisodesRepository;
    using MyRow = Entities.CrisisEpisodesRow;

    [Route("Services/CrisisEpisodes/CrisisEpisodes/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CrisisEpisodesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request) => new MyRepository(Context).Create(uow, request);

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request) => new MyRepository(Context).Update(uow, request);

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request) => new MyRepository(Context).Delete(uow, request);

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request) => new MyRepository(Context).Retrieve(connection, request);

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request) => new MyRepository(Context).List(connection, request);

        /// <summary>Open episode for a client (null when none). Used by the client dialog and the note editor.</summary>
        [HttpPost]
        public RetrieveResponse<MyRow> GetOpen(IDbConnection connection, GetOpenEpisodeRequest request)
        {
            if (request?.ClientId == null) throw new ArgumentNullException(nameof(request.ClientId));
            return new RetrieveResponse<MyRow> { Entity = Services.EpisodeService.GetOpen(connection, request.ClientId.Value) };
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Close(IUnitOfWork uow, CloseEpisodeRequest request)
        {
            if (request?.EpisodeId == null) throw new ArgumentNullException(nameof(request.EpisodeId));
            var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
            Services.EpisodeService.Close(uow, request.EpisodeId.Value, request.Disposition ?? EpisodeDisposition.Discharged, request.Notes, uid);
            return new SaveResponse { EntityId = request.EpisodeId };
        }
    }

    public class GetOpenEpisodeRequest : ServiceRequest { public Int32? ClientId { get; set; } }
    public class CloseEpisodeRequest : ServiceRequest { public Int32? EpisodeId { get; set; } public String Disposition { get; set; } public String Notes { get; set; } }
}
