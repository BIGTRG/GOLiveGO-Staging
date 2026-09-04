using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.Administration.RoleRow>;
using MyRow = GeniusOneAi.Administration.RoleRow;


namespace GeniusOneAi.Administration
{
    public interface IRoleRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class RoleRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRoleRetrieveHandler
    {
        public RoleRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            //query.Where(Fld.RoleName != "Global Administrator");
        }
    }
}