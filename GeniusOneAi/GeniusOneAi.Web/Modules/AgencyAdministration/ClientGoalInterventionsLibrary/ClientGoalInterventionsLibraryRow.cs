using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ClientGoalInterventionsLibrary]")]
    [DisplayName("Client Goal Interventions Library"), InstanceName("Client Goal Interventions Library")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    public sealed class ClientGoalInterventionsLibraryRow : Row<ClientGoalInterventionsLibraryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Goal Intervention Id"), Identity, NotNull, IdProperty]
        public int? ClientGoalInterventionId
        {
            get => fields.ClientGoalInterventionId[this];
            set => fields.ClientGoalInterventionId[this] = value;
        }

        [DisplayName("Client Goal"), ForeignKey(typeof(ClientGoalsLibraryRow)), LeftJoin("jClientGoal"), TextualField("ClientGoalGoalType")]
        public int? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        [DisplayName("Inter Desc"), QuickSearch, NameProperty]
        public string InterDesc
        {
            get => fields.InterDesc[this];
            set => fields.InterDesc[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ClientGoalInterventionsLibraryRow()
            : base()
        {
        }

        public ClientGoalInterventionsLibraryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalInterventionId;
            public Int32Field ClientGoalId;
            public StringField InterDesc;
            public Int32Field TenantId;
        }
    }
}
