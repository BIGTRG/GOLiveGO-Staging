namespace GeniusOneAi.CrisisEpisodes.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CrisisEpisodesRow;

    public class CrisisEpisodesRepository : BaseRepository
    {
        public CrisisEpisodesRepository(IRequestContext context) : base(context) { }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request) => new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request) => new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request) => new MyDeleteHandler(Context).Process(uow, request);
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request) => new MyRetrieveHandler(Context).Process(connection, request);
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request) => new MyListHandler(Context).Process(connection, request);

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context) : base(context) { }

            protected override void ValidateRequest()
            {
                if (IsCreate)
                {
                    // Server-owned defaults must exist before the NotNull validation runs.
                    Row.OpenedAt ??= DateTime.Now;
                    Row.Phase = string.IsNullOrEmpty(Row.Phase) ? EpisodePhase.FirstResponder : Row.Phase;
                    Row.EncounterCount ??= 0;
                    if (Row.TenantId == null && Row.ClientId != null)
                    {
                        var c = ClientManager.Entities.ClientsRow.Fields;
                        Row.TenantId = Connection.TryFirst<ClientManager.Entities.ClientsRow>(q => q.Select(c.TenantId).Where(c.ClientId == Row.ClientId.Value))?.TenantId;
                    }
                }
                base.ValidateRequest();
                if (IsCreate)
                {
                    if (Row.ClientId == null) throw new ValidationError("Client is required.");
                    var open = Services.EpisodeService.GetOpen(Connection, Row.ClientId.Value);
                    if (open != null)
                        throw new ValidationError("OpenEpisodeExists",
                            $"This client already has an open crisis episode (#{open.EpisodeId}). Close it first.");
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
                if (IsCreate)
                {
                    Row.OpenedAt ??= DateTime.Now;
                    Row.OpenedBy ??= uid;
                    Row.Phase = string.IsNullOrEmpty(Row.Phase) ? EpisodePhase.FirstResponder : Row.Phase;
                    Row.EncounterCount ??= 0;
                    Row.ProjectedDischarge ??= DateTime.Today.AddDays(7);
                    Row.Owner = uid;
                    Row.OwnerCreateDate = DateTime.Now;
                }
                // Choosing a disposition closes the episode; clearing it re-opens (admin correction).
                if (!string.IsNullOrEmpty(Row.Disposition) && (Old == null || Old.ClosedAt == null))
                {
                    Row.ClosedAt = DateTime.Now;
                    Row.Phase = EpisodePhase.Closed;
                }
                else if (Old != null && Old.ClosedAt != null && Row.Disposition != null && string.IsNullOrEmpty(Row.Disposition))
                {
                    Row.ClosedAt = null;
                    Row.Phase = EpisodePhase.ForEncounter((Old.EncounterCount ?? 0) + 1);
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { public MyDeleteHandler(IRequestContext context) : base(context) { } }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { public MyRetrieveHandler(IRequestContext context) : base(context) { } }
        private class MyListHandler : ListRequestHandler<MyRow> { public MyListHandler(IRequestContext context) : base(context) { } }
    }
}
