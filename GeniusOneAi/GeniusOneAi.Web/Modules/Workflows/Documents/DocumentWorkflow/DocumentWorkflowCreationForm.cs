using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.MiscEntities;

namespace GeniusOneAi.Workflows.Forms
{
    [FormScript("Workflows.DocumentWorkflowCreation")]
    [BasedOnRow(typeof(DocumentWorkflowRow), CheckNames = true)]
    public class DocumentWorkflowCreationForm
    {
       
        [DisplayName("Workflow Name")]
        [LookupEditor("GeniusOneAi.DocumentWorkflows")]
        public int DocumentWorkflowId { get; set; }
       
    }
}