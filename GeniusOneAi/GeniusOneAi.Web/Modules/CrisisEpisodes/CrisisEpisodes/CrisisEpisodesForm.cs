using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.CrisisEpisodes.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("CrisisEpisodes.CrisisEpisodes")]
    [BasedOnRow(typeof(Entities.CrisisEpisodesRow), CheckNames = true)]
    public class CrisisEpisodesForm
    {
        [Category("Episode")]
        [DisplayName("Presenting Trigger"), TextAreaEditor(Rows = 3)]
        public String PresentingTrigger { get; set; }
        [DisplayName("Phase"), EpisodePhaseEditor, HalfWidth]
        public String Phase { get; set; }
        [DisplayName("Encounters"), HalfWidth, ReadOnly(true)]
        public Int32 EncounterCount { get; set; }
        [DisplayName("Opened"), HalfWidth, ReadOnly(true)]
        public DateTime OpenedAt { get; set; }
        [DisplayName("Projected Discharge"), HalfWidth]
        public DateTime ProjectedDischarge { get; set; }
        [DisplayName("Clinician"), LookupEditor(typeof(GeniusOneAi.Web.Modules.Common.CustomLookups.WorkersFilteredLookup))]
        public Int32 ClinicianId { get; set; }
        [Category("Closure")]
        [DisplayName("Closed"), HalfWidth, ReadOnly(true)]
        public DateTime ClosedAt { get; set; }
        [DisplayName("Disposition"), EpisodeDispositionEditor, HalfWidth]
        public String Disposition { get; set; }
        [DisplayName("Notes"), TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        [Hidden]
        public Int32 ClientId { get; set; }
    }
}
