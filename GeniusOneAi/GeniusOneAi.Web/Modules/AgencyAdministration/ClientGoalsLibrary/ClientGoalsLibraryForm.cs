using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.ClientManager;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.CustomLookups;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.ClientGoalsLibrary")]
    [BasedOnRow(typeof(ClientGoalsLibraryRow), CheckNames = true)]
    public class ClientGoalsLibraryForm
    {
        [DisplayName("Goal Type")]
        [LookupEditor(typeof(ProgramNoteTypeLookup))]

        public String GoalType { get; set; }
        [DisplayName("Description")]

        [TextAreaEditor]
        public String Description { get; set; }

        [Category("Interventions")]
        [ClientGoalInterventionsLibraryEditor]
        [DisplayName("")]
        [LabelWidth(0)]
        public List<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList { get; set; }
    }
}