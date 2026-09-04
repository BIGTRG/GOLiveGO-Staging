using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.DocumentManager.Columns
{
    [ColumnsScript("DocumentManager.DocumentWorkflowTemplates")]
    [BasedOnRow(typeof(DocumentWorkflowTemplatesRow), CheckNames = true)]
    public class DocumentWorkflowTemplatesColumns
    {
        [DisplayName("Template Name")]
        [Width(300)]
        [QuickFilter(true)]
        public string Name { get; set; }
        [DisplayName("Description")]
        [Width(600)]
        public string Description { get; set; }
    }
}