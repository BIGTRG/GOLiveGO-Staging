using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CrisisAssessments
{
    [ConnectionKey("Default"), Module("CrisisAssessments"), TableName("[dbo].[CrisisAssessmentGoalDecisions]")]
    [DisplayName("Crisis Assessment Goal Decisions"), InstanceName("Crisis Assessment Goal Decisions")]
    [ReadPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    [ModifyPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    public sealed class CrisisAssessmentGoalDecisionsRow : Row<CrisisAssessmentGoalDecisionsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Decision Id"), Identity, IdProperty]
        public Int32? DecisionId
        {
            get => fields.DecisionId[this];
            set => fields.DecisionId[this] = value;
        }
        [DisplayName("Assessment Id"), NotNull, ForeignKey(typeof(CrisisAssessmentsRow)), LeftJoin("jAssess")]
        public Int32? AssessmentId
        {
            get => fields.AssessmentId[this];
            set => fields.AssessmentId[this] = value;
        }
        [DisplayName("Episode Id")]
        public Int32? EpisodeId
        {
            get => fields.EpisodeId[this];
            set => fields.EpisodeId[this] = value;
        }
        [DisplayName("Library Goal Id"), NotNull]
        public Int32? LibraryGoalId
        {
            get => fields.LibraryGoalId[this];
            set => fields.LibraryGoalId[this] = value;
        }
        [DisplayName("Code"), Size(20), NameProperty, QuickSearch]
        public String Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }
        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        [DisplayName("Source"), Size(1000)]
        public String Source
        {
            get => fields.Source[this];
            set => fields.Source[this] = value;
        }
        [DisplayName("Kept")]
        public Boolean? Kept
        {
            get => fields.Kept[this];
            set => fields.Kept[this] = value;
        }
        [DisplayName("Reason"), Size(500)]
        public String Reason
        {
            get => fields.Reason[this];
            set => fields.Reason[this] = value;
        }
        [DisplayName("Client Goal Id")]
        public Int32? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        public CrisisAssessmentGoalDecisionsRow() : base() { }
        public CrisisAssessmentGoalDecisionsRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DecisionId;
            public Int32Field AssessmentId;
            public Int32Field EpisodeId;
            public Int32Field LibraryGoalId;
            public StringField Code;
            public StringField Description;
            public StringField Source;
            public BooleanField Kept;
            public StringField Reason;
            public Int32Field ClientGoalId;
        }
    }
}
