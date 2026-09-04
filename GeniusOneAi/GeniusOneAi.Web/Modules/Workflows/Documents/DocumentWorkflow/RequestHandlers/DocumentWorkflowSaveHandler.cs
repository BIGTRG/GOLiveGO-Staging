using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.Workflows.DocumentWorkflowRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowSaveHandler
    {
        public DocumentWorkflowSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}