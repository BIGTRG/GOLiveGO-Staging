using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow>;
using MyRow = GeniusOneAi.AgencyAdministration.ClientGoalsLibraryRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IClientGoalsLibraryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClientGoalsLibraryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClientGoalsLibraryListHandler
    {
        public ClientGoalsLibraryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}