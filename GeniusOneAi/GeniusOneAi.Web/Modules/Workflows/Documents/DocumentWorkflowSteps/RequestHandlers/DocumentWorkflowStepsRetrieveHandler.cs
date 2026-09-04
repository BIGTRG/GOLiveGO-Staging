using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.Workflows.DocumentWorkflowStepsRow>;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowStepsRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowStepsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsRetrieveHandler
    {
        public DocumentWorkflowStepsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}