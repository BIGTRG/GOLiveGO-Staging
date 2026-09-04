using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow>;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowTemplatesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowTemplatesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowTemplatesListHandler
    {
        public DocumentWorkflowTemplatesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}