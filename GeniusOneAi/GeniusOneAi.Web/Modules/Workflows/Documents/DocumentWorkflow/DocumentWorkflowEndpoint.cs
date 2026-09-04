using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowRow;

namespace GeniusOneAi.Workflows.Endpoints
{
    [Route("Services/Workflows/DocumentWorkflow/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DocumentWorkflowController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IDocumentWorkflowSaveHandler handler)
        {
            return handler.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IDocumentWorkflowSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] IDocumentWorkflowDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] IDocumentWorkflowRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
            [FromServices] IDocumentWorkflowListHandler handler)
        {
            return handler.List(connection, request);
        }
        
        [HttpPost]
        public BaseResponse IssueNewDocumentWorkflow(BaseRecRequest req)
        {
            var res = new BaseResponse
            {
                Response = Documents.CreateDocumentWorkflow(req.Id)
            };
            return res;
        }
    }
}