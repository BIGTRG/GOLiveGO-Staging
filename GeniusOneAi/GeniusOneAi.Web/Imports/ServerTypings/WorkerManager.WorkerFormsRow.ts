namespace GeniusOneAi.WorkerManager {
    export interface WorkerFormsRow {
        UserFormId?: number;
        UserId?: number;
        DueDate?: string;
        AlertStatus?: string;
        FormName?: string;
        FormTypeId?: number;
        TenantId?: number;
    }

    export namespace WorkerFormsRow {
        export const idProperty = 'UserFormId';
        export const nameProperty = 'FormName';
        export const localTextPrefix = 'WorkerManager.WorkerForms';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserFormId = "UserFormId",
            UserId = "UserId",
            DueDate = "DueDate",
            AlertStatus = "AlertStatus",
            FormName = "FormName",
            FormTypeId = "FormTypeId",
            TenantId = "TenantId"
        }
    }
}
