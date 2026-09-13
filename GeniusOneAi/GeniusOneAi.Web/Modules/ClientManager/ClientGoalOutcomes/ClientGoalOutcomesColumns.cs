using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager.Columns
{
    [ColumnsScript("ClientManager.ClientGoalOutcomes")]
    [BasedOnRow(typeof(ClientGoalOutcomesRow), CheckNames = true)]
    public class ClientGoalOutcomesColumns
    {
        [DisplayName("#"), Width(40), AlignRight]
        public Int32 SortOrder { get; set; }
        [DisplayName("Projected Outcome"), Width(460), EditLink]
        public String OutcomeText { get; set; }
        [DisplayName("Counts as"), Width(100)]
        public String StatusRule { get; set; }
        [DisplayName("Met"), Width(60)]
        public Boolean IsMet { get; set; }
        [DisplayName("Checked"), Width(120), DisplayFormat("g")]
        public DateTime CheckedAt { get; set; }
        [DisplayName("Summary"), Width(300)]
        public String Summary { get; set; }
    }
}
