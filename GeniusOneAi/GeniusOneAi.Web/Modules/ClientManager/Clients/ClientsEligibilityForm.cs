
using GeniusOneAi.AgencyAdministration.Entities;
using GeniusOneAi.ClientManager.Entities;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.MiscEntities.Entities;

namespace GeniusOneAi.ClientManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ClientManager.ClientEligibility")]
    [BasedOnRow(typeof(Entities.ClientsRow), CheckNames = true)]
    public class ClientsEligibilityForm
    {
        [Tab("Patient Demographics")]
        [DisplayName("Record Number")]
        public String RecordNumber { get; set; }
        //[DisplayName("Insurance Type")]
        //[LookupEditor(typeof(InsuranceTypesRow))]
        //public Int32 InsuranceTypeId { get; set; }
        //[DisplayName("Insurance Number")]
        //public String InsuranceNumber { get; set; }
        [DisplayName("First Name")]
        public String FirstName { get; set; }
        [DisplayName("Middle Name")]
        public String MiddleName { get; set; }
        [DisplayName("Last Name")]
        public String LastName { get; set; }
        [DisplayName("Birth Date")]
        public DateTime BirthDate { get; set; }
        [DisplayName("Race")]
        [RaceEditor]
        public String Race { get; set; }
        [DisplayName("Gender")]
        [GenderEditor]
        public String Gender { get; set; }
        [DisplayName("Address1")]
        public String Address1 { get; set; }
        [DisplayName("Address2")]
        public String Address2 { get; set; }
        [DisplayName("City")]
        public String City { get; set; }
        [DisplayName("State")]
        [LookupEditor(typeof(UsStateTypesRow))]
        public String State { get; set; }
        [DisplayName("Zipcode")]
        public String Zipcode { get; set; }
        [DisplayName("County")]
        public String County { get; set; }
        [DisplayName("Primary Phone")]
        public String PrimaryPhone { get; set; }
        [DisplayName("Secondary Phone")]
        public String SecondaryPhone { get; set; }
        [Tab("Enrollment Details")]
        [DisplayName("Diagnosis Date")]
        public DateTime DiagnosisDate { get; set; }
        [DisplayName("Plan Expiration Date")]
        public DateTime PlanExpirationDate { get; set; }
        [DisplayName("Admission Date")]
        public DateTime AdmissionDate { get; set; }
        [DisplayName("Discharge Date")]
        public DateTime DischargeDate { get; set; }
        [DisplayName("Referral Date")]
        public DateTime ReferralDate { get; set; }
        [DisplayName("Referral Source")]
        [ReferralSourceEditor]
        public String ReferralSource { get; set; }
        [DisplayName("Diagnosis Notes")]
        public String DiagnosisNotes { get; set; }
        [DisplayName("Guardian Name")]
        public String GuardianName { get; set; }
        [DisplayName("Notes")]
        [TextAreaEditor]
        public String Notes { get; set; }
        [DisplayName("System Status")]
        [SystemStatusEditor]
        public String SystemStatus { get; set; }
        [DisplayName("Patient Status")]
        [SystemStatusEditor]
        public String ClientStatus { get; set; }

    }
}