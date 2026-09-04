
namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AgencyAdministration.FormTypes")]
    [BasedOnRow(typeof(Entities.FormTypesRow), CheckNames = true)]
    public class FormTypesColumns
    {
        [DisplayName("Form Name")]
        [QuickFilter]
        [Width(500)]
        public String Name { get; set; }
        [DisplayName("Description")]
        [QuickFilter]
        [Width(500)]
        public String Description { get; set; }
    }
}