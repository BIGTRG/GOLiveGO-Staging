using GeniusOneAi.WorkerPortal;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.Web.Modules.MiscEntities
{
    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[vGlobalAgencyDashboardWorker]")]
    [DisplayName("V Global Agency Dashboard Worker"), InstanceName("V Global Agency Dashboard Worker")]
    [ReadPermission(PermissionKeys.MyDashboard)]
    [ModifyPermission(PermissionKeys.MyDashboard)]
    public sealed class VGlobalAgencyDashboardWorkerRow : Row<VGlobalAgencyDashboardWorkerRow.RowFields>, IIdRow
    {
        [DisplayName("User Id"), NotNull, IdProperty]
        public int? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Rejected Progress Notes")]
        public int? RejectedProgressNotes
        {
            get => fields.RejectedProgressNotes[this];
            set => fields.RejectedProgressNotes[this] = value;
        }

        [DisplayName("Saved Progress Notes")]
        public int? SavedProgressNotes
        {
            get => fields.SavedProgressNotes[this];
            set => fields.SavedProgressNotes[this] = value;
        }

        [DisplayName("Submitted Progress Notes")]
        public int? SubmittedProgressNotes
        {
            get => fields.SubmittedProgressNotes[this];
            set => fields.SubmittedProgressNotes[this] = value;
        }

        [DisplayName("Approved Progress Notes")]
        public int? ApprovedProgressNotes
        {
            get => fields.ApprovedProgressNotes[this];
            set => fields.ApprovedProgressNotes[this] = value;
        }

        [DisplayName("Active Cases")]
        public int? ActiveCases
        {
            get => fields.ActiveCases[this];
            set => fields.ActiveCases[this] = value;
        }

        [DisplayName("In Active Cases")]
        public int? InActiveCases
        {
            get => fields.InActiveCases[this];
            set => fields.InActiveCases[this] = value;
        }

        [DisplayName("Authorizations Expiring This Month")]
        public int? AuthorizationsExpiringThisMonth
        {
            get => fields.AuthorizationsExpiringThisMonth[this];
            set => fields.AuthorizationsExpiringThisMonth[this] = value;
        }

        [DisplayName("Authorizations Expiring Next Month")]
        public int? AuthorizationsExpiringNextMonth
        {
            get => fields.AuthorizationsExpiringNextMonth[this];
            set => fields.AuthorizationsExpiringNextMonth[this] = value;
        }

        [DisplayName("Appointments Scheduled"), NotNull]
        public int? AppointmentsScheduled
        {
            get => fields.AppointmentsScheduled[this];
            set => fields.AppointmentsScheduled[this] = value;
        }

        [DisplayName("Documents Pending Signature"), NotNull]
        public int? DocumentsPendingSignature
        {
            get => fields.DocumentsPendingSignature[this];
            set => fields.DocumentsPendingSignature[this] = value;
        }

        [DisplayName("Documents Pending Review"), NotNull]
        public int? DocumentsPendingReview
        {
            get => fields.DocumentsPendingReview[this];
            set => fields.DocumentsPendingReview[this] = value;
        }

        [DisplayName("Credentials Expiring This Month")]
        public int? CredentialsExpiringThisMonth
        {
            get => fields.CredentialsExpiringThisMonth[this];
            set => fields.CredentialsExpiringThisMonth[this] = value;
        }

        [DisplayName("Invoices Submitted"), NotNull]
        public int? InvoicesSubmitted
        {
            get => fields.InvoicesSubmitted[this];
            set => fields.InvoicesSubmitted[this] = value;
        }

        [DisplayName("Invoices Paid"), NotNull]
        public int? InvoicesPaid
        {
            get => fields.InvoicesPaid[this];
            set => fields.InvoicesPaid[this] = value;
        }

        [DisplayName("Total Billed"), Size(2), Scale(2), NotNull]
        public decimal? TotalBilled
        {
            get => fields.TotalBilled[this];
            set => fields.TotalBilled[this] = value;
        }

        [DisplayName("Total Paid"), Size(2), Scale(2), NotNull]
        public decimal? TotalPaid
        {
            get => fields.TotalPaid[this];
            set => fields.TotalPaid[this] = value;
        }

        public VGlobalAgencyDashboardWorkerRow()
            : base()
        {
        }

        public VGlobalAgencyDashboardWorkerRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public Int32Field RejectedProgressNotes;
            public Int32Field SavedProgressNotes;
            public Int32Field SubmittedProgressNotes;
            public Int32Field ApprovedProgressNotes;
            public Int32Field ActiveCases;
            public Int32Field InActiveCases;
            public Int32Field AuthorizationsExpiringThisMonth;
            public Int32Field AuthorizationsExpiringNextMonth;
            public Int32Field AppointmentsScheduled;
            public Int32Field DocumentsPendingSignature;
            public Int32Field DocumentsPendingReview;
            public Int32Field CredentialsExpiringThisMonth;
            public Int32Field InvoicesSubmitted;
            public Int32Field InvoicesPaid;
            public DecimalField TotalBilled;
            public DecimalField TotalPaid;
        }
    }
}
