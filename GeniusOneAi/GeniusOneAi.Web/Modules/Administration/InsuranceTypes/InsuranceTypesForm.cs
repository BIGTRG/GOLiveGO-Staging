
namespace GeniusOneAi.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.MiscEntities.Entities;
    using GeniusOneAi.CustomEditors;

    [FormScript("Administration.InsuranceTypes")]
    [BasedOnRow(typeof(Entities.InsuranceTypesRow), CheckNames = true)]
    public class InsuranceTypesForm
    {
        [Category("Details")]
        [DisplayName("Name")]
        public String Name { get; set; }
        [DisplayName("Description")]
        [TextAreaEditor]
        public String Description { get; set; }
        [DisplayName("Address1")]
        public String Address1 { get; set; }
        [DisplayName("Address2")]
        public String Address2 { get; set; }
        [DisplayName("City")]
        [HalfWidth]
     
        public String City { get; set; }
        [DisplayName("State")]
        [HalfWidth]

        [LookupEditor(typeof(UsStateTypesRow))]
        public String State { get; set; }
        [DisplayName("Zip Code")]
        [HalfWidth]

        public String Zipcode { get; set; }
        [DisplayName("County")]
        [HalfWidth]

        public String County { get; set; }
        [DisplayName("Phone")]
        [HalfWidth]
        public String PrimaryPhone { get; set; }
        [DisplayName("Type")]
        [HalfWidth]
        [LabelWidth(40)]
        [InsuranceEntityTypeEditor]
        public String Type { get; set; }
        [Category("Billing API Details")]
        [DisplayName("Payer ID")]
        public String PayerId { get; set; }
        
        [DisplayName("Status")]
        public Boolean Status { get; set; }

    }
}