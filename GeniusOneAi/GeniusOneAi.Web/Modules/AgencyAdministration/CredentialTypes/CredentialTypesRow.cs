
namespace GeniusOneAi.AgencyAdministration.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[CredentialTypes]")]
    [DisplayName("Credential Types"), InstanceName("Credential Types")]
    [LookupScript("GeniusOneAi.CredentialTypes")]
    [ReadPermission(PermissionKeys.AgencyTypes)]
    [ModifyPermission(PermissionKeys.AgencyTypes)]
    public sealed class CredentialTypesRow : Row<CredentialTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Credential Type Id"), Identity, IdProperty]
        public Int32? CredentialTypeId
        {
            get => fields.CredentialTypeId[this];
            set => fields.CredentialTypeId[this] = value;
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(100), NameProperty]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public CredentialTypesRow()
        {
        }

        public CredentialTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CredentialTypeId;
            public StringField Name;
            public StringField Description;
            public Int32Field TenantId;
        }
    }
}
