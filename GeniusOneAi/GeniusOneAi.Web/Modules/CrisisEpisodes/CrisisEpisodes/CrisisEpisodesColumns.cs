namespace GeniusOneAi.CrisisEpisodes.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("CrisisEpisodes.CrisisEpisodes")]
    [BasedOnRow(typeof(Entities.CrisisEpisodesRow), CheckNames = true)]
    public class CrisisEpisodesColumns
    {
        [DisplayName("#"), Width(60), AlignRight]
        public Int32 EpisodeId { get; set; }
        [DisplayName("Client"), Width(180)]
        public String ClientName { get; set; }
        [DisplayName("Record #"), Width(100)]
        public String ClientRecordNumber { get; set; }
        [DisplayName("Opened"), Width(130), DisplayFormat("g")]
        public DateTime OpenedAt { get; set; }
        [DisplayName("Presenting Trigger"), Width(300)]
        public String PresentingTrigger { get; set; }
        [DisplayName("Phase"), Width(190)]
        public String Phase { get; set; }
        [DisplayName("Encounters"), Width(90), AlignRight]
        public Int32 EncounterCount { get; set; }
        [DisplayName("Projected Discharge"), Width(130)]
        public DateTime ProjectedDischarge { get; set; }
        [DisplayName("Closed"), Width(130), DisplayFormat("g")]
        public DateTime ClosedAt { get; set; }
        [DisplayName("Disposition"), Width(130)]
        public String Disposition { get; set; }
        [DisplayName("Opened By"), Width(150)]
        public String OpenedByName { get; set; }
    }
}
