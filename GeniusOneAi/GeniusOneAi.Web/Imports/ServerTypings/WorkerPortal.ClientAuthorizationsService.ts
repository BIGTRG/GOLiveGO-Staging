namespace GeniusOneAi.WorkerPortal {
    export namespace ClientAuthorizationsService {
        export const baseUrl = 'WorkerPortal/ClientAuthorizations';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Create(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "WorkerPortal/ClientAuthorizations/Retrieve",
            List = "WorkerPortal/ClientAuthorizations/List",
            Create = "WorkerPortal/ClientAuthorizations/Create",
            Update = "WorkerPortal/ClientAuthorizations/Update"
        }

        [
            'Retrieve', 
            'List', 
            'Create', 
            'Update'
        ].forEach(x => {
            (<any>ClientAuthorizationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
