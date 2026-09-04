namespace GeniusOneAi.AgencyAdministration {
    export namespace CredentialTypesService {
        export const baseUrl = 'AgencyAdministration/CredentialTypes';

        export declare function Create(request: Serenity.SaveRequest<CredentialTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CredentialTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CredentialTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CredentialTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/CredentialTypes/Create",
            Update = "AgencyAdministration/CredentialTypes/Update",
            Delete = "AgencyAdministration/CredentialTypes/Delete",
            Retrieve = "AgencyAdministration/CredentialTypes/Retrieve",
            List = "AgencyAdministration/CredentialTypes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CredentialTypesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

