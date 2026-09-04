using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.DocumentManager.Columns
{
    [ColumnsScript("DocumentManager.DocumentWorkflowStepsTemplates")]
    [BasedOnRow(typeof(DocumentWorkflowStepsTemplatesRow), CheckNames = true)]
    public class DocumentWorkflowStepsTemplatesColumns
    {
        [DisplayName("Step")]
        [Width(50)]
        public int StepOrder { get; set; }
        [DisplayName("Step Type")]
        [Width(100)]
        public string StepActionType { get; set; }
        [DisplayName("Performer Type")]
        [Width(300)]
        public string StepPerformerType { get; set; }
       
    }
}