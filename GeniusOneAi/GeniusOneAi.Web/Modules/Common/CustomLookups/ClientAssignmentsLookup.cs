namespace GeniusOneAi.Web.Modules.Common.CustomLookups
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    using GeniusOneAi.MiscEntities.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using System;
    [LookupScript("GeniusOneAi.ClientAssignmentsFiltered", Expiration = -1, Permission = "?")]
    public sealed class ClientAssignmentsLookup : RowLookupScript<ClientAssignmentsRow>
    {
        public IUserAccessor UserAccessor { get; }
        public ClientAssignmentsLookup(ISqlConnections sqlConnections, IUserAccessor userAccessor) : base(sqlConnections)
        {
            IdField = ClientAssignmentsRow.Fields.IdField.PropertyName;
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            Permission = "*";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userId = UserAccessor.User.GetIdentifier();
            query.Where(ClientAssignmentsRow.Fields.UserId == userId);
        }
    }
}