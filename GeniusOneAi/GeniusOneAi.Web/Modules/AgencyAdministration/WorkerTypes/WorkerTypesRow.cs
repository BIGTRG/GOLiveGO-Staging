
namespace GeniusOneAi.AgencyAdministration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;


    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[WorkerTypes]")]
    [DisplayName("Worker Types"), InstanceName("Worker Types")]
    [LookupScript("GeniusOneAi.WorkerTypes")]
    [ReadPermission(PermissionKeys.AgencyTypes)]
    [ModifyPermission(PermissionKeys.AgencyTypes)]
    public sealed class WorkerTypesRow : Row<WorkerTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Type Id"), Identity, IdProperty]
        public Int32? UserTypeId
        {
            get => fields.UserTypeId[this];
            set => fields.UserTypeId[this] = value;
        }

        [DisplayName("Name"), Size(50), QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(100)]
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

        public WorkerTypesRow()
        {
        }

        public WorkerTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserTypeId;
            public StringField Name;
            public StringField Description;
            public Int32Field TenantId;
        }
    }
}
