using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace GeniusOneAi.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("Roles")]
    [DisplayName("Roles"), InstanceName("Role")]
    [ReadPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.UserManagement)]
    [ModifyPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.UserManagement)]

    [LookupScript]
    public sealed class RoleRow : Row<RoleRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole"), IdProperty]
        public Int32? RoleId
        {
            get => fields.RoleId[this];
            set => fields.RoleId[this] = value;
        }

        [DisplayName("Role Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String RoleName
        {
            get => fields.RoleName[this];
            set => fields.RoleName[this] = value;
        }

        [DisplayName("Role Key"), Size(100), QuickSearch]
        public String RoleKey
        {
            get => fields.RoleKey[this];
            set => fields.RoleKey[this] = value;
        }

        public RoleRow()
        {
        }

        public RoleRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoleId;
            public StringField RoleName;
            public StringField RoleKey;
        }
    }
}