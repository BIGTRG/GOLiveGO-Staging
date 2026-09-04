namespace GeniusOneAi.WorkerPortal.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.CustomEditors;

    [ColumnsScript("WorkerPortal.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesRow))]
    public class TimesheetsColumns
    {
        [DisplayName("Activity")] [Width(110)] 
        [QuickFilter(true)]
        public String Activity { get; set; }
        [DisplayName("Patient")] [Width(300)]
        public String ClientFullName { get; set; }
        [DisplayName("Date")] [Width(100)]
        [QuickFilter(true)]
        public DateTime ActivityDate { get; set; }
        [DisplayName("Hours")] [Width(100)] 
        public Decimal Hours { get; set; }
        [DisplayName("Billable ?")] [Width(100)]
        [QuickFilter(true)]
        public Boolean IsBillable { get; set; }

        [DisplayName("Status")] [Width(100)]
        [TimesheetStatusEditor]
        [QuickFilter(true)]
        public String Status { get; set; }
        [DisplayName("Document")]
        [UrlFormatter(DisplayFormat = "View Document", UrlFormat = "javascript:loadDocViewer(3,'{0}');")]
        [Width(200)]
        public String ProgramNoteFileName { get; set; }

    }
}