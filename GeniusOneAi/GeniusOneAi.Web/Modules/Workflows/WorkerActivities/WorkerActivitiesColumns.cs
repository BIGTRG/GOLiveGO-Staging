
namespace GeniusOneAi.Workflows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.CustomEditors;

    [ColumnsScript("Workflows.WorkerActivities")]
    [BasedOnRow(typeof(Entities.WorkerActivitiesRow), CheckNames = true)]
    public class WorkerActivitiesColumns
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
        [TimesheetStatusWorkflowEditor]
        [QuickFilter(true)]
        [Width(200)]
        public String Status { get; set; }
        [DisplayName("Submission")]
        [Width(190)]
        public String Submission { get; set; }

    }
}