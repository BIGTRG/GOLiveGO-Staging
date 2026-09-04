namespace GeniusOneAi.Modules.Common.CustomClasses {
    export interface EligibilityRequest extends Serenity.ServiceRequest {
        FirstName?: string;
        LastName?: string;
        InsuranceId?: string;
        ServiceDate?: string;
        SiteTypeId?: string;
    }
}
