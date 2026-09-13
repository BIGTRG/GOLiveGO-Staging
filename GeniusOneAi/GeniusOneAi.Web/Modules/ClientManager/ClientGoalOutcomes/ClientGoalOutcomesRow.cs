using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientGoalOutcomes]")]
    [DisplayName("Client Goal Outcomes"), InstanceName("Client Goal Outcomes")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
    public sealed class ClientGoalOutcomesRow : Row<ClientGoalOutcomesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Outcome Id"), Identity, IdProperty]
        public Int32? OutcomeId
        {
            get => fields.OutcomeId[this];
            set => fields.OutcomeId[this] = value;
        }
        [DisplayName("Client Goal"), NotNull]
        public Int32? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }
        [DisplayName("Library Outcome")]
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
        [DisplayName("Met")]
        public Boolean? IsMet
        {
            get => fields.IsMet[this];
            set => fields.IsMet[this] = value;
        }
        [DisplayName("Checked in note")]
        public Int32? CheckedInNoteId
        {
            get => fields.CheckedInNoteId[this];
            set => fields.CheckedInNoteId[this] = value;
        }
        [DisplayName("Checked at")]
        public DateTime? CheckedAt
        {
            get => fields.CheckedAt[this];
            set => fields.CheckedAt[this] = value;
        }
        [DisplayName("Outcome summary"), Size(2000)]
        public String Summary
        {
            get => fields.Summary[this];
            set => fields.Summary[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ClientGoalOutcomesRow() : base() { }
        public ClientGoalOutcomesRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OutcomeId;
            public Int32Field ClientGoalId;
            public Int32Field LibraryOutcomeId;
            public Int32Field SortOrder;
            public StringField OutcomeText;
            public StringField EffectivenessTemplate;
            public StringField StatusRule;
            public BooleanField SendsToCrisisPlan;
            public BooleanField IsMet;
            public Int32Field CheckedInNoteId;
            public DateTimeField CheckedAt;
            public StringField Summary;
            public Int32Field TenantId;
        }
    }
}
