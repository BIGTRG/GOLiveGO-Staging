namespace GeniusOneAi.Administration {
    export interface ProgramCodeTypesRow {
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        BillCode?: string;
        Mod1?: string;
        Mod2?: string;
        Mod3?: string;
        Mod4?: string;
        FundingSource?: string;
        Description?: string;
        InsuranceId?: number;
        BillRate?: number;
        BillRateUnit?: string;
        TenantId?: number;
        RateEffective?: string;
        RateEnd?: string;
        SpecialtyName?: string;
        BillCodeWithMods?: string;
        ProgramName?: string;
    }

    export namespace ProgramCodeTypesRow {
        export const idProperty = 'ProgramCodeTypeId';
        export const nameProperty = 'BillCode';
        export const localTextPrefix = 'AgencyAdministration.ProgramCodeTypes';
        export const lookupKey = 'GeniusOneAi.ProgramCodeTypes';

        export function getLookup(): Q.Lookup<ProgramCodeTypesRow> {
            return Q.getLookup<ProgramCodeTypesRow>('GeniusOneAi.ProgramCodeTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            BillCode = "BillCode",
            Mod1 = "Mod1",
            Mod2 = "Mod2",
            Mod3 = "Mod3",
            Mod4 = "Mod4",
            FundingSource = "FundingSource",
            Description = "Description",
            InsuranceId = "InsuranceId",
            BillRate = "BillRate",
            BillRateUnit = "BillRateUnit",
            TenantId = "TenantId",
            RateEffective = "RateEffective",
            RateEnd = "RateEnd",
            SpecialtyName = "SpecialtyName",
            BillCodeWithMods = "BillCodeWithMods",
            ProgramName = "ProgramName"
        }
    }
}
