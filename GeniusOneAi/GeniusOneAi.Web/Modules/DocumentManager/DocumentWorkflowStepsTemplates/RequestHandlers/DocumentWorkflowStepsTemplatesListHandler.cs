using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow>;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowStepsTemplatesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsTemplatesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsTemplatesListHandler
    {
        public DocumentWorkflowStepsTemplatesListHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void OnReturn()
        {
            base.OnReturn();
        }
    }
}