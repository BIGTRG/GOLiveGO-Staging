
namespace GeniusOneAi.ClientManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ClientManager.ClientAuthorizations")]
    [BasedOnRow(typeof(Entities.ClientAuthorizationsRow), CheckNames = true)]
    public class ClientAuthorizationsColumns
    {
        [DisplayName("Start Date")]
        [Width(200)]
        public DateTime StartDate { get; set; }
        [DisplayName("End Date")]
        [Width(200)]
        public DateTime EndDate { get; set; }
        [DisplayName("Units Granted")]
        [Width(200)]
        public Int32 UnitContactGranted { get; set; }
        [DisplayName("Type")]
        [Width(200)]
        public String AuthorizationType { get; set; }
        [DisplayName("Status")]
        [Width(200)]
        public String Status { get; set; }
        [DisplayName("Approval Status")]
        [Width(200)]
        public String ApprovalStatus { get; set; }
        [DisplayName("Approval Date")]
        [Width(200)]
        public DateTime ApprovalDate { get; set; }
        [DisplayName("Calculation Metric")]
        [Width(200)]
        public Decimal UnitCalculationMetric { get; set; }
    }
}