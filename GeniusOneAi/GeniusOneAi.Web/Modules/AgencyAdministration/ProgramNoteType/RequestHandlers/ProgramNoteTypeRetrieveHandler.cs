using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow>;
using MyRow = GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IProgramNoteTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProgramNoteTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProgramNoteTypeRetrieveHandler
    {
        public ProgramNoteTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}