using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.ClientManager.ClientDocumentsRow>;
using MyRow = GeniusOneAi.ClientManager.ClientDocumentsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientDocumentsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientDocumentsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClientDocumentsRetrieveHandler
    {
        public ClientDocumentsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}