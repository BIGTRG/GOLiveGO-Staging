using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.ClientManager.ClientDocumentsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientDocumentsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientDocumentsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClientDocumentsDeleteHandler
    {
        public ClientDocumentsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}