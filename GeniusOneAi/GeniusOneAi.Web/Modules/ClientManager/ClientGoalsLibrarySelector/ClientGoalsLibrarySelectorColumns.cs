using Serenity.ComponentModel;
using System;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.ClientManager.Columns
{
    [ColumnsScript("ClientManager.ClientGoalsLibrarySelector")]
    [BasedOnRow(typeof(ClientGoalsLibrarySelectorRow), CheckNames = true)]
    public class ClientGoalsLibrarySelectorColumns
    {
        [DisplayName("Code"), Width(70)]
        public String Code { get; set; }
        [DisplayName(""), Width(28)]
        public Boolean IsProtocol { get; set; }
        [DisplayName("Phase"), Width(170), EpisodePhaseEditor]
        public String Phase { get; set; }
        [DisplayName("Need"), Width(180), QuickFilter, LookupEditor("AgencyAdministration.CrisisNeeds")]
        public String NeedKey { get; set; }
        [DisplayName("Domain"), Width(160), QuickFilter]
        public String Domain { get; set; }
        [DisplayName("Presenting Problem / Trigger"), Width(280)]
        public String TriggerKey { get; set; }
        [DisplayName("Goal"), Width(460)]
        public String Description { get; set; }
        [DisplayName("Timeframe"), Width(110)]
        public String Timeframe { get; set; }
    }
}
