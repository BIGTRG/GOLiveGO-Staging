
namespace GeniusOneAi.Workflows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Workflows.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesArchiveRow), CheckNames = true)]
    public class ActivitiesArchiveColumns
    {
        [DisplayName("Activity")]
        [Width(110)]
        [QuickFilter(true)]
        public String Activity { get; set; }
        [DisplayName("Patient")]
        [Width(300)]
        public String ClientFullName { get; set; }
        [DisplayName("Date")]
        [Width(100)]
        [QuickFilter(true)]
        public DateTime ActivityDate { get; set; }
        [DisplayName("Hours")]
        [Width(100)]
        public Decimal Hours { get; set; }
        [DisplayName("Billable ?")]
        [Width(100)]
        [QuickFilter(true)]
        public Boolean IsBillable { get; set; }

        [DisplayName("Status")]
        [Width(200)]
        public String Status { get; set; }
    }
}