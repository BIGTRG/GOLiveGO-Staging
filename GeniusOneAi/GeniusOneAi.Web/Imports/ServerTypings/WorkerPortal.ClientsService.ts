namespace GeniusOneAi.WorkerPortal {
    export namespace ClientsService {
        export const baseUrl = 'WorkerPortal/Clients';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "WorkerPortal/Clients/Retrieve",
            List = "WorkerPortal/Clients/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

