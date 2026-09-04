using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow>;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowTemplatesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowTemplatesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowTemplatesRetrieveHandler
    {
        public DocumentWorkflowTemplatesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}