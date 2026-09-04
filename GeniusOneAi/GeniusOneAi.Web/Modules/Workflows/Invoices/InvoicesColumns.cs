
namespace GeniusOneAi.Workflows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Workflows.Invoices")]
    [BasedOnRow(typeof(Entities.InvoicesRow), CheckNames = true)]
    public class InvoicesColumns
    {
        [DisplayName("View Documentation")]
        [UrlFormatter(DisplayFormat = "View Document", UrlFormat = "javascript:loadInvoiceViewer('{0}');")]
        [Width(200)]
        public String FileName { get; set; }
        [DisplayName("Invoice Number")]
        [Width(200)][QuickFilter(true)]
        public String InvoiceNumber { get; set; }
        [DisplayName("Total Due")]
        [Width(200)]
        public Decimal TotalDue { get; set; }
        [DisplayName("Due Date")]
        [Width(200)]
        public DateTime DueDate { get; set; }
        [DisplayName("Payment Terms")]
        [Width(200)]
        public String PaymentTerms { get; set; }
        [DisplayName("Date Sent")]
        [QuickFilter(true)]
        [Width(200)]
        public DateTime DateSent { get; set; }
        [DisplayName("Date Paid")]
        [QuickFilter(true)]
        [Width(200)]
        public DateTime DatePaid { get; set; }
        [DisplayName("Total Paid")]
        [Width(200)]
        public Decimal TotalPaid { get; set; }
        [DisplayName("Status")]
        [QuickFilter(true)]
        [Width(200)]
        public String Status { get; set; }
    }
}