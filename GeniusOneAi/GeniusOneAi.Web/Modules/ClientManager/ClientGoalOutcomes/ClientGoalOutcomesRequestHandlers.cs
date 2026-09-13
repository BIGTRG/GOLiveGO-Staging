using Serenity.Services;
using MyRow = GeniusOneAi.ClientManager.ClientGoalOutcomesRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalOutcomesSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class ClientGoalOutcomesSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, IClientGoalOutcomesSaveHandler
    { public ClientGoalOutcomesSaveHandler(IRequestContext context) : base(context) { } }

    public interface IClientGoalOutcomesDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class ClientGoalOutcomesDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, IClientGoalOutcomesDeleteHandler
    { public ClientGoalOutcomesDeleteHandler(IRequestContext context) : base(context) { } }

    public interface IClientGoalOutcomesRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class ClientGoalOutcomesRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, IClientGoalOutcomesRetrieveHandler
    { public ClientGoalOutcomesRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface IClientGoalOutcomesListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class ClientGoalOutcomesListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, IClientGoalOutcomesListHandler
    { public ClientGoalOutcomesListHandler(IRequestContext context) : base(context) { } }
}
