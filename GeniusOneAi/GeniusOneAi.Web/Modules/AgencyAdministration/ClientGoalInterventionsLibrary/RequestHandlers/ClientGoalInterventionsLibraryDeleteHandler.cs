using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalInterventionsLibraryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsLibraryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsLibraryDeleteHandler
    {
        public ClientGoalInterventionsLibraryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}