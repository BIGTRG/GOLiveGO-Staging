
namespace GeniusOneAi.AgencyAdministration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ProgramTypes]")]
    [DisplayName("Program Types"), InstanceName("Program Types")]
    [LookupScript("GeniusOneAi.ProgramTypes")]
    [ReadPermission(PermissionKeys.AgencyTypes)]
    [ModifyPermission(PermissionKeys.AgencyTypes)]
    public sealed class ProgramTypesRow : Row<ProgramTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Program Type Id"), Identity, IdProperty]
        public Int32? ProgramTypeId
        {
            get => fields.ProgramTypeId[this];
            set => fields.ProgramTypeId[this] = value;
        }

        [DisplayName("Name"), Size(100), QuickSearch]
        [NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Status")]
        public Boolean? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Program Note Template Id"), ForeignKey("[dbo].[ProgramNoteTemplates]", "ProgramNoteTemplateId"), LeftJoin("jNoteTemplate")]
        [LookupEditor(typeof(ProgramNoteTemplatesRow))]
        public Int32? ProgramNoteTemplateId
        {
            get => fields.ProgramNoteTemplateId[this];
            set => fields.ProgramNoteTemplateId[this] = value;
        }
        [DisplayName("Note Template Name") ][Expression("jNoteTemplate.Name")]
        public String ProgramNoteTemplateName
        {
            get => fields.ProgramNoteTemplateName[this];
            set => fields.ProgramNoteTemplateName[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Default Approver")]
        public Int32? DefaultApproverId
        {
            get => fields.DefaultApproverId[this];
            set => fields.DefaultApproverId[this] = value;
        }
        [DisplayName("Backup Approver")]
        public Int32? BackupApproverId
        {
            get => fields.BackupApproverId[this];
            set => fields.BackupApproverId[this] = value;
        }
        [DisplayName("Escalation Metric")]
        public Int32? EscalationMetric
        {
            get => fields.EscalationMetric[this];
            set => fields.EscalationMetric[this] = value;
        }
       
        public ProgramTypesRow()
        {
        }

        public ProgramTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramTypeId;
            public StringField Name;
            public StringField ProgramNoteTemplateName;
            public StringField Description;
            public BooleanField Status;
            public Int32Field ProgramNoteTemplateId;
            public Int32Field TenantId;
            public Int32Field DefaultApproverId;
            public Int32Field BackupApproverId;
            public Int32Field EscalationMetric;
        }
    }
}
