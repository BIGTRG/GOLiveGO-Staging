
namespace GeniusOneAi.WorkerPortal.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[ClientAuthorizations]")]
    [DisplayName("Client Authorizations"), InstanceName("Client Authorizations")]
    [ReadPermission(PermissionKeys.MyPatients)]
    [ModifyPermission(PermissionKeys.MyPatients)]
    public sealed class ClientAuthorizationsRow : Row<ClientAuthorizationsRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Authorization Id"), Identity, IdProperty]
        public Int32? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Client Id")][LookupInclude]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Start Date")]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }

        [DisplayName("Unit Contact Granted")]
        public Int32? UnitContactGranted
        {
            get => fields.UnitContactGranted[this];
            set => fields.UnitContactGranted[this] = value;
        }

        [DisplayName("Authorization Type"), Size(10), QuickSearch]
        public String AuthorizationType
        {
            get => fields.AuthorizationType[this];
            set => fields.AuthorizationType[this] = value;
        }

        [DisplayName("Status"), Size(25)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Approval Status"), Size(25)]
        public String ApprovalStatus
        {
            get => fields.ApprovalStatus[this];
            set => fields.ApprovalStatus[this] = value;
        }

        [DisplayName("Approval Date")]
        public DateTime? ApprovalDate
        {
            get => fields.ApprovalDate[this];
            set => fields.ApprovalDate[this] = value;
        }

        [DisplayName("Unit Calculation Metric"), Size(5), Scale(2)]
        public Decimal? UnitCalculationMetric
        {
            get => fields.UnitCalculationMetric[this];
            set => fields.UnitCalculationMetric[this] = value;
        }
        [DisplayName("Status")][Expression("'[ '+CONVERT(VARCHAR(30),StartDate , 101)+' - '+CONVERT(VARCHAR(30),EndDate , 101)+' ]'"), NameProperty]
        public String AuthDateRange
        {
            get => fields.AuthDateRange[this];
            set => fields.AuthDateRange[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ClientAuthorizationsRow()
        {
        }

        public ClientAuthorizationsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AuthorizationId;
            public Int32Field ClientId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field UnitContactGranted;
            public StringField AuthorizationType;
            public StringField Status;
            public StringField ApprovalStatus;
            public DateTimeField ApprovalDate;
            public DecimalField UnitCalculationMetric;
            public Int32Field TenantId;
            public StringField AuthDateRange;
        }
    }
}
