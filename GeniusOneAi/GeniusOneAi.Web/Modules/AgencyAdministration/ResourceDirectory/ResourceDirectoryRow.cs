using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ResourceDirectory]")]
    [DisplayName("Resource Directory"), InstanceName("Resource Directory")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    public sealed class ResourceDirectoryRow : Row<ResourceDirectoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Resource Id"), Identity, IdProperty]
        public Int32? ResourceId
        {
            get => fields.ResourceId[this];
            set => fields.ResourceId[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Type"), Size(30), NotNull]
        public String ResourceType
        {
            get => fields.ResourceType[this];
            set => fields.ResourceType[this] = value;
        }
        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }
        [DisplayName("Phone"), Size(40)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }
        [DisplayName("Website"), Size(200)]
        public String Website
        {
            get => fields.Website[this];
            set => fields.Website[this] = value;
        }
        [DisplayName("Address"), Size(300)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }
        [DisplayName("City"), Size(100)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }
        [DisplayName("County"), Size(100), QuickSearch]
        public String County
        {
            get => fields.County[this];
            set => fields.County[this] = value;
        }
        [DisplayName("Hours"), Size(100)]
        public String Hours
        {
            get => fields.Hours[this];
            set => fields.Hours[this] = value;
        }
        [DisplayName("Notes"), Size(1000)]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }
        [DisplayName("Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }
        [DisplayName("Owner")]
        public Int32? Owner
        {
            get => fields.Owner[this];
            set => fields.Owner[this] = value;
        }
        [DisplayName("Created")]
        public DateTime? OwnerCreateDate
        {
            get => fields.OwnerCreateDate[this];
            set => fields.OwnerCreateDate[this] = value;
        }

        public ResourceDirectoryRow() : base() { }
        public ResourceDirectoryRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ResourceId;
            public Int32Field TenantId;
            public StringField ResourceType;
            public StringField Name;
            public StringField Phone;
            public StringField Website;
            public StringField Address;
            public StringField City;
            public StringField County;
            public StringField Hours;
            public StringField Notes;
            public BooleanField IsActive;
            public Int32Field Owner;
            public DateTimeField OwnerCreateDate;
        }
    }
}
