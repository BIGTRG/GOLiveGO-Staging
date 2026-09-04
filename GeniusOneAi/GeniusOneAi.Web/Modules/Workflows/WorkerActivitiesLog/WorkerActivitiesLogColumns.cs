using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.WorkerPortal.Entities;

namespace GeniusOneAi.WorkerPortal.Columns
{
    [ColumnsScript("WorkerPortal.WorkerActivitiesLog")]
    [BasedOnRow(typeof(WorkerActivitiesLogRow), CheckNames = true)]
    public class WorkerActivitiesLogColumns
    {
        [DisplayName("Date")]
        public DateTime Date { get; set; }
        [DisplayName("Reason")]
        public string RejectionReason { get; set; }
        [DisplayName("Note")]
        [EditLink(ItemType = "GeniusOneAi.WorkerPortal.WorkerActivitiesLogNotesDialog", IdField = "ActivitiesLogId"), Width(150)]
        public string Notes { get; set; }
        [DisplayName("User")]
        public String UserDisplayName { get; set; }
    }
}