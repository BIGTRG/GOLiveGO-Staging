using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.CustomLookups;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.ClientGoalsLibrary")]
    [BasedOnRow(typeof(ClientGoalsLibraryRow), CheckNames = true)]
    public class ClientGoalsLibraryForm
    {
        [Tab("Goal")]
        [DisplayName("Code"), HalfWidth, ReadOnly(true)]
        public String Code { get; set; }
        [DisplayName("Goal Type"), LookupEditor(typeof(ProgramNoteTypeLookup)), HalfWidth]
        public String GoalType { get; set; }
        [DisplayName("Encounter Phase"), EpisodePhaseEditor, HalfWidth, Required]
        public String Phase { get; set; }
        [DisplayName("Need it answers"), LookupEditor("AgencyAdministration.CrisisNeeds"), HalfWidth]
        public String NeedKey { get; set; }
        [DisplayName("Domain"), HalfWidth]
        public String Domain { get; set; }
        [DisplayName("Lead"), HalfWidth]
        public String LeadRole { get; set; }
        [DisplayName("Presenting problem / trigger this goal answers"), TextAreaEditor]
        public String TriggerKey { get; set; }
        [DisplayName("Goal (framed as reduction of the acute crisis)"), TextAreaEditor, Required]
        public String Description { get; set; }
        [DisplayName("Effectiveness measure (how we know the acute problem reduced)"), TextAreaEditor]
        public String EffectivenessMeasure { get; set; }
        [DisplayName("Timeframe"), HalfWidth]
        public String Timeframe { get; set; }
        [DisplayName("Resource type for 'where / who'"), ResourceTypeEditor, HalfWidth]
        public String ResourceType { get; set; }
        [DisplayName("Protocol goal (locked on the client, required by the pathway)"), HalfWidth]
        public bool IsProtocol { get; set; }
        [DisplayName("Active"), HalfWidth]
        public bool IsActive { get; set; }
        [DisplayName("Origin"), GoalOriginEditor, HalfWidth]
        public String Origin { get; set; }
        [DisplayName("Continues into (next-phase goal)"), LookupEditor("AgencyAdministration.ClientGoalsLibrary"), HalfWidth]
        public Int32 LinkedNextPhaseGoalId { get; set; }

        [Tab("Interventions")]
        [ClientGoalInterventionsLibraryEditor, DisplayName(""), LabelWidth(0)]
        public List<ClientGoalInterventionsLibraryRow> ClientInterventionsLibraryList { get; set; }

        [Tab("Outcomes and Questions")]
        [LibraryGoalOutcomesEditor, DisplayName(""), LabelWidth(0)]
        public List<LibraryGoalOutcomesRow> OutcomesList { get; set; }
    }
}
