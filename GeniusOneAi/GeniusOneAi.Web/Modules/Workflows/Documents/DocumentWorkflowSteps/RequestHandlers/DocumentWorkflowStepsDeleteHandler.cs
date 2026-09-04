using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowStepsRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowStepsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsDeleteHandler
    {
        public DocumentWorkflowStepsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}