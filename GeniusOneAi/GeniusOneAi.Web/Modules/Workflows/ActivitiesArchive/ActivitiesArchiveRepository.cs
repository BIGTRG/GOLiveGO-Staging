
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
    using MyRow = Entities.ActivitiesArchiveRow;

    public class ActivitiesArchiveRepository : BaseRepository

    {
        private ISqlConnections sqlConnections;
        public ActivitiesArchiveRepository(IRequestContext context)
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
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(fld.Status == "Processed");
            }
            protected override void OnReturn()
            {
                base.OnReturn();
                foreach (var row in Response.Entities)
                {
                    row.ClientFullName = row.ClientFullName ?? "---";
                }
            }
        }

        //public BaseResponse SendRecsToBilling(BaseRecsRequest recs)
        //{
            
        //    var resp = new BaseResponse();
        //    using (var connection = sqlConnections.NewFor<ActivitiesRow>())
        //    {
        //        var updateQuery = $"UPDATE [Activities] SET status = 'Billing Submitted' where ActivityId in ({recs.Recs});";
        //        var responseRecs = connection.Execute(updateQuery);
        //    }

        //    resp.Response = "Success";
        //    return resp;
        //}
    }
}