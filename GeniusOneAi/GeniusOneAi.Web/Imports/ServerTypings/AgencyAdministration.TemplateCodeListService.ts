namespace GeniusOneAi.AgencyAdministration {
    export namespace TemplateCodeListService {
        export const baseUrl = 'AgencyAdministration/TemplateCodeList';

        export declare function Create(request: Serenity.SaveRequest<TemplateCodeListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TemplateCodeListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateCodeListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateCodeListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/TemplateCodeList/Create",
            Update = "AgencyAdministration/TemplateCodeList/Update",
            Delete = "AgencyAdministration/TemplateCodeList/Delete",
            Retrieve = "AgencyAdministration/TemplateCodeList/Retrieve",
            List = "AgencyAdministration/TemplateCodeList/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TemplateCodeListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
