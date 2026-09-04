namespace GeniusOneAi.WorkerManager {
    export interface WorkerCaseAssignmentsRow {
        CaseAssignmentId?: number;
        ClientId?: number;
        AssignedDate?: string;
        UnassignedDate?: string;
        AuthorizationStartDate?: string;
        AuthorizationEndDate?: string;
        AuthorizationUnitContactGranted?: number;
        Notes?: string;
        BillCode?: string;
        AuthorizationStatus?: string;
        WorkerDisplayName?: string;
        ClientFullName?: string;
        UserId?: number;
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        AuthorizationId?: number;
        TenantId?: number;
        IsTeamLead?: boolean;
    }

    export namespace WorkerCaseAssignmentsRow {
        export const idProperty = 'CaseAssignmentId';
        export const nameProperty = 'AssignedDate';
        export const localTextPrefix = 'WorkerManager.WorkerCaseAssignments';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            CaseAssignmentId = "CaseAssignmentId",
            ClientId = "ClientId",
            AssignedDate = "AssignedDate",
            UnassignedDate = "UnassignedDate",
            AuthorizationStartDate = "AuthorizationStartDate",
            AuthorizationEndDate = "AuthorizationEndDate",
            AuthorizationUnitContactGranted = "AuthorizationUnitContactGranted",
            Notes = "Notes",
            BillCode = "BillCode",
            AuthorizationStatus = "AuthorizationStatus",
            WorkerDisplayName = "WorkerDisplayName",
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId",
            IsTeamLead = "IsTeamLead"
        }
    }
}
