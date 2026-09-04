
namespace GeniusOneAi.AgencyAdministration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.MiscEntities.Entities;

    [ColumnsScript("AgencyAdministration.SitesTypes")]
    [BasedOnRow(typeof(Entities.SitesTypesRow), CheckNames = true)]
    public class SitesTypesColumns
    {
        [DisplayName("Site Name")]
        [QuickFilter]
        [Width(400)]
        public String Name { get; set; }
        [DisplayName("City")]
        [Width(200)]
        public String City { get; set; }
        [DisplayName("State")]
        [Width(200)]
        public String State { get; set; }
        [DisplayName("NPI")]
        [QuickFilter]
        [Width(100)]
        public String Npi { get; set; }
        [DisplayName("Tax ID")]
        [QuickFilter]
        [Width(100)]
        public String TaxId{ get; set; }
        [DisplayName("Taxonomy")]
        [QuickFilter]
        [Width(100)]
        public String Taxonomy { get; set; }
        [DisplayName("Active ?")]
        [QuickFilter]
        [Width(100)]
        public Boolean Status { get; set; }

    }
}