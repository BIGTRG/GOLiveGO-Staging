
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.WorkerPortal.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerPortal.WorkerActivitiesLog")]
    [BasedOnRow(typeof(Entities.ActivitiesLogRow), CheckNames = true)]
    public class WorkerActivitiesLogForm
    {
        [DisplayName("Rejection Reason")][RejectionEditor]
        public String RejectionReason { get; set; }
        [DisplayName("Notes")]
        [TextAreaEditor(Rows = 10)]
        public String Notes { get; set; }
        [Hidden]
        public Int32 ActivityId { get; set; }
    }
}