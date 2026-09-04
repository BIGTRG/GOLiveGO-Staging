using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.WorkerManager
{
    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[ContractorRates]")]
    [DisplayName("Contractor Rates"), InstanceName("Contractor Rates")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]

    public sealed class ContractorRatesRow : Row<ContractorRatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("User Contractor Id"), Identity, IdProperty]
        public int? UserContractorId
        {
            get => fields.UserContractorId[this];
            set => fields.UserContractorId[this] = value;
        }

        [DisplayName("User Id"), NotNull]
        public int? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Bill Category"), Size(50), QuickSearch, NameProperty]
        public string BillCategory
        {
            get => fields.BillCategory[this];
            set => fields.BillCategory[this] = value;
        }

        [DisplayName("Bill Code"), Size(50)]
        public string BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }

        [DisplayName("Bill Rate"), Size(5), Scale(2)]
        public decimal? BillRate
        {
            get => fields.BillRate[this];
            set => fields.BillRate[this] = value;
        }

        [DisplayName("Bill Rate Metric"), Size(25)]
        public string BillRateMetric
        {
            get => fields.BillRateMetric[this];
            set => fields.BillRateMetric[this] = value;
        }

        public ContractorRatesRow()
            : base()
        {
        }

        public ContractorRatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserContractorId;
            public Int32Field UserId;
            public StringField BillCategory;
            public StringField BillCode;
            public DecimalField BillRate;
            public StringField BillRateMetric;
        }
    }
}
