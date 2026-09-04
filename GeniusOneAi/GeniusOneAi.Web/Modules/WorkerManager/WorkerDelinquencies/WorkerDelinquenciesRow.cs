
namespace GeniusOneAi.WorkerManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[WorkerDelinquencies]")]
    [DisplayName("Worker Delinquencies"), InstanceName("Worker Delinquencies")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    public sealed class WorkerDelinquenciesRow : Row<WorkerDelinquenciesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Delinquency Id"), Identity, IdProperty]
        public Int32? UserDelinquencyId
        {
            get => fields.UserDelinquencyId[this];
            set => fields.UserDelinquencyId[this] = value;
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Delinquency Date"), NotNull]
        public DateTime? DelinquencyDate
        {
            get => fields.DelinquencyDate[this];
            set => fields.DelinquencyDate[this] = value;
        }

        [DisplayName("Delinquency Notes"), Size(2000), NotNull, QuickSearch, NameProperty]
        public String DelinquencyNotes
        {
            get => fields.DelinquencyNotes[this];
            set => fields.DelinquencyNotes[this] = value;
        }

        [DisplayName("Resolution Date")]
        public DateTime? ResolutionDate
        {
            get => fields.ResolutionDate[this];
            set => fields.ResolutionDate[this] = value;
        }

        [DisplayName("Resolution Notes"), Size(2000)]
        public String ResolutionNotes
        {
            get => fields.ResolutionNotes[this];
            set => fields.ResolutionNotes[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public WorkerDelinquenciesRow()
        {
        }

        public WorkerDelinquenciesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserDelinquencyId;
            public Int32Field UserId;
            public DateTimeField DelinquencyDate;
            public StringField DelinquencyNotes;
            public DateTimeField ResolutionDate;
            public StringField ResolutionNotes;
            public Int32Field TenantId;
        }
    }
}
