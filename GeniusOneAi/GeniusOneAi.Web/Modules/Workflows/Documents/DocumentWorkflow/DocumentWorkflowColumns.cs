using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.Workflows.Columns
{
    [ColumnsScript("Workflows.DocumentWorkflow")]
    [BasedOnRow(typeof(DocumentWorkflowRow), CheckNames = true)]
    public class DocumentWorkflowColumns
    {
        [DisplayName("Workflow Name")]
        [Width(300)]
        [QuickFilter(true)]
        public string Name { get; set; }
        [DisplayName("Description")]
        [Width(600)]
        public string Description { get; set; }
    }
}