using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.Workflows.Forms
{
    [FormScript("Workflows.BillingLog")]
    [BasedOnRow(typeof(BillingLogRow), CheckNames = true)]
    public class BillingLogForm
    {
        [DisplayName("Bill Date")]
        public DateTime BillingResponseDate { get; set; }
        [DisplayName("Response")]
        public string BillingResponse { get; set; }
        [DisplayName("Notes")]
        [TextAreaEditor(Rows = 10)]
        public string BillingResponseNotes { get; set; }
    }
}