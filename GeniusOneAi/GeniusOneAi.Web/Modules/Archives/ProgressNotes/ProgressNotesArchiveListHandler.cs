using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Archives.Entities.ProgressNotesArchiveRow>;
using MyRow = GeniusOneAi.Archives.Entities.ProgressNotesArchiveRow;

namespace GeniusOneAi.Archives
{
    public interface IProgressNotesArchiveListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class ProgressNotesArchiveListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProgressNotesArchiveListHandler
    {
        public ProgressNotesArchiveListHandler(IRequestContext context)
             : base(context)
        {

        }
        protected override void OnReturn()
        {
            base.OnReturn();
            foreach (var row in Response.Entities)
            {
                row.ClientFullName = row.ClientFullName ?? "---";
                row.Submission = FormatSubmission(row.OriginalSubmittalDate, row.ActivityDate);

                if (row.Activity == "Patient" && (row.Status == "Processed" || row.Status == "Paid" || row.Status == "Approved"))
                    row.ProgramNoteFileName = row.ProgramNoteFileName;
                else
                {
                    row.ProgramNoteFileName = null;
                }

            }
        }
        private static string FormatSubmission(DateTime? originalSubmittalDate, DateTime? activityDate)
        {
            if (!originalSubmittalDate.HasValue)
                return null;

            var submissionText = originalSubmittalDate.Value
                .ToString("M/d/yyyy 'at' h:mm tt");

            if (!activityDate.HasValue)
                return submissionText;

            // Mirrors the supplied SQL rule: due by 10:30 AM on the day
            // after the activity date.
            var dueDate = activityDate.Value.Date
                .AddDays(1)
                .AddHours(10)
                .AddMinutes(31);

            var status = originalSubmittalDate.Value < dueDate
                ? "On time"
                : "Late";

            return submissionText + Environment.NewLine + status;
        }

        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);
            query.Where(MyRow.Fields.Activity == "Patient" && (MyRow.Fields.Status == "Processed" || MyRow.Fields.Status == "Paid" || MyRow.Fields.Status == "Approved"));
        }
    }
}
