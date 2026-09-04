
namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AgencyAdministration.WorkerTypes")]
    [BasedOnRow(typeof(Entities.WorkerTypesRow), CheckNames = true)]
    public class WorkerTypesColumns
    {
        [DisplayName("Type Name")]
        [QuickFilter]
        [Width(500)]
        public String Name { get; set; }
        [DisplayName("Description")]
        [QuickFilter]
        [Width(500)]
        public String Description { get; set; }

    }
}