
namespace GeniusOneAi.Workflows.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Workflows"), TableName("[dbo].[ActivitiesLog]")]
    [DisplayName("Activities Log"), InstanceName("Activities Log")]
    [ReadPermission(PermissionKeys.Activities)]
    [ModifyPermission(PermissionKeys.Activities)]
    public sealed class ActivitiesLogRow : Row<ActivitiesLogRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Activities Log Id"), PrimaryKey, IdProperty]
        public Int32? ActivitiesLogId
        {
            get => fields.ActivitiesLogId[this];
            set => fields.ActivitiesLogId[this] = value;
        }

        [DisplayName("Activity"), ForeignKey("[dbo].[Activities]", "ActivityId"), LeftJoin("jActivity"), TextualField("Activity")]
        public Int32? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }
        [DisplayName("Date")]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Rejection Reason"), Size(50)]
        public String RejectionReason
        {
            get => fields.RejectionReason[this];
            set => fields.RejectionReason[this] = value;
        }

        [DisplayName("Notes"), QuickSearch, NameProperty]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Activity User Id"), Expression("jActivity.[UserId]")]
        public Int32? ActivityUserId
        {
            get => fields.ActivityUserId[this];
            set => fields.ActivityUserId[this] = value;
        }

        [DisplayName("Activity Client Id"), Expression("jActivity.[ClientId]")]
        public Int32? ActivityClientId
        {
            get => fields.ActivityClientId[this];
            set => fields.ActivityClientId[this] = value;
        }

        [DisplayName("Activity"), Expression("jActivity.[Activity]")]
        public String Activity
        {
            get => fields.Activity[this];
            set => fields.Activity[this] = value;
        }

        [DisplayName("Activity Activity Date"), Expression("jActivity.[ActivityDate]")]
        public DateTime? ActivityActivityDate
        {
            get => fields.ActivityActivityDate[this];
            set => fields.ActivityActivityDate[this] = value;
        }

        [DisplayName("Activity Activity From Time"), Expression("jActivity.[ActivityFromTime]")]
        public TimeSpan? ActivityActivityFromTime
        {
            get => fields.ActivityActivityFromTime[this];
            set => fields.ActivityActivityFromTime[this] = value;
        }

        [DisplayName("Activity Activity To Time"), Expression("jActivity.[ActivityToTime]")]
        public TimeSpan? ActivityActivityToTime
        {
            get => fields.ActivityActivityToTime[this];
            set => fields.ActivityActivityToTime[this] = value;
        }

        [DisplayName("Activity Is Billable"), Expression("jActivity.[IsBillable]")]
        public Boolean? ActivityIsBillable
        {
            get => fields.ActivityIsBillable[this];
            set => fields.ActivityIsBillable[this] = value;
        }

        [DisplayName("Activity Status"), Expression("jActivity.[Status]")]
        public String ActivityStatus
        {
            get => fields.ActivityStatus[this];
            set => fields.ActivityStatus[this] = value;
        }

        [DisplayName("Activity Notes"), Expression("jActivity.[Notes]")]
        public String ActivityNotes
        {
            get => fields.ActivityNotes[this];
            set => fields.ActivityNotes[this] = value;
        }

        [DisplayName("Activity Invoice Id"), Expression("jActivity.[InvoiceId]")]
        public Int32? ActivityInvoiceId
        {
            get => fields.ActivityInvoiceId[this];
            set => fields.ActivityInvoiceId[this] = value;
        }

        [DisplayName("Activity Progress Note Id"), Expression("jActivity.[ProgressNoteId]")]
        public Int32? ActivityProgressNoteId
        {
            get => fields.ActivityProgressNoteId[this];
            set => fields.ActivityProgressNoteId[this] = value;
        }

        [DisplayName("Activity Progress Note Template Id"), Expression("jActivity.[ProgressNoteTemplateId]")]
        public Int32? ActivityProgressNoteTemplateId
        {
            get => fields.ActivityProgressNoteTemplateId[this];
            set => fields.ActivityProgressNoteTemplateId[this] = value;
        }

        [DisplayName("Activity Progress Note Location"), Expression("jActivity.[ProgressNoteLocation]")]
        public Int32? ActivityProgressNoteLocation
        {
            get => fields.ActivityProgressNoteLocation[this];
            set => fields.ActivityProgressNoteLocation[this] = value;
        }

        [DisplayName("Activity Progress Note In Out"), Expression("jActivity.[ProgressNoteInOut]")]
        public String ActivityProgressNoteInOut
        {
            get => fields.ActivityProgressNoteInOut[this];
            set => fields.ActivityProgressNoteInOut[this] = value;
        }

        [DisplayName("Activity Bill Code"), Expression("jActivity.[BillCode]")]
        public String ActivityBillCode
        {
            get => fields.ActivityBillCode[this];
            set => fields.ActivityBillCode[this] = value;
        }

        [DisplayName("Activity Hours"), Expression("jActivity.[Hours]")]
        public Decimal? ActivityHours
        {
            get => fields.ActivityHours[this];
            set => fields.ActivityHours[this] = value;
        }

        [DisplayName("Activity Tenant Id"), Expression("jActivity.[TenantId]")]
        public Int32? ActivityTenantId
        {
            get => fields.ActivityTenantId[this];
            set => fields.ActivityTenantId[this] = value;
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get => fields.UserUsername[this];
            set => fields.UserUsername[this] = value;
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get => fields.UserDisplayName[this];
            set => fields.UserDisplayName[this] = value;
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get => fields.UserEmail[this];
            set => fields.UserEmail[this] = value;
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get => fields.UserSource[this];
            set => fields.UserSource[this] = value;
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get => fields.UserPasswordHash[this];
            set => fields.UserPasswordHash[this] = value;
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get => fields.UserPasswordSalt[this];
            set => fields.UserPasswordSalt[this] = value;
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get => fields.UserLastDirectoryUpdate[this];
            set => fields.UserLastDirectoryUpdate[this] = value;
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get => fields.UserUserImage[this];
            set => fields.UserUserImage[this] = value;
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get => fields.UserInsertDate[this];
            set => fields.UserInsertDate[this] = value;
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get => fields.UserInsertUserId[this];
            set => fields.UserInsertUserId[this] = value;
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get => fields.UserUpdateDate[this];
            set => fields.UserUpdateDate[this] = value;
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get => fields.UserUpdateUserId[this];
            set => fields.UserUpdateUserId[this] = value;
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get => fields.UserIsActive[this];
            set => fields.UserIsActive[this] = value;
        }

        [DisplayName("User Type"), Expression("jUser.[Type]")]
        public String UserType
        {
            get => fields.UserType[this];
            set => fields.UserType[this] = value;
        }

        

        [DisplayName("User Employee Id"), Expression("jUser.[EmployeeId]")]
        public String UserEmployeeId
        {
            get => fields.UserEmployeeId[this];
            set => fields.UserEmployeeId[this] = value;
        }

        [DisplayName("User First Name"), Expression("jUser.[FirstName]")]
        public String UserFirstName
        {
            get => fields.UserFirstName[this];
            set => fields.UserFirstName[this] = value;
        }

        [DisplayName("User Middle Name"), Expression("jUser.[MiddleName]")]
        public String UserMiddleName
        {
            get => fields.UserMiddleName[this];
            set => fields.UserMiddleName[this] = value;
        }

        [DisplayName("User Last Name"), Expression("jUser.[LastName]")]
        public String UserLastName
        {
            get => fields.UserLastName[this];
            set => fields.UserLastName[this] = value;
        }

        [DisplayName("User Address1"), Expression("jUser.[Address1]")]
        public String UserAddress1
        {
            get => fields.UserAddress1[this];
            set => fields.UserAddress1[this] = value;
        }

        [DisplayName("User Address2"), Expression("jUser.[Address2]")]
        public String UserAddress2
        {
            get => fields.UserAddress2[this];
            set => fields.UserAddress2[this] = value;
        }

        [DisplayName("User City"), Expression("jUser.[City]")]
        public String UserCity
        {
            get => fields.UserCity[this];
            set => fields.UserCity[this] = value;
        }

        [DisplayName("User State"), Expression("jUser.[State]")]
        public String UserState
        {
            get => fields.UserState[this];
            set => fields.UserState[this] = value;
        }

        [DisplayName("User Zipcode"), Expression("jUser.[Zipcode]")]
        public String UserZipcode
        {
            get => fields.UserZipcode[this];
            set => fields.UserZipcode[this] = value;
        }

        [DisplayName("User Primary Phone"), Expression("jUser.[PrimaryPhone]")]
        public String UserPrimaryPhone
        {
            get => fields.UserPrimaryPhone[this];
            set => fields.UserPrimaryPhone[this] = value;
        }

        [DisplayName("User Secondary Phone"), Expression("jUser.[SecondaryPhone]")]
        public String UserSecondaryPhone
        {
            get => fields.UserSecondaryPhone[this];
            set => fields.UserSecondaryPhone[this] = value;
        }

        [DisplayName("User Hire Date"), Expression("jUser.[HireDate]")]
        public DateTime? UserHireDate
        {
            get => fields.UserHireDate[this];
            set => fields.UserHireDate[this] = value;
        }

        [DisplayName("User Emergency Contact"), Expression("jUser.[EmergencyContact]")]
        public String UserEmergencyContact
        {
            get => fields.UserEmergencyContact[this];
            set => fields.UserEmergencyContact[this] = value;
        }

        [DisplayName("User Emergency Contact Phone"), Expression("jUser.[EmergencyContactPhone]")]
        public String UserEmergencyContactPhone
        {
            get => fields.UserEmergencyContactPhone[this];
            set => fields.UserEmergencyContactPhone[this] = value;
        }

        [DisplayName("User Social Security Number"), Expression("jUser.[SocialSecurityNumber]")]
        public String UserSocialSecurityNumber
        {
            get => fields.UserSocialSecurityNumber[this];
            set => fields.UserSocialSecurityNumber[this] = value;
        }

        [DisplayName("User Driver License Number"), Expression("jUser.[DriverLicenseNumber]")]
        public String UserDriverLicenseNumber
        {
            get => fields.UserDriverLicenseNumber[this];
            set => fields.UserDriverLicenseNumber[this] = value;
        }

        [DisplayName("User Driver License State"), Expression("jUser.[DriverLicenseState]")]
        public String UserDriverLicenseState
        {
            get => fields.UserDriverLicenseState[this];
            set => fields.UserDriverLicenseState[this] = value;
        }

        [DisplayName("User Driver License Expiration"), Expression("jUser.[DriverLicenseExpiration]")]
        public DateTime? UserDriverLicenseExpiration
        {
            get => fields.UserDriverLicenseExpiration[this];
            set => fields.UserDriverLicenseExpiration[this] = value;
        }

        [DisplayName("User Notes"), Expression("jUser.[Notes]")]
        public String UserNotes
        {
            get => fields.UserNotes[this];
            set => fields.UserNotes[this] = value;
        }

        [DisplayName("User E Signature Base64"), Expression("jUser.[eSignatureBase64]")]
        public String UserESignatureBase64
        {
            get => fields.UserESignatureBase64[this];
            set => fields.UserESignatureBase64[this] = value;
        }

        [DisplayName("User E Signature Plain Text"), Expression("jUser.[eSignaturePlainText]")]
        public String UserESignaturePlainText
        {
            get => fields.UserESignaturePlainText[this];
            set => fields.UserESignaturePlainText[this] = value;
        }

        [DisplayName("User Signature Verified"), Expression("jUser.[SignatureVerified]")]
        public Boolean? UserSignatureVerified
        {
            get => fields.UserSignatureVerified[this];
            set => fields.UserSignatureVerified[this] = value;
        }

        [DisplayName("User Is Worker"), Expression("jUser.[IsWorker]")]
        public Boolean? UserIsWorker
        {
            get => fields.UserIsWorker[this];
            set => fields.UserIsWorker[this] = value;
        }

        [DisplayName("User Tenant Id"), Expression("jUser.[TenantId]")]
        public Int32? UserTenantId
        {
            get => fields.UserTenantId[this];
            set => fields.UserTenantId[this] = value;
        }

        [DisplayName("User Bill Rate Admin"), Expression("jUser.[BillRateAdmin]")]
        public Decimal? UserBillRateAdmin
        {
            get => fields.UserBillRateAdmin[this];
            set => fields.UserBillRateAdmin[this] = value;
        }

        [DisplayName("User Bill Rate Training"), Expression("jUser.[BillRateTraining]")]
        public Decimal? UserBillRateTraining
        {
            get => fields.UserBillRateTraining[this];
            set => fields.UserBillRateTraining[this] = value;
        }

        [DisplayName("User Bill Rate Meeting"), Expression("jUser.[BillRateMeeting]")]
        public Decimal? UserBillRateMeeting
        {
            get => fields.UserBillRateMeeting[this];
            set => fields.UserBillRateMeeting[this] = value;
        }

        [DisplayName("User Bill Rate Client On Time"), Expression("jUser.[BillRateClientOnTime]")]
        public Decimal? UserBillRateClientOnTime
        {
            get => fields.UserBillRateClientOnTime[this];
            set => fields.UserBillRateClientOnTime[this] = value;
        }

        [DisplayName("User Bill Rate Client Late"), Expression("jUser.[BillRateClientLate]")]
        public Decimal? UserBillRateClientLate
        {
            get => fields.UserBillRateClientLate[this];
            set => fields.UserBillRateClientLate[this] = value;
        }

        public ActivitiesLogRow()
        {
        }

        public ActivitiesLogRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ActivitiesLogId;
            public Int32Field ActivityId;
            public DateTimeField Date;
            public StringField RejectionReason;
            public StringField Notes;
            public Int32Field UserId;

            public Int32Field ActivityUserId;
            public Int32Field ActivityClientId;
            public StringField Activity;
            public DateTimeField ActivityActivityDate;
            public TimeSpanField ActivityActivityFromTime;
            public TimeSpanField ActivityActivityToTime;
            public BooleanField ActivityIsBillable;
            public StringField ActivityStatus;
            public StringField ActivityNotes;
            public Int32Field ActivityInvoiceId;
            public Int32Field ActivityProgressNoteId;
            public Int32Field ActivityProgressNoteTemplateId;
            public Int32Field ActivityProgressNoteLocation;
            public StringField ActivityProgressNoteInOut;
            public StringField ActivityBillCode;
            public DecimalField ActivityHours;
            public Int32Field ActivityTenantId;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;
            public StringField UserType;
            public StringField UserEmployeeId;
            public StringField UserFirstName;
            public StringField UserMiddleName;
            public StringField UserLastName;
            public StringField UserAddress1;
            public StringField UserAddress2;
            public StringField UserCity;
            public StringField UserState;
            public StringField UserZipcode;
            public StringField UserPrimaryPhone;
            public StringField UserSecondaryPhone;
            public DateTimeField UserHireDate;
            public StringField UserEmergencyContact;
            public StringField UserEmergencyContactPhone;
            public StringField UserSocialSecurityNumber;
            public StringField UserDriverLicenseNumber;
            public StringField UserDriverLicenseState;
            public DateTimeField UserDriverLicenseExpiration;
            public StringField UserNotes;
            public StringField UserESignatureBase64;
            public StringField UserESignaturePlainText;
            public BooleanField UserSignatureVerified;
            public BooleanField UserIsWorker;
            public Int32Field UserTenantId;
            public DecimalField UserBillRateAdmin;
            public DecimalField UserBillRateTraining;
            public DecimalField UserBillRateMeeting;
            public DecimalField UserBillRateClientOnTime;
            public DecimalField UserBillRateClientLate;
        }
    }
}
