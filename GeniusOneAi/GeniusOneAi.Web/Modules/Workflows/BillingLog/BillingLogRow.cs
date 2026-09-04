using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.Workflows
{
    [ConnectionKey("Default"), Module("Workflows"), TableName("[dbo].[BillingLog]")]
    [DisplayName("Billing Log"), InstanceName("Billing Log")]
    [ReadPermission(PermissionKeys.Billing)]
    [ModifyPermission(PermissionKeys.Billing)]
    public sealed class BillingLogRow : Row<BillingLogRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Billing Id"), Identity, IdProperty]
        public int? BillingId
        {
            get => fields.BillingId[this];
            set => fields.BillingId[this] = value;
        }

        [DisplayName("Activity"), ForeignKey("[dbo].[Activities]", "ActivityId"), LeftJoin("jActivity"), TextualField("Activity")]
        public int? ActivityId
        {
            get => fields.ActivityId[this];
            set => fields.ActivityId[this] = value;
        }

        [DisplayName("Billing Response Date")]
        public DateTime? BillingResponseDate
        {
            get => fields.BillingResponseDate[this];
            set => fields.BillingResponseDate[this] = value;
        }

        [DisplayName("Billing Response"), Size(50), QuickSearch, NameProperty]
        public string BillingResponse
        {
            get => fields.BillingResponse[this];
            set => fields.BillingResponse[this] = value;
        }

        [DisplayName("Billing Response Notes")]
        public string BillingResponseNotes
        {
            get => fields.BillingResponseNotes[this];
            set => fields.BillingResponseNotes[this] = value;
        }

        [DisplayName("Activity User Id"), Expression("jActivity.[UserId]")]
        public int? ActivityUserId
        {
            get => fields.ActivityUserId[this];
            set => fields.ActivityUserId[this] = value;
        }

        [DisplayName("Activity Client Id"), Expression("jActivity.[ClientId]")]
        public int? ActivityClientId
        {
            get => fields.ActivityClientId[this];
            set => fields.ActivityClientId[this] = value;
        }

        [DisplayName("Activity"), Expression("jActivity.[Activity]")]
        public string Activity
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
        public bool? ActivityIsBillable
        {
            get => fields.ActivityIsBillable[this];
            set => fields.ActivityIsBillable[this] = value;
        }

        [DisplayName("Activity Billable Amount"), Expression("jActivity.[BillableAmount]")]
        public decimal? ActivityBillableAmount
        {
            get => fields.ActivityBillableAmount[this];
            set => fields.ActivityBillableAmount[this] = value;
        }

        [DisplayName("Activity Status"), Expression("jActivity.[Status]")]
        public string ActivityStatus
        {
            get => fields.ActivityStatus[this];
            set => fields.ActivityStatus[this] = value;
        }

        [DisplayName("Activity Notes"), Expression("jActivity.[Notes]")]
        public string ActivityNotes
        {
            get => fields.ActivityNotes[this];
            set => fields.ActivityNotes[this] = value;
        }

        [DisplayName("Activity Invoice Id"), Expression("jActivity.[InvoiceId]")]
        public int? ActivityInvoiceId
        {
            get => fields.ActivityInvoiceId[this];
            set => fields.ActivityInvoiceId[this] = value;
        }

        [DisplayName("Activity Progress Note Id"), Expression("jActivity.[ProgressNoteId]")]
        public int? ActivityProgressNoteId
        {
            get => fields.ActivityProgressNoteId[this];
            set => fields.ActivityProgressNoteId[this] = value;
        }

        [DisplayName("Activity Progress Note Template Id"), Expression("jActivity.[ProgressNoteTemplateId]")]
        public int? ActivityProgressNoteTemplateId
        {
            get => fields.ActivityProgressNoteTemplateId[this];
            set => fields.ActivityProgressNoteTemplateId[this] = value;
        }

        [DisplayName("Activity Progress Note Location"), Expression("jActivity.[ProgressNoteLocation]")]
        public int? ActivityProgressNoteLocation
        {
            get => fields.ActivityProgressNoteLocation[this];
            set => fields.ActivityProgressNoteLocation[this] = value;
        }

        [DisplayName("Activity Progress Note In Out"), Expression("jActivity.[ProgressNoteInOut]")]
        public string ActivityProgressNoteInOut
        {
            get => fields.ActivityProgressNoteInOut[this];
            set => fields.ActivityProgressNoteInOut[this] = value;
        }

        [DisplayName("Activity Bill Code"), Expression("jActivity.[BillCode]")]
        public string ActivityBillCode
        {
            get => fields.ActivityBillCode[this];
            set => fields.ActivityBillCode[this] = value;
        }

        [DisplayName("Activity Hours"), Expression("jActivity.[Hours]")]
        public decimal? ActivityHours
        {
            get => fields.ActivityHours[this];
            set => fields.ActivityHours[this] = value;
        }

        [DisplayName("Activity Alert Sent"), Expression("jActivity.[AlertSent]")]
        public bool? ActivityAlertSent
        {
            get => fields.ActivityAlertSent[this];
            set => fields.ActivityAlertSent[this] = value;
        }

        [DisplayName("Activity Tenant Id"), Expression("jActivity.[TenantId]")]
        public int? ActivityTenantId
        {
            get => fields.ActivityTenantId[this];
            set => fields.ActivityTenantId[this] = value;
        }

        public BillingLogRow()
            : base()
        {
        }

        public BillingLogRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BillingId;
            public Int32Field ActivityId;
            public DateTimeField BillingResponseDate;
            public StringField BillingResponse;
            public StringField BillingResponseNotes;

            public Int32Field ActivityUserId;
            public Int32Field ActivityClientId;
            public StringField Activity;
            public DateTimeField ActivityActivityDate;
            public TimeSpanField ActivityActivityFromTime;
            public TimeSpanField ActivityActivityToTime;
            public BooleanField ActivityIsBillable;
            public DecimalField ActivityBillableAmount;
            public StringField ActivityStatus;
            public StringField ActivityNotes;
            public Int32Field ActivityInvoiceId;
            public Int32Field ActivityProgressNoteId;
            public Int32Field ActivityProgressNoteTemplateId;
            public Int32Field ActivityProgressNoteLocation;
            public StringField ActivityProgressNoteInOut;
            public StringField ActivityBillCode;
            public DecimalField ActivityHours;
            public BooleanField ActivityAlertSent;
            public Int32Field ActivityTenantId;
        }
    }
}
