using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.DocumentManager
{
    public partial class DocumentWorkflowStepsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.DocumentManager.DocumentWorkflowStepsEditor";

        public DocumentWorkflowStepsEditorAttribute()
            : base(Key)
        {
        }
    }
}
