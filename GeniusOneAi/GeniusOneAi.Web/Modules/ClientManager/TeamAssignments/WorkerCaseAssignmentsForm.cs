
namespace GeniusOneAi.ClientManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.CustomEditors;
    using GeniusOneAi.WorkerManager;
    using GeniusOneAi.ClientManager;
    using GeniusOneAi.Web.Modules.Common.CustomLookups;

    [FormScript("ClientManager.WorkerCaseAssignments")]
    [BasedOnRow(typeof(Entities.WorkerCaseAssignmentsRow), CheckNames = true)]
    public class WorkerCaseAssignmentsForm
    {
        [DisplayName("Worker Name")]
        [Required]
        [GeniusOneAi.WorkerManager.WorkersLookup]
        public Int32 UserId { get; set; }

        [DisplayName("Team Lead?")]
        public Boolean IsTeamLead { get; set; }
        [DisplayName("Authorization")]
        [Required]
        [ClientAuthorizationLookup]
        public Int32 AuthorizationId { get; set; }
        [DisplayName("Date Assigned")]
        [Required]
        public DateTime AssignedDate { get; set; }
        [DisplayName("Date Unassigned")]
        public DateTime UnassignedDate { get; set; }
        [DisplayName("Notes")][TextAreaEditor]
        public String Notes { get; set; }
        [Hidden]
        public Int32 ClientId { get; set; }
       

    }
}