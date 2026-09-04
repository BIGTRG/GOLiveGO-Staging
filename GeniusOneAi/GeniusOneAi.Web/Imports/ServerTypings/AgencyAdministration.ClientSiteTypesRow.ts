namespace GeniusOneAi.AgencyAdministration {
    export interface ClientSiteTypesRow {
        ClientSiteTypeId?: number;
        SiteTypeId?: number;
        ClientId?: number;
        TenantId?: number;
    }

    export namespace ClientSiteTypesRow {
        export const idProperty = 'ClientSiteTypeId';
        export const localTextPrefix = 'AgencyAdministration.ClientSiteTypes';
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            ClientSiteTypeId = "ClientSiteTypeId",
            SiteTypeId = "SiteTypeId",
            ClientId = "ClientId",
            TenantId = "TenantId"
        }
    }
}
