using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalsLibrarySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibrarySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibrarySaveHandler
    {
        public ClientGoalsLibrarySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}