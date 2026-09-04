using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace GeniusOneAi.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.UserManagement)]
    [ModifyPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.UserManagement)]
    //[LookupScript(Permission = PermissionKeys.Security)]
    [LookupScript(Permission = GeniusOneAi.AgencyAdministration.PermissionKeys.UserManagement)]
    public sealed class UserRow : Serenity.Extensions.Entities.LoggingRow<UserRow.RowFields>, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity, IdProperty]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude, NameProperty]
        public String Username
        {
            get => fields.Username[this];
            set => fields.Username[this] = value;
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get => fields.Source[this];
            set => fields.Source[this] = value;
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get => fields.PasswordHash[this];
            set => fields.PasswordHash[this] = value;
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get => fields.PasswordSalt[this];
            set => fields.PasswordSalt[this] = value;
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get => fields.DisplayName[this];
            set => fields.DisplayName[this] = value;
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Mobile Phone Number"), Size(20)]
        public String MobilePhoneNumber
        {
            get => fields.MobilePhoneNumber[this];
            set => fields.MobilePhoneNumber[this] = value;
        }

        [DisplayName("Mobile Phone Verified"), NotNull, DefaultValue(false)]
        public Boolean? MobilePhoneVerified
        {
            get => fields.MobilePhoneVerified[this];
            set => fields.MobilePhoneVerified[this] = value;
        }

        [DisplayName("Two-Factor Authentication")]
        public TwoFactorAuthType? TwoFactorAuth
        {
            get { return (TwoFactorAuthType?)Fields.TwoFactorAuth[this]; }
            set => fields.TwoFactorAuth[this] = (Int32?)value;
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get => fields.UserImage[this];
            set => fields.UserImage[this] = value;
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get => fields.Password[this];
            set => fields.Password[this] = value;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get => fields.PasswordConfirm[this];
            set => fields.PasswordConfirm[this] = value;
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get => fields.LastDirectoryUpdate[this];
            set => fields.LastDirectoryUpdate[this] = value;
        }

        [NotMapped, MinSelectLevel(SelectLevel.Explicit), ReadPermission("ImpersonateAs")]
        public String ImpersonationToken
        {
            get => fields.ImpersonationToken[this];
            set => fields.ImpersonationToken[this] = value;
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => fields.IsActive;
        }

        [DisplayName("Type"), Size(50)]
        public String Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Classification"), Size(50)]
        public String Classification
        {
            get => fields.Classification[this];
            set => fields.Classification[this] = value;
        }

        [DisplayName("Employee Id"), Size(25)]
        public String EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("First Name"), Size(50)]
        public String FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("Middle Name"), Size(50)]
        public String MiddleName
        {
            get => fields.MiddleName[this];
            set => fields.MiddleName[this] = value;
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
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

        [DisplayName("State"), Size(2)]
        public String State
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
        public Boolean? IsWorker
        {
            get => fields.IsWorker[this];
            set => fields.IsWorker[this] = value;
        }
        [DisplayName("Receive System Alerts")]
        public Boolean? RecAlerts
        {
            get => fields.RecAlerts[this];
            set => fields.RecAlerts[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Bill Rate Admin"), Size(10)]
        public Decimal? BillRateAdmin
        {
            get => fields.BillRateAdmin[this];
            set => fields.BillRateAdmin[this] = value;
        }
        [DisplayName("Bill Rate Training"), Size(10)]
        public Decimal? BillRateTraining
        {
            get => fields.BillRateTraining[this];
            set => fields.BillRateTraining[this] = value;
        }
        [DisplayName("Bill Rate Meeting"), Size(10)]
        public Decimal? BillRateMeeting
        {
            get => fields.BillRateMeeting[this];
            set => fields.BillRateMeeting[this] = value;
        }
        [DisplayName("Bill Rate Client"), Size(10)]
        public Decimal? BillRateClientOnTime
        {
            get => fields.BillRateClientOnTime[this];
            set => fields.BillRateClientOnTime[this] = value;
        }
        [DisplayName("Bill Rate Client"), Size(10)]
        public Decimal? BillRateClientLate
        {
            get => fields.BillRateClientLate[this];
            set => fields.BillRateClientLate[this] = value;
        }
        public UserRow()
        {
        }

        public UserRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : Serenity.Extensions.Entities.LoggingRowFields
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public StringField MobilePhoneNumber;
            public BooleanField MobilePhoneVerified;
            public Int32Field TwoFactorAuth;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;

            public StringField Password;
            public StringField PasswordConfirm;

            public StringField ImpersonationToken;

            public StringField Type;
            public StringField Classification;
            public StringField EmployeeId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField State;
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
            public BooleanField RecAlerts;
            public Int32Field TenantId;
            public DecimalField BillRateAdmin;
            public DecimalField BillRateTraining;
            public DecimalField BillRateMeeting;
            public DecimalField BillRateClientOnTime;
            public DecimalField BillRateClientLate;
        }
    }
}