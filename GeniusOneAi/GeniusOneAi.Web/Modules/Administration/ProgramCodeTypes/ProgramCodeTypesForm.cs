
namespace GeniusOneAi.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.ProgramCodeTypes")]
    [BasedOnRow(typeof(Entities.ProgramCodeTypesRow), CheckNames = true)]
    public class ProgramCodeTypesForm
    {
        [DisplayName("Mapped Program")]
        [LookupEditor(typeof(GeniusOneAi.AgencyAdministration.Entities.ProgramTypesRow))]
        public Int32 ProgramTypeId { get; set; }
        [DisplayName("Bill Code")]
        public String BillCode { get; set; }
        [DisplayName("Mod1")]
        [HalfWidth]
        public String Mod1 { get; set; }
        [DisplayName("Mod2")]
        [HalfWidth]
        public String Mod2 { get; set; }
        [DisplayName("Mod3")]
        [HalfWidth]
        public String Mod3 { get; set; }
        [DisplayName("Mod4")]
        [HalfWidth]
        public String Mod4 { get; set; }
        [DisplayName("Description")]
        [TextAreaEditor(Rows = 5)]
        public String Description { get; set; }
        
        //[DisplayName("Insurance Company")]
        //[LookupEditor(typeof(GeniusOneAi.Administration.Entities.InsuranceTypesRow))]
        //public Int32 InsuranceId { get; set; }
        [DisplayName("Bill Rate")][HalfWidth]
        public Decimal BillRate{ get; set; }
        [DisplayName("Per")][HalfWidth]
        public String BillRateUnit { get; set; }

    }
}