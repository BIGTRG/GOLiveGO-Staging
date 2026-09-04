using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.ClientManager.ClientGoalInterventionsRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalInterventionsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsDeleteHandler
    {
        public ClientGoalInterventionsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}