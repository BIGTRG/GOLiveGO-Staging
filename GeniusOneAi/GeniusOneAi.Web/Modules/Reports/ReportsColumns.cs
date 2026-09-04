using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.Reports.Columns
{
    [ColumnsScript("Reports.Reports")]
    [BasedOnRow(typeof(ReportsRow), CheckNames = true)]
    public class ReportsColumns
    {
        [DisplayName("Report Name")]
        [QuickFilter(true)]
        [Width(400)]
        public string ReportName { get; set; }
        [DisplayName("Report Description")]
        [QuickFilter(true)]
        [Width(500)]
        public string ReportDescription { get; set; }
        [DisplayName("Report Type")]
        [QuickFilter(true)]
        [Width(150)]
        public string ReportType { get; set; }

    }
}