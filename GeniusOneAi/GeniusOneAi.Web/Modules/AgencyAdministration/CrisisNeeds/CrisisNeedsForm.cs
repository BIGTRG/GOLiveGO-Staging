using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.CrisisNeeds")]
    [BasedOnRow(typeof(CrisisNeedsRow), CheckNames = true)]
    public class CrisisNeedsForm
    {
        [DisplayName("Key (no spaces)"), Required]
        public String NeedKey { get; set; }
        [DisplayName("Need"), Required]
        public String Label { get; set; }
        [DisplayName("Category (matches DA V3 NeedCategory)"), NeedCategoryEditor, Required]
        public String Category { get; set; }
        [DisplayName("Category Name")]
        public String CategoryLabel { get; set; }
        [DisplayName("Order")]
        public Int32 SortOrder { get; set; }
        [DisplayName("Active")]
        public Boolean IsActive { get; set; }
    }
}
