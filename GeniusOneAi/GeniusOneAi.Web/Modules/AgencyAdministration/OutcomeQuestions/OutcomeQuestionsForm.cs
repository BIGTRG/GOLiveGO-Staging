using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.OutcomeQuestions")]
    [BasedOnRow(typeof(OutcomeQuestionsRow), CheckNames = true)]
    public class OutcomeQuestionsForm
    {
        [DisplayName("#"), HalfWidth]
        public Int32 SortOrder { get; set; }
        [DisplayName("Answer Type"), AnswerTypeEditor, Required, HalfWidth]
        public String AnswerType { get; set; }
        [DisplayName("Question the worker answers"), Required]
        public String Prompt { get; set; }
        [DisplayName("Options (separate with |, for Pick)")]
        public String Options { get; set; }
        [DisplayName("Resource type (for Resource answers)"), ResourceTypeEditor, HalfWidth]
        public String ResourceType { get; set; }
        [DisplayName("Show when (e.g. Q1=Yes)"), HalfWidth]
        public String ShowWhen { get; set; }
        [DisplayName("Sentence written into the note ({answer} is replaced)"), TextAreaEditor]
        public String SentenceTemplate { get; set; }
        [DisplayName("Answer is copied to the Crisis Plan"), HalfWidth]
        public Boolean SendsToCrisisPlan { get; set; }
        [DisplayName("Required before the note can be approved"), HalfWidth]
        public Boolean IsRequired { get; set; }
    }
}
