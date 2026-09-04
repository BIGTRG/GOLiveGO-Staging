using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Workflows.Forms
{
    [FormScript("Workflows.DocumentWorkflowSteps")]
    [BasedOnRow(typeof(DocumentWorkflowStepsRow), CheckNames = true)]
    public class DocumentWorkflowStepsForm
    {
        //public int DocumentWorkflowTemplateId { get; set; }
        [DisplayName("Step Type")]
        [StepTypeEditor]
        public string StepActionType { get; set; }
        [DisplayName("Performer Type")]
        [PerformerTypeEditor]
        public string StepPerformerType { get; set; }
        [DisplayName("Performer Staff")]
        [LookupEditor("GeniusOneAi.Workers")]
        [Visible(false)]
        public int StepPerformerStaffId { get; set; }
        [DisplayName("Performer Patient")]
        [LookupEditor("GeniusOneAi.Clients")]
        [Visible(false)]
        public int StepPerformerPatientId { get; set; }
        [DisplayName("Due")]
        public DateTime DueDate { get; set; }

    }
}