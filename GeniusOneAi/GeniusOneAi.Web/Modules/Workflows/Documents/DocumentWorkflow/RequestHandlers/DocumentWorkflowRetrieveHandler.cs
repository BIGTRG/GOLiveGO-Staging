using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.Workflows.DocumentWorkflowRow>;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowRetrieveHandler
    {
        public DocumentWorkflowRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}