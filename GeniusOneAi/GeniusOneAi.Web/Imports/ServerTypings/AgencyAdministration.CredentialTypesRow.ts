namespace GeniusOneAi.AgencyAdministration {
    export interface CredentialTypesRow {
        CredentialTypeId?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
    }

    export namespace CredentialTypesRow {
        export const idProperty = 'CredentialTypeId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'AgencyAdministration.CredentialTypes';
        export const lookupKey = 'GeniusOneAi.CredentialTypes';

        export function getLookup(): Q.Lookup<CredentialTypesRow> {
            return Q.getLookup<CredentialTypesRow>('GeniusOneAi.CredentialTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            CredentialTypeId = "CredentialTypeId",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
