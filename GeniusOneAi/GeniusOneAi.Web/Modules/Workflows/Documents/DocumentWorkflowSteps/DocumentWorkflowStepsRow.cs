using GeniusOneAi.Administration;
using GeniusOneAi.ClientManager.Entities;
using GeniusOneAi.WorkerManager.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.Workflows
{
    [ConnectionKey("Default"), Module("Workflows"), TableName("[dbo].[DocumentWorkflowSteps]")]
    [DisplayName("Document Workflow Steps"), InstanceName("Document Workflow Steps")]
    [ReadPermission(PermissionKeys.DocumentWorkflows)]
    [ModifyPermission(PermissionKeys.DocumentWorkflows)]
    public sealed class DocumentWorkflowStepsRow : Row<DocumentWorkflowStepsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Document Step Id"), NotNull, Identity, QuickSearch, IdProperty]
        public int? DocumentStepId
        {
            get => fields.DocumentStepId[this];
            set => fields.DocumentStepId[this] = value;
        }

        [DisplayName("Document Workflow Template Id"),PrimaryKey, ForeignKey(typeof(DocumentWorkflowRow)), LeftJoin("D"), Updatable(false)]
        public int? WorkflowId
        {
            get => fields.WorkflowId[this];
            set => fields.WorkflowId[this] = value;
        }

        [DisplayName("Step Order")]
        [Expression("ROW_NUMBER() OVER(ORDER BY DocumentStepId)")]
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

        [DisplayName("Step Performer Staff Id")]
        [ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public int? StepPerformerStaffId
        {
            get => fields.StepPerformerStaffId[this];
            set => fields.StepPerformerStaffId[this] = value;
        }
        [Expression("jUser.LastName +', '+ jUser.FirstName+' ['+ jUser.EmployeeId +']'")]
        public string StepPerformerStaffFullName
        {
            get => fields.StepPerformerStaffFullName[this];
            set => fields.StepPerformerStaffFullName[this] = value;
        }
        [DisplayName("Step Performer Patient Id")]
        [ForeignKey("[dbo].[Clients]", "ClientId"), LeftJoin("jClient")]
        public int? StepPerformerPatientId
        {
            get => fields.StepPerformerPatientId[this];
            set => fields.StepPerformerPatientId[this] = value;
        }
        [Expression("jClient.LastName +', '+ jClient.FirstName+' ['+ jClient.RecordNumber +']'")]
         public string StepPerformerPatientFullName
        {
            get => fields.StepPerformerPatientFullName[this];
            set => fields.StepPerformerPatientFullName[this] = value;
        }
        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get => fields.DueDate[this];
            set => fields.DueDate[this] = value;
        }

        [DisplayName("Date Completed")]
        public DateTime? DateCompleted
        {
            get => fields.DateCompleted[this];
            set => fields.DateCompleted[this] = value;
        }
        [DisplayName("Performer Name"), NotMapped]
        public string PerformerName
        {
            get => fields.PerformerName[this];
            set => fields.PerformerName[this] = value;
        }
        public DocumentWorkflowStepsRow()
            : base()
        {
        }

        public DocumentWorkflowStepsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DocumentStepId;
            public Int32Field WorkflowId;
            public Int32Field StepOrder;
            public StringField StepActionType;
            public StringField StepPerformerType;
            public Int32Field StepPerformerStaffId;
            public Int32Field StepPerformerPatientId;
            public DateTimeField DueDate;
            public DateTimeField DateCompleted;
            public StringField PerformerName;
            public StringField StepPerformerStaffFullName;
            public StringField StepPerformerPatientFullName;
        }
    }
}
