using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System.Data;
using MyRow = GeniusOneAi.CrisisAssessments.CrisisAssessmentNeedsRow;

namespace GeniusOneAi.CrisisAssessments.Endpoints
{
    [Route("Services/CrisisAssessments/CrisisAssessmentNeeds/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CrisisAssessmentNeedsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisAssessmentNeedsSaveHandler handler) => handler.Create(uow, request);
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisAssessmentNeedsSaveHandler handler) => handler.Update(uow, request);
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] ICrisisAssessmentNeedsDeleteHandler handler) => handler.Delete(uow, request);
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request, [FromServices] ICrisisAssessmentNeedsRetrieveHandler handler) => handler.Retrieve(connection, request);
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, [FromServices] ICrisisAssessmentNeedsListHandler handler) => handler.List(connection, request);
    }
}
