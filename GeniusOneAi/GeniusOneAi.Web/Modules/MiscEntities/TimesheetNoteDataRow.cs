using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace GeniusOneAi.MiscEntities.Entities
{
    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[vActivitiesNoteData]")]
    [DisplayName("Timesheet Note Data"), InstanceName("Timesheet Note Data")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class TimesheetNoteDataRow : Row<TimesheetNoteDataRow.RowFields>, IIdRow, INameRow
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
        public string ProgressNoteLocation
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

        [DisplayName("Billing Modifier1"), Size(1), NotNull]
        public string BillingModifier1
        {
            get => fields.BillingModifier1[this];
            set => fields.BillingModifier1[this] = value;
        }

        [DisplayName("Billing Modifier2"), Size(1), NotNull]
        public string BillingModifier2
        {
            get => fields.BillingModifier2[this];
            set => fields.BillingModifier2[this] = value;
        }

        [DisplayName("Billing Modifier3"), Size(1), NotNull]
        public string BillingModifier3
        {
            get => fields.BillingModifier3[this];
            set => fields.BillingModifier3[this] = value;
        }

        [DisplayName("Billing Modifier4"), Size(1), NotNull]
        public string BillingModifier4
        {
            get => fields.BillingModifier4[this];
            set => fields.BillingModifier4[this] = value;
        }

        [DisplayName("Hours"), Size(10), Scale(2)]
        public decimal? Hours
        {
            get => fields.Hours[this];
            set => fields.Hours[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Authorization Id")]
        public int? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Worker First Name"), Size(50)]
        public string WorkerFirstName
        {
            get => fields.WorkerFirstName[this];
            set => fields.WorkerFirstName[this] = value;
        }

        [DisplayName("Worker Middle Name"), Size(50)]
        public string WorkerMiddleName
        {
            get => fields.WorkerMiddleName[this];
            set => fields.WorkerMiddleName[this] = value;
        }

        [DisplayName("Worker Last Name"), Size(50)]
        public string WorkerLastName
        {
            get => fields.WorkerLastName[this];
            set => fields.WorkerLastName[this] = value;
        }

        [DisplayName("Worker Type"), Size(50)]
        public string WorkerType
        {
            get => fields.WorkerType[this];
            set => fields.WorkerType[this] = value;
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

        [DisplayName("Primary Insurance Name"), Size(100)]
        public string PrimaryInsuranceName
        {
            get => fields.PrimaryInsuranceName[this];
            set => fields.PrimaryInsuranceName[this] = value;
        }

        [DisplayName("Primary Insurance Payer Id"), Size(255)]
        public string PrimaryInsurancePayerId
        {
            get => fields.PrimaryInsurancePayerId[this];
            set => fields.PrimaryInsurancePayerId[this] = value;
        }

        [DisplayName("Secondary Insurance Name"), Size(100)]
        public string SecondaryInsuranceName
        {
            get => fields.SecondaryInsuranceName[this];
            set => fields.SecondaryInsuranceName[this] = value;
        }

        [DisplayName("Secondary Insurance Payer Id"), Size(255)]
        public string SecondaryInsurancePayerId
        {
            get => fields.SecondaryInsurancePayerId[this];
            set => fields.SecondaryInsurancePayerId[this] = value;
        }
        [DisplayName("Record Number"), Size(50)]
        public string RecordNumber
        {
            get => fields.RecordNumber[this];
            set => fields.RecordNumber[this] = value;
        }
        [DisplayName("Program Note Template Id")]
        public int? ProgramNoteTemplateId
        {
            get => fields.ProgramNoteTemplateId[this];
            set => fields.ProgramNoteTemplateId[this] = value;
        }
        [DisplayName("Field00"), Column("Field00")]
        public string Field00
        {
            get => fields.Field00[this];
            set => fields.Field00[this] = value;
        }
        [DisplayName("Field01"), Column("Field01")]
        public string Field01
        {
            get => fields.Field01[this];
            set => fields.Field01[this] = value;
        }

        [DisplayName("Field02"), Column("Field02")]
        public string Field02
        {
            get => fields.Field02[this];
            set => fields.Field02[this] = value;
        }

        [DisplayName("Field03"), Column("Field03")]
        public string Field03
        {
            get => fields.Field03[this];
            set => fields.Field03[this] = value;
        }

        [DisplayName("Field04"), Column("Field04")]
        public string Field04
        {
            get => fields.Field04[this];
            set => fields.Field04[this] = value;
        }

        [DisplayName("Field05"), Column("Field05")]
        public string Field05
        {
            get => fields.Field05[this];
            set => fields.Field05[this] = value;
        }

        [DisplayName("Field06"), Column("Field06")]
        public string Field06
        {
            get => fields.Field06[this];
            set => fields.Field06[this] = value;
        }

        [DisplayName("Field07"), Column("Field07")]
        public string Field07
        {
            get => fields.Field07[this];
            set => fields.Field07[this] = value;
        }

        [DisplayName("Field08"), Column("Field08")]
        public string Field08
        {
            get => fields.Field08[this];
            set => fields.Field08[this] = value;
        }

        [DisplayName("Field09"), Column("Field09")]
        public string Field09
        {
            get => fields.Field09[this];
            set => fields.Field09[this] = value;
        }

        [DisplayName("Field10"), Column("Field10")]
        public string Field10
        {
            get => fields.Field10[this];
            set => fields.Field10[this] = value;
        }

        [DisplayName("Notes Status"), Size(50)]
        public string NotesStatus
        {
            get => fields.NotesStatus[this];
            set => fields.NotesStatus[this] = value;
        }

        [DisplayName("Original Submittal Date")]
        public DateTime? OriginalSubmittalDate
        {
            get => fields.OriginalSubmittalDate[this];
            set => fields.OriginalSubmittalDate[this] = value;
        }

        [DisplayName("Date Signed")]
        public DateTime? DateSigned
        {
            get => fields.DateSigned[this];
            set => fields.DateSigned[this] = value;
        }

        [DisplayName("E Signature Plain Text"), Column("eSignaturePlainText"), Size(255)]
        public string ESignaturePlainText
        {
            get => fields.ESignaturePlainText[this];
            set => fields.ESignaturePlainText[this] = value;
        }

        [DisplayName("Signature Image")]
        public string SignatureImage
        {
            get => fields.SignatureImage[this];
            set => fields.SignatureImage[this] = value;
        }

        [DisplayName("Signature Guid"), Column("SignatureGUID"), Size(100)]
        public string SignatureGuid
        {
            get => fields.SignatureGuid[this];
            set => fields.SignatureGuid[this] = value;
        }

        [DisplayName("File Name"), Size(50)]
        public string FileName
        {
            get => fields.FileName[this];
            set => fields.FileName[this] = value;
        }

        [DisplayName("Field01 Label"), Column("Field01Label"), Size(255)]
        public string Field01Label
        {
            get => fields.Field01Label[this];
            set => fields.Field01Label[this] = value;
        }

        [DisplayName("Field02 Label"), Column("Field02Label"), Size(255)]
        public string Field02Label
        {
            get => fields.Field02Label[this];
            set => fields.Field02Label[this] = value;
        }

        [DisplayName("Field03 Label"), Column("Field03Label"), Size(255)]
        public string Field03Label
        {
            get => fields.Field03Label[this];
            set => fields.Field03Label[this] = value;
        }

        [DisplayName("Field04 Label"), Column("Field04Label"), Size(255)]
        public string Field04Label
        {
            get => fields.Field04Label[this];
            set => fields.Field04Label[this] = value;
        }

        [DisplayName("Field05 Label"), Column("Field05Label"), Size(255)]
        public string Field05Label
        {
            get => fields.Field05Label[this];
            set => fields.Field05Label[this] = value;
        }

        [DisplayName("Field06 Label"), Column("Field06Label"), Size(255)]
        public string Field06Label
        {
            get => fields.Field06Label[this];
            set => fields.Field06Label[this] = value;
        }

        [DisplayName("Field07 Label"), Column("Field07Label"), Size(255)]
        public string Field07Label
        {
            get => fields.Field07Label[this];
            set => fields.Field07Label[this] = value;
        }

        [DisplayName("Field08 Label"), Column("Field08Label"), Size(255)]
        public string Field08Label
        {
            get => fields.Field08Label[this];
            set => fields.Field08Label[this] = value;
        }

        [DisplayName("Field09 Label"), Column("Field09Label"), Size(255)]
        public string Field09Label
        {
            get => fields.Field09Label[this];
            set => fields.Field09Label[this] = value;
        }

        [DisplayName("Field10 Label"), Column("Field10Label"), Size(255)]
        public string Field10Label
        {
            get => fields.Field10Label[this];
            set => fields.Field10Label[this] = value;
        }

        [DisplayName("Field01 Status"), Column("Field01Status")]
        public bool? Field01Status
        {
            get => fields.Field01Status[this];
            set => fields.Field01Status[this] = value;
        }

        [DisplayName("Field02 Status"), Column("Field02Status")]
        public bool? Field02Status
        {
            get => fields.Field02Status[this];
            set => fields.Field02Status[this] = value;
        }

        [DisplayName("Field03 Status"), Column("Field03Status")]
        public bool? Field03Status
        {
            get => fields.Field03Status[this];
            set => fields.Field03Status[this] = value;
        }

        [DisplayName("Field04 Status"), Column("Field04Status")]
        public bool? Field04Status
        {
            get => fields.Field04Status[this];
            set => fields.Field04Status[this] = value;
        }

        [DisplayName("Field05 Status"), Column("Field05Status")]
        public bool? Field05Status
        {
            get => fields.Field05Status[this];
            set => fields.Field05Status[this] = value;
        }

        [DisplayName("Field06 Status"), Column("Field06Status")]
        public bool? Field06Status
        {
            get => fields.Field06Status[this];
            set => fields.Field06Status[this] = value;
        }

        [DisplayName("Field07 Status"), Column("Field07Status")]
        public bool? Field07Status
        {
            get => fields.Field07Status[this];
            set => fields.Field07Status[this] = value;
        }

        [DisplayName("Field08 Status"), Column("Field08Status")]
        public bool? Field08Status
        {
            get => fields.Field08Status[this];
            set => fields.Field08Status[this] = value;
        }

        [DisplayName("Field09 Status"), Column("Field09Status")]
        public bool? Field09Status
        {
            get => fields.Field09Status[this];
            set => fields.Field09Status[this] = value;
        }

        [DisplayName("Field10 Status"), Column("Field10Status")]
        public bool? Field10Status
        {
            get => fields.Field10Status[this];
            set => fields.Field10Status[this] = value;
        }

        [DisplayName("Field01 Type"), Column("Field01Type"), Size(50)]
        public string Field01Type
        {
            get => fields.Field01Type[this];
            set => fields.Field01Type[this] = value;
        }

        [DisplayName("Field02 Type"), Column("Field02Type"), Size(50)]
        public string Field02Type
        {
            get => fields.Field02Type[this];
            set => fields.Field02Type[this] = value;
        }

        [DisplayName("Field03 Type"), Column("Field03Type"), Size(50)]
        public string Field03Type
        {
            get => fields.Field03Type[this];
            set => fields.Field03Type[this] = value;
        }

        [DisplayName("Field04 Type"), Column("Field04Type"), Size(50)]
        public string Field04Type
        {
            get => fields.Field04Type[this];
            set => fields.Field04Type[this] = value;
        }

        [DisplayName("Field05 Type"), Column("Field05Type"), Size(50)]
        public string Field05Type
        {
            get => fields.Field05Type[this];
            set => fields.Field05Type[this] = value;
        }

        [DisplayName("Field06 Type"), Column("Field06Type"), Size(50)]
        public string Field06Type
        {
            get => fields.Field06Type[this];
            set => fields.Field06Type[this] = value;
        }

        [DisplayName("Field07 Type"), Column("Field07Type"), Size(50)]
        public string Field07Type
        {
            get => fields.Field07Type[this];
            set => fields.Field07Type[this] = value;
        }

        [DisplayName("Field08 Type"), Column("Field08Type"), Size(50)]
        public string Field08Type
        {
            get => fields.Field08Type[this];
            set => fields.Field08Type[this] = value;
        }

        [DisplayName("Field09 Type"), Column("Field09Type"), Size(50)]
        public string Field09Type
        {
            get => fields.Field09Type[this];
            set => fields.Field09Type[this] = value;
        }

        [DisplayName("Field10 Type"), Column("Field10Type"), Size(50)]
        public string Field10Type
        {
            get => fields.Field10Type[this];
            set => fields.Field10Type[this] = value;
        }
        [DisplayName("Program Name"), Column("ProgramName")]
        public string ProgramName
        {
            get => fields.ProgramName[this];
            set => fields.ProgramName[this] = value;
        }
        [DisplayName("Site Name"), Column("SiteName")]
        public string SiteName
        {
            get => fields.SiteName[this];
            set => fields.SiteName[this] = value;
        }
        [DisplayName("Approved By"), Column("ApprovedBy")]
        public string ApprovedBy
        {
            get => fields.ApprovedBy[this];
            set => fields.ApprovedBy[this] = value;
        }
        [DisplayName("Date Approved")]
        public DateTime? DateApproved
        {
            get => fields.DateApproved[this];
            set => fields.DateApproved[this] = value;
        }
        [DisplayName("GoalData"), Column("GoalData")]
        public string GoalData
        {
            get => fields.GoalData[this];
            set => fields.GoalData[this] = value;
        }
        [DisplayName("InterventionData"), Column("InterventionData")]
        public string InterventionData
        {
            get => fields.InterventionData[this];
            set => fields.InterventionData[this] = value;
        }
        public TimesheetNoteDataRow()
            : base()
        {
        }

        public TimesheetNoteDataRow(RowFields fields)
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
            public StringField ProgressNoteLocation;
            public StringField ProgressNoteInOut;
            public StringField BillCode;
            public StringField BillingModifier1;
            public StringField BillingModifier2;
            public StringField BillingModifier3;
            public StringField BillingModifier4;
            public DecimalField Hours;
            public Int32Field TenantId;
            public Int32Field AuthorizationId;
            public StringField WorkerFirstName;
            public StringField WorkerMiddleName;
            public StringField WorkerLastName;
            public StringField WorkerType;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public DateTimeField BirthDate;
            public StringField Race;
            public StringField Gender;
            public Int32Field PrimaryInsuranceTypeId;
            public StringField PrimaryInsuranceNumber;
            public Int32Field SecondaryInsuranceTypeId;
            public StringField SecondaryInsuranceNumber;
            public StringField PrimaryInsuranceName;
            public StringField PrimaryInsurancePayerId;
            public StringField SecondaryInsuranceName;
            public StringField SecondaryInsurancePayerId;
            public StringField RecordNumber;
            public Int32Field ProgramNoteTemplateId;
            public StringField Field00;
            public StringField Field01;
            public StringField Field02;
            public StringField Field03;
            public StringField Field04;
            public StringField Field05;
            public StringField Field06;
            public StringField Field07;
            public StringField Field08;
            public StringField Field09;
            public StringField Field10;
            public StringField NotesStatus;
            public DateTimeField OriginalSubmittalDate;
            public DateTimeField DateSigned;
            public StringField ESignaturePlainText;
            public StringField SignatureImage;
            public StringField SignatureGuid;
            public StringField FileName;
            public StringField Field01Label;
            public StringField Field02Label;
            public StringField Field03Label;
            public StringField Field04Label;
            public StringField Field05Label;
            public StringField Field06Label;
            public StringField Field07Label;
            public StringField Field08Label;
            public StringField Field09Label;
            public StringField Field10Label;
            public BooleanField Field01Status;
            public BooleanField Field02Status;
            public BooleanField Field03Status;
            public BooleanField Field04Status;
            public BooleanField Field05Status;
            public BooleanField Field06Status;
            public BooleanField Field07Status;
            public BooleanField Field08Status;
            public BooleanField Field09Status;
            public BooleanField Field10Status;
            public StringField Field01Type;
            public StringField Field02Type;
            public StringField Field03Type;
            public StringField Field04Type;
            public StringField Field05Type;
            public StringField Field06Type;
            public StringField Field07Type;
            public StringField Field08Type;
            public StringField Field09Type;
            public StringField Field10Type;
            public StringField ProgramName;
            public StringField SiteName;
            public StringField ApprovedBy;
            public DateTimeField DateApproved;
            public StringField GoalData;
            public StringField InterventionData;
        }
    }
}
