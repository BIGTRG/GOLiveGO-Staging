using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.AgencyAdministration.Entities.ProgramNoteTypeRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IProgramNoteTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ProgramNoteTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IProgramNoteTypeDeleteHandler
    {
        public ProgramNoteTypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}