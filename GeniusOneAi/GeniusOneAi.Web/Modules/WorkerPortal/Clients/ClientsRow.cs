
namespace GeniusOneAi.WorkerPortal.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[vMyClients]")]
    [DisplayName("Clients"), InstanceName("Clients")]
    [ReadPermission(PermissionKeys.MyPatients)]
    [ModifyPermission(PermissionKeys.MyPatients)]
    public sealed class ClientsRow : Row<ClientsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Id"), Identity, IdProperty]
        public int? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("First Name"), Size(50), QuickSearch]
        public string FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("Middle Name"), Size(50)]
        public string MiddleName
        {
            get => fields.MiddleName[this];
            set => fields.MiddleName[this] = value;
        }

        [DisplayName("Last Name"), Size(50)]
        [LookupInclude]
        public string LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }

        [DisplayName("Maiden Name"), Size(50)]
        public string MaidenName
        {
            get => fields.MaidenName[this];
            set => fields.MaidenName[this] = value;
        }

        [DisplayName("Other Name"), Size(100)]
        public string OtherName
        {
            get => fields.OtherName[this];
            set => fields.OtherName[this] = value;
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        [DisplayName("Race"), Size(50)]
        public string Race
        {
            get => fields.Race[this];
            set => fields.Race[this] = value;
        }

        [DisplayName("Gender"), Size(10)]
        public string Gender
        {
            get => fields.Gender[this];
            set => fields.Gender[this] = value;
        }

        [DisplayName("Ethnicity"), Size(50)]
        public string Ethnicity
        {
            get => fields.Ethnicity[this];
            set => fields.Ethnicity[this] = value;
        }

        [DisplayName("Marital Status"), Size(25)]
        public string MaritalStatus
        {
            get => fields.MaritalStatus[this];
            set => fields.MaritalStatus[this] = value;
        }

        [DisplayName("Social Security Num"), Size(15)]
        public string SocialSecurityNum
        {
            get => fields.SocialSecurityNum[this];
            set => fields.SocialSecurityNum[this] = value;
        }

        [DisplayName("Address1"), Size(50)]
        public string Address1
        {
            get => fields.Address1[this];
            set => fields.Address1[this] = value;
        }

        [DisplayName("Address2"), Size(50)]
        public string Address2
        {
            get => fields.Address2[this];
            set => fields.Address2[this] = value;
        }

        [DisplayName("City"), Size(50)]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(2)]
        public string State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zipcode"), Size(10)]
        public string Zipcode
        {
            get => fields.Zipcode[this];
            set => fields.Zipcode[this] = value;
        }

        [DisplayName("County"), Size(100)]
        public string County
        {
            get => fields.County[this];
            set => fields.County[this] = value;
        }

        [DisplayName("Primary Phone"), Size(15)]
        public string PrimaryPhone
        {
            get => fields.PrimaryPhone[this];
            set => fields.PrimaryPhone[this] = value;
        }

        [DisplayName("Secondary Phone"), Size(15)]
        public string SecondaryPhone
        {
            get => fields.SecondaryPhone[this];
            set => fields.SecondaryPhone[this] = value;
        }

        [DisplayName("Cell Phone"), Size(15)]
        public string CellPhone
        {
            get => fields.CellPhone[this];
            set => fields.CellPhone[this] = value;
        }

        [DisplayName("Email"), Size(100)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Country Of Birth"), Size(50)]
        public string CountryOfBirth
        {
            get => fields.CountryOfBirth[this];
            set => fields.CountryOfBirth[this] = value;
        }

        [DisplayName("Is Veteran")]
        public int? IsVeteran
        {
            get => fields.IsVeteran[this];
            set => fields.IsVeteran[this] = value;
        }

        [DisplayName("Primary Language"), Size(50)]
        public string PrimaryLanguage
        {
            get => fields.PrimaryLanguage[this];
            set => fields.PrimaryLanguage[this] = value;
        }

        [DisplayName("Next Of Kin Name"), Size(100)]
        public string NextOfKinName
        {
            get => fields.NextOfKinName[this];
            set => fields.NextOfKinName[this] = value;
        }

        [DisplayName("Next Of Kin Phone"), Size(15)]
        public string NextOfKinPhone
        {
            get => fields.NextOfKinPhone[this];
            set => fields.NextOfKinPhone[this] = value;
        }

        [DisplayName("Mothers Name"), Size(100)]
        public string MothersName
        {
            get => fields.MothersName[this];
            set => fields.MothersName[this] = value;
        }

        [DisplayName("Fathers Name"), Size(100)]
        public string FathersName
        {
            get => fields.FathersName[this];
            set => fields.FathersName[this] = value;
        }

        [DisplayName("License State Id"), Size(50)]
        public string LicenseStateId
        {
            get => fields.LicenseStateId[this];
            set => fields.LicenseStateId[this] = value;
        }

        [DisplayName("Employment Status"), Size(25)]
        public string EmploymentStatus
        {
            get => fields.EmploymentStatus[this];
            set => fields.EmploymentStatus[this] = value;
        }

        [DisplayName("Number In House")]
        public int? NumberInHouse
        {
            get => fields.NumberInHouse[this];
            set => fields.NumberInHouse[this] = value;
        }

        [DisplayName("Living Arrangements"), Size(25)]
        public string LivingArrangements
        {
            get => fields.LivingArrangements[this];
            set => fields.LivingArrangements[this] = value;
        }

        [DisplayName("Gross Income Dollar"), Size(18), Scale(2)]
        public decimal? GrossIncomeDollar
        {
            get => fields.GrossIncomeDollar[this];
            set => fields.GrossIncomeDollar[this] = value;
        }

        [DisplayName("Gross Income Per"), Size(50)]
        public string GrossIncomePer
        {
            get => fields.GrossIncomePer[this];
            set => fields.GrossIncomePer[this] = value;
        }

        [DisplayName("Number Depenent Income"), Size(50)]
        public string NumberDepenentIncome
        {
            get => fields.NumberDepenentIncome[this];
            set => fields.NumberDepenentIncome[this] = value;
        }

        [DisplayName("Education Level"), Size(50)]
        public string EducationLevel
        {
            get => fields.EducationLevel[this];
            set => fields.EducationLevel[this] = value;
        }

        [DisplayName("Name Of School"), Size(100)]
        public string NameOfSchool
        {
            get => fields.NameOfSchool[this];
            set => fields.NameOfSchool[this] = value;
        }

        [DisplayName("Primary Insurance Type Id")]
        public int? PrimaryInsuranceTypeId
        {
            get => fields.PrimaryInsuranceTypeId[this];
            set => fields.PrimaryInsuranceTypeId[this] = value;
        }

        [DisplayName("Primary Insurance Number"), Size(100)]
        public string PrimaryInsuranceNumber
        {
            get => fields.PrimaryInsuranceNumber[this];
            set => fields.PrimaryInsuranceNumber[this] = value;
        }

        [DisplayName("Primary Insurance Group"), Size(100)]
        public string PrimaryInsuranceGroup
        {
            get => fields.PrimaryInsuranceGroup[this];
            set => fields.PrimaryInsuranceGroup[this] = value;
        }

        [DisplayName("Primary Insurance Holder"), Size(100)]
        public string PrimaryInsuranceHolder
        {
            get => fields.PrimaryInsuranceHolder[this];
            set => fields.PrimaryInsuranceHolder[this] = value;
        }

        [DisplayName("Primary Insurance Holder Dob")]
        public DateTime? PrimaryInsuranceHolderDob
        {
            get => fields.PrimaryInsuranceHolderDob[this];
            set => fields.PrimaryInsuranceHolderDob[this] = value;
        }

        [DisplayName("Primary Insurance Relationship"), Size(100)]
        public string PrimaryInsuranceRelationship
        {
            get => fields.PrimaryInsuranceRelationship[this];
            set => fields.PrimaryInsuranceRelationship[this] = value;
        }

        [DisplayName("Primary Insurance Address1"), Size(100)]
        public string PrimaryInsuranceAddress1
        {
            get => fields.PrimaryInsuranceAddress1[this];
            set => fields.PrimaryInsuranceAddress1[this] = value;
        }

        [DisplayName("Primary Insurance City"), Size(100)]
        public string PrimaryInsuranceCity
        {
            get => fields.PrimaryInsuranceCity[this];
            set => fields.PrimaryInsuranceCity[this] = value;
        }

        [DisplayName("Primary Insurance State"), Size(100)]
        public string PrimaryInsuranceState
        {
            get => fields.PrimaryInsuranceState[this];
            set => fields.PrimaryInsuranceState[this] = value;
        }

        [DisplayName("Primary Insurance Zip Code"), Size(50)]
        public string PrimaryInsuranceZipCode
        {
            get => fields.PrimaryInsuranceZipCode[this];
            set => fields.PrimaryInsuranceZipCode[this] = value;
        }

        [DisplayName("Secondary Insurance Type Id")]
        public int? SecondaryInsuranceTypeId
        {
            get => fields.SecondaryInsuranceTypeId[this];
            set => fields.SecondaryInsuranceTypeId[this] = value;
        }

        [DisplayName("Secondary Insurance Number"), Size(100)]
        public string SecondaryInsuranceNumber
        {
            get => fields.SecondaryInsuranceNumber[this];
            set => fields.SecondaryInsuranceNumber[this] = value;
        }

        [DisplayName("Secondary Insurance Group"), Size(100)]
        public string SecondaryInsuranceGroup
        {
            get => fields.SecondaryInsuranceGroup[this];
            set => fields.SecondaryInsuranceGroup[this] = value;
        }

        [DisplayName("Secondary Insurance Holder"), Size(100)]
        public string SecondaryInsuranceHolder
        {
            get => fields.SecondaryInsuranceHolder[this];
            set => fields.SecondaryInsuranceHolder[this] = value;
        }

        [DisplayName("Secondary Insurance Holder Dob")]
        public DateTime? SecondaryInsuranceHolderDob
        {
            get => fields.SecondaryInsuranceHolderDob[this];
            set => fields.SecondaryInsuranceHolderDob[this] = value;
        }

        [DisplayName("Secondary Insurance Relationship"), Size(100)]
        public string SecondaryInsuranceRelationship
        {
            get => fields.SecondaryInsuranceRelationship[this];
            set => fields.SecondaryInsuranceRelationship[this] = value;
        }

        [DisplayName("Secondary Insurance Address1"), Size(100)]
        public string SecondaryInsuranceAddress1
        {
            get => fields.SecondaryInsuranceAddress1[this];
            set => fields.SecondaryInsuranceAddress1[this] = value;
        }

        [DisplayName("Secondary Insurance City"), Size(100)]
        public string SecondaryInsuranceCity
        {
            get => fields.SecondaryInsuranceCity[this];
            set => fields.SecondaryInsuranceCity[this] = value;
        }

        [DisplayName("Secondary Insurance State"), Size(100)]
        public string SecondaryInsuranceState
        {
            get => fields.SecondaryInsuranceState[this];
            set => fields.SecondaryInsuranceState[this] = value;
        }

        [DisplayName("Secondary Insurance Zip Code"), Size(50)]
        public string SecondaryInsuranceZipCode
        {
            get => fields.SecondaryInsuranceZipCode[this];
            set => fields.SecondaryInsuranceZipCode[this] = value;
        }

        [DisplayName("Discharge Date")]
        public DateTime? DischargeDate
        {
            get => fields.DischargeDate[this];
            set => fields.DischargeDate[this] = value;
        }

        [DisplayName("Diagnosis Date")]
        public DateTime? DiagnosisDate
        {
            get => fields.DiagnosisDate[this];
            set => fields.DiagnosisDate[this] = value;
        }

        [DisplayName("Plan Expiration Date")]
        public DateTime? PlanExpirationDate
        {
            get => fields.PlanExpirationDate[this];
            set => fields.PlanExpirationDate[this] = value;
        }

        [DisplayName("Admission Date")]
        public DateTime? AdmissionDate
        {
            get => fields.AdmissionDate[this];
            set => fields.AdmissionDate[this] = value;
        }

        [DisplayName("Referral Date")]
        public DateTime? ReferralDate
        {
            get => fields.ReferralDate[this];
            set => fields.ReferralDate[this] = value;
        }

        [DisplayName("Referral Source"), Size(25)]
        public string ReferralSource
        {
            get => fields.ReferralSource[this];
            set => fields.ReferralSource[this] = value;
        }

        [DisplayName("Diagnosis Notes"), Size(2000)]
        public string DiagnosisNotes
        {
            get => fields.DiagnosisNotes[this];
            set => fields.DiagnosisNotes[this] = value;
        }

        [DisplayName("Guardian Name"), Size(100)]
        public string GuardianName
        {
            get => fields.GuardianName[this];
            set => fields.GuardianName[this] = value;
        }

        [DisplayName("Notes"), Size(500), NotNull]
        public string Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("System Status"), Size(25)]
        public string SystemStatus
        {
            get => fields.SystemStatus[this];
            set => fields.SystemStatus[this] = value;
        }

        [DisplayName("Client Status"), Size(25), NotNull]
        public string ClientStatus
        {
            get => fields.ClientStatus[this];
            set => fields.ClientStatus[this] = value;
        }

        [DisplayName("Site Type Id"), ForeignKey("[dbo].[SitesTypes]", "SiteTypeId"), LeftJoin("jSite")]
        public int? SiteTypeId
        {
            get => fields.SiteTypeId[this];
            set => fields.SiteTypeId[this] = value;
        }
        [Expression(" '[' + jSite.Npi + '] ' + jSite.Name")]
        public String SiteName
        {
            get => fields.SiteName[this];
            set => fields.SiteName[this] = value;
        }
        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Record Number"), Size(100), NotNull]
        [LookupInclude]
        public string RecordNumber
        {
            get => fields.RecordNumber[this];
            set => fields.RecordNumber[this] = value;
        }
        [DisplayName("Patient Control Number"), Size(50), NotNull]
        public String Pcn
        {
            get => fields.Pcn[this];
            set => fields.Pcn[this] = value;
        }
        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }
        [DisplayName("Original Service Date")]
        public DateTime? OriginalServiceDate
        {
            get => fields.OriginalServiceDate[this];
            set => fields.OriginalServiceDate[this] = value;
        }
        [DisplayName("Patient Full Name")]
        [Expression("LastName +', '+ FirstName+' ['+ RecordNumber +']'"), NameProperty]
        public String ClientFullName
        {
            get => fields.ClientFullName[this];
            set => fields.ClientFullName[this] = value;
        }
        public ClientsRow()
        {
        }

        public ClientsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public StringField MaidenName;
            public StringField OtherName;
            public DateTimeField BirthDate;
            public StringField Race;
            public StringField Gender;
            public StringField Ethnicity;
            public StringField MaritalStatus;
            public StringField SocialSecurityNum;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField State;
            public StringField Zipcode;
            public StringField County;
            public StringField PrimaryPhone;
            public StringField SecondaryPhone;
            public StringField CellPhone;
            public StringField Email;
            public StringField CountryOfBirth;
            public Int32Field IsVeteran;
            public StringField PrimaryLanguage;
            public StringField NextOfKinName;
            public StringField NextOfKinPhone;
            public StringField MothersName;
            public StringField FathersName;
            public StringField LicenseStateId;
            public StringField EmploymentStatus;
            public Int32Field NumberInHouse;
            public StringField LivingArrangements;
            public DecimalField GrossIncomeDollar;
            public StringField GrossIncomePer;
            public StringField NumberDepenentIncome;
            public StringField EducationLevel;
            public StringField NameOfSchool;
            public Int32Field PrimaryInsuranceTypeId;
            public StringField PrimaryInsuranceNumber;
            public StringField PrimaryInsuranceGroup;
            public StringField PrimaryInsuranceHolder;
            public DateTimeField PrimaryInsuranceHolderDob;
            public StringField PrimaryInsuranceRelationship;
            public StringField PrimaryInsuranceAddress1;
            public StringField PrimaryInsuranceCity;
            public StringField PrimaryInsuranceState;
            public StringField PrimaryInsuranceZipCode;
            public Int32Field SecondaryInsuranceTypeId;
            public StringField SecondaryInsuranceNumber;
            public StringField SecondaryInsuranceGroup;
            public StringField SecondaryInsuranceHolder;
            public DateTimeField SecondaryInsuranceHolderDob;
            public StringField SecondaryInsuranceRelationship;
            public StringField SecondaryInsuranceAddress1;
            public StringField SecondaryInsuranceCity;
            public StringField SecondaryInsuranceState;
            public StringField SecondaryInsuranceZipCode;
            public DateTimeField DischargeDate;
            public DateTimeField DiagnosisDate;
            public DateTimeField PlanExpirationDate;
            public DateTimeField AdmissionDate;
            public DateTimeField ReferralDate;
            public StringField ReferralSource;
            public StringField DiagnosisNotes;
            public StringField GuardianName;
            public StringField Notes;
            public StringField SystemStatus;
            public StringField ClientStatus;
            public Int32Field SiteTypeId;
            public Int32Field TenantId;
            public StringField RecordNumber;
            public StringField Pcn;
            public Int32Field UserId;
            public DateTimeField OriginalServiceDate;
            public StringField ClientFullName;
            public StringField SiteName;
        }
    }
}
