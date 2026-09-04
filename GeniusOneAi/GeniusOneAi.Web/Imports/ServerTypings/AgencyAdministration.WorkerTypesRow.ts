namespace GeniusOneAi.AgencyAdministration {
    export interface WorkerTypesRow {
        UserTypeId?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
    }

    export namespace WorkerTypesRow {
        export const idProperty = 'UserTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.WorkerTypes';
        export const lookupKey = 'GeniusOneAi.WorkerTypes';

        export function getLookup(): Q.Lookup<WorkerTypesRow> {
            return Q.getLookup<WorkerTypesRow>('GeniusOneAi.WorkerTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            UserTypeId = "UserTypeId",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
