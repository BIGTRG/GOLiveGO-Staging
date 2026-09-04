using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow>;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalInterventionsLibraryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsLibraryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsLibraryRetrieveHandler
    {
        public ClientGoalInterventionsLibraryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}