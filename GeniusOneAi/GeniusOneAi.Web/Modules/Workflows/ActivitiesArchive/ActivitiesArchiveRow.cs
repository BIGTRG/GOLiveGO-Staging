
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Workflows.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Workflows"), TableName("[dbo].[Activities]")]
    [DisplayName("ActivitiesArchive"), InstanceName("ActivitiesArchive")]
    [ReadPermission(PermissionKeys.Activities)]
    [ModifyPermission(PermissionKeys.Activities)]
    public sealed class ActivitiesArchiveRow : Row<ActivitiesArchiveRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Activity Id"), Identity, IdProperty]
        public Int32? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Client Id"), ForeignKey("[dbo].[Clients]", "ClientId"), LeftJoin("jClient")]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }
        [Expression("jClient.LastName +', '+ jClient.FirstName+' ['+ jClient.RecordNumber +']'")]
        public String ClientFullName
        {
            get => fields.ClientFullName[this];
            set => fields.ClientFullName[this] = value;
        }
        [DisplayName("Activity"), Size(50), QuickSearch]
        //[TimesheetActivityEditor] 
        [NameProperty]
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
            get => fields.IsBillable[this];
            set => fields.IsBillable[this] = value;
        }

        [DisplayName("Status"), Size(25)][BillingStatusEditor]
        [Width(200)]
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

        [DisplayName("Progress Note Id")]
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

        [DisplayName("Hours"), Size(10), Scale(2)]
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

        public ActivitiesArchiveRow()
        {
        }

        public ActivitiesArchiveRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ActivityId;
            public Int32Field UserId;
            public Int32Field ClientId;
            public StringField ClientFullName;
            public StringField Activity;
            public DateTimeField ActivityDate;
            public TimeSpanField ActivityFromTime;
            public TimeSpanField ActivityToTime;
            public BooleanField IsBillable;
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
        }
    }
}
