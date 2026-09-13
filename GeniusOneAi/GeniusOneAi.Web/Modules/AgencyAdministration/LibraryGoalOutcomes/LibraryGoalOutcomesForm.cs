using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.LibraryGoalOutcomes")]
    [BasedOnRow(typeof(LibraryGoalOutcomesRow), CheckNames = true)]
    public class LibraryGoalOutcomesForm
    {
        [DisplayName("#"), HalfWidth]
        public Int32 SortOrder { get; set; }
        [DisplayName("Counts as"), StatusRuleEditor, HalfWidth]
        public String StatusRule { get; set; }
        [DisplayName("Projected outcome (what the worker will confirm)"), TextAreaEditor, Required]
        public String OutcomeText { get; set; }
        [DisplayName("Effectiveness statement written into the note ({status} and {sentences} are replaced)"), TextAreaEditor]
        public String EffectivenessTemplate { get; set; }
        [DisplayName("Outcome is copied to the Crisis Plan")]
        public Boolean SendsToCrisisPlan { get; set; }
        [Category("Questions the worker answers (no typing)"), OutcomeQuestionsEditor, DisplayName(""), LabelWidth(0)]
        public List<OutcomeQuestionsRow> QuestionsList { get; set; }
    }
}
