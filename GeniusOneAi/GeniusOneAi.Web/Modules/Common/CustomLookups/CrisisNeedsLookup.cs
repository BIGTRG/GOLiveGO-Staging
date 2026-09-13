using GeniusOneAi.AgencyAdministration;
using Serenity.Data;
using Serenity.Web;

namespace GeniusOneAi.CustomLookups
{
    /// <summary>Crisis needs keyed by NeedKey (the string stored on library and client goals).</summary>
    public sealed class CrisisNeedsLookup : RowLookupScript<CrisisNeedsRow>
    {
        public CrisisNeedsLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = CrisisNeedsRow.Fields.NeedKey.PropertyName;
            TextField = CrisisNeedsRow.Fields.Label.PropertyName;
            Permission = "?";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var f = CrisisNeedsRow.Fields;
            query.Select(f.NeedKey).Select(f.Category).Select(f.CategoryLabel).Select(f.SortOrder).Where(f.IsActive == 1).OrderBy(f.SortOrder);
        }
    }
}
