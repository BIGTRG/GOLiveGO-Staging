namespace GeniusOneAi.Administration {
    export interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }

    export namespace RolePermissionRow {
        export const idProperty = 'RolePermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.RolePermission';
        export const deletePermission = 'AgencyAdministration:UserManagement';
        export const insertPermission = 'AgencyAdministration:UserManagement';
        export const readPermission = 'AgencyAdministration:UserManagement';
        export const updatePermission = 'AgencyAdministration:UserManagement';

        export declare const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
