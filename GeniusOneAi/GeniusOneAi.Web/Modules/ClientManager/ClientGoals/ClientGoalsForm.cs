
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.ClientManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.DocumentManager;
    using GeniusOneAi.ClientManager;
    using GeniusOneAi.AgencyAdministration.Entities;
    using GeniusOneAi.CustomLookups;

    [FormScript("ClientManager.ClientGoals")]
    [BasedOnRow(typeof(Entities.ClientGoalsRow), CheckNames = true)]
    public class ClientGoalsForm
    {

        [Category("Active Dates")]
        [DisplayName("Monday")]
        public bool IsActiveMonday { get; set; }
        [DisplayName("Tuesday")]
        public bool IsActiveTuesday{ get; set; }
        [DisplayName("Wednesday")]
        public bool IsActiveWednesday { get; set; }
        [DisplayName("Thursday")]
        public bool IsActiveThursday { get; set; }
        [DisplayName("Friday")]
        public bool IsActiveFriday { get; set; }
        [DisplayName("Saturday")]
        public bool IsActiveSaturday { get; set; }
        [DisplayName("Sunday")]
        public bool IsActiveSunday { get; set; }
        [Category("Patient Goal")]
        [DisplayName("Goal Type")]
        [LookupEditor(typeof(ProgramNoteTypeLookup))]

        public String GoalType { get; set; }
        [DisplayName("Goal #")]
        [GoalEditor]
        public String Goal { get; set; }

        [DisplayName("Description")]
        
        [TextAreaEditor]
        public String Description { get; set; }
        [DisplayName("Status")]
        [HalfWidth]
        [ClientGoalEditor]
        public String Status { get; set; }
        [DisplayName("Completed")]
        [HalfWidth][LabelWidth(90)]
        public DateTime CompletionDate { get; set; }
        [Category("Interventions")]
        [ClientGoalInterventionsEditor]
        [DisplayName("")]
        [LabelWidth(0)]
        public List<ClientGoalInterventionsRow> ClientInterventionsList { get; set; }
        [Hidden]
        public Int32 ClientId { get; set; }
    }
}