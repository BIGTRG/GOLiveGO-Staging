using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomLookups;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.ClientGoalsLibrary")]
    [BasedOnRow(typeof(ClientGoalsLibraryRow), CheckNames = true)]
    public class ClientGoalsLibraryColumns
    {
        [DisplayName("Goal Type")]
        [QuickFilter]
        [LookupEditor(typeof(ProgramNoteTypeLookup))]
        [Width(300)]
        public String GoalType { get; set; }
        [DisplayName("Goal Description")]
        [QuickFilter]
        [Width(800)]
        public String Description { get; set; }

    }
}