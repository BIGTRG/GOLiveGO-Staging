using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.ClientManager.ClientGoalInterventionsRow>;
using MyRow = GeniusOneAi.ClientManager.ClientGoalInterventionsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalInterventionsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsRetrieveHandler
    {
        public ClientGoalInterventionsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}