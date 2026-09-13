using Serenity.ComponentModel;
using System;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.ClientGoalsLibrary")]
    [BasedOnRow(typeof(ClientGoalsLibraryRow), CheckNames = true)]
    public class ClientGoalsLibraryColumns
    {
        [DisplayName("Code"), Width(70)]
        public String Code { get; set; }
        [DisplayName("Phase"), Width(190), QuickFilter, EpisodePhaseEditor]
        public String Phase { get; set; }
        [DisplayName(""), Width(28)]
        public Boolean IsProtocol { get; set; }
        [DisplayName("Need"), Width(200)]
        public String NeedLabel { get; set; }
        [DisplayName("Need"), Hidden, QuickFilter, LookupEditor("AgencyAdministration.CrisisNeeds")]
        public String NeedKey { get; set; }
        [DisplayName("Domain"), Width(170), QuickFilter]
        public String Domain { get; set; }
        [DisplayName("Presenting Problem / Trigger"), Width(300)]
        public String TriggerKey { get; set; }
        [DisplayName("Goal"), Width(480)]
        public String Description { get; set; }
        [DisplayName("Timeframe"), Width(110)]
        public String Timeframe { get; set; }
        [DisplayName("Lead"), Width(80)]
        public String LeadRole { get; set; }
        [DisplayName("Next"), Width(60)]
        public String LinkedNextPhaseGoalCode { get; set; }
        [DisplayName("Origin"), Width(90), QuickFilter, GoalOriginEditor]
        public String Origin { get; set; }
        [DisplayName("Active"), Width(60)]
        public Boolean IsActive { get; set; }
    }
}
