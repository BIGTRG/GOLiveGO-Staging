using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.ClientGoalInterventionsLibrary")]
    [BasedOnRow(typeof(ClientGoalInterventionsLibraryRow), CheckNames = true)]
    public class ClientGoalInterventionsLibraryColumns
    {
        [DisplayName("Intervention")]
        [EditLink]
        [QuickFilter]
        [Width(800)]
        public String InterDesc { get; set; }
    }
}