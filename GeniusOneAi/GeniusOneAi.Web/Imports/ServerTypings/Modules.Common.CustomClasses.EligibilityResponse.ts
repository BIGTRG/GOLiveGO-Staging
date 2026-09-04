namespace GeniusOneAi.Modules.Common.CustomClasses {
    export interface EligibilityResponse extends Serenity.ServiceResponse {
        Response?: string;
        isError?: boolean;
        PolicyNumber?: string;
        GroupNumber?: string;
        PlanNumber?: string;
        insDob?: string;
        insGender?: string;
        insAddress1?: string;
        insCity?: string;
        insState?: string;
        insZipcode?: string;
    }
}
