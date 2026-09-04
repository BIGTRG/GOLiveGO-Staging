
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.CustomEditors;
    using GeniusOneAi.MiscEntities.Entities;

    [FormScript("AgencyAdministration.SitesTypes")]
    [BasedOnRow(typeof(Entities.SitesTypesRow), CheckNames = true)]
    public class SitesTypesForm
    {
        [Category("Details")]
        [DisplayName("Name")]
        [LabelWidth(100)]
        public String Name { get; set; }
        [DisplayName("Description")]
        [TextAreaEditor]
        [LabelWidth(100)]
        public String Description { get; set; }
        [DisplayName("NPI")]
        [LabelWidth(100)]
        public String Npi { get; set; }
        [DisplayName("Tax ID")]
        [LabelWidth(100)]
        public String TaxId { get; set; }
        [DisplayName("Taxonomy")]
        [LabelWidth(100)]
        public String Taxonomy { get; set; }
        [DisplayName("Address1")]
        [LabelWidth(100)]
        public String Address1 { get; set; }
        [DisplayName("Address2")]
        [LabelWidth(100)]
        public String Address2 { get; set; }
        [DisplayName("City")]
        [LabelWidth(100)]
        [HalfWidth]

        public String City { get; set; }
        [DisplayName("State")]
        [LabelWidth(100)]
        [HalfWidth]

        [LookupEditor(typeof(UsStateTypesRow))]
        public String State { get; set; }
        [DisplayName("Zip Code")]
        [HalfWidth]
        [LabelWidth(100)]

        public String Zipcode { get; set; }
        [DisplayName("Phone")]
        [HalfWidth]
        [LabelWidth(100)]
        public String PrimaryPhone { get; set; }

        [DisplayName("Status")]
        [LabelWidth(100)]
        public Boolean Status { get; set; }
    }
}