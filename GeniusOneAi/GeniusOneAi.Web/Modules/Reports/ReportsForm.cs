using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.Reports.Forms
{
    [FormScript("Reports.Reports")]
    [BasedOnRow(typeof(ReportsRow), CheckNames = true)]
    public class ReportsForm
    {
        [DisplayName("Name")]
        public string ReportName { get; set; }
        [DisplayName("Description")]
        [TextAreaEditor(Rows = 8)]
        public string ReportDescription { get; set; }
    }
}