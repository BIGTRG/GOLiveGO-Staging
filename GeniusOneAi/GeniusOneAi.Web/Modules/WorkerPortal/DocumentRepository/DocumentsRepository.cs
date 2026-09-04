
namespace GeniusOneAi.WorkerPortal.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DocumentsRow;

    public class DocumentsRepository: BaseRepository
    {
        public DocumentsRepository(IRequestContext context)
            : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

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
                foreach (var row in Response.Entities)
                {
                    row.Filename = row.Filename.StartsWith("temporary") ? row.Filename.Substring(10) : row.Filename;
                }
            }
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(fld.IsFinalized == 1);
            }
        }
    }
}