namespace GeniusOneAi.Modules.Common.CustomClasses {
    export interface GetSignageResponse extends Serenity.ServiceResponse {
        signatureText?: string;
        signatureImage?: string;
        signatureGuid?: string;
        signatureVerified?: boolean;
    }
}
