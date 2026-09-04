using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.MiscEntities;

namespace GeniusOneAi.DocumentManager.Forms
{
    [FormScript("DocumentManager.DocumentWorkflowTemplates")]
    [BasedOnRow(typeof(DocumentWorkflowTemplatesRow), CheckNames = true)]
    public class DocumentWorkflowTemplatesForm
    {
        [Category("Template General")]
        [DisplayName("Template Name")]
        public string Name { get; set; }
        [DisplayName("Description")]
        public string Description { get; set; }
        [DisplayName("Document")]
        [LookupEditor("GeniusOneAi.DocumentsFiltered")]
        public int DocumentId { get; set; }
        [Category("Workflow Steps")]
        [DocumentWorkflowStepsTemplatesEditor]
        [DisplayName("")]
        [LabelWidth(0)]
        public List<DocumentWorkflowStepsTemplatesRow> DocumentWorkflowStepsList { get; set; }
    }
}