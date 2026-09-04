
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AgencyAdministration.ProgramTypes")]
    [BasedOnRow(typeof(Entities.ProgramTypesRow), CheckNames = true)]
    public class ProgramTypesForm
    {
        [DisplayName("Name")]
        //[ReadOnly(true)]
        public String Name { get; set; }
        [DisplayName("Description")]
        //[ReadOnly(true)]
        public String Description { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Status { get; set; }
        [DisplayName("Template")]
        public Int32 ProgramNoteTemplateId { get; set; }
        //[DisplayName("Default Approver")][WorkerManager.WorkersLookup]
        //public Int32 DefaultApproverId { get; set; }
        [DisplayName("Backup Approver")][WorkerManager.WorkersLookup]
        public Int32 BackupApproverId { get; set; }
        [DisplayName("Escalation(days)")][NumberFormatter]
        public Int32 EscalationMetric { get; set; }
    }
}