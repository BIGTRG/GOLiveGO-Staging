namespace GeniusOneAi.WorkerManager {
    export interface WorkerCredentialsRow {
        UserCredentialId?: number;
        CredentialTypeId?: number;
        CredentialName?: string;
        UserId?: number;
        EffectiveDate?: string;
        ExpirationDate?: string;
        AlertStatus?: boolean;
        TenantId?: number;
    }

    export namespace WorkerCredentialsRow {
        export const idProperty = 'UserCredentialId';
        export const nameProperty = 'ExpirationDate';
        export const localTextPrefix = 'WorkerManager.WorkerCredentials';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserCredentialId = "UserCredentialId",
            CredentialTypeId = "CredentialTypeId",
            CredentialName = "CredentialName",
            UserId = "UserId",
            EffectiveDate = "EffectiveDate",
            ExpirationDate = "ExpirationDate",
            AlertStatus = "AlertStatus",
            TenantId = "TenantId"
        }
    }
}
