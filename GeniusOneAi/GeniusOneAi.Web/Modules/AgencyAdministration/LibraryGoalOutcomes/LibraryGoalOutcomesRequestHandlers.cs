using Serenity.Services;
using MyRow = GeniusOneAi.AgencyAdministration.LibraryGoalOutcomesRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ILibraryGoalOutcomesSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class LibraryGoalOutcomesSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, ILibraryGoalOutcomesSaveHandler
    { public LibraryGoalOutcomesSaveHandler(IRequestContext context) : base(context) { } }

    public interface ILibraryGoalOutcomesDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class LibraryGoalOutcomesDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, ILibraryGoalOutcomesDeleteHandler
    { public LibraryGoalOutcomesDeleteHandler(IRequestContext context) : base(context) { } }

    public interface ILibraryGoalOutcomesRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class LibraryGoalOutcomesRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, ILibraryGoalOutcomesRetrieveHandler
    { public LibraryGoalOutcomesRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface ILibraryGoalOutcomesListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class LibraryGoalOutcomesListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, ILibraryGoalOutcomesListHandler
    { public LibraryGoalOutcomesListHandler(IRequestContext context) : base(context) { } }
}
