using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalsLibrarySelectorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibrarySelectorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibrarySelectorSaveHandler
    {
        public ClientGoalsLibrarySelectorSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}