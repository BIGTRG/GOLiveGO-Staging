namespace GeniusOneAi.DocumentManager {
    export namespace DocumentWorkflowStepsTemplatesService {
        export const baseUrl = 'DocumentManager/DocumentWorkflowStepsTemplates';

        export declare function Create(request: Serenity.SaveRequest<DocumentWorkflowStepsTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentWorkflowStepsTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowStepsTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowStepsTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DocumentManager/DocumentWorkflowStepsTemplates/Create",
            Update = "DocumentManager/DocumentWorkflowStepsTemplates/Update",
            Delete = "DocumentManager/DocumentWorkflowStepsTemplates/Delete",
            Retrieve = "DocumentManager/DocumentWorkflowStepsTemplates/Retrieve",
            List = "DocumentManager/DocumentWorkflowStepsTemplates/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentWorkflowStepsTemplatesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
