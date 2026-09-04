using GeniusOneAi.Administration;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Archives.Entities
{

    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using GeniusOneAi.Administration.Entities;

    [ConnectionKey("Default"), Module("Archive"), TableName("[dbo].[vProgressNotesArchive]")]
    [DisplayName("Activities"), InstanceName("ProgressNotesArchive")]
    [ReadPermission(Archives.PermissionKeys.ProgressNotes)]
    [ModifyPermission(Archives.PermissionKeys.ProgressNotes)]
    public sealed class ProgressNotesArchiveRow : Row<ProgressNotesArchiveRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("ActivityId"), Column("ActivityId"), Identity, IdProperty, ForeignKey("[dbo].[ProgramNotes]", "ActivityId"), LeftJoin("jProgramNote")]
        public Int32? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }

        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }
       [QuickFilter(true)]
        public String WorkerFullName
        {
            get => fields.WorkerFullName[this];
            set => fields.WorkerFullName[this] = value;
        }
 
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }
        [QuickFilter(true)]
        public String ClientFullName
        {
            get => fields.ClientFullName[this];
            set => fields.ClientFullName[this] = value;
        }
      
              
        public String PrimaryInsuranceType
        {
            get => fields.PrimaryInsuranceType[this];
            set => fields.PrimaryInsuranceType[this] = value;
        }
        [DisplayName("Activity"), Size(50)][NameProperty]
        public String Activity
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
        public Boolean? IsBillable
        {
            get { return (bool) Fields.IsBillable[this]; }
            set => fields.IsBillable[this] = value;
        }
        [DisplayName("Billable Amount"), Size(10)]
        public Decimal? BillableAmount
        {
            get => fields.BillableAmount[this];
            set => fields.BillableAmount[this] = value;
        }

        [DisplayName("Status"), Size(25)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Notes"), Size(500)]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("Invoice Id")]
        public Int32? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Progress Note Id"), ForeignKey("[dbo].[ProgramNotes]", "ProgramNoteId"), LeftJoin("jSubmissionNote")]
        public Int32? ProgressNoteId
        {
            get => fields.ProgressNoteId[this];
            set => fields.ProgressNoteId[this] = value;
        }

        [DisplayName("Progress Note Template Id")]
        public Int32? ProgressNoteTemplateId
        {
            get => fields.ProgressNoteTemplateId[this];
            set => fields.ProgressNoteTemplateId[this] = value;
        }

        [DisplayName("Progress Note Location")]
        public Int32? ProgressNoteLocation
        {
            get => fields.ProgressNoteLocation[this];
            set => fields.ProgressNoteLocation[this] = value;
        }

        [DisplayName("Progress Note In Out"), Size(100)]
        public String ProgressNoteInOut
        {
            get => fields.ProgressNoteInOut[this];
            set => fields.ProgressNoteInOut[this] = value;
        }

        [DisplayName("Bill Code"), Size(100)]
        public String BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }

        [DisplayName("Hours"), Size(10)]
        public Decimal? Hours
        {
            get => fields.Hours[this];
            set => fields.Hours[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Download")]
        [Expression("jProgramNote.FileName")]
        public String ProgramNoteFileName
        {
            get => fields.ProgramNoteFileName[this];
            set => fields.ProgramNoteFileName[this] = value;
        }
        [DisplayName("NoteType")]
        [Expression("jProgramNote.Field00")]
        public String ProgramNoteField00
        {
            get => fields.ProgramNoteField00[this];
            set => fields.ProgramNoteField00[this] = value;
        }
        [DisplayName("Authorization ID")]
        public Int32? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Original Submission Date")]
        [Expression("jSubmissionNote.OriginalSubmittalDate"), MinSelectLevel(SelectLevel.Always)]
        public DateTime? OriginalSubmittalDate
        {
            get => fields.OriginalSubmittalDate[this];
            set => fields.OriginalSubmittalDate[this] = value;
        }

        [DisplayName("Submission"), NotMapped]
        public String Submission
        {
            get => fields.Submission[this];
            set => fields.Submission[this] = value;
        }
        public ProgressNotesArchiveRow()
        {
        }

        public ProgressNotesArchiveRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ActivityId;
            public Int32Field UserId;
            public Int32Field ClientId;
            public StringField Activity;
            public StringField WorkerFullName;
            public StringField ClientFullName;
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
            public Int32Field TenantId;
            public Int32Field AuthorizationId;
            public StringField ProgramNoteFileName;
            public StringField ProgramNoteField00;
            public StringField PrimaryInsuranceType;
            public DateTimeField OriginalSubmittalDate;
            public StringField Submission;
        }
    }
}
