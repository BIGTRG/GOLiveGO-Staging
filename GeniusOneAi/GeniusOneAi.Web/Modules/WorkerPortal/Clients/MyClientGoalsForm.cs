
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

    [FormScript("WorkerPortal.MyClientGoals")]
    [BasedOnRow(typeof(Entities.ClientGoalsRow), CheckNames = true)]
    public class MyClientGoalsForm
    {   [Hidden]
        public Int32 ClientId { get; set; }
        [DisplayName("Goal")]
        public String Goal { get; set; }
        [DisplayName("Description")]
        [TextAreaEditor]
        public String Description { get; set; }
        [DisplayName("Status")]
        [HalfWidth]
        [ClientGoalEditor]
        public String Status { get; set; }
        [DisplayName("Completed")]
        [HalfWidth]
        [LabelWidth(90)]
        public DateTime CompletionDate { get; set; }
    }
}