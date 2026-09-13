using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.ClientManager.Forms
{
    [FormScript("ClientManager.ClientGoalOutcomes")]
    [BasedOnRow(typeof(ClientGoalOutcomesRow), CheckNames = true)]
    public class ClientGoalOutcomesForm
    {
        [DisplayName("#"), HalfWidth]
        public Int32 SortOrder { get; set; }
        [DisplayName("Counts as"), StatusRuleEditor, HalfWidth]
        public String StatusRule { get; set; }
        [DisplayName("Projected outcome"), TextAreaEditor, Required]
        public String OutcomeText { get; set; }
        [DisplayName("Met (set by the note questions)"), HalfWidth, ReadOnly(true)]
        public Boolean IsMet { get; set; }
        [DisplayName("Checked at"), HalfWidth, ReadOnly(true)]
        public DateTime CheckedAt { get; set; }
        [DisplayName("Outcome summary (generated from the answers)"), TextAreaEditor, ReadOnly(true)]
        public String Summary { get; set; }
        [DisplayName("Copied to the Crisis Plan")]
        public Boolean SendsToCrisisPlan { get; set; }
    }
}
