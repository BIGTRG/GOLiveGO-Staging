using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class TimesheetActivityEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.TimesheetActivityEditor";

        public TimesheetActivityEditorAttribute()
            : base(Key)
        {
        }
    }
}

