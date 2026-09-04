
namespace GeniusOneAi.DocumentManager.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.DocumentSelectorRepository;
    using MyRow = Entities.DocumentSelectorRow;
    using GeniusOneAi.Modules.Common.CustomClasses;

    [Route("Services/DocumentManager/DocumentSelector/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DocumentSelectorController : ServiceEndpoint
    {
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
        [HttpPost]
        public BaseResponse CopyDocumentsToClient(BaseRecsRequest ids)
        {
            return new MyRepository(Context).CopyDocumentsToClient(ids);
        }
    }
}
