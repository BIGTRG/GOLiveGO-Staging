namespace GeniusOneAi.Modules.Common.CustomClasses {
    export interface BaseRecsRequest extends Serenity.ServiceRequest {
        Recs?: string;
        Ids?: string[];
        clientId?: number;
        workerId?: number;
    }
}
