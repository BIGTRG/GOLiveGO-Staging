namespace GeniusOneAi.CustomLookups
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    using GeniusOneAi.AgencyAdministration.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using System;
    [LookupScript("GeniusOneAi.AgencyAdministration.ProgramNoteType", Expiration = -1,Permission = "?" )]
    public sealed class ProgramNoteTypeLookup : RowLookupScript<ProgramNoteTypeRow>
    {
        public IUserAccessor UserAccessor { get; }
        public ProgramNoteTypeLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ProgramNoteTypeRow.Fields.NameField.PropertyName;
            Permission = "*";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
        }
    }
}