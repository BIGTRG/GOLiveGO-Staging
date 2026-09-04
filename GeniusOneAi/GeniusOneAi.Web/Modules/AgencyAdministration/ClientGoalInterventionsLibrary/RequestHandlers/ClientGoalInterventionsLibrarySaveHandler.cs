using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalInterventionsLibrarySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsLibrarySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsLibrarySaveHandler
    {
        public ClientGoalInterventionsLibrarySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}