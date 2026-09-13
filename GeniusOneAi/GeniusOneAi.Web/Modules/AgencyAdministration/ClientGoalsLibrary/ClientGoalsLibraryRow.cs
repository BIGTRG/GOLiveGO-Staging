using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
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
        public int? ClientGoalId { get => fields.ClientGoalId[this]; set => fields.ClientGoalId[this] = value; }

        [DisplayName("Description"), Size(2000), NameProperty, QuickSearch]
        public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

        [DisplayName("Goal Type"), Size(100)]
        public string GoalType { get => fields.GoalType[this]; set => fields.GoalType[this] = value; }

        [DisplayName("Tenant Id")]
        public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

        // ---- encounter engine (Phase 2)
        [DisplayName("Code"), Size(20), QuickSearch]
        public string Code { get => fields.Code[this]; set => fields.Code[this] = value; }

        [DisplayName("Phase"), Size(10)]
        public string Phase { get => fields.Phase[this]; set => fields.Phase[this] = value; }

        [DisplayName("Need"), Size(40), ForeignKey("[dbo].[CrisisNeeds]", "NeedKey"), LeftJoin("jNeed"), TextualField("NeedLabel")]
        public string NeedKey { get => fields.NeedKey[this]; set => fields.NeedKey[this] = value; }

        [DisplayName("Need"), Expression("jNeed.[Label]")]
        public string NeedLabel { get => fields.NeedLabel[this]; set => fields.NeedLabel[this] = value; }

        [DisplayName("Category"), Expression("jNeed.[CategoryLabel]")]
        public string NeedCategoryLabel { get => fields.NeedCategoryLabel[this]; set => fields.NeedCategoryLabel[this] = value; }

        [DisplayName("Domain"), Size(100), QuickSearch]
        public string Domain { get => fields.Domain[this]; set => fields.Domain[this] = value; }

        [DisplayName("Presenting Problem / Trigger"), Size(500), QuickSearch]
        public string TriggerKey { get => fields.TriggerKey[this]; set => fields.TriggerKey[this] = value; }

        [DisplayName("Effectiveness Measure"), Size(500)]
        public string EffectivenessMeasure { get => fields.EffectivenessMeasure[this]; set => fields.EffectivenessMeasure[this] = value; }

        [DisplayName("Timeframe"), Size(100)]
        public string Timeframe { get => fields.Timeframe[this]; set => fields.Timeframe[this] = value; }

        [DisplayName("Lead"), Size(50)]
        public string LeadRole { get => fields.LeadRole[this]; set => fields.LeadRole[this] = value; }

        [DisplayName("Resource Type"), Size(30)]
        public string ResourceType { get => fields.ResourceType[this]; set => fields.ResourceType[this] = value; }

        [DisplayName("Next-phase goal"), ForeignKey("[dbo].[ClientGoalsLibrary]", "ClientGoalId"), LeftJoin("jNext"), TextualField("LinkedNextPhaseGoalCode")]
        public int? LinkedNextPhaseGoalId { get => fields.LinkedNextPhaseGoalId[this]; set => fields.LinkedNextPhaseGoalId[this] = value; }

        [DisplayName("Next-phase goal"), Expression("jNext.[Code]")]
        public string LinkedNextPhaseGoalCode { get => fields.LinkedNextPhaseGoalCode[this]; set => fields.LinkedNextPhaseGoalCode[this] = value; }

        [DisplayName("Protocol"), NotNull]
        public bool? IsProtocol { get => fields.IsProtocol[this]; set => fields.IsProtocol[this] = value; }

        [DisplayName("Origin"), Size(20), NotNull]
        public string Origin { get => fields.Origin[this]; set => fields.Origin[this] = value; }

        [DisplayName("Active"), NotNull]
        public bool? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ClientGoalId"), NotMapped]
        public List<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList
        {
            get => fields.ClientInterventionsLibraryList[this];
            set => fields.ClientInterventionsLibraryList[this] = value;
        }

        [DisplayName("Outcomes"), MasterDetailRelation(foreignKey: "LibraryGoalId"), NotMapped]
        public List<LibraryGoalOutcomesRow> OutcomesList
        {
            get => fields.OutcomesList[this];
            set => fields.OutcomesList[this] = value;
        }

        public ClientGoalsLibraryRow() : base() { }
        public ClientGoalsLibraryRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalId;
            public StringField Description;
            public StringField GoalType;
            public Int32Field TenantId;
            public StringField Code;
            public StringField Phase;
            public StringField NeedKey;
            public StringField NeedLabel;
            public StringField NeedCategoryLabel;
            public StringField Domain;
            public StringField TriggerKey;
            public StringField EffectivenessMeasure;
            public StringField Timeframe;
            public StringField LeadRole;
            public StringField ResourceType;
            public Int32Field LinkedNextPhaseGoalId;
            public StringField LinkedNextPhaseGoalCode;
            public BooleanField IsProtocol;
            public StringField Origin;
            public BooleanField IsActive;
            public RowListField<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList;
            public RowListField<LibraryGoalOutcomesRow> OutcomesList;
        }
    }
}
