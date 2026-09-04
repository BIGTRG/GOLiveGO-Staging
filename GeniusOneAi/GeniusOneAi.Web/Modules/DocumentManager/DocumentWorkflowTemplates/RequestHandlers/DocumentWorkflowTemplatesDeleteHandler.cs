using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowTemplatesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowTemplatesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowTemplatesDeleteHandler
    {
        public DocumentWorkflowTemplatesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}