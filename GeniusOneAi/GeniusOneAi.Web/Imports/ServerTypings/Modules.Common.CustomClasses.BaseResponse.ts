namespace GeniusOneAi.Modules.Common.CustomClasses {
    export interface BaseResponse extends Serenity.ServiceResponse {
        Response?: string;
        ResponseType?: string;
        isError?: boolean;
    }
}
