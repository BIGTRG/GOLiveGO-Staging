namespace GeniusOneAi.DocumentManager {
    export namespace DocumentSelectorService {
        export const baseUrl = 'DocumentManager/DocumentSelector';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentSelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CopyDocumentsToClient(request: Modules.Common.CustomClasses.BaseRecsRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "DocumentManager/DocumentSelector/List",
            CopyDocumentsToClient = "DocumentManager/DocumentSelector/CopyDocumentsToClient"
        }

        [
            'List', 
            'CopyDocumentsToClient'
        ].forEach(x => {
            (<any>DocumentSelectorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
