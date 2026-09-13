using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.LibraryGoalOutcomes")]
    [BasedOnRow(typeof(LibraryGoalOutcomesRow), CheckNames = true)]
    public class LibraryGoalOutcomesColumns
    {
        [DisplayName("#"), Width(40), AlignRight]
        public Int32 SortOrder { get; set; }
        [DisplayName("Projected Outcome"), Width(480), EditLink]
        public String OutcomeText { get; set; }
        [DisplayName("Counts as"), Width(110)]
        public String StatusRule { get; set; }
        [DisplayName("Crisis Plan"), Width(80)]
        public Boolean SendsToCrisisPlan { get; set; }
        [DisplayName("Questions"), Width(80), AlignRight]
        public Int32 QuestionCount { get; set; }
    }
}
