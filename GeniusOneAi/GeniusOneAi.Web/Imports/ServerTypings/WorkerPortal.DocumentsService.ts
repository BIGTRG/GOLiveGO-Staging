namespace GeniusOneAi.WorkerPortal {
    export namespace DocumentsService {
        export const baseUrl = 'WorkerPortal/Documents';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "WorkerPortal/Documents/Retrieve",
            List = "WorkerPortal/Documents/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
