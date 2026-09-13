using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.OutcomeQuestions")]
    [BasedOnRow(typeof(OutcomeQuestionsRow), CheckNames = true)]
    public class OutcomeQuestionsColumns
    {
        [DisplayName("#"), Width(40), AlignRight]
        public Int32 SortOrder { get; set; }
        [DisplayName("Question"), Width(360), EditLink]
        public String Prompt { get; set; }
        [DisplayName("Answer"), Width(110)]
        public String AnswerType { get; set; }
        [DisplayName("Options"), Width(200)]
        public String Options { get; set; }
        [DisplayName("Show when"), Width(90)]
        public String ShowWhen { get; set; }
        [DisplayName("Crisis Plan"), Width(80)]
        public Boolean SendsToCrisisPlan { get; set; }
        [DisplayName("Required"), Width(70)]
        public Boolean IsRequired { get; set; }
    }
}
