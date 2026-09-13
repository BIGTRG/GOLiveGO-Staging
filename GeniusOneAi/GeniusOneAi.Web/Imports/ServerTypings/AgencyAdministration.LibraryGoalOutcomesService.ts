namespace GeniusOneAi.AgencyAdministration {
    export namespace LibraryGoalOutcomesService {
        export const baseUrl = 'AgencyAdministration/LibraryGoalOutcomes';

        export declare function Create(request: Serenity.SaveRequest<LibraryGoalOutcomesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LibraryGoalOutcomesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LibraryGoalOutcomesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LibraryGoalOutcomesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/LibraryGoalOutcomes/Create",
            Update = "AgencyAdministration/LibraryGoalOutcomes/Update",
            Delete = "AgencyAdministration/LibraryGoalOutcomes/Delete",
            Retrieve = "AgencyAdministration/LibraryGoalOutcomes/Retrieve",
            List = "AgencyAdministration/LibraryGoalOutcomes/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>LibraryGoalOutcomesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
