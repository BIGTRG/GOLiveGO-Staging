
namespace GeniusOneAi.WorkerPortal.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerPortal.WorkerCaseAssignments")]
    [BasedOnRow(typeof(Entities.WorkerCaseAssignmentsRow), CheckNames = true)]
    public class WorkerCaseAssignmentsColumns
    {
        [DisplayName("Patient")]
        [Width(300)]
        public String ClientFullName { get; set; }
        [DisplayName("Date Assigned")]
        [Width(200)]
        public DateTime AssignedDate { get; set; }
        [DisplayName("Date Unassigned")]
        [Width(200)]
        public DateTime UnassignedDate { get; set; }
        [DisplayName("Program Code")]
        [Width(300)]
        public String BillCode { get; set; }

    }
}