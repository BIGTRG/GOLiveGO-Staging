using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.Workflows.Entities;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Workflows.Forms
{
    [FormScript("Workflows.Invoices")]
    [BasedOnRow(typeof(InvoicesRow), CheckNames = true)]
    public class InvoicesForm
    {
        [DisplayName("Invoice Number")]
        [ReadOnly(true)]
        public string InvoiceNumber { get; set; }

        [DisplayName("Total Due")]
        [ReadOnly(true)]
        public decimal TotalDue { get; set; }

        [DisplayName("Total Paid")]
        public decimal TotalPaid { get; set; }

        [DisplayName("Status")]
        [InvoiceStatusEditor]
        public String Status { get; set; }
    }
}