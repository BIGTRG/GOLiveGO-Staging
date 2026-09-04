namespace GeniusOneAi.Archives.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.MiscEntities.Entities;

    [ColumnsScript("Archives.ProgressNotesArchive")]
    [BasedOnRow(typeof(Entities.ProgressNotesArchiveRow))]
    public class ProgressNotesArchiveColumns
    {
        [DisplayName("View")]
        [UrlFormatter(DisplayFormat = "View", UrlFormat = "javascript:loadDocViewer(3,'{0}');")]
        [Width(50)]
        public String ProgramNoteFileName { get; set; }
        [DisplayName("Note Type")]
        [Width(200)]
        public String ProgramNoteField00 { get; set; }
        [DisplayName("Activity")] [Width(110)] 
        public String Activity { get; set; }
        [DisplayName("Worker")]
        [WorkerManager.WorkersLookup]
        [Width(300)]
        [QuickFilter(true)]
        public String WorkerFullName { get; set; }
        [DisplayName("Patient")] [Width(300)]
        [QuickFilter(true)]
        [ClientManager.ClientsLookup]
        public String ClientFullName { get; set; }
        [DisplayName("Date")] [Width(100)]
        [QuickFilter(true)]
        public DateTime ActivityDate { get; set; }
        [DisplayName("Primary Insurance Type")]
        [Width(200)]
        public String PrimaryInsuranceType { get; set; }
        [DisplayName("Hours")] [Width(100)] 
        public Decimal Hours { get; set; }
        [DisplayName("Billable ?")] [Width(100)]
        [QuickFilter(true)]
        public Boolean IsBillable { get; set; }

        [DisplayName("Status")] [Width(200)]
        public String Status { get; set; }


        [DisplayName("Submission")]
        [Width(190)]
        public String Submission { get; set; }

    }
}