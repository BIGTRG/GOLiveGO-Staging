
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

        [Category("Encounter")]
        [DisplayName("Phase"), EpisodePhaseEditor, HalfWidth]
        public String Phase { get; set; }
        [DisplayName("Protocol goal (locked)"), HalfWidth, ReadOnly(true)]
        public bool IsProtocol { get; set; }
        [Hidden]
        public Int32 EpisodeId { get; set; }
        [Hidden]
        public Int32 LibraryGoalId { get; set; }
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