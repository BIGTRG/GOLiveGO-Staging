using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.MiscEntities;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Workflows.Forms
{
    [FormScript("Workflows.DocumentWorkflow")]
    [BasedOnRow(typeof(DocumentWorkflowRow), CheckNames = true)]
    public class DocumentWorkflowForm
    {
        [Category("Workflow General")]
        [DisplayName("Status")]
        [WorkflowStatusEditor]
        public string Status { get; set; }
        [DisplayName("Workflow Name")]
        public string Name { get; set; }
        [DisplayName("Description")]
        public string Description { get; set; }
        [Category("Workflow Steps")]
        [DocumentWorkflowStepsEditor]
        [DisplayName("")]
        [LabelWidth(0)]
        public List<DocumentWorkflowStepsRow> DocumentWorkflowStepsList { get; set; }
    }
}