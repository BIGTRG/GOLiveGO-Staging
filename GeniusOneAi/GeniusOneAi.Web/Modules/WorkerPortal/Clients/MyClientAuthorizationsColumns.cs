
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.WorkerPortal.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerPortal.MyClientAuthorizations")]
    [BasedOnRow(typeof(Entities.ClientAuthorizationsRow), CheckNames = true)]
    public class MyClientAuthorizationsColumns
    {
        [DisplayName("Start Date")]
        [QuickFilter(true)]
        public DateTime StartDate { get; set; }
        [DisplayName("End Date")]
        [QuickFilter(true)]
        public DateTime EndDate { get; set; }
        [DisplayName("Units Granted")]
        [Width(200)]
        public Int32 UnitContactGranted { get; set; }
        [DisplayName("Authorization Type")]
        [Width(200)]
        public String AuthorizationType { get; set; }
        [DisplayName("System Status")][SystemStatusEditor]
        [Width(200)]
        public String Status { get; set; }
        [DisplayName("Approval Status")]
        [Width(200)]
        public String ApprovalStatus { get; set; }
        [DisplayName("Approval Date")]
        [Width(200)]
        public DateTime ApprovalDate { get; set; }
    }
}