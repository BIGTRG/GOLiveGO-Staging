using Serenity.Services;
using MyRow = GeniusOneAi.AgencyAdministration.ResourceDirectoryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IResourceDirectorySaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class ResourceDirectorySaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, IResourceDirectorySaveHandler
    { public ResourceDirectorySaveHandler(IRequestContext context) : base(context) { } }

    public interface IResourceDirectoryDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class ResourceDirectoryDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, IResourceDirectoryDeleteHandler
    { public ResourceDirectoryDeleteHandler(IRequestContext context) : base(context) { } }

    public interface IResourceDirectoryRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class ResourceDirectoryRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, IResourceDirectoryRetrieveHandler
    { public ResourceDirectoryRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface IResourceDirectoryListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class ResourceDirectoryListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, IResourceDirectoryListHandler
    { public ResourceDirectoryListHandler(IRequestContext context) : base(context) { } }
}
