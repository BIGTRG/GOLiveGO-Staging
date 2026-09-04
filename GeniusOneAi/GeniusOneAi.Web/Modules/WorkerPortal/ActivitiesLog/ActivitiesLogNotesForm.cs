
namespace GeniusOneAi.WorkerPortal.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerPortal.ActivitiesLogNotes")]
    [BasedOnRow(typeof(Entities.ActivitiesLogRow), CheckNames = true)]
    public class ActivitiesLogNotesForm
    {
        [DisplayName("")]
        [ReadOnly(true)]
        [LabelWidth(1)]
        [TextAreaEditor(Rows = 10, Cols = 10)]
        public String Notes { get; set; }
        [Hidden]
        public Int32 ActivityId { get; set; }
    }
}