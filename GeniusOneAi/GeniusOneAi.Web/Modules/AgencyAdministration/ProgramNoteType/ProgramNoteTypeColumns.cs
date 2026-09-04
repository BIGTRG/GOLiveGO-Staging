using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.AgencyAdministration.Entities;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.ProgramNoteType")]
    [BasedOnRow(typeof(ProgramNoteTypeRow), CheckNames = true)]
    public class ProgramNoteTypeColumns
    {
        [DisplayName("Enabled")]
        [Width(100)]
        public bool IsEnabled { get; set; }
        [DisplayName("Type Name")]
        [Width(500)]
        public string ProgramNoteTypeName { get; set; }
        //[DisplayName("Type Order")]
        //[Width(100)]
        //public int ProgramNoteTypeOrder { get; set; }
    }
}