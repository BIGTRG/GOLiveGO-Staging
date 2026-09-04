
namespace GeniusOneAi.AgencyAdministration.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ClientSiteTypes]")]
    [DisplayName("Client Site Types"), InstanceName("Client Site Types")]
    [ReadPermission(PermissionKeys.AgencyTypes)]
    [ModifyPermission(PermissionKeys.AgencyTypes)]
    public sealed class ClientSiteTypesRow : Row<ClientSiteTypesRow.RowFields>, IIdRow
    {
       [DisplayName("Client Site Type Id"), Identity, IdProperty]
        public Int32? ClientSiteTypeId
        {
            get => fields.ClientSiteTypeId[this];
            set => fields.ClientSiteTypeId[this] = value;
        }

        [DisplayName("Site Type Id")]
        public Int32? SiteTypeId
        {
            get => fields.SiteTypeId[this];
            set => fields.SiteTypeId[this] = value;
        }

        [DisplayName("Client Id")]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ClientSiteTypesRow()
        {
        }

        public ClientSiteTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientSiteTypeId;
            public Int32Field SiteTypeId;
            public Int32Field ClientId;
            public Int32Field TenantId;
        }
    }
}
