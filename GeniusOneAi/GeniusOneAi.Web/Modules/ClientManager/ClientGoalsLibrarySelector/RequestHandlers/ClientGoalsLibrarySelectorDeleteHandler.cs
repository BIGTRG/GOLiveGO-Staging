using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow;

namespace GeniusOneAi.ClientManager
{
    public interface IClientGoalsLibrarySelectorDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibrarySelectorDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibrarySelectorDeleteHandler
    {
        public ClientGoalsLibrarySelectorDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}