using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowStepsTemplatesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsTemplatesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsTemplatesSaveHandler
    {
        public DocumentWorkflowStepsTemplatesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}