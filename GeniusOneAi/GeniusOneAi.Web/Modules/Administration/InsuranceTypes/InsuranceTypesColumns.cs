
namespace GeniusOneAi.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.InsuranceTypes")]
    [BasedOnRow(typeof(Entities.InsuranceTypesRow), CheckNames = true)]
    public class InsuranceTypesColumns
    {
        [DisplayName("Company")]
        [QuickFilter]
        [Width(500)]
        public String Name { get; set; }
        [DisplayName("Description")]
        [QuickFilter]
        [Width(500)]
        public String Description { get; set; }
        [DisplayName("Active ?")]
        [QuickFilter]
        [Width(100)]
        public Boolean Status { get; set; }

    }
}