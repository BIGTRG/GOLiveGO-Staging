
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.WorkerPortal.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerPortal.ClientAuthorizations")]
    [BasedOnRow(typeof(Entities.ClientAuthorizationsRow), CheckNames = true)]
    public class MyClientAuthorizationsForm
    { 
        [DisplayName("Start Date")]
        public DateTime StartDate { get; set; }
        [DisplayName("End Date")]
        public DateTime EndDate { get; set; }
        [DisplayName("Units Granted")]
        public Int32 UnitContactGranted { get; set; }
        [DisplayName("Type")][AuthorizationTypeEditor]
        public String AuthorizationType { get; set; }
        [DisplayName("Status")][AuthorizationStatusEditor]
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