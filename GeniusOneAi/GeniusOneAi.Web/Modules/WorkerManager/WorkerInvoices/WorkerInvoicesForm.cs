
namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.WorkerInvoices")]
    [BasedOnRow(typeof(Entities.WorkerInvoicesRow), CheckNames = true)]
    public class WorkerInvoicesForm
    {
        public Int32 UserId { get; set; }
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