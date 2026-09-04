using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.Workflows.Columns
{
    [ColumnsScript("Workflows.DocumentWorkflowSteps")]
    [BasedOnRow(typeof(DocumentWorkflowStepsRow), CheckNames = true)]
    public class DocumentWorkflowStepsColumns
    {
        [DisplayName("Step")]
        [Width(50)]
        public int StepOrder { get; set; }
        [DisplayName("Step Type")]
        [Width(100)]
        public string StepActionType { get; set; }
        [DisplayName("Performer Type")]
        [Width(200)]
        public string StepPerformerType { get; set; }
        [DisplayName("Performer")]
        [Width(250)]
        public int PerformerName { get; set; }
        [DisplayName("Due")]
        [Width(100)]
        public DateTime DueDate { get; set; }
        [DisplayName("Completed")]
        [Width(100)]
        public DateTime DateCompleted { get; set; }
    }
}