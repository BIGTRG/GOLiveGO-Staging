namespace GeniusOneAi.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = 'Administration.Role';

        export function getLookup(): Q.Lookup<RoleRow> {
            return Q.getLookup<RoleRow>('Administration.Role');
        }
        export const deletePermission = 'AgencyAdministration:UserManagement';
        export const insertPermission = 'AgencyAdministration:UserManagement';
        export const readPermission = 'AgencyAdministration:UserManagement';
        export const updatePermission = 'AgencyAdministration:UserManagement';

        export declare const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
