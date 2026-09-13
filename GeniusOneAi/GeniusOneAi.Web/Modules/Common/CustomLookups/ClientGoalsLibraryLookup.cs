using GeniusOneAi.AgencyAdministration;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace GeniusOneAi.CustomLookups
{
    [LookupScript("AgencyAdministration.ClientGoalsLibrary")]
    public sealed class ClientGoalsLibraryLookup : RowLookupScript<ClientGoalsLibraryRow>
    {
        public ClientGoalsLibraryLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ClientGoalsLibraryRow.Fields.ClientGoalId.PropertyName;
            TextField = ClientGoalsLibraryRow.Fields.Code.PropertyName;
            Permission = "?";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var f = ClientGoalsLibraryRow.Fields;
            query.Select(f.Phase).Select(f.Description).Where(f.Code.IsNotNull() & f.IsActive == 1);
        }
    }
}
