
namespace GeniusOneAi.WorkerManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[WorkerInvoices]")]
    [DisplayName("Worker Invoices"), InstanceName("Worker Invoices")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    public sealed class WorkerInvoicesRow : Row<WorkerInvoicesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Invoice Id"), Identity, IdProperty]
        public Int32? UserInvoiceId
        {
            get => fields.UserInvoiceId[this];
            set => fields.UserInvoiceId[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Invoice Number"), Size(255), QuickSearch, NameProperty]
        public String InvoiceNumber
        {
            get => fields.InvoiceNumber[this];
            set => fields.InvoiceNumber[this] = value;
        }

        [DisplayName("Total Due"), Size(10), Scale(2)]
        public Decimal? TotalDue
        {
            get => fields.TotalDue[this];
            set => fields.TotalDue[this] = value;
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get => fields.DueDate[this];
            set => fields.DueDate[this] = value;
        }

        [DisplayName("Payment Terms"), Size(25)]
        public String PaymentTerms
        {
            get => fields.PaymentTerms[this];
            set => fields.PaymentTerms[this] = value;
        }

        [DisplayName("Date Sent")]
        public DateTime? DateSent
        {
            get => fields.DateSent[this];
            set => fields.DateSent[this] = value;
        }

        [DisplayName("Date Paid")]
        public DateTime? DatePaid
        {
            get => fields.DatePaid[this];
            set => fields.DatePaid[this] = value;
        }

        [DisplayName("Total Paid"), Size(10), Scale(2)]
        public Decimal? TotalPaid
        {
            get => fields.TotalPaid[this];
            set => fields.TotalPaid[this] = value;
        }

        [DisplayName("Status"), Size(25)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        public WorkerInvoicesRow()
        {
        }

        public WorkerInvoicesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserInvoiceId;
            public Int32Field UserId;
            public StringField InvoiceNumber;
            public DecimalField TotalDue;
            public DateTimeField DueDate;
            public StringField PaymentTerms;
            public DateTimeField DateSent;
            public DateTimeField DatePaid;
            public DecimalField TotalPaid;
            public StringField Status;
        }
    }
}
