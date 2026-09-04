
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.Reports
{
    [ConnectionKey("Default"), Module("Reports"), TableName("[dbo].[Reports]")]
    [DisplayName("Reports"), InstanceName("Reports")]
    [ReadPermission(PermissionKeys.Standard)]
    [ModifyPermission(PermissionKeys.Standard)]
    public sealed class ReportsRow : Row<ReportsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Report Id"), Identity, IdProperty]
        public int? ReportId
        {
            get => fields.ReportId[this];
            set => fields.ReportId[this] = value;
        }

        [DisplayName("Report Name"), Size(50), NotNull, QuickSearch, NameProperty]
        public string ReportName
        {
            get => fields.ReportName[this];
            set => fields.ReportName[this] = value;
        }

        [DisplayName("Report Description"), Size(500), NotNull]
        public string ReportDescription
        {
            get => fields.ReportDescription[this];
            set => fields.ReportDescription[this] = value;
        }

        [DisplayName("Report Type"), Size(50)]
        public string ReportType
        {
            get => fields.ReportType[this];
            set => fields.ReportType[this] = value;
        }

        [DisplayName("Report File Name"), Size(100)]
        public string ReportFileName
        {
            get => fields.ReportFileName[this];
            set => fields.ReportFileName[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ReportsRow()
            : base()
        {
        }

        public ReportsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReportId;
            public StringField ReportName;
            public StringField ReportDescription;
            public StringField ReportType;
            public StringField ReportFileName;
            public Int32Field TenantId;
        }
    }
}
