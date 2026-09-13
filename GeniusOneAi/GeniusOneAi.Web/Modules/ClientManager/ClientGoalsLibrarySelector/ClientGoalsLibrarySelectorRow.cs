using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientGoalsLibrary]")]
    [DisplayName("Client Goals Library Selector"), InstanceName("Client Goals Library Selector")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
    public sealed class ClientGoalsLibrarySelectorRow : Row<ClientGoalsLibrarySelectorRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Goal Id"), Identity, IdProperty]
        public int? ClientGoalId { get => fields.ClientGoalId[this]; set => fields.ClientGoalId[this] = value; }
        [DisplayName("Goal Type"), Size(100), QuickSearch]
        public string GoalType { get => fields.GoalType[this]; set => fields.GoalType[this] = value; }
        [DisplayName("Description"), Size(2000), QuickSearch, NameProperty]
        public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }
        [DisplayName("Tenant Id")]
        public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }
        [DisplayName("Code"), Size(20), QuickSearch]
        public string Code { get => fields.Code[this]; set => fields.Code[this] = value; }
        [DisplayName("Phase"), Size(10)]
        public string Phase { get => fields.Phase[this]; set => fields.Phase[this] = value; }
        [DisplayName("Need"), Size(40), ForeignKey("[dbo].[CrisisNeeds]", "NeedKey"), LeftJoin("jNeed"), TextualField("NeedLabel")]
        public string NeedKey { get => fields.NeedKey[this]; set => fields.NeedKey[this] = value; }
        [DisplayName("Need"), Expression("jNeed.[Label]")]
        public string NeedLabel { get => fields.NeedLabel[this]; set => fields.NeedLabel[this] = value; }
        [DisplayName("Domain"), Size(100), QuickSearch]
        public string Domain { get => fields.Domain[this]; set => fields.Domain[this] = value; }
        [DisplayName("Presenting Problem / Trigger"), Size(500), QuickSearch]
        public string TriggerKey { get => fields.TriggerKey[this]; set => fields.TriggerKey[this] = value; }
        [DisplayName("Timeframe"), Size(100)]
        public string Timeframe { get => fields.Timeframe[this]; set => fields.Timeframe[this] = value; }
        [DisplayName("Protocol")]
        public bool? IsProtocol { get => fields.IsProtocol[this]; set => fields.IsProtocol[this] = value; }
        [DisplayName("Active")]
        public bool? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

        public ClientGoalsLibrarySelectorRow() : base() { }
        public ClientGoalsLibrarySelectorRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalId;
            public StringField GoalType;
            public StringField Description;
            public Int32Field TenantId;
            public StringField Code;
            public StringField Phase;
            public StringField NeedKey;
            public StringField NeedLabel;
            public StringField Domain;
            public StringField TriggerKey;
            public StringField Timeframe;
            public BooleanField IsProtocol;
            public BooleanField IsActive;
        }
    }
}
