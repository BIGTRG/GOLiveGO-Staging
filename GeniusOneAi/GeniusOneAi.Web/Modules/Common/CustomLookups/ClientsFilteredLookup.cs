namespace GeniusOneAi.Web.Modules.Common.CustomLookups
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    using GeniusOneAi.ClientManager.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using System;
    using GeniusOneAi.WorkerManager.Entities;

    [LookupScript("GeniusOneAi.ClientsFiltered", Expiration = -1, Permission = "?" )]
    public sealed class ClientsFilteredLookup : RowLookupScript<ClientsRow>
    {
        public IUserAccessor UserAccessor { get; }
        public ClientsFilteredLookup(ISqlConnections sqlConnections, IUserAccessor userAccessor) : base(sqlConnections)
        {
            IdField = ClientsRow.Fields.IdField.PropertyName;
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            Permission = "*";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userId = UserAccessor.User.GetIdentifier();
            //query.Where(ClientsRow.Fields.UserId == userId);
        }

    }
}