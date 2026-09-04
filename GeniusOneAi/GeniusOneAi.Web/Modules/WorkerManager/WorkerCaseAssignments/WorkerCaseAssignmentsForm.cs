
namespace GeniusOneAi.WorkerManager.Forms
{ 
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using GeniusOneAi.Web.Modules.Common.CustomLookups;
    using GeniusOneAi.ClientManager;

    [FormScript("WorkerManager.WorkerCaseAssignments")]
    [BasedOnRow(typeof(Entities.WorkerCaseAssignmentsRow), CheckNames = true)]
    public class WorkerCaseAssignmentsForm
    {
        [DisplayName("Client")][Required]
        [LookupEditor(typeof(ClientsFilteredLookup))]
        public Int32 ClientId { get; set; }
        [DisplayName("Team Lead?")]
        public Boolean IsTeamLead { get; set; }
        [DisplayName("Authorization")]
        [Required]
        [LookupEditor(typeof(GeniusOneAi.ClientManager.Entities.ClientAuthorizationsRow), CascadeFrom = "ClientId", CascadeField = "ClientId")]
        public Int32 AuthorizationId { get; set; }
        [DisplayName("Date Assigned")]
        [Required]
        public DateTime AssignedDate { get; set; }
        [DisplayName("Date Unassigned")]
        public DateTime UnassignedDate { get; set; }
        [DisplayName("Notes")][TextAreaEditor]
        public String Notes { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }

    }
}