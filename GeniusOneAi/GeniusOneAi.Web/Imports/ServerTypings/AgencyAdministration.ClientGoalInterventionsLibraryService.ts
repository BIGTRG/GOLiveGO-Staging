namespace GeniusOneAi.AgencyAdministration {
    export namespace ClientGoalInterventionsLibraryService {
        export const baseUrl = 'AgencyAdministration/ClientGoalInterventionsLibrary';

        export declare function Create(request: Serenity.SaveRequest<ClientGoalInterventionsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientGoalInterventionsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalInterventionsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalInterventionsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/ClientGoalInterventionsLibrary/Create",
            Update = "AgencyAdministration/ClientGoalInterventionsLibrary/Update",
            Delete = "AgencyAdministration/ClientGoalInterventionsLibrary/Delete",
            Retrieve = "AgencyAdministration/ClientGoalInterventionsLibrary/Retrieve",
            List = "AgencyAdministration/ClientGoalInterventionsLibrary/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientGoalInterventionsLibraryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
