
using GeniusOneAi.Administration.Entities;
using GeniusOneAi.AgencyAdministration.Entities;
using GeniusOneAi.ClientManager.Entities;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.MiscEntities.Entities;
using InsuranceTypesRow = GeniusOneAi.MiscEntities.Entities.InsuranceTypesRow;

namespace GeniusOneAi.ClientManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ClientManager.Clients")]
    [BasedOnRow(typeof(Entities.ClientsRow), CheckNames = true)]
    public class ClientsForm
    {
        [Tab("Patient Information")]
        [DisplayName("Record Number")]
        [Required]
        public String RecordNumber { get; set; }
        [DisplayName("Patient Control Number")]
        [Required]
        public String Pcn { get; set; }
        [DisplayName("First Name")]
        [Required]

        public String FirstName { get; set; }
        [DisplayName("Middle Name")]
        public String MiddleName { get; set; }
        [DisplayName("Last Name")]
        [Required]
        public String LastName { get; set; }
        [DisplayName("Maiden Name")]
        public String MaidenName { get; set; }
        [DisplayName("Also known as")]
        public String OtherName { get; set; }
        [DisplayName("Date of Birth")]
        public DateTime BirthDate { get; set; }
        [DisplayName("Gender")]
        [GenderEditor]
        public String Gender { get; set; }
        [DisplayName("Race")]
        [RaceEditor]
        public String Race { get; set; }
       
        [DisplayName("Ethnicity")]
        public String Ethnicity { get; set; }
        [DisplayName("Marital Status")]
        [MaritalStatusEditor]
        public String MaritalStatus { get; set; }
        [DisplayName("Social Security #")]
        public String SocialSecurityNum { get; set; }
        
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
        
        [DisplayName("Country of Birth")]
        public String CountryOfBirth { get; set; }
        [DisplayName("Cell Phone")]
        public String CellPhone { get; set; }
        [DisplayName("Home Phone")]
        public String PrimaryPhone { get; set; }
        [DisplayName("Other Phone")]
        public String SecondaryPhone { get; set; }
        [DisplayName("Email")]
        public String Email { get; set; }
        [DisplayName("Veteran")]
        public Boolean IsVeteran { get; set; }
        [DisplayName("Primary Language")]
        public String PrimaryLanguage { get; set; }
        [DisplayName("Spouse/Next of Kin/Guardian (if minor)")]
        public String NextOfKinName { get; set; }
        [DisplayName("Phone")]
        public String NextOfKinPhone { get; set; }
        [DisplayName("Mother's Name")]
        public String MothersName { get; set; }
        [DisplayName("Father's Name")]
        public String FathersName { get; set; }
        [DisplayName("Driver’s License No. or State ID No.")]
        public String LicenseStateId { get; set; }
        [DisplayName("Employment Status")]
        [EmploymentStatusEditor]
        public String EmploymentStatus { get; set; }
        [DisplayName("Number in Household")]
        public Int16 NumberInHouse { get; set; }
        [DisplayName("Living Arrangements")]
        [LivingArrangmentsEditor]
        public String LivingArrangements { get; set; }
        [DisplayName("Gross Family Income")]
        [MaskedEditor(Mask = "9999.99")]
        public decimal GrossIncomeDollar { get; set; }
        [DisplayName(" ")]
        [IncomePerEditor]
        public String GrossIncomePer { get; set; }
        [DisplayName("Number of persons dependent on Gross Family Income")]
        public Int16 NumberDepenentIncome { get; set; }
        [DisplayName("Education Level")]
        public String EducationLevel { get; set; }
        [DisplayName("If student under the age 16, Name of School")]
        public String NameOfSchool { get; set; }
        [Tab("Emergency Information")]
        [DisplayName("Emergency Person")]
        public String EmergencyPerson { get; set; }
        [DisplayName("Phone")]
        public String EmergencyPhone { get; set; }
        [DisplayName("Preferred Physician")]
        public String PreferredPhysician { get; set; }
        [DisplayName("Address")]
        public String PreferredPhysicianAddress { get; set; }
        [DisplayName("County")]
        public String PreferredPhysicianCounty { get; set; }
        [DisplayName("Phone")]
        public String PreferredPhysicianPhone { get; set; }
        [DisplayName("Pharmacy Used")]
        public String PharmacyUsed { get; set; }
        [DisplayName("Phone")]
        public String PharmacyPhone { get; set; }
        [DisplayName("Any known allergies?")]
        [YesNoEditor]
        public String Allergies { get; set; }
        [DisplayName("If yes, specify allergy")]
        public String AllergiesMoreInfo { get; set; }

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
        public DateTime PrimaryInsuranceHolderDob { get; set; }
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
        public DateTime SecondaryInsuranceHolderDob { get; set; }
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
        [DisplayName("Site (Provider)")]
        [SitesTypesFormatter]
        public String SiteTypeId { get; set; }
        [DisplayName("Original Service Date")]
        public DateTime OriginalServiceDate { get; set; }
        
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