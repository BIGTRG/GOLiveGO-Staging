
namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.WorkerSites")]
    [BasedOnRow(typeof(Entities.WorkerSitesRow), CheckNames = true)]
    public class WorkerSitesForm
    {
        public Int32 UserId { get; set; }
        public Int32 SiteTypeId { get; set; }
        public Int32 TenantId { get; set; }
    }
}