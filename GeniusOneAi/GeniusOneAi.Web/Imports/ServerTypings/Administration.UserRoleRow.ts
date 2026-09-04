namespace GeniusOneAi.Administration {
    export interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }

    export namespace UserRoleRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Administration.UserRole';
        export const deletePermission = 'AgencyAdministration:UserManagement';
        export const insertPermission = 'AgencyAdministration:UserManagement';
        export const readPermission = 'AgencyAdministration:UserManagement';
        export const updatePermission = 'AgencyAdministration:UserManagement';

        export declare const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
