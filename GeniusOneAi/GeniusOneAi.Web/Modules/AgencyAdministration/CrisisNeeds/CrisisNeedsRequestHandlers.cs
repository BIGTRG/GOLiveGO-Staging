using Serenity.Services;
using MyRow = GeniusOneAi.AgencyAdministration.CrisisNeedsRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ICrisisNeedsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class CrisisNeedsSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, ICrisisNeedsSaveHandler
    { public CrisisNeedsSaveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisNeedsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class CrisisNeedsDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, ICrisisNeedsDeleteHandler
    { public CrisisNeedsDeleteHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisNeedsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class CrisisNeedsRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, ICrisisNeedsRetrieveHandler
    { public CrisisNeedsRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisNeedsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class CrisisNeedsListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, ICrisisNeedsListHandler
    { public CrisisNeedsListHandler(IRequestContext context) : base(context) { } }
}
