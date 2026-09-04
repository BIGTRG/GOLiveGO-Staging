
namespace GeniusOneAi.WorkerManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[WorkerForms]")]
    [DisplayName("Worker Forms"), InstanceName("Worker Forms")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    public sealed class WorkerFormsRow : Row<WorkerFormsRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Form Id"), Identity, IdProperty]
        public Int32? UserFormId
        {
            get => fields.UserFormId[this];
            set => fields.UserFormId[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get => fields.DueDate[this];
            set => fields.DueDate[this] = value;
        }

        [DisplayName("Alert Status"), Size(10), QuickSearch]
        public String AlertStatus
        {
            get => fields.AlertStatus[this];
            set => fields.AlertStatus[this] = value;
        }

        [DisplayName("Form Type Id"), ForeignKey("[dbo].[FormTypes]", "FormTypeId"), LeftJoin("jForm")]
        [LookupEditor(typeof(GeniusOneAi.AgencyAdministration.Entities.FormTypesRow))]
        public Int32? FormTypeId
        {
            get => fields.FormTypeId[this];
            set => fields.FormTypeId[this] = value;
        }
        [Expression("jForm.Name"), NameProperty]
        public String FormName
        {
            get => fields.FormName[this];
            set => fields.FormName[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public WorkerFormsRow()
        {
        }

        public WorkerFormsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserFormId;
            public Int32Field UserId;
            public DateTimeField DueDate;
            public StringField AlertStatus;
            public StringField FormName;
            public Int32Field FormTypeId;
            public Int32Field TenantId;
        }
    }
}
