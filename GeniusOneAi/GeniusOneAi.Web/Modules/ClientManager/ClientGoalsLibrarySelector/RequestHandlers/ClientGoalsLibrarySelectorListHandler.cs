using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow>;
using MyRow = GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalsLibrarySelectorListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibrarySelectorListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibrarySelectorListHandler
    {
        public ClientGoalsLibrarySelectorListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}