namespace GeniusOneAi.DocumentManager {
    export namespace DocumentWorkflowTemplatesService {
        export const baseUrl = 'DocumentManager/DocumentWorkflowTemplates';

        export declare function Create(request: Serenity.SaveRequest<DocumentWorkflowTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentWorkflowTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DocumentManager/DocumentWorkflowTemplates/Create",
            Update = "DocumentManager/DocumentWorkflowTemplates/Update",
            Delete = "DocumentManager/DocumentWorkflowTemplates/Delete",
            Retrieve = "DocumentManager/DocumentWorkflowTemplates/Retrieve",
            List = "DocumentManager/DocumentWorkflowTemplates/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocumentWorkflowTemplatesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
