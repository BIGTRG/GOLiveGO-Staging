namespace GeniusOneAi.MiscEntities {
    export interface WorkerClientBillRatesRow {
        UserId?: number;
        AuthorizationId?: number;
        BillRatePercent?: number;
        BillRate?: number;
        BillRateMetric?: number;
        BillRateUnit?: string;
        CalculatedBillRate?: number;
    }

    export namespace WorkerClientBillRatesRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'BillRateUnit';
        export const localTextPrefix = 'MiscEntities.WorkerClientBillRates';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            UserId = "UserId",
            AuthorizationId = "AuthorizationId",
            BillRatePercent = "BillRatePercent",
            BillRate = "BillRate",
            BillRateMetric = "BillRateMetric",
            BillRateUnit = "BillRateUnit",
            CalculatedBillRate = "CalculatedBillRate"
        }
    }
}
