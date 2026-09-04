namespace GeniusOneAi.WorkerManager {
    export namespace WorkerInvoicesService {
        export const baseUrl = 'WorkerManager/WorkerInvoices';

        export declare function Create(request: Serenity.SaveRequest<WorkerInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WorkerInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "WorkerManager/WorkerInvoices/Create",
            Update = "WorkerManager/WorkerInvoices/Update",
            Delete = "WorkerManager/WorkerInvoices/Delete",
            Retrieve = "WorkerManager/WorkerInvoices/Retrieve",
            List = "WorkerManager/WorkerInvoices/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerInvoicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

