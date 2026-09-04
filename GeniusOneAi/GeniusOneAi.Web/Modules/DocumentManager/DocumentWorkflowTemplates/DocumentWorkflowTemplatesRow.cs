
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.DocumentManager
{
    [ConnectionKey("Default"), Module("DocumentManager"), TableName("[dbo].[DocumentWorkflowTemplates]")]
    [DisplayName("Document Workflow Templates"), InstanceName("Document Workflow Templates")]
    [LookupScript("GeniusOneAi.DocumentWorkflows")]
    [ReadPermission(PermissionKeys.WorkflowTemplates)]
    [ModifyPermission(PermissionKeys.WorkflowTemplates)]
    public sealed class DocumentWorkflowTemplatesRow : Row<DocumentWorkflowTemplatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Workflow Template Id"), NotNull, Identity, QuickSearch, IdProperty]
        public int? WorkflowTemplateId
        {
            get => fields.WorkflowTemplateId[this];
            set => fields.WorkflowTemplateId[this] = value;
        }

        [DisplayName("Document Id"), NotNull]
        public int? DocumentId
        {
            get => fields.DocumentId[this];
            set => fields.DocumentId[this] = value;
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
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "WorkflowTemplateId"), NotMapped]
        public List<DocumentWorkflowStepsTemplatesRow> DocumentWorkflowStepsList
        {
            get => fields.DocumentWorkflowStepsList[this];
            set => fields.DocumentWorkflowStepsList[this] = value;
        }
        public DocumentWorkflowTemplatesRow()
            : base()
        {
        }

        public DocumentWorkflowTemplatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WorkflowTemplateId;
            public Int32Field DocumentId;
            public StringField Name;
            public StringField Description;
            public RowListField<DocumentWorkflowStepsTemplatesRow> DocumentWorkflowStepsList;
        }
    }
}
