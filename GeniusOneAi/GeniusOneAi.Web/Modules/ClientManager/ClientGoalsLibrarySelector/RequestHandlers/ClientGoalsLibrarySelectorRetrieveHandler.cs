using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow>;
using MyRow = GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalsLibrarySelectorRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibrarySelectorRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibrarySelectorRetrieveHandler
    {
        public ClientGoalsLibrarySelectorRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}