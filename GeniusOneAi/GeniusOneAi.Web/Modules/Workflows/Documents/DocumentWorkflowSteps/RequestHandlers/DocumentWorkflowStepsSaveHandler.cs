using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.Workflows.DocumentWorkflowStepsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowStepsRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowStepsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsSaveHandler
    {
        public DocumentWorkflowStepsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}