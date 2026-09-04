
namespace GeniusOneAi.WorkerManager.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using GeniusOneAi.Modules.Common.CustomClasses;
    using MyRow = Entities.WorkerCaseAssignmentsRow;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;

    public class WorkerCaseAssignmentsRepository : BaseRepository
    {
        public WorkerCaseAssignmentsRepository(IRequestContext context)
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
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate) {  }
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();
                int val = Row.AuthorizationId ?? 0;
                Row.ProgramCodeTypeId = TimesheetExtension.GetAuthorizationProgramTypeId(val);
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