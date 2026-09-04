namespace GeniusOneAi.AgencyAdministration {
    export namespace ClientGoalsLibraryService {
        export const baseUrl = 'AgencyAdministration/ClientGoalsLibrary';

        export declare function Create(request: Serenity.SaveRequest<ClientGoalsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientGoalsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/ClientGoalsLibrary/Create",
            Update = "AgencyAdministration/ClientGoalsLibrary/Update",
            Delete = "AgencyAdministration/ClientGoalsLibrary/Delete",
            Retrieve = "AgencyAdministration/ClientGoalsLibrary/Retrieve",
            List = "AgencyAdministration/ClientGoalsLibrary/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientGoalsLibraryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
