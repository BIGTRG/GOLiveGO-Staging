
namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AgencyAdministration.ProgramNoteTemplates")]
    [BasedOnRow(typeof(Entities.ProgramNoteTemplatesRow), CheckNames = true)]
    public class ProgramNoteTemplatesColumns
    {
        [DisplayName("Template Name")]
        [Width(500)]
        public String Name { get; set; }
        [DisplayName("Active ?")]
        [Width(100)]
        public Boolean Status { get; set; }
      
    }
}