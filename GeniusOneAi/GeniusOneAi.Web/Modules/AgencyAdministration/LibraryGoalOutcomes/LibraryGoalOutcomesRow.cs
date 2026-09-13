using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[LibraryGoalOutcomes]")]
    [DisplayName("Library Goal Outcomes"), InstanceName("Library Goal Outcomes")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    public sealed class LibraryGoalOutcomesRow : Row<LibraryGoalOutcomesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Outcome Id"), Identity, IdProperty]
        public Int32? LibraryOutcomeId
        {
            get => fields.LibraryOutcomeId[this];
            set => fields.LibraryOutcomeId[this] = value;
        }
        [DisplayName("Library Goal"), NotNull, ForeignKey(typeof(ClientGoalsLibraryRow)), LeftJoin("jGoal")]
        public Int32? LibraryGoalId
        {
            get => fields.LibraryGoalId[this];
            set => fields.LibraryGoalId[this] = value;
        }
        [DisplayName("#")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
        }
        [DisplayName("Projected Outcome"), Size(1000), NotNull, QuickSearch, NameProperty]
        public String OutcomeText
        {
            get => fields.OutcomeText[this];
            set => fields.OutcomeText[this] = value;
        }
        [DisplayName("Effectiveness statement"), Size(2000)]
        public String EffectivenessTemplate
        {
            get => fields.EffectivenessTemplate[this];
            set => fields.EffectivenessTemplate[this] = value;
        }
        [DisplayName("Counts as"), Size(20)]
        public String StatusRule
        {
            get => fields.StatusRule[this];
            set => fields.StatusRule[this] = value;
        }
        [DisplayName("Sends to Crisis Plan")]
        public Boolean? SendsToCrisisPlan
        {
            get => fields.SendsToCrisisPlan[this];
            set => fields.SendsToCrisisPlan[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Questions"), NotMapped]
        public Int32? QuestionCount
        {
            get => fields.QuestionCount[this];
            set => fields.QuestionCount[this] = value;
        }
        [DisplayName("Questions"), MasterDetailRelation(foreignKey: "LibraryOutcomeId"), NotMapped]
        public List<OutcomeQuestionsRow> QuestionsList
        {
            get => fields.QuestionsList[this];
            set => fields.QuestionsList[this] = value;
        }

        public LibraryGoalOutcomesRow() : base() { }
        public LibraryGoalOutcomesRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LibraryOutcomeId;
            public Int32Field LibraryGoalId;
            public Int32Field SortOrder;
            public StringField OutcomeText;
            public StringField EffectivenessTemplate;
            public StringField StatusRule;
            public BooleanField SendsToCrisisPlan;
            public Int32Field TenantId;
            public Int32Field QuestionCount;
            public RowListField<OutcomeQuestionsRow> QuestionsList;
        }
    }
}
