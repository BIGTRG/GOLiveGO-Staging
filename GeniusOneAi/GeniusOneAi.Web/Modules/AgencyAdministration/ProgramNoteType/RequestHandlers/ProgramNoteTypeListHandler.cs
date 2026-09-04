using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow>;
using MyRow = GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IProgramNoteTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProgramNoteTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProgramNoteTypeListHandler
    {
        public ProgramNoteTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}