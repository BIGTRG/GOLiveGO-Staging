
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AgencyAdministration.ClientSiteTypes")]
    [BasedOnRow(typeof(Entities.ClientSiteTypesRow), CheckNames = true)]
    public class ClientSiteTypesForm
    {
        public Int32 SiteTypeId { get; set; }
        public Int32 ClientId { get; set; }
        public Int32 TenantId { get; set; }
    }
}