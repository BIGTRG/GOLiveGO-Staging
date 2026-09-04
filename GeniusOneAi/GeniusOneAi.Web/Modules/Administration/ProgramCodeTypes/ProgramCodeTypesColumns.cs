
using GeniusOneAi.CustomEditors;
using Serenity.Data;

namespace GeniusOneAi.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.ProgramCodeTypes")]
    [BasedOnRow(typeof(Entities.ProgramCodeTypesRow), CheckNames = true)]
    public class ProgramCodeTypesColumns
    {
        [DisplayName("Bill Code")]
        [QuickFilter]
        [Width(100)]
        public String BillCode { get; set; }
        [DisplayName("Modifier1")]
        [Width(100)]
        public String Mod1 { get; set; }
        [DisplayName("Modifier2")]
        [Width(100)]
        public String Mod2 { get; set; }
        [DisplayName("Modifier3")]
        [Width(100)]
        public String Mod3 { get; set; }
        [DisplayName("Modifier4")]
        [Width(100)]
        public String Mod4 { get; set; }
        [DisplayName("Description")]
        [QuickFilter]
        [Width(300)]
        public String Description { get; set; }
       

    }
}

