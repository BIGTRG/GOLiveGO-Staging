using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.Workflows
{
    [ConnectionKey("Default"), Module("Workflows"), TableName("[dbo].[DocumentWorkflows]")]
    [DisplayName("Document Workflow "), InstanceName("Document Workflow ")]
    [ReadPermission(PermissionKeys.DocumentWorkflows)]
    [ModifyPermission(PermissionKeys.DocumentWorkflows)]
    public sealed class DocumentWorkflowRow : Row<DocumentWorkflowRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Workflow Id"), NotNull, Identity, QuickSearch, IdProperty]
        public int? WorkflowId
        {
            get => fields.WorkflowId[this];
            set => fields.WorkflowId[this] = value;
        }
        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(100), NotNull]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        [DisplayName("FileName"), Size(200)]
        public string FileName
        {
            get => fields.FileName[this];
            set => fields.FileName[this] = value;
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "WorkflowId"), NotMapped]
        public List<DocumentWorkflowStepsRow> DocumentWorkflowStepsList
        {
            get => fields.DocumentWorkflowStepsList[this];
            set => fields.DocumentWorkflowStepsList[this] = value;
        }
        [NotMapped]
        [DisplayName("Workflow Name")]
        public int? DocumentWorkflowId
        {
            get => fields.DocumentWorkflowId[this];
            set => fields.DocumentWorkflowId[this] = value;
        }
        [DisplayName("Status"), Size(25)]
        public string Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }
        public DocumentWorkflowRow()
            : base()
        {
        }

        public DocumentWorkflowRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WorkflowId;
            public Int32Field DocumentWorkflowId;
            public StringField Name;
            public StringField Description;
            public StringField FileName;
            public StringField Status;
            public RowListField<DocumentWorkflowStepsRow> DocumentWorkflowStepsList;
        }
    }
}
