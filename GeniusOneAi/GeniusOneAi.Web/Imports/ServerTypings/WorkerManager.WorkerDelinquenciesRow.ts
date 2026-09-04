namespace GeniusOneAi.WorkerManager {
    export interface WorkerDelinquenciesRow {
        UserDelinquencyId?: number;
        UserId?: number;
        DelinquencyDate?: string;
        DelinquencyNotes?: string;
        ResolutionDate?: string;
        ResolutionNotes?: string;
        TenantId?: number;
    }

    export namespace WorkerDelinquenciesRow {
        export const idProperty = 'UserDelinquencyId';
        export const nameProperty = 'DelinquencyNotes';
        export const localTextPrefix = 'WorkerManager.WorkerDelinquencies';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserDelinquencyId = "UserDelinquencyId",
            UserId = "UserId",
            DelinquencyDate = "DelinquencyDate",
            DelinquencyNotes = "DelinquencyNotes",
            ResolutionDate = "ResolutionDate",
            ResolutionNotes = "ResolutionNotes",
            TenantId = "TenantId"
        }
    }
}
