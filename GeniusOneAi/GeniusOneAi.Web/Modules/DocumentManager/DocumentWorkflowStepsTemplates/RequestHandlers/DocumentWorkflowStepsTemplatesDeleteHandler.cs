using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowStepsTemplatesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsTemplatesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsTemplatesDeleteHandler
    {
        public DocumentWorkflowStepsTemplatesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}