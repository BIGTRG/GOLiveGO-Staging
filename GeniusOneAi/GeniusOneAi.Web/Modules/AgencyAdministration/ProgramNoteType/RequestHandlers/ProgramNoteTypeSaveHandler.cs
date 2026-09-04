using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow;

namespace GeniusOneAi.Web.Modules.AgencyAdministration.ProgramNoteType.RequestHandlers
{
    public interface IProgramNoteTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

    public class ProgramNoteTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProgramNoteTypeSaveHandler
    {
        public ProgramNoteTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}