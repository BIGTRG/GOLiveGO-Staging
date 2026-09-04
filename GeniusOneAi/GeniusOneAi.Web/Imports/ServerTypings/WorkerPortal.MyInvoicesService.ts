namespace GeniusOneAi.WorkerPortal {
    export namespace MyInvoicesService {
        export const baseUrl = 'WorkerPortal/MyInvoices';

        export declare function Create(request: Serenity.SaveRequest<MyInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MyInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MyInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MyInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "WorkerPortal/MyInvoices/Create",
            Update = "WorkerPortal/MyInvoices/Update",
            Delete = "WorkerPortal/MyInvoices/Delete",
            Retrieve = "WorkerPortal/MyInvoices/Retrieve",
            List = "WorkerPortal/MyInvoices/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MyInvoicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
