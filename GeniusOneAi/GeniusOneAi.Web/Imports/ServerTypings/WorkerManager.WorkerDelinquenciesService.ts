namespace GeniusOneAi.WorkerManager {
    export namespace WorkerDelinquenciesService {
        export const baseUrl = 'WorkerManager/WorkerDelinquencies';

        export declare function Create(request: Serenity.SaveRequest<WorkerDelinquenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WorkerDelinquenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerDelinquenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerDelinquenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "WorkerManager/WorkerDelinquencies/Create",
            Update = "WorkerManager/WorkerDelinquencies/Update",
            Delete = "WorkerManager/WorkerDelinquencies/Delete",
            Retrieve = "WorkerManager/WorkerDelinquencies/Retrieve",
            List = "WorkerManager/WorkerDelinquencies/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerDelinquenciesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

