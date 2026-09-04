
using GeniusOneAi.Administration;

namespace GeniusOneAi.WorkerManager.Entities
{
    using GeniusOneAi.CustomEditors;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[Users]")]
    [DisplayName("Workers"), InstanceName("Workers")]
    [LookupScript("GeniusOneAi.Workers", Expiration = -1, Permission = "?")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    
    public sealed class WorkersRow : Row<WorkersRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Id"), Identity, IdProperty]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }
        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }
        [DisplayName("Type"), Size(50)]
        public String Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Worker Classification")]
        public String Classification
        {
            get => fields.Classification [this];
            set => fields.Classification [this] = value;
        }
        [DisplayName("Employee Id"), Size(25)]
        
        [LookupInclude]
        public String EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("First Name"), Size(50)]
        [LookupInclude]
        public String FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("Middle Name"), Size(50)]
        [LookupInclude]
        public String MiddleName
        {
            get => fields.MiddleName[this];
            set => fields.MiddleName[this] = value;
        }

        [DisplayName("Last Name"), Size(50)]
        [LookupInclude]
        public String LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }
        [Expression("LastName +', '+ FirstName+' ['+ EmployeeId +']'"), NameProperty]
        public String WorkerFullName
        {
            get => fields.WorkerFullName[this];
            set => fields.WorkerFullName[this] = value;
        }
        [DisplayName("Address1"), Size(50)]
        public String Address1
        {
            get => fields.Address1[this];
            set => fields.Address1[this] = value;
        }

        [DisplayName("Address2"), Size(50)]
        public String Address2
        {
            get => fields.Address2[this];
            set => fields.Address2[this] = value;
        }

        [DisplayName("City"), Size(50)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), ]
        public Int32? State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zipcode"), Size(10)]
        public String Zipcode
        {
            get => fields.Zipcode[this];
            set => fields.Zipcode[this] = value;
        }

        [DisplayName("Primary Phone"), Size(15)]
        public String PrimaryPhone
        {
            get => fields.PrimaryPhone[this];
            set => fields.PrimaryPhone[this] = value;
        }

        [DisplayName("Secondary Phone"), Size(15)]
        public String SecondaryPhone
        {
            get => fields.SecondaryPhone[this];
            set => fields.SecondaryPhone[this] = value;
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get => fields.HireDate[this];
            set => fields.HireDate[this] = value;
        }

        [DisplayName("Emergency Contact"), Size(100)]
        public String EmergencyContact
        {
            get => fields.EmergencyContact[this];
            set => fields.EmergencyContact[this] = value;
        }

        [DisplayName("Emergency Contact Phone"), Size(15)]
        public String EmergencyContactPhone
        {
            get => fields.EmergencyContactPhone[this];
            set => fields.EmergencyContactPhone[this] = value;
        }

        [DisplayName("Social Security Number"), Size(11)]
        public String SocialSecurityNumber
        {
            get => fields.SocialSecurityNumber[this];
            set => fields.SocialSecurityNumber[this] = value;
        }

        [DisplayName("Driver License Number"), Size(50)]
        public String DriverLicenseNumber
        {
            get => fields.DriverLicenseNumber[this];
            set => fields.DriverLicenseNumber[this] = value;
        }

        [DisplayName("Driver License State"), Size(2)]
        public String DriverLicenseState
        {
            get => fields.DriverLicenseState[this];
            set => fields.DriverLicenseState[this] = value;
        }

        [DisplayName("Driver License Expiration")]
        public DateTime? DriverLicenseExpiration
        {
            get => fields.DriverLicenseExpiration[this];
            set => fields.DriverLicenseExpiration[this] = value;
        }

        [DisplayName("Notes"), Size(255)]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("E Signature Base64"), Column("eSignatureBase64")]
        public String ESignatureBase64
        {
            get => fields.ESignatureBase64[this];
            set => fields.ESignatureBase64[this] = value;
        }

        [DisplayName("E Signature Plan Text"), Column("eSignaturePlainText"), Size(255)]
        public String ESignaturePlainText
        {
            get => fields.ESignaturePlainText[this];
            set => fields.ESignaturePlainText[this] = value;
        }

        [DisplayName("Signature Verified")]
        public Boolean? SignatureVerified
        {
            get => fields.SignatureVerified[this];
            set => fields.SignatureVerified[this] = value;
        }

        [DisplayName("Is Worker")]
        [LookupInclude]
        public Boolean? IsWorker
        {
            get => fields.IsWorker[this];
            set => fields.IsWorker[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Bill Rate Admin"), Scale(4), DisplayFormat("#,##0.####")]
        public Decimal? BillRateAdmin
        {
            get => fields.BillRateAdmin[this];
            set => fields.BillRateAdmin[this] = value;
        }
        [DisplayName("Bill Rate Training"), Scale(4), DisplayFormat("#,##0.####")]
        public Decimal? BillRateTraining
        {
            get => fields.BillRateTraining[this];
            set => fields.BillRateTraining[this] = value;
        }
        [DisplayName("Bill Rate Meeting"), Scale(4), DisplayFormat("#,##0.####")]
        public Decimal? BillRateMeeting
        {
            get => fields.BillRateMeeting[this];
            set => fields.BillRateMeeting[this] = value;
        }
        [DisplayName("Bill Rate Client"), Scale(4), DisplayFormat("#,##0.####")]
        public Decimal? BillRateClientOnTime
        {
            get => fields.BillRateClientOnTime[this];
            set => fields.BillRateClientOnTime[this] = value;
        }
        [DisplayName("Bill Rate Client"), Scale(4), DisplayFormat("#,##0.####")]
        public Decimal? BillRateClientLate
        {
            get => fields.BillRateClientLate[this];
            set => fields.BillRateClientLate[this] = value;
        }
        [DisplayName("Username"), Size(100),  LookupInclude]
        public String Username
        {
            get => fields.Username[this];
            set => fields.Username[this] = value;
        }
        [DisplayName("NPI"), Size(50)]
        public String Npi
        {
            get => fields.Npi[this];
            set => fields.Npi[this] = value;
        }
        [DisplayName("Taxonomy"), Size(50)]
        public String Taxonomy
        {
            get => fields.Taxonomy[this];
            set => fields.Taxonomy[this] = value;
        }
        public WorkersRow()
        {
        }

        public WorkersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField Type;
            public StringField Classification;
            public StringField EmployeeId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField Email;
            public Int32Field State;
            public StringField Zipcode;
            public StringField PrimaryPhone;
            public StringField SecondaryPhone;
            public DateTimeField HireDate;
            public StringField EmergencyContact;
            public StringField EmergencyContactPhone;
            public StringField SocialSecurityNumber;
            public StringField DriverLicenseNumber;
            public StringField DriverLicenseState;
            public DateTimeField DriverLicenseExpiration;
            public StringField Notes;
            public StringField ESignatureBase64;
            public StringField ESignaturePlainText;
            public BooleanField SignatureVerified;
            public BooleanField IsWorker;
            public Int32Field TenantId;
            public DecimalField BillRateAdmin;
            public DecimalField BillRateTraining;
            public DecimalField BillRateMeeting;
            public DecimalField BillRateClientOnTime;
            public DecimalField BillRateClientLate;
            public StringField WorkerFullName;
            public StringField Username;
            public StringField Npi;
            public StringField Taxonomy;
        }
    }
}
