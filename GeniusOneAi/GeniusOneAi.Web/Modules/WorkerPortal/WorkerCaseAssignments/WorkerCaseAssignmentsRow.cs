
namespace GeniusOneAi.WorkerPortal.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[WorkerCaseAssignments]")]
    [DisplayName("Worker Case Assignments"), InstanceName("Worker Case Assignments")]
    [ReadPermission(PermissionKeys.MyPatients)]
    [ModifyPermission(PermissionKeys.MyPatients)]
    public sealed class WorkerCaseAssignmentsRow : Row<WorkerCaseAssignmentsRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Case Assignment Id"), Identity, IdProperty]
        public Int32? CaseAssignmentId
        {
            get => fields.CaseAssignmentId[this];
            set => fields.CaseAssignmentId[this] = value;
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

        [DisplayName("Assigned Date")]
        [NameProperty]
        public DateTime? AssignedDate
        {
            get => fields.AssignedDate[this];
            set => fields.AssignedDate[this] = value;
        }

        [DisplayName("Unassigned Date")]
        public DateTime? UnassignedDate
        {
            get => fields.UnassignedDate[this];
            set => fields.UnassignedDate[this] = value;
        }

        [DisplayName("Notes"), Size(500), QuickSearch]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("User Id"),ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }
        [DisplayName("Worker"), QuickSearch][Expression("jUser.DisplayName")]
        public String WorkerDisplayName
        {
            get => fields.WorkerDisplayName[this];
            set => fields.WorkerDisplayName[this] = value;
        }
        [DisplayName("Program Code Id"), ForeignKey("[dbo].[ProgramCodeTypes]", "ProgramCodeTypeId"), LeftJoin("jProgramCode")]
        public Int32? ProgramCodeTypeId
        {
            get => fields.ProgramCodeTypeId[this];
            set => fields.ProgramCodeTypeId[this] = value;
        }
        [Expression("jProgramCode.BillCode")]
        public String BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }
        [Expression("jProgramCode.ProgramTypeId")]
        public Int32? ProgramTypeId
        {
            get => fields.ProgramTypeId[this];
            set => fields.ProgramTypeId[this] = value;
        }
        [DisplayName("Authorization Id"), ForeignKey("[dbo].[ClientAuthorizations]", "AuthorizationId"), LeftJoin("jAuthorization")]
        public Int32? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }
        [Expression("jAuthorization.StartDate")]
        public DateTime? AuthorizationStartDate
        {
            get => fields.AuthorizationStartDate[this];
            set => fields.AuthorizationStartDate[this] = value;
        }
        [Expression("jAuthorization.EndDate")]
        public DateTime? AuthorizationEndDate
        {
            get => fields.AuthorizationEndDate[this];
            set => fields.AuthorizationEndDate[this] = value;
        }
        [Expression("jAuthorization.UnitContactGranted")]
        public Int32? AuthorizationUnitContactGranted
        {
            get => fields.AuthorizationUnitContactGranted[this];
            set => fields.AuthorizationUnitContactGranted[this] = value;
        }
        [Expression("jAuthorization.ApprovalStatus")]
        public String AuthorizationStatus
        {
            get => fields.AuthorizationStatus[this];
            set => fields.AuthorizationStatus[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Is Team Lead")]
        public Boolean? IsTeamLead
        {
            get => fields.IsTeamLead[this];
            set => fields.IsTeamLead[this] = value;
        }
        public WorkerCaseAssignmentsRow()
        {
        }

        public WorkerCaseAssignmentsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CaseAssignmentId;
            public Int32Field ClientId;
            public DateTimeField AssignedDate;
            public DateTimeField UnassignedDate;
            public DateTimeField AuthorizationStartDate;
            public DateTimeField AuthorizationEndDate;
            public Int32Field AuthorizationUnitContactGranted;
            public StringField Notes;
            public StringField BillCode;
            public StringField AuthorizationStatus;
            public StringField WorkerDisplayName;
            public StringField ClientFullName;
            public Int32Field UserId;
            public Int32Field ProgramCodeTypeId;
            public Int32Field ProgramTypeId;
            public Int32Field AuthorizationId;
            public Int32Field TenantId;
            public BooleanField IsTeamLead;
        }
    }
}
