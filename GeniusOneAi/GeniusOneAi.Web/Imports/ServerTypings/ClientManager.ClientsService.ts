namespace GeniusOneAi.ClientManager {
    export namespace ClientsService {
        export const baseUrl = 'ClientManager/Clients';

        export declare function Create(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CheckPatientEligibility(request: Modules.Common.CustomClasses.EligibilityRequest, onSuccess?: (response: Modules.Common.CustomClasses.EligibilityResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientManager/Clients/Create",
            Update = "ClientManager/Clients/Update",
            Delete = "ClientManager/Clients/Delete",
            Retrieve = "ClientManager/Clients/Retrieve",
            List = "ClientManager/Clients/List",
            CheckPatientEligibility = "ClientManager/Clients/CheckPatientEligibility"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'CheckPatientEligibility'
        ].forEach(x => {
            (<any>ClientsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
