
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.WorkerSites")]
    [BasedOnRow(typeof(Entities.WorkerSitesRow), CheckNames = true)]
    public class WorkerSitesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserSiteId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 SiteTypeId { get; set; }
        public Int32 TenantId { get; set; }
    }
}