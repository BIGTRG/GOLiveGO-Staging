namespace GeniusOneAi.WorkerManager {
    export namespace WorkerCredentialsService {
        export const baseUrl = 'WorkerManager/WorkerCredentials';

        export declare function Create(request: Serenity.SaveRequest<WorkerCredentialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WorkerCredentialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCredentialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCredentialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "WorkerManager/WorkerCredentials/Create",
            Update = "WorkerManager/WorkerCredentials/Update",
            Delete = "WorkerManager/WorkerCredentials/Delete",
            Retrieve = "WorkerManager/WorkerCredentials/Retrieve",
            List = "WorkerManager/WorkerCredentials/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerCredentialsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

