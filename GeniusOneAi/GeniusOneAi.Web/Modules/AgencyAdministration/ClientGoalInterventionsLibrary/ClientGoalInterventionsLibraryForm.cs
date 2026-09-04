using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.ClientGoalInterventionsLibrary")]
    [BasedOnRow(typeof(ClientGoalInterventionsLibraryRow), CheckNames = true)]
    public class ClientGoalInterventionsLibraryForm
    {
        [DisplayName("Intervention")]
        [EditLink]
        [TextAreaEditor]
        public string InterDesc { get; set; }

        //public int TenantId { get; set; }
    }
}