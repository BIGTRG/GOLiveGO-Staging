namespace GeniusOneAi.AgencyAdministration {
    export namespace ResourceDirectoryService {
        export const baseUrl = 'AgencyAdministration/ResourceDirectory';

        export declare function Create(request: Serenity.SaveRequest<ResourceDirectoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ResourceDirectoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ResourceDirectoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ResourceDirectoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/ResourceDirectory/Create",
            Update = "AgencyAdministration/ResourceDirectory/Update",
            Delete = "AgencyAdministration/ResourceDirectory/Delete",
            Retrieve = "AgencyAdministration/ResourceDirectory/Retrieve",
            List = "AgencyAdministration/ResourceDirectory/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>ResourceDirectoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
