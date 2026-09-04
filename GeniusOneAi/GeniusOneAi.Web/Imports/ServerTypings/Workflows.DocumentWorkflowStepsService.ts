namespace GeniusOneAi.Workflows {
    export namespace DocumentWorkflowStepsService {
        export const baseUrl = 'Workflows/DocumentWorkflowSteps';

        export declare function Create(request: Serenity.SaveRequest<DocumentWorkflowStepsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentWorkflowStepsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowStepsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowStepsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Workflows/DocumentWorkflowSteps/Create",
            Update = "Workflows/DocumentWorkflowSteps/Update",
            Delete = "Workflows/DocumentWorkflowSteps/Delete",
            Retrieve = "Workflows/DocumentWorkflowSteps/Retrieve",
            List = "Workflows/DocumentWorkflowSteps/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentWorkflowStepsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
