using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.DocumentManager.Forms
{
    [FormScript("DocumentManager.DocumentWorkflowStepsTemplates")]
    [BasedOnRow(typeof(DocumentWorkflowStepsTemplatesRow), CheckNames = true)]
    public class DocumentWorkflowStepsTemplatesForm
    {
        //public int DocumentWorkflowTemplateId { get; set; }
        [DisplayName("Step Type")]
        [StepTypeEditor]
        public string StepActionType { get; set; }
        [DisplayName("Performer Type")]
        [PerformerTypeEditor]
        public string StepPerformerType { get; set; }
      
    }
}