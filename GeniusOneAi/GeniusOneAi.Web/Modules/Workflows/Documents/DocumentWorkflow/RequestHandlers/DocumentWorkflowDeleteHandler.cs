using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowDeleteHandler
    {
        public DocumentWorkflowDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}