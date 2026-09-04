namespace GeniusOneAi.WorkerPortal {
    export interface ClientAuthorizationsRow {
        AuthorizationId?: number;
        ClientId?: number;
        StartDate?: string;
        EndDate?: string;
        UnitContactGranted?: number;
        AuthorizationType?: string;
        Status?: string;
        ApprovalStatus?: string;
        ApprovalDate?: string;
        UnitCalculationMetric?: number;
        TenantId?: number;
        AuthDateRange?: string;
    }

    export namespace ClientAuthorizationsRow {
        export const idProperty = 'AuthorizationId';
        export const nameProperty = 'AuthDateRange';
        export const localTextPrefix = 'WorkerPortal.ClientAuthorizations';
        export const deletePermission = 'WorkerPortal:MyPatients';
        export const insertPermission = 'WorkerPortal:MyPatients';
        export const readPermission = 'WorkerPortal:MyPatients';
        export const updatePermission = 'WorkerPortal:MyPatients';

        export declare const enum Fields {
            AuthorizationId = "AuthorizationId",
            ClientId = "ClientId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            UnitContactGranted = "UnitContactGranted",
            AuthorizationType = "AuthorizationType",
            Status = "Status",
            ApprovalStatus = "ApprovalStatus",
            ApprovalDate = "ApprovalDate",
            UnitCalculationMetric = "UnitCalculationMetric",
            TenantId = "TenantId",
            AuthDateRange = "AuthDateRange"
        }
    }
}
