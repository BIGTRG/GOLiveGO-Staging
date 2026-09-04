using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.DocumentManager
{
    [ConnectionKey("Default"), Module("DocumentManager"), TableName("[dbo].[DocumentWorkflowStepsTemplates]")]
    [DisplayName("Document Workflow Steps"), InstanceName("Document Workflow Steps")]
    [ReadPermission(PermissionKeys.WorkflowTemplates)]
    [ModifyPermission(PermissionKeys.WorkflowTemplates)]
    public sealed class DocumentWorkflowStepsTemplatesRow : Row<DocumentWorkflowStepsTemplatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Document Step Id"), NotNull, Identity, QuickSearch, IdProperty]
        public int? DocumentStepId
        {
            get => fields.DocumentStepId[this];
            set => fields.DocumentStepId[this] = value;
        }

        [DisplayName("Document Workflow Template Id"), PrimaryKey, ForeignKey(typeof(DocumentWorkflowTemplatesRow)), LeftJoin("D"), Updatable(false)]
        public int? WorkflowTemplateId
        {
            get => fields.WorkflowTemplateId[this];
            set => fields.WorkflowTemplateId[this] = value;
        }

        [DisplayName("Step Order")]
        [Expression("ROW_NUMBER() OVER(ORDER BY DocumentStepId)")]
        [EditLink]
        public int? StepOrder
        {
            get => fields.StepOrder[this];
            set => fields.StepOrder[this] = value;
        }

        [DisplayName("Step Action Type"), Size(50), QuickSearch, NameProperty]
        public string StepActionType
        {
            get => fields.StepActionType[this];
            set => fields.StepActionType[this] = value;
        }

        [DisplayName("Step Performer Type"), Size(25)]
        public string StepPerformerType
        {
            get => fields.StepPerformerType[this];
            set => fields.StepPerformerType[this] = value;
        }

        public DocumentWorkflowStepsTemplatesRow()
     : base()
        {
        }

        public DocumentWorkflowStepsTemplatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DocumentStepId;
            public Int32Field WorkflowTemplateId;
            public Int32Field StepOrder;
            public StringField StepActionType;
            public StringField StepPerformerType;
        }
    }
}
