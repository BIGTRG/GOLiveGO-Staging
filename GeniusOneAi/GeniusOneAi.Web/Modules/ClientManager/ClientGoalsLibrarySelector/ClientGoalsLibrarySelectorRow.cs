using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.ClientManager
{
    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientGoalsLibrary]")]
    [DisplayName("Client Goals Library Selector"), InstanceName("Client Goals Library Selector")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
    public sealed class ClientGoalsLibrarySelectorRow : Row<ClientGoalsLibrarySelectorRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Goal Id"), Identity, IdProperty]
        public int? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        [DisplayName("Goal Type"), Size(100), QuickSearch, NameProperty]
        public string GoalType
        {
            get => fields.GoalType[this];
            set => fields.GoalType[this] = value;
        }

        [DisplayName("Description"), Size(2000)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ClientGoalsLibrarySelectorRow()
            : base()
        {
        }

        public ClientGoalsLibrarySelectorRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalId;
            public StringField GoalType;
            public StringField Description;
            public Int32Field TenantId;
        }
    }
}
