namespace GeniusOneAi.Administration {
    export interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }

    export namespace UserPermissionRow {
        export const idProperty = 'UserPermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.UserPermission';
        export const deletePermission = 'AgencyAdministration:UserManagement';
        export const insertPermission = 'AgencyAdministration:UserManagement';
        export const readPermission = 'AgencyAdministration:UserManagement';
        export const updatePermission = 'AgencyAdministration:UserManagement';

        export declare const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
