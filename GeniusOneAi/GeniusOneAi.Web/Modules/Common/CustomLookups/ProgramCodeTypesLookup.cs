namespace GeniusOneAi.CustomLookups
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    using GeniusOneAi.Administration.Entities;

    [LookupScript("GeniusOneAi.Custom.ProgramCodeTypes", Expiration = -1, Permission = "?")]
    public sealed class ProgramCodeTypesLookup : RowLookupScript<ProgramCodeTypesRow>
    {

        public ProgramCodeTypesLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ProgramCodeTypesRow.Fields.NameField.PropertyName;
            Permission = "*";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
        }
    }
}