using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CrisisAssessments
{
    [ConnectionKey("Default"), Module("CrisisAssessments"), TableName("[dbo].[CrisisAssessmentNeeds]")]
    [DisplayName("Crisis Assessment Needs"), InstanceName("Crisis Assessment Needs")]
    [LeftJoin("jNeed", "[dbo].[CrisisNeeds]", "jNeed.[NeedKey] = T0.[NeedKey]")]
    [ReadPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    [ModifyPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    public sealed class CrisisAssessmentNeedsRow : Row<CrisisAssessmentNeedsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Need Rec Id"), Identity, IdProperty]
        public Int32? NeedRecId
        {
            get => fields.NeedRecId[this];
            set => fields.NeedRecId[this] = value;
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
        [DisplayName("Client Id"), NotNull]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Need Key"), Size(40), NotNull, NameProperty, QuickSearch]
        public String NeedKey
        {
            get => fields.NeedKey[this];
            set => fields.NeedKey[this] = value;
        }
        [DisplayName("Priority"), Size(10)]
        public String Priority
        {
            get => fields.Priority[this];
            set => fields.Priority[this] = value;
        }
        [DisplayName("Source"), Size(1000)]
        public String Source
        {
            get => fields.Source[this];
            set => fields.Source[this] = value;
        }
        [DisplayName("Accepted")]
        public Boolean? Accepted
        {
            get => fields.Accepted[this];
            set => fields.Accepted[this] = value;
        }
        [DisplayName("Status"), Size(30)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }
        [DisplayName("Sort Order")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
        }
        [DisplayName("Goals Created")]
        public Int32? GoalsCreated
        {
            get => fields.GoalsCreated[this];
            set => fields.GoalsCreated[this] = value;
        }

        [DisplayName("Need"), Expression("jNeed.Label")]
        public String NeedLabel { get => fields.NeedLabel[this]; set => fields.NeedLabel[this] = value; }
        [DisplayName("Category"), Expression("jNeed.CategoryLabel")]
        public String CategoryLabel { get => fields.CategoryLabel[this]; set => fields.CategoryLabel[this] = value; }

        public CrisisAssessmentNeedsRow() : base() { }
        public CrisisAssessmentNeedsRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NeedRecId;
            public Int32Field AssessmentId;
            public Int32Field EpisodeId;
            public Int32Field ClientId;
            public Int32Field TenantId;
            public StringField NeedKey;
            public StringField Priority;
            public StringField Source;
            public BooleanField Accepted;
            public StringField Status;
            public Int32Field SortOrder;
            public Int32Field GoalsCreated;
            public StringField NeedLabel;
            public StringField CategoryLabel;
        }
    }
}
