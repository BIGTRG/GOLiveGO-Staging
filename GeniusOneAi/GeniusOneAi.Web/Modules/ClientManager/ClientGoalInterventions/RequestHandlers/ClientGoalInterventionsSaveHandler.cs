using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.ClientManager.ClientGoalInterventionsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.ClientManager.ClientGoalInterventionsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalInterventionsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsSaveHandler
    {
        public ClientGoalInterventionsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}