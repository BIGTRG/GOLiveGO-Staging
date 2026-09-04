using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class TimesheetStatusWorkflowEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.TimesheetStatusWorkflowEditor";

        public TimesheetStatusWorkflowEditorAttribute()
            : base(Key)
        {
        }
    }
}
