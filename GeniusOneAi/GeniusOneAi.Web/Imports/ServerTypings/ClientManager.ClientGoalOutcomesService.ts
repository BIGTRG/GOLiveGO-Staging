namespace GeniusOneAi.ClientManager {
    export namespace ClientGoalOutcomesService {
        export const baseUrl = 'ClientManager/ClientGoalOutcomes';

        export declare function Create(request: Serenity.SaveRequest<ClientGoalOutcomesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientGoalOutcomesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalOutcomesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalOutcomesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientManager/ClientGoalOutcomes/Create",
            Update = "ClientManager/ClientGoalOutcomes/Update",
            Delete = "ClientManager/ClientGoalOutcomes/Delete",
            Retrieve = "ClientManager/ClientGoalOutcomes/Retrieve",
            List = "ClientManager/ClientGoalOutcomes/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>ClientGoalOutcomesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
