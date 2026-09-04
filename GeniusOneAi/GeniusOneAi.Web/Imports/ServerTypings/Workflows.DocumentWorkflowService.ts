namespace GeniusOneAi.Workflows {
    export namespace DocumentWorkflowService {
        export const baseUrl = 'Workflows/DocumentWorkflow';

        export declare function Create(request: Serenity.SaveRequest<DocumentWorkflowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentWorkflowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function IssueNewDocumentWorkflow(request: Modules.Common.CustomClasses.BaseRecRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Workflows/DocumentWorkflow/Create",
            Update = "Workflows/DocumentWorkflow/Update",
            Delete = "Workflows/DocumentWorkflow/Delete",
            Retrieve = "Workflows/DocumentWorkflow/Retrieve",
            List = "Workflows/DocumentWorkflow/List",
            IssueNewDocumentWorkflow = "Workflows/DocumentWorkflow/IssueNewDocumentWorkflow"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'IssueNewDocumentWorkflow'
        ].forEach(x => {
            (<any>DocumentWorkflowService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
