
namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AgencyAdministration.ClientSiteTypes")]
    [BasedOnRow(typeof(Entities.ClientSiteTypesRow), CheckNames = true)]
    public class ClientSiteTypesColumns
    {
        [DisplayName("Site Name")]
        [QuickFilter]
        [Width(500)]
        public Int32 SiteTypeId { get; set; }
        [DisplayName("Client")]
        [QuickFilter]
        [Width(400)]
        public Int32 ClientId { get; set; }

    }
}