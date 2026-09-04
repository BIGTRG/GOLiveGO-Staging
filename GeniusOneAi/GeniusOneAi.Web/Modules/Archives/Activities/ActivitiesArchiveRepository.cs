
namespace GeniusOneAi.Archives.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ActivitiesArchiveRow;
    using GeniusOneAi.Modules.Common.CustomClasses;

    public class ActivitiesArchiveRepository : BaseRepository
    {
        public ActivitiesArchiveRepository(IRequestContext context)
            : base(context)
        {
        }
        private static MyRow.RowFields fld
        {
            get { return MyRow.Fields; }
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
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
            }
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where((fld.Status == "Processed" || fld.Status == "Approved") && fld.Activity != "Patient");
            }
        }
    }
}