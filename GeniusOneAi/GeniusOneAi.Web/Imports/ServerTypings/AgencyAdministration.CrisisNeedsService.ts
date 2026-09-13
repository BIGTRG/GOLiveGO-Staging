namespace GeniusOneAi.AgencyAdministration {
    export namespace CrisisNeedsService {
        export const baseUrl = 'AgencyAdministration/CrisisNeeds';

        export declare function Create(request: Serenity.SaveRequest<CrisisNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrisisNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrisisNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/CrisisNeeds/Create",
            Update = "AgencyAdministration/CrisisNeeds/Update",
            Delete = "AgencyAdministration/CrisisNeeds/Delete",
            Retrieve = "AgencyAdministration/CrisisNeeds/Retrieve",
            List = "AgencyAdministration/CrisisNeeds/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>CrisisNeedsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
