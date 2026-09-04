namespace GeniusOneAi.WorkerPortal.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.WorkerPortal.Entities;

    [ColumnsScript("WorkerPortal.TeamAssignments")]
    [BasedOnRow(typeof(WorkerCaseAssignmentsRow), CheckNames = true)]
    public class TeamAssignmentsColumns
    { 
        [DisplayName("Assigned Worker")]
        [Width(300)]
        public string WorkerDisplayName { get; set; }
        [DisplayName("Date Assigned")]
        [Width(300)]
        public DateTime AssignedDate { get; set; }
       
    }
}