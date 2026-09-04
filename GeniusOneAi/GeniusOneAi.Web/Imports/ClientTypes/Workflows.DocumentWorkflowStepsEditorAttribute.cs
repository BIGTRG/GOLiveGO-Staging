using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.Workflows
{
    public partial class DocumentWorkflowStepsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.Workflows.DocumentWorkflowStepsEditor";

        public DocumentWorkflowStepsEditorAttribute()
            : base(Key)
        {
        }
    }
}
