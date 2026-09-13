using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System.Data;
using MyRow = GeniusOneAi.AgencyAdministration.CrisisNeedsRow;

namespace GeniusOneAi.AgencyAdministration.Endpoints
{
    [Route("Services/AgencyAdministration/CrisisNeeds/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CrisisNeedsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisNeedsSaveHandler handler) => handler.Create(uow, request);
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisNeedsSaveHandler handler) => handler.Update(uow, request);
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] ICrisisNeedsDeleteHandler handler) => handler.Delete(uow, request);
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request, [FromServices] ICrisisNeedsRetrieveHandler handler) => handler.Retrieve(connection, request);
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, [FromServices] ICrisisNeedsListHandler handler) => handler.List(connection, request);
    }
}
