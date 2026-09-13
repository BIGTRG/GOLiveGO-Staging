using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.CrisisNeeds")]
    [BasedOnRow(typeof(CrisisNeedsRow), CheckNames = true)]
    public class CrisisNeedsColumns
    {
        [DisplayName("Key"), Width(180)]
        public String NeedKey { get; set; }
        [DisplayName("Need"), Width(320)]
        public String Label { get; set; }
        [DisplayName("Category (DA V3)"), Width(160), QuickFilter]
        public String CategoryLabel { get; set; }
        [DisplayName("Order"), Width(70), AlignRight]
        public Int32 SortOrder { get; set; }
        [DisplayName("Active"), Width(70)]
        public Boolean IsActive { get; set; }
    }
}
