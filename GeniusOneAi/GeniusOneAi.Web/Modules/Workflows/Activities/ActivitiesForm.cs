
namespace GeniusOneAi.Workflows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Workflows.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesRow), CheckNames = true)]
    public class ActivitiesForm
    {
        [DisplayName("")][ReadOnly(true)]
        [LabelWidth(1)]
        [TextAreaEditor(Rows = 10, Cols = 10)]
        public String Notes { get; set; }
        [Hidden]
        public String Status { get; set; }
        [Hidden]
        public String Activity{ get; set; }
    }
}