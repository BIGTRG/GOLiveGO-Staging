using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomLookups;

namespace GeniusOneAi.ClientManager.Columns
{
    [ColumnsScript("ClientManager.ClientGoalsLibrarySelector")]
    [BasedOnRow(typeof(ClientGoalsLibrarySelectorRow), CheckNames = true)]
    public class ClientGoalsLibrarySelectorColumns
    {
        [DisplayName("Goal Type")]
        [Width(200)]
        [LookupEditor(typeof(ProgramNoteTypeLookup))]
        [QuickFilter]
        public String GoalType { get; set; }
        [DisplayName("Goal Description")]
        [Width(800)]
        [QuickFilter]
        public String Description { get; set; }
    }
}