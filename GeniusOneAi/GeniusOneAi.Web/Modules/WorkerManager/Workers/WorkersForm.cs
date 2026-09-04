
using System.Drawing;
using Serenity.Data.Mapping;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.Workers")]
   // [BasedOnRow(typeof(Entities.WorkersRow), CheckNames = true)]
    [BasedOnRow(typeof(Entities.WorkersRow))]
    public class WorkersForm
    {
       [Tab("General")]
       [DisplayName("Employee Number")]
        public String EmployeeId { get; set; }
        [DisplayName("NPI Number")]
        public String Npi{ get; set; }
        [DisplayName("Taxonomy")]
        public String Taxonomy { get; set; }
        [DisplayName("First Name")]
        public String FirstName { get; set; }
        [DisplayName("Middle Name")]
        public String MiddleName { get; set; }
        [DisplayName("Last Name")]
        public String LastName { get; set; }
        [DisplayName("Address 1")]
        public String Address1 { get; set; }
        [DisplayName("Address 2")]
        public String Address2 { get; set; }
        [DisplayName("City")]
        public String City { get; set; }
        [DisplayName("State")][LookupEditor(typeof(GeniusOneAi.MiscEntities.Entities.UsStateTypesRow))]
        public String State { get; set; }
        [DisplayName("Zipcode")]
        public String Zipcode { get; set; }
        [DisplayName("Primary Phone")]
        public String PrimaryPhone { get; set; }
        [DisplayName("Cell Phone")]
        public String SecondaryPhone { get; set; }
        [Tab("Human Resources")]
        [DisplayName("Hire Date")]
        public DateTime HireDate { get; set; }
        [DisplayName("Emergency Contact")]
        public String EmergencyContact { get; set; }
        [DisplayName("Contact Phone")]
        public String EmergencyContactPhone { get; set; }
        [DisplayName("SSN")]
        public String SocialSecurityNumber { get; set; }
        [DisplayName("License Number")]
        public String DriverLicenseNumber { get; set; }
        [DisplayName("License State")]
        [LookupEditor(typeof(GeniusOneAi.MiscEntities.Entities.UsStateTypesRow))]
        public String DriverLicenseState { get; set; }
        [DisplayName("License Expiration")]
        public DateTime DriverLicenseExpiration { get; set; }
        [DisplayName("Type")]
        [LookupEditor(typeof(GeniusOneAi.AgencyAdministration.Entities.WorkerTypesRow))]
        public String Type { get; set; }
        [DisplayName("Worker Classification")]
        [WorkerClassificationEditor]
        public String Classification { get; set; }
        [Tab("Notes")]
        [DisplayName("Notes")]
        [LabelWidth(50)]
        [TextAreaEditor(Rows = 20)]
        public String Notes { get; set; }
        [Tab("e-Signature")]
        [DisplayName("e-Signature Text")]
        [ReadOnly(true)]
        
        public String ESignaturePlainText { get; set; }
        [DisplayName("e-Signature")]
        [ReadOnly(true)]
        [Hidden]
        public String ESignatureBase64 { get; set; }
        [DisplayName("Is Verified?")]
        public Boolean SignatureVerified { get; set; }

    }
}