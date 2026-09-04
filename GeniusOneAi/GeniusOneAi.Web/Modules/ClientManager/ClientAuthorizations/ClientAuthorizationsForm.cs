
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

    [FormScript("ClientManager.ClientAuthorizations")]
    [BasedOnRow(typeof(Entities.ClientAuthorizationsRow), CheckNames = true)]
    public class ClientAuthorizationsForm
    {
        [DisplayName("Program Code")]
        [Required]
        [LookupEditor("GeniusOneAi.ProgramCodeTypes")]
        public Int32 ProgramCodeTypeId { get; set; }
        [DisplayName("Start Date")]
        [Required]
        public DateTime StartDate { get; set; }
        [DisplayName("End Date")]
        [Required]
        public DateTime EndDate { get; set; }
        [DisplayName("Units Granted")]
        [Required]
        public Int32 UnitContactGranted { get; set; }
        [DisplayName("Type")][AuthorizationTypeEditor]
        [Required]
        public String AuthorizationType { get; set; }
        [DisplayName("Status")][AuthorizationStatusEditor]
        [Required]
        public String Status { get; set; }
        [DisplayName("Approval Status")][AuthorizationApprovalEditor]
        public String ApprovalStatus { get; set; }
        [DisplayName("Approval Date")]
        public DateTime ApprovalDate { get; set; }
        //[DisplayName("Calculation Metric")]
        //public Decimal UnitCalculationMetric { get; set; }
        [Hidden]
        public Int32 ClientId { get; set; }
    }
}