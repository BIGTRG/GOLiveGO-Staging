namespace GeniusOneAi.CrisisEpisodes {
    export namespace CrisisEpisodesService {
        export const baseUrl = 'CrisisEpisodes/CrisisEpisodes';

        export declare function Create(request: Serenity.SaveRequest<CrisisEpisodesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrisisEpisodesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisEpisodesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrisisEpisodesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetOpen(request: GetOpenEpisodeRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisEpisodesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Close(request: CloseEpisodeRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CrisisEpisodes/CrisisEpisodes/Create",
            Update = "CrisisEpisodes/CrisisEpisodes/Update",
            Delete = "CrisisEpisodes/CrisisEpisodes/Delete",
            Retrieve = "CrisisEpisodes/CrisisEpisodes/Retrieve",
            List = "CrisisEpisodes/CrisisEpisodes/List",
            GetOpen = "CrisisEpisodes/CrisisEpisodes/GetOpen",
            Close = "CrisisEpisodes/CrisisEpisodes/Close"
        }

        [
            'Create',
            'Update',
            'Delete',
            'Retrieve',
            'List',
            'GetOpen',
            'Close'
        ].forEach(x => {
            (<any>CrisisEpisodesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }

    export interface GetOpenEpisodeRequest extends Serenity.ServiceRequest {
        ClientId?: number;
    }

    export interface CloseEpisodeRequest extends Serenity.ServiceRequest {
        EpisodeId?: number;
        Disposition?: string;
        Notes?: string;
    }
}
