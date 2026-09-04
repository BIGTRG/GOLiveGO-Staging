using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow>;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowStepsTemplatesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsTemplatesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsTemplatesRetrieveHandler
    {
        public DocumentWorkflowStepsTemplatesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}