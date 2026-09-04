namespace GeniusOneAi.WorkerManager {
    export interface WorkerSitesRow {
        UserSiteId?: number;
        UserId?: number;
        SiteTypeId?: number;
        TenantId?: number;
    }

    export namespace WorkerSitesRow {
        export const idProperty = 'UserSiteId';
        export const localTextPrefix = 'WorkerManager.WorkerSites';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserSiteId = "UserSiteId",
            UserId = "UserId",
            SiteTypeId = "SiteTypeId",
            TenantId = "TenantId"
        }
    }
}
