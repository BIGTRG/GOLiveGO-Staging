using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.Workflows.Columns
{
    [ColumnsScript("Workflows.BillingLog")]
    [BasedOnRow(typeof(BillingLogRow), CheckNames = true)]
    public class BillingLogColumns
    {
        [DisplayName("Bill Date")]
        public DateTime BillingResponseDate { get; set; }
        [DisplayName("Response")]
        public string BillingResponse { get; set; }
        [DisplayName("Notes")]
        public string BillingResponseNotes { get; set; }
    }
}