using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[OutcomeQuestions]")]
    [DisplayName("Outcome Questions"), InstanceName("Outcome Questions")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    public sealed class OutcomeQuestionsRow : Row<OutcomeQuestionsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Question Id"), Identity, IdProperty]
        public Int32? QuestionId
        {
            get => fields.QuestionId[this];
            set => fields.QuestionId[this] = value;
        }
        [DisplayName("Outcome"), NotNull, ForeignKey(typeof(LibraryGoalOutcomesRow)), LeftJoin("jOutcome")]
        public Int32? LibraryOutcomeId
        {
            get => fields.LibraryOutcomeId[this];
            set => fields.LibraryOutcomeId[this] = value;
        }
        [DisplayName("#")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
        }
        [DisplayName("Question"), Size(500), NotNull, QuickSearch, NameProperty]
        public String Prompt
        {
            get => fields.Prompt[this];
            set => fields.Prompt[this] = value;
        }
        [DisplayName("Answer Type"), Size(20)]
        public String AnswerType
        {
            get => fields.AnswerType[this];
            set => fields.AnswerType[this] = value;
        }
        [DisplayName("Options (| separated)"), Size(1000)]
        public String Options
        {
            get => fields.Options[this];
            set => fields.Options[this] = value;
        }
        [DisplayName("Sentence written into the note"), Size(1000)]
        public String SentenceTemplate
        {
            get => fields.SentenceTemplate[this];
            set => fields.SentenceTemplate[this] = value;
        }
        [DisplayName("Resource Type"), Size(30)]
        public String ResourceType
        {
            get => fields.ResourceType[this];
            set => fields.ResourceType[this] = value;
        }
        [DisplayName("Sends to Crisis Plan")]
        public Boolean? SendsToCrisisPlan
        {
            get => fields.SendsToCrisisPlan[this];
            set => fields.SendsToCrisisPlan[this] = value;
        }
        [DisplayName("Required")]
        public Boolean? IsRequired
        {
            get => fields.IsRequired[this];
            set => fields.IsRequired[this] = value;
        }
        [DisplayName("Show when"), Size(100)]
        public String ShowWhen
        {
            get => fields.ShowWhen[this];
            set => fields.ShowWhen[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public OutcomeQuestionsRow() : base() { }
        public OutcomeQuestionsRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field QuestionId;
            public Int32Field LibraryOutcomeId;
            public Int32Field SortOrder;
            public StringField Prompt;
            public StringField AnswerType;
            public StringField Options;
            public StringField SentenceTemplate;
            public StringField ResourceType;
            public BooleanField SendsToCrisisPlan;
            public BooleanField IsRequired;
            public StringField ShowWhen;
            public Int32Field TenantId;
        }
    }
}
