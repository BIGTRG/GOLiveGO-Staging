
namespace GeniusOneAi.Archives.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Archive.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesArchiveRow), CheckNames = true)]
    public class ActivitiesArchiveForm
    {
        [DisplayName("")][ReadOnly(true)]
        [LabelWidth(1)]
        [TextAreaEditor(Rows = 10, Cols = 10)]
        public String Notes { get; set; }
           }
}