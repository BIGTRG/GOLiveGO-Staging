using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow>;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalInterventionsLibraryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalInterventionsLibraryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalInterventionsLibraryListHandler
    {
        public ClientGoalInterventionsLibraryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}