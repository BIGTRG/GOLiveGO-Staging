using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.DocumentManager.DocumentWorkflowTemplatesRow;

namespace GeniusOneAi.DocumentManager
{
    public interface IDocumentWorkflowTemplatesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowTemplatesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowTemplatesSaveHandler
    {
        public DocumentWorkflowTemplatesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}