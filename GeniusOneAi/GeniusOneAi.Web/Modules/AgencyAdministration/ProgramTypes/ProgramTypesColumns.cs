
using GeniusOneAi.AgencyAdministration.Entities;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AgencyAdministration.ProgramTypes")]
    [BasedOnRow(typeof(Entities.ProgramTypesRow), CheckNames = true)]
    public class ProgramTypesColumns
    {
        [DisplayName("Program Name")]
        [QuickFilter]
        [Width(500)]
        public String Name { get; set; }
        [DisplayName("Description")]
        [QuickFilter]
        [Width(500)]
        public String Description { get; set; }
        [DisplayName("Program Template")]
        [QuickFilter]
        [Width(500)]
        public String ProgramNoteTemplateName { get; set; }
        [DisplayName("Active ?")]
        [QuickFilter]
        [Width(100)]
        public Boolean Status { get; set; }
    }
}