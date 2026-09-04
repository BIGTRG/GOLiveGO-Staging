namespace GeniusOneAi.AgencyAdministration {
    export interface FormTypesRow {
        FormTypeId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace FormTypesRow {
        export const idProperty = 'FormTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.FormTypes';
        export const lookupKey = 'GeniusOneAi.FormTypes';

        export function getLookup(): Q.Lookup<FormTypesRow> {
            return Q.getLookup<FormTypesRow>('GeniusOneAi.FormTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            FormTypeId = "FormTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
