using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Workflows.DocumentWorkflowRow>;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowListHandler
    {
        public DocumentWorkflowListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}