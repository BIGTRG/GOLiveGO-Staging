namespace GeniusOneAi.WorkerManager {
    export interface ContractorRatesRow {
        UserContractorId?: number;
        UserId?: number;
        BillCategory?: string;
        BillCode?: string;
        BillRate?: number;
        BillRateMetric?: string;
    }

    export namespace ContractorRatesRow {
        export const idProperty = 'UserContractorId';
        export const nameProperty = 'BillCategory';
        export const localTextPrefix = 'WorkerManager.ContractorRates';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserContractorId = "UserContractorId",
            UserId = "UserId",
            BillCategory = "BillCategory",
            BillCode = "BillCode",
            BillRate = "BillRate",
            BillRateMetric = "BillRateMetric"
        }
    }
}
