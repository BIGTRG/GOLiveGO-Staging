namespace GeniusOneAi.Archives {
    export namespace ActivitiesArchiveService {
        export const baseUrl = 'Archive/Activities';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Archive/Activities/Retrieve",
            List = "Archive/Activities/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ActivitiesArchiveService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
