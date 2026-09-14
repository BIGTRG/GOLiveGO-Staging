
namespace GeniusOneAi.ProgramNoteManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ProgramNoteManager"), TableName("[dbo].[ProgramNotes]")]
    [DisplayName("Program Notes"), InstanceName("Program Notes")]
    [ReadPermission(PermissionKeys.ManageNotes)]
    [ModifyPermission(PermissionKeys.ManageNotes)]
    public sealed class ProgramNotesRow : Row<ProgramNotesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Program Note Id"), Identity, IdProperty]
        public Int32? ProgramNoteId
        {
            get => fields.ProgramNoteId[this];
            set => fields.ProgramNoteId[this] = value;
        }

        [DisplayName("Timesheet Id")]
     
        public Int32? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }
        [NameProperty]
        [DisplayName("Program Note Template Id")]
        public Int32? ProgramNoteTemplateId
        {
            get => fields.ProgramNoteTemplateId[this];
            set => fields.ProgramNoteTemplateId[this] = value;
        }
        [DisplayName("Field00"), Column("Field00")]
        public String Field00
        {
            get => fields.Field00[this];
            set => fields.Field00[this] = value;
        }
        [DisplayName("Field01"), Column("Field01"), QuickSearch]
        public String Field01
        {
            get => fields.Field01[this];
            set => fields.Field01[this] = value;
        }

        [DisplayName("Field02"), Column("Field02")]
        public String Field02
        {
            get => fields.Field02[this];
            set => fields.Field02[this] = value;
        }

        [DisplayName("Field03"), Column("Field03")]
        public String Field03
        {
            get => fields.Field03[this];
            set => fields.Field03[this] = value;
        }

        [DisplayName("Field04"), Column("Field04")]
        public String Field04
        {
            get => fields.Field04[this];
            set => fields.Field04[this] = value;
        }

        [DisplayName("Field05"), Column("Field05")]
        public String Field05
        {
            get => fields.Field05[this];
            set => fields.Field05[this] = value;
        }

        [DisplayName("Field06"), Column("Field06")]
        public String Field06
        {
            get => fields.Field06[this];
            set => fields.Field06[this] = value;
        }

        [DisplayName("Field07"), Column("Field07")]
        public String Field07
        {
            get => fields.Field07[this];
            set => fields.Field07[this] = value;
        }

        [DisplayName("Field08"), Column("Field08")]
        public String Field08
        {
            get => fields.Field08[this];
            set => fields.Field08[this] = value;
        }

        [DisplayName("Field09"), Column("Field09")]
        public String Field09
        {
            get => fields.Field09[this];
            set => fields.Field09[this] = value;
        }

        [DisplayName("Field10"), Column("Field10")]
        public String Field10
        {
            get => fields.Field10[this];
            set => fields.Field10[this] = value;
        }

        [DisplayName("Status"), Size(50)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Date Signed")]
        public DateTime? DateSigned
        {
            get => fields.DateSigned[this];
            set => fields.DateSigned[this] = value;
        }

        [DisplayName("E Signature Plain Text"), Column("eSignaturePlainText"), Size(255)]
        public String ESignaturePlainText
        {
            get => fields.ESignaturePlainText[this];
            set => fields.ESignaturePlainText[this] = value;
        }

        [DisplayName("Signature Image")]
        public String SignatureImage
        {
            get => fields.SignatureImage[this];
            set => fields.SignatureImage[this] = value;
        }

        [DisplayName("Signature Guid"), Column("SignatureGUID"), Size(100)]
        public String SignatureGuid
        {
            get => fields.SignatureGuid[this];
            set => fields.SignatureGuid[this] = value;
        }
        [DisplayName("Update Status"), NotMapped]
        public String NoteUpdateStatus
        {
            get => fields.NoteUpdateStatus[this];
            set => fields.NoteUpdateStatus[this] = value;
        }
        [DisplayName("File Name")]
        public String FileName
        {
            get => fields.FileName[this];
            set => fields.FileName[this] = value;
        }
        [DisplayName("Episode")]
        public Int32? EpisodeId
        {
            get => fields.EpisodeId[this];
            set => fields.EpisodeId[this] = value;
        }
        [DisplayName("Encounter #")]
        public Int32? EncounterNo
        {
            get => fields.EncounterNo[this];
            set => fields.EncounterNo[this] = value;
        }
        [DisplayName("Phase"), Size(10)]
        public String Phase
        {
            get => fields.Phase[this];
            set => fields.Phase[this] = value;
        }
        [DisplayName("SafetyConcern")]
        public Boolean? SafetyConcern
        {
            get => fields.SafetyConcern[this];
            set => fields.SafetyConcern[this] = value;
        }
        [DisplayName("SafetyText")]
        public String SafetyText
        {
            get => fields.SafetyText[this];
            set => fields.SafetyText[this] = value;
        }
        [DisplayName("GateComplete")]
        public Boolean? GateComplete
        {
            get => fields.GateComplete[this];
            set => fields.GateComplete[this] = value;
        }
        [DisplayName("Summary")]
        public String Summary
        {
            get => fields.Summary[this];
            set => fields.Summary[this] = value;
        }
        [DisplayName("FollowUpDay")]
        public Int32? FollowUpDay
        {
            get => fields.FollowUpDay[this];
            set => fields.FollowUpDay[this] = value;
        }
        [DisplayName("ContactMethod")]
        public String ContactMethod
        {
            get => fields.ContactMethod[this];
            set => fields.ContactMethod[this] = value;
        }
        [DisplayName("LongTermAdmission")]
        public Boolean? LongTermAdmission
        {
            get => fields.LongTermAdmission[this];
            set => fields.LongTermAdmission[this] = value;
        }
        [DisplayName("DischargeSummary")]
        public String DischargeSummary
        {
            get => fields.DischargeSummary[this];
            set => fields.DischargeSummary[this] = value;
        }

        public ProgramNotesRow()
        {
        }

        public ProgramNotesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramNoteId;
            public Int32Field ActivityId;
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
            public StringField Status;
            public StringField NoteUpdateStatus;
            public DateTimeField DateSigned;
            public StringField ESignaturePlainText;
            public StringField SignatureImage;
            public StringField SignatureGuid;
            public StringField FileName;
            public Int32Field EpisodeId;
            public Int32Field EncounterNo;
            public StringField Phase;
            public BooleanField SafetyConcern;
            public StringField SafetyText;
            public BooleanField GateComplete;
            public StringField Summary;
            public Int32Field FollowUpDay;
            public StringField ContactMethod;
            public BooleanField LongTermAdmission;
            public StringField DischargeSummary;
        }
    }
}
