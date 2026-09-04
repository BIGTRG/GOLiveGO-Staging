
namespace GeniusOneAi.WorkerManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[WorkerSites]")]
    [DisplayName("Worker Sites"), InstanceName("Worker Sites")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    public sealed class WorkerSitesRow : Row<WorkerSitesRow.RowFields>, IIdRow
    {
       [DisplayName("User Site Id"), Identity, IdProperty]
        public Int32? UserSiteId
        {
            get => fields.UserSiteId[this];
            set => fields.UserSiteId[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Site Type Id")]
        public Int32? SiteTypeId
        {
            get => fields.SiteTypeId[this];
            set => fields.SiteTypeId[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public WorkerSitesRow()
        {
        }

        public WorkerSitesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserSiteId;
            public Int32Field UserId;
            public Int32Field SiteTypeId;
            public Int32Field TenantId;
        }
    }
}
