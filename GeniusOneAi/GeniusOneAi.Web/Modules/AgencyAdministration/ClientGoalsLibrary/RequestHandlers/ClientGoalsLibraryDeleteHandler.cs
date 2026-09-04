using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalsLibraryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibraryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibraryDeleteHandler
    {
        public ClientGoalsLibraryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}