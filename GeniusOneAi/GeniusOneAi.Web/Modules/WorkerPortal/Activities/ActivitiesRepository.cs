
namespace GeniusOneAi.WorkerPortal.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ActivitiesRow;
    using GeniusOneAi.Modules.Common.CustomClasses;

    public class ActivitiesRepository : BaseRepository
    {
        public ActivitiesRepository(IRequestContext context)
            : base(context)
        {
        }
        private static MyRow.RowFields fld
        {
            get { return MyRow.Fields; }
        }

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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                Row.UserId = int.Parse(User?.GetIdentifier() ?? string.Empty);
                if (IsCreate)
                {
                    if (Row.Activity != "Patient") { Row.Status = "Submitted"; }
                    if (Row.Activity == "Patient") { Row.Status = "Notes Pending"; }
                }
                if(!IsCreate) {
                if(Row.Activity == "Patient" && Row.Status == null)
                    {
                        Row.Status = "Notes Pending";
                    }
                    if (Row.Activity != "Patient")
                    {
                        Row.Status = "Submitted"; 
                    }
                }
                if (Row.ActivityToTime.HasValue && Row.ActivityFromTime.HasValue)
                {
                    Row.Hours = (decimal?) TimesheetExtension.GetCalculatedHours((TimeSpan) Row.ActivityFromTime, (TimeSpan) Row.ActivityToTime);
                }

                if (!Row.ClientId.HasValue) return;
                if (Row.ProgressNoteLocation == null) return;
                var clientRec = TimesheetExtension.GetBillInfo((int)Row.ClientId, (int)Row.ProgressNoteLocation, int.Parse(User?.GetIdentifier() ?? string.Empty));
                Row.BillCode = clientRec.BillCode;
                Row.AuthorizationId = clientRec.AuthorizationId;
                if (clientRec.ProgramTypeId != null)
                    Row.ProgressNoteTemplateId = TimesheetExtension.GetTemplateId((int)clientRec.ProgramTypeId);
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (Row.ActivityDate == null) return;
                if (Row.AuthorizationId != null && Row.IsBillable == true)

                {
                    var isSuccessMessage =
                        TimesheetExtension.GetAuthorizationStatusResponse((DateTime)Row.ActivityDate,
                            (int)Row.AuthorizationId);
                    if(isSuccessMessage != "Success") throw new ValidationError("InvalidActivityDate", "ActivityDate",$"{isSuccessMessage}");
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                if (Row.ActivityId == null) return;
                var rowId = (int)Row.ActivityId;
                if (Row.Activity != "Patient") return;
                var noteExists = new SqlQuery().From("ProgramNotes")
                    .Select("*")
                    .Where(new Criteria("ActivityId") == rowId)
                    .GetFirst(UnitOfWork.Connection);
                if (noteExists) return;
                var noteId = new SqlInsert("ProgramNotes")
                    .Set("ActivityId", rowId)
                    .Set("ProgramNoteTemplateId", Row.ProgressNoteTemplateId)
                    .Set("Status", "Not Started").ExecuteAndGetID(UnitOfWork.Connection);

                new SqlUpdate("Activities")
                    .Set("ProgressNoteId", noteId)
                    .Where(new Criteria("ActivityId") == rowId)
                    .Execute(UnitOfWork.Connection, ExpectedRows.ZeroOrOne);
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();
                if (Row.ActivityId == null) return;
                var recId = (int) Row.ActivityId;
                new SqlDelete("ProgramNotes")
                    .Where(new Criteria("ActivityId") == recId)
                    .Execute(UnitOfWork.Connection, ExpectedRows.Ignore);
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
            protected override void OnReturn()
            {
                base.OnReturn();
                foreach (var row in Response.Entities)
                {
                    row.ClientFullName = row.ClientFullName ?? "---";

                    if (row.Activity == "Patient" && (row.Status == "Processed" || row.Status == "Approved" || row.Status == "Processing" || row.Status == "Paid"))
                        row.ProgramNoteFileName = row.ProgramNoteFileName;
                    else
                    {
                        row.ProgramNoteFileName = null;
                    }

                }
            }
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(fld.UserId == User?.GetIdentifier());
            }
        }
    }
}