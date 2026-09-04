namespace GeniusOneAi.ClientManager {
    export namespace ClientGoalInterventionsService {
        export const baseUrl = 'ClientManager/ClientGoalInterventions';

        export declare function Create(request: Serenity.SaveRequest<ClientGoalInterventionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientGoalInterventionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalInterventionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalInterventionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientManager/ClientGoalInterventions/Create",
            Update = "ClientManager/ClientGoalInterventions/Update",
            Delete = "ClientManager/ClientGoalInterventions/Delete",
            Retrieve = "ClientManager/ClientGoalInterventions/Retrieve",
            List = "ClientManager/ClientGoalInterventions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientGoalInterventionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
