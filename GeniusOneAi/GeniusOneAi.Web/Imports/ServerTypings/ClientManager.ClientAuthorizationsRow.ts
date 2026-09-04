namespace GeniusOneAi.ClientManager {
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
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        BillCode?: string;
    }

    export namespace ClientAuthorizationsRow {
        export const idProperty = 'AuthorizationId';
        export const nameProperty = 'AuthDateRange';
        export const localTextPrefix = 'ClientManager.ClientAuthorizations';
        export const lookupKey = 'GeniusOneAi.ClientAuthorizations';

        export function getLookup(): Q.Lookup<ClientAuthorizationsRow> {
            return Q.getLookup<ClientAuthorizationsRow>('GeniusOneAi.ClientAuthorizations');
        }
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

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
            AuthDateRange = "AuthDateRange",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            BillCode = "BillCode"
        }
    }
}
