using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.MiscEntities
{
    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[vWorkerClientBillRates]")]
    [DisplayName("WorkerClientBillRates"), InstanceName("WorkerClientBillRates")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class WorkerClientBillRatesRow : Row<WorkerClientBillRatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("User Id"), IdProperty]
        public int? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Authorization Id")]
        public int? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Bill Rate Percent")]
        public int? BillRatePercent
        {
            get => fields.BillRatePercent[this];
            set => fields.BillRatePercent[this] = value;
        }

        [DisplayName("Bill Rate"), Size(10), Scale(2)]
        public decimal? BillRate
        {
            get => fields.BillRate[this];
            set => fields.BillRate[this] = value;
        }

        [DisplayName("Bill Rate Unit"), Size(25), QuickSearch, NameProperty]
        public string BillRateUnit
        {
            get => fields.BillRateUnit[this];
            set => fields.BillRateUnit[this] = value;
        }

        [DisplayName("Calculated Bill Rate"), Size(10), Scale(2)]
        public decimal? CalculatedBillRate
        {
            get => fields.CalculatedBillRate[this];
            set => fields.CalculatedBillRate[this] = value;
        }
        
        [DisplayName("Bill Rate Metric"), Size(10), Scale(2)]
        public decimal? BillRateMetric
        {
            get => fields.BillRateMetric[this];
            set => fields.BillRateMetric[this] = value;
        }
        public WorkerClientBillRatesRow()
            : base()
        {
        }

        public WorkerClientBillRatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public Int32Field AuthorizationId;
            public Int32Field BillRatePercent;
            public DecimalField BillRate;
            public DecimalField BillRateMetric;
            public StringField BillRateUnit;
            public DecimalField CalculatedBillRate;
        }
    }
}
