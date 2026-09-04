namespace GeniusOneAi.Administration {
    export interface InsuranceTypesRow {
        InsuranceTypeId?: number;
        Name?: string;
        Description?: string;
        PayerId?: string;
        Status?: boolean;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        County?: string;
        PrimaryPhone?: string;
        Type?: string;
    }

    export namespace InsuranceTypesRow {
        export const idProperty = 'InsuranceTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.InsuranceTypes';
        export const lookupKey = 'GeniusOneAi.InsuranceTypes';

        export function getLookup(): Q.Lookup<InsuranceTypesRow> {
            return Q.getLookup<InsuranceTypesRow>('GeniusOneAi.InsuranceTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            InsuranceTypeId = "InsuranceTypeId",
            Name = "Name",
            Description = "Description",
            PayerId = "PayerId",
            Status = "Status",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            County = "County",
            PrimaryPhone = "PrimaryPhone",
            Type = "Type"
        }
    }
}
