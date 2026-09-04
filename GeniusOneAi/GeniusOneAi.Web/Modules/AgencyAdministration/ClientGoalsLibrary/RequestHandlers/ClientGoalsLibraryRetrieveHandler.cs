using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow>;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalsLibraryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibraryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibraryRetrieveHandler
    {
        public ClientGoalsLibraryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}