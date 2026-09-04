using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.Workflows.Entities;

namespace GeniusOneAi.Workflows.Columns
{
    [ColumnsScript("Workflows.ActivitiesLog")]
    [BasedOnRow(typeof(ActivitiesLogRow), CheckNames = true)]
    public class ActivitiesLogColumns
    {
        [DisplayName("Date")]
        public DateTime Date { get; set; }
        [DisplayName("Reason")]
        public string RejectionReason { get; set; }
        [DisplayName("Note")]
        [EditLink(ItemType = "GeniusOneAi.Workflows.ActivitiesLogNotesDialog", IdField = "ActivitiesLogId"), Width(150)]
        public string Notes { get; set; }
        [DisplayName("User")]
        public String UserDisplayName { get; set; }
    }
}