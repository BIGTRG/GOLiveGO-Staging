using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System.Data;
using MyRow = GeniusOneAi.ClientManager.ClientGoalOutcomesRow;

namespace GeniusOneAi.ClientManager.Endpoints
{
    [Route("Services/ClientManager/ClientGoalOutcomes/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ClientGoalOutcomesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] IClientGoalOutcomesSaveHandler handler) => handler.Create(uow, request);
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] IClientGoalOutcomesSaveHandler handler) => handler.Update(uow, request);
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] IClientGoalOutcomesDeleteHandler handler) => handler.Delete(uow, request);
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request, [FromServices] IClientGoalOutcomesRetrieveHandler handler) => handler.Retrieve(connection, request);
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, [FromServices] IClientGoalOutcomesListHandler handler) => handler.List(connection, request);
    }
}
