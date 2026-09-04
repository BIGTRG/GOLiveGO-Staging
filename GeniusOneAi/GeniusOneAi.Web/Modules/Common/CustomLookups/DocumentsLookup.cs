namespace GeniusOneAi.Web.Modules.Common.CustomLookups
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serenity.Data;
    using Serenity.Abstractions;
    using GeniusOneAi.DocumentManager.Entities;
    using System;

    [LookupScript("GeniusOneAi.DocumentsFiltered", Expiration = -1, Permission = "?") ]
    public sealed class DocumentsLookup : RowLookupScript<DocumentsRow>
    {
        public IUserAccessor UserAccessor { get; }
        public DocumentsLookup(ISqlConnections sqlConnections, IUserAccessor userAccessor) : base(sqlConnections)
        {
            IdField = DocumentsRow.Fields.IdField.PropertyName;
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            Permission = "*";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            //var userId = UserAccessor.User.GetIdentifier();
            //query.Where(ClientAssignmentsRow.Fields.UserId == userId);
        }
    }
}