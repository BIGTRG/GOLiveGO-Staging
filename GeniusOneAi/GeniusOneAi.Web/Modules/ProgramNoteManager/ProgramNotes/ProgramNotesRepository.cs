
using System.Diagnostics.Eventing.Reader;
using System.IO;
using GeniusOneAi.Modules.Common.CustomClasses;
using GeniusOneAi.Web.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace GeniusOneAi.ProgramNoteManager.Repositories
{
    using Microsoft.Extensions.Configuration;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProgramNotesRow;

    public class ProgramNotesRepository : BaseRepository
    {

        public ProgramNotesRepository(IRequestContext context)
            : base(context)
        {
        }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }
        public GetSignageResponse GetSignageData()
        {
            var userId = User?.GetIdentifier();
            return ProgramNoteExtension.GetSignage(userId);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if(IsCreate) return;
                if(Row.ActivityId == null) throw new ValidationError("Action not specified!");
                var uid = int.Parse(User?.GetIdentifier() ?? string.Empty);
                var isBillable = TimesheetExtension.IsBillable(Row.ActivityId, uid);
                switch (Row.NoteUpdateStatus)
                {
                    case "SaveAction":
                        if (Row.ActivityId != null)
                            TimesheetExtension.UpdateTimeRecordStatus((int)Row.ActivityId, "Notes Saved", uid);
                        break;
                    case "SignAction":
                        // Encounter engine: an episode note cannot be signed until every goal has an outcome and the safety question is answered.
                        if ((Row.EpisodeId ?? Old?.EpisodeId) != null)
                            GeniusOneAi.CrisisEpisodes.Services.EncounterNoteService.EnsureGate(Connection, (int)Row.ActivityId);
                        Row.DateSigned = DateTime.Now;
                        // Encounter engine: fix the encounter number and phase at signature time.
                        if (Row.EpisodeId == null && Old?.EpisodeId != null) { Row.EpisodeId = Old.EpisodeId; Row.EncounterNo = Old.EncounterNo; Row.Phase = Old.Phase; }
                        GeniusOneAi.CrisisEpisodes.Services.EpisodeService.StampNoteOnSign(Connection, Row);
                        var hasRejections = Row.ActivityId != null && TimesheetExtension.HasRejection((int)Row.ActivityId);
                        Row.Status = hasRejections ? "Re-Submitted": "Submitted";
                        if (Row.ProgramNoteId != null)
                            ProgramNoteExtension.UpdateNoteSubmit((int)Row.ProgramNoteId);

                        if (Row.ActivityId != null)
                            if (!isBillable)
                            {
                                //var SystemAccountId = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("Hosting")["Default:SystemAccountId"];
                                //TimesheetExtension.UpdateTimeRecordStatus((int)Row.ActivityId, "Processed", uid);
                                //if (SystemAccountId != null)
                                //    Pdf.CreateProgressNotePdf((int)Row.ActivityId, Row.FileName,
                                //        int.Parse(SystemAccountId));
                                //break;
                            }

                        TimesheetExtension.UpdateTimeRecordStatus((int)Row.ActivityId, Row.Status, uid);
                        var emls = new Email();
                        var tls = emls.GetTeamLead((int)Row.ActivityId);
                        if (Row.Status == "Re-Submitted")
                        {
                            var rejector = emls.GetLastNoteRejectorEmail((int)Row.ActivityId);

                            if (!string.IsNullOrWhiteSpace(rejector))
                                emls.SendEmail(rejector, emls.ReSubmittedProgressSubject, emls.ReSubmittedProgressBody);
                        }

                        if (tls.Count == 0) { break; }
                        var recs = emls.GetRecipientsEmail(tls);
                        foreach (var rec in recs)
                        {
                             emls.SendEmail(rec,emls.SubmittedProgressSubject,emls.SubmittedProgressBody);
                        }
                        break;
                    case "ApproveAction":
                        if (Row.ActivityId != null)
                        {
                            TimesheetExtension.UpdateTimeRecordStatus((int)Row.ActivityId, "Approved", uid);
                            var epId = Row.EpisodeId ?? Old?.EpisodeId;
                            if(Row.Field00 == "Final Discharge") { TimesheetExtension.CloseoutGoalsForDischarge((int)Row.ActivityId); }
                            if (epId == null) Pdf.UpdateGoalsInter(Row.Field01, Row.Field02, (int)Row.ActivityId);//remove this patch (legacy weekday goals only)
                            else { Row.Field01 = Old?.Field01 ?? Row.Field01; Row.Field02 = Old?.Field02 ?? Row.Field02; } // encounter notes are composed server side; approval must not overwrite them
                            try { Pdf.CreateProgressNotePdf((int)Row.ActivityId, Row.FileName ?? Old?.FileName, uid); }
                            catch (Exception ex) when (epId != null) { System.Diagnostics.Debug.WriteLine("Encounter note PDF could not be generated (SelectPdf needs Windows): " + ex.Message); }
                            // Encounter engine: an approved note moves its episode to the next phase, schedules follow-ups, closes when done.
                            if (epId != null)
                            {
                                GeniusOneAi.CrisisEpisodes.Services.EpisodeService.AdvanceAfterApproval(UnitOfWork, epId.Value, Row.EncounterNo ?? Old?.EncounterNo ?? 1);
                                GeniusOneAi.CrisisEpisodes.Services.EncounterNoteService.AfterApproval(UnitOfWork, (int)(Row.ProgramNoteId ?? Old?.ProgramNoteId), uid);
                            }
                        }

                        break;
                    case "RejectAction":
                        if (Row.ActivityId != null) 
                            TimesheetExtension.UpdateTimeRecordStatus((int)Row.ActivityId, "Rejected", uid);
                        var eml = new Email();
                        var usr = eml.GetAuthWorkerId((int)Row.ActivityId);
                        var ue = eml.GetRecipientEmail(usr);
                        eml.SendEmail(ue, eml.RejectedProgressSubject, eml.RejectedProgressBody);
                       
                        break;
                    default:
                        throw new ValidationError("Action not specified!");
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                
            }

        }

       private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}