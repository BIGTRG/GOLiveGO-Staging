
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.WorkerInvoices")]
    [BasedOnRow(typeof(Entities.WorkerInvoicesRow), CheckNames = true)]
    public class WorkerInvoicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserInvoiceId { get; set; }
        public Int32 UserId { get; set; }
        [EditLink]
        public String InvoiceNumber { get; set; }
        public Decimal TotalDue { get; set; }
        public DateTime DueDate { get; set; }
        public String PaymentTerms { get; set; }
        public DateTime DateSent { get; set; }
        public DateTime DatePaid { get; set; }
        public Decimal TotalPaid { get; set; }
        public String Status { get; set; }
    }
}