using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.ClientManager.ClientGoalInterventionsRow>;
using MyRow = GeniusOneAi.ClientManager.ClientGoalInterventionsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalInterventionsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsListHandler
    {
        public ClientGoalInterventionsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}