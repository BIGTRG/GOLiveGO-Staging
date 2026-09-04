using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.MiscEntities
{
    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[vApprovedBilling]")]
    [DisplayName("Approved Billing"), InstanceName("Approved Billing")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class ApprovedBillingRow : Row<ApprovedBillingRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Activity Id"), NotNull, IdProperty]
        public int? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }

        [DisplayName("User Id")]
        public int? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Client Id")]
        public int? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Activity"), Size(50), QuickSearch, NameProperty]
        public string Activity
        {
            get => fields.Activity[this];
            set => fields.Activity[this] = value;
        }

        [DisplayName("Activity Date")]
        public DateTime? ActivityDate
        {
            get => fields.ActivityDate[this];
            set => fields.ActivityDate[this] = value;
        }

        [DisplayName("Activity From Time")]
        public TimeSpan? ActivityFromTime
        {
            get => fields.ActivityFromTime[this];
            set => fields.ActivityFromTime[this] = value;
        }

        [DisplayName("Activity To Time")]
        public TimeSpan? ActivityToTime
        {
            get => fields.ActivityToTime[this];
            set => fields.ActivityToTime[this] = value;
        }

        [DisplayName("Is Billable")]
        public bool? IsBillable
        {
            get => fields.IsBillable[this];
            set => fields.IsBillable[this] = value;
        }

        [DisplayName("Billable Amount"), Size(10), Scale(2)]
        public decimal? BillableAmount
        {
            get => fields.BillableAmount[this];
            set => fields.BillableAmount[this] = value;
        }

        [DisplayName("Status"), Size(25)]
        public string Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Notes"), Size(500)]
        public string Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("Invoice Id")]
        public int? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Progress Note Id")]
        public int? ProgressNoteId
        {
            get => fields.ProgressNoteId[this];
            set => fields.ProgressNoteId[this] = value;
        }

        [DisplayName("Progress Note Template Id")]
        public int? ProgressNoteTemplateId
        {
            get => fields.ProgressNoteTemplateId[this];
            set => fields.ProgressNoteTemplateId[this] = value;
        }

        [DisplayName("Progress Note Location")]
        public int? ProgressNoteLocation
        {
            get => fields.ProgressNoteLocation[this];
            set => fields.ProgressNoteLocation[this] = value;
        }

        [DisplayName("Progress Note In Out"), Size(100)]
        public string ProgressNoteInOut
        {
            get => fields.ProgressNoteInOut[this];
            set => fields.ProgressNoteInOut[this] = value;
        }

        [DisplayName("Bill Code"), Size(100)]
        public string BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }

        [DisplayName("Hours"), Size(10), Scale(2)]
        public decimal? Hours
        {
            get => fields.Hours[this];
            set => fields.Hours[this] = value;
        }

        [DisplayName("Alert Sent")]
        public bool? AlertSent
        {
            get => fields.AlertSent[this];
            set => fields.AlertSent[this] = value;
        }

        [DisplayName("Authorization Id")]
        public int? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("First Name"), Size(50)]
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
        public string LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
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

        [DisplayName("Record Number"), Size(100), NotNull]
        public string RecordNumber
        {
            get => fields.RecordNumber[this];
            set => fields.RecordNumber[this] = value;
        }

        [DisplayName("Social Security Num"), Size(15)]
        public string SocialSecurityNum
        {
            get => fields.SocialSecurityNum[this];
            set => fields.SocialSecurityNum[this] = value;
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

        [DisplayName("Other Name"), Size(100)]
        public string OtherName
        {
            get => fields.OtherName[this];
            set => fields.OtherName[this] = value;
        }

        [DisplayName("Primary Insurance Name"), Size(25)]
        public string PrimaryInsuranceName
        {
            get => fields.PrimaryInsuranceName[this];
            set => fields.PrimaryInsuranceName[this] = value;
        }

        [DisplayName("Secondary Insurance Name"), Size(25)]
        public string SecondaryInsuranceName
        {
            get => fields.SecondaryInsuranceName[this];
            set => fields.SecondaryInsuranceName[this] = value;
        }

        public ApprovedBillingRow()
            : base()
        {
        }

        public ApprovedBillingRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ActivityId;
            public Int32Field UserId;
            public Int32Field ClientId;
            public StringField Activity;
            public DateTimeField ActivityDate;
            public TimeSpanField ActivityFromTime;
            public TimeSpanField ActivityToTime;
            public BooleanField IsBillable;
            public DecimalField BillableAmount;
            public StringField Status;
            public StringField Notes;
            public Int32Field InvoiceId;
            public Int32Field ProgressNoteId;
            public Int32Field ProgressNoteTemplateId;
            public Int32Field ProgressNoteLocation;
            public StringField ProgressNoteInOut;
            public StringField BillCode;
            public DecimalField Hours;
            public BooleanField AlertSent;
            public Int32Field AuthorizationId;
            public Int32Field TenantId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
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
            public StringField RecordNumber;
            public StringField SocialSecurityNum;
            public DateTimeField BirthDate;
            public StringField Race;
            public StringField Gender;
            public StringField OtherName;
            public StringField PrimaryInsuranceName;
            public StringField SecondaryInsuranceName;
        }
    }
}
