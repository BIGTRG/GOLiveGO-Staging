namespace GeniusOneAi.DocumentManager {
    export namespace DocumentsService {
        export const baseUrl = 'DocumentManager/Documents';

        export declare function Create(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Unfinal(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DocumentManager/Documents/Create",
            Update = "DocumentManager/Documents/Update",
            Delete = "DocumentManager/Documents/Delete",
            Retrieve = "DocumentManager/Documents/Retrieve",
            Unfinal = "DocumentManager/Documents/Unfinal",
            List = "DocumentManager/Documents/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'Unfinal', 
            'List'
        ].forEach(x => {
            (<any>DocumentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
