using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.CrisisEpisodes.Services;
using NoteRow = GeniusOneAi.ProgramNoteManager.Entities.ProgramNotesRow;

namespace GeniusOneAi.CrisisEpisodes.Endpoints
{
    public class ActivityRequest : ServiceRequest { public Int32? ActivityId { get; set; } }
    public class EpisodeRequest : ServiceRequest { public Int32? EpisodeId { get; set; } }

    [Route("Services/CrisisEpisodes/EncounterNotes/[action]")]
    [ConnectionKey(typeof(NoteRow)), ServiceAuthorize(typeof(NoteRow))]
    public class EncounterNotesController : ServiceEndpoint
    {
        private int Uid => int.Parse(User?.GetIdentifier() ?? "0");

        [HttpPost]
        public NoteData GetNoteData(IDbConnection connection, ActivityRequest request)
            => EncounterNoteService.GetNoteData(connection, request.ActivityId ?? throw new ValidationError("ActivityId is required."));

        [HttpPost]
        public NoteData SaveNoteData(IUnitOfWork uow, SaveNoteDataRequest request)
            => EncounterNoteService.SaveNoteData(uow, request, Uid);

        [HttpPost]
        public StartEncounterResponse StartEncounter(IUnitOfWork uow, StartEncounterRequest request)
            => EncounterNoteService.StartEncounter(uow, request, Uid);

        [HttpPost]
        public EpisodeTimeline Timeline(IDbConnection connection, EpisodeRequest request)
            => EncounterNoteService.Timeline(connection, request.EpisodeId ?? throw new ValidationError("EpisodeId is required."));
    }
}
