using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ClientGoalsLibrary]")]
    [DisplayName("Goals Library"), InstanceName("Goals Library")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    public sealed class ClientGoalsLibraryRow : Row<ClientGoalsLibraryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Goal Id"), Identity, IdProperty]
        public int? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        [DisplayName("Description"), Size(2000), NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        [DisplayName("Goal Type"), Size(100)]
        public string GoalType
        {
            get => fields.GoalType[this];
            set => fields.GoalType[this] = value;
        }
        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ClientGoalId"), NotMapped]
        public List<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList
        {
            get => fields.ClientInterventionsLibraryList[this];
            set => fields.ClientInterventionsLibraryList[this] = value;
        }
        public ClientGoalsLibraryRow()
            : base()
        {
        }

        public ClientGoalsLibraryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalId;
            public StringField Description;
            public StringField GoalType;
            public Int32Field TenantId;
            public RowListField<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList;
        }
    }
}
