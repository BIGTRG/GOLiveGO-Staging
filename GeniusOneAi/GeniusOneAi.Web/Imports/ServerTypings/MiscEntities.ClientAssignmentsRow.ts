namespace GeniusOneAi.MiscEntities {
    export interface ClientAssignmentsRow {
        ClientFullName?: string;
        UserId?: number;
        ClientId?: number;
        BillCode?: string;
        AuthorizationId?: number;
        StartDate?: string;
        EndDate?: string;
        ProgramName?: string;
    }

    export namespace ClientAssignmentsRow {
        export const idProperty = 'ClientId';
        export const nameProperty = 'ClientFullName';
        export const localTextPrefix = 'MiscEntities.ClientAssignments';
        export const lookupKey = 'GeniusOneAi.ClientAssignments';

        export function getLookup(): Q.Lookup<ClientAssignmentsRow> {
            return Q.getLookup<ClientAssignmentsRow>('GeniusOneAi.ClientAssignments');
        }
        export const deletePermission = '';
        export const insertPermission = '';
        export const readPermission = '';
        export const updatePermission = '';

        export declare const enum Fields {
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ClientId = "ClientId",
            BillCode = "BillCode",
            AuthorizationId = "AuthorizationId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ProgramName = "ProgramName"
        }
    }
}
