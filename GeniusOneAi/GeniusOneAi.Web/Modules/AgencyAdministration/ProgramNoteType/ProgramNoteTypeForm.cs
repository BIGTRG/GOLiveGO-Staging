using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.AgencyAdministration.Entities;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.ProgramNoteType")]
    [BasedOnRow(typeof(ProgramNoteTypeRow), CheckNames = true)]
    public class ProgramNoteTypeForm
    {
        [DisplayName("Enabled")]
        public bool IsEnabled { get; set; }
        [DisplayName("Type Name")]
        public string ProgramNoteTypeName { get; set; }
        //[DisplayName("Type Order")]
        //public int ProgramNoteTypeOrder { get; set; }
    }
}