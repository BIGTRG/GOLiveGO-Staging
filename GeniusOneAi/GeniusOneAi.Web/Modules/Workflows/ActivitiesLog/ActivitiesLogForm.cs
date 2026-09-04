
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Workflows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Workflows.ActivitiesLog")]
    [BasedOnRow(typeof(Entities.ActivitiesLogRow), CheckNames = true)]
    public class ActivitiesLogForm
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