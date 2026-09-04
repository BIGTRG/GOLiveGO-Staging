
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using GeniusOneAi.Modules.Common.CustomClasses;
using GeniusOneAi.WorkerPortal.Entities;

namespace GeniusOneAi.Workflows.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.WorkerActivitiesRow;

    public class WorkerActivitiesRepository : BaseRepository

    {
        private ISqlConnections sqlConnections;
        public WorkerActivitiesRepository(IRequestContext context)
            : base(context)
        {
        }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
     
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }
     
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void BeforeSave()
            {
                base.BeforeSave();
                var bill = Row.Hours;
                var aId = Row.AuthorizationId ?? 0;
                if (Row.IsBillable == null || !(bool)Row.IsBillable) return;
                bill = bill * BillingExtension.GetBillableAmount((int)Row.UserId, Row.Activity, aId);
                Row.BillableAmount = bill;
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
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where((fld.Status == "Submitted" || fld.Status == "Re-Submitted") && fld.Activity == "Patient");
            }
            protected override void OnReturn()
            {
                base.OnReturn();
                foreach (var row in Response.Entities)
                {
                    row.ClientFullName = row.ClientFullName ?? "---";
                    row.Submission = FormatSubmission(row.OriginalSubmittalDate, row.ActivityDate);
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
        }

    }
}