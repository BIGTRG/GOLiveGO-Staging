using pdftron.Layout;
using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Administration.RoleRow>;
using MyRow = GeniusOneAi.Administration.RoleRow;


namespace GeniusOneAi.Administration
{
    public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }
        public RoleListHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);
           // query.Where(Fld.RoleName != "Global Administrator" );
        }
    }
}