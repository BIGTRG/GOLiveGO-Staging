namespace GeniusOneAi.AgencyAdministration {
    export interface SitesTypesRow {
        SiteTypeId?: number;
        Name?: string;
        Description?: string;
        Npi?: string;
        TaxId?: string;
        Taxonomy?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        PrimaryPhone?: string;
        Status?: boolean;
        TenantId?: number;
    }

    export namespace SitesTypesRow {
        export const idProperty = 'SiteTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.SitesTypes';
        export const lookupKey = 'GeniusOneAi.SiteTypes';

        export function getLookup(): Q.Lookup<SitesTypesRow> {
            return Q.getLookup<SitesTypesRow>('GeniusOneAi.SiteTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            SiteTypeId = "SiteTypeId",
            Name = "Name",
            Description = "Description",
            Npi = "Npi",
            TaxId = "TaxId",
            Taxonomy = "Taxonomy",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            PrimaryPhone = "PrimaryPhone",
            Status = "Status",
            TenantId = "TenantId"
        }
    }
}
