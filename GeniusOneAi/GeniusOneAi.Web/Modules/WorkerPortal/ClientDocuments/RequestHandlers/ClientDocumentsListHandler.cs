using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.WorkerPortal.ClientDocumentsRow>;
using MyRow = GeniusOneAi.WorkerPortal.ClientDocumentsRow;

namespace GeniusOneAi.WorkerPortal
{
    public interface IClientDocumentsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientDocumentsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClientDocumentsListHandler
    {
        public ClientDocumentsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}