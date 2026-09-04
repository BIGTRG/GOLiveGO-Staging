using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.WorkerPortal.ClientDocumentsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.WorkerPortal.ClientDocumentsRow;

namespace GeniusOneAi.WorkerPortal
{
    public interface IClientDocumentsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientDocumentsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClientDocumentsSaveHandler
    {
        public ClientDocumentsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();
            if (IsCreate) { Row.IsFinalized = 0; }
            if (IsCreate) return;
            if(Row.IsFinalized == 1 && Row.FinalizedDate == null) { Row.FinalizedDate = DateTime.Now; }
        }
    }
}