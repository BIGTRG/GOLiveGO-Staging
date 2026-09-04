namespace GeniusOneAi.MiscEntities {
    export interface UsStateTypesRow {
        Id?: number;
        State?: string;
        StateCode?: string;
    }

    export namespace UsStateTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'State';
        export const localTextPrefix = 'MiscEntities.UsStateTypes';
        export const lookupKey = 'GeniusOneAi.UsStateTypes';

        export function getLookup(): Q.Lookup<UsStateTypesRow> {
            return Q.getLookup<UsStateTypesRow>('GeniusOneAi.UsStateTypes');
        }
        export const deletePermission = '';
        export const insertPermission = '';
        export const readPermission = '';
        export const updatePermission = '';

        export declare const enum Fields {
            Id = "Id",
            State = "State",
            StateCode = "StateCode"
        }
    }
}
