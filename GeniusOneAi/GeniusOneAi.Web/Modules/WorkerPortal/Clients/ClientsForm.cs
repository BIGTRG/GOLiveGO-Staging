
using GeniusOneAi.CustomEditors;
using GeniusOneAi.MiscEntities.Entities;

namespace GeniusOneAi.WorkerPortal.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;


    [FormScript("WorkerPortal.Clients")]
    [BasedOnRow(typeof(Entities.ClientsRow), CheckNames = true)]
    public class ClientsForm
    {
        [Tab("Patient Information")]
        [DisplayName("Site (Provider)")]
        public String SiteName { get; set; }
        [DisplayName("Original Service Date")]
        public DateTime OriginalServiceDate { get; set; }
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
        [Tab("Primary Insurance")]
        [LookupEditor(typeof(InsuranceTypesRow))]
        [DisplayName("Insurance Type")]
        public String PrimaryInsuranceTypeId { get; set; }
        [DisplayName("Policy Number")]
        public String PrimaryInsuranceNumber { get; set; }
        [DisplayName("Group Number")]
        public String PrimaryInsuranceGroup { get; set; }
        [DisplayName("Policy Holder")]
        public String PrimaryInsuranceHolder { get; set; }
        [DisplayName("Policy Holder DOB")]
        public String PrimaryInsuranceHolderDob { get; set; }
        [DisplayName("Relationship")]
        public String PrimaryInsuranceRelationship { get; set; }
        [DisplayName("Address")]
        public String PrimaryInsuranceAddress1 { get; set; }
        [DisplayName("City")]
        public String PrimaryInsuranceCity { get; set; }
        [DisplayName("State")]
        public String PrimaryInsuranceState { get; set; }
        [DisplayName("Zip Code")]
        public String PrimaryInsuranceZipCode { get; set; }
        [Tab("Secondary Insurance")]
        [LookupEditor(typeof(InsuranceTypesRow))]
        [DisplayName("Insurance Type")]
        public String SecondaryInsuranceTypeId { get; set; }
        [DisplayName("Policy Number")]
        public String SecondaryInsuranceNumber { get; set; }
        [DisplayName("Group Number")]
        public String SecondaryInsuranceGroup { get; set; }
        [DisplayName("Policy Holder")]
        public String SecondaryInsuranceHolder { get; set; }
        [DisplayName("Policy Holder DOB")]
        public String SecondaryInsuranceHolderDob { get; set; }
        [DisplayName("Relationship")]
        public String SecondaryInsuranceRelationship { get; set; }
        [DisplayName("Address")]
        public String SecondaryInsuranceAddress1 { get; set; }
        [DisplayName("City")]
        public String SecondaryInsuranceCity { get; set; }
        [DisplayName("State")]
        public String SecondaryInsuranceState { get; set; }
        [DisplayName("Zip Code")]
        public String SecondaryInsuranceZipCode { get; set; }

        [Tab("Enrollment Details")]
        [DisplayName("Record Number")]
        public String RecordNumber { get; set; }
        [DisplayName("Patient Control Number")]
        public String Pcn { get; set; }
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