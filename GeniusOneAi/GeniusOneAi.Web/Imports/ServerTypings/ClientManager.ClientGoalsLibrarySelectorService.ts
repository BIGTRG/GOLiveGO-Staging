namespace GeniusOneAi.ClientManager {
    export namespace ClientGoalsLibrarySelectorService {
        export const baseUrl = 'ClientManager/ClientGoalsLibrarySelector';

        export declare function Create(request: Serenity.SaveRequest<ClientGoalsLibrarySelectorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientGoalsLibrarySelectorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsLibrarySelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CopyLibraryGoals(request: CopyLibraryGoalsRequest, onSuccess?: (response: CopyLibraryGoalsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsLibrarySelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CopyGoalsToClient(request: Modules.Common.CustomClasses.BaseRecsRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ClientManager/ClientGoalsLibrarySelector/Create",
            Update = "ClientManager/ClientGoalsLibrarySelector/Update",
            Delete = "ClientManager/ClientGoalsLibrarySelector/Delete",
            Retrieve = "ClientManager/ClientGoalsLibrarySelector/Retrieve",
            List = "ClientManager/ClientGoalsLibrarySelector/List",
            CopyGoalsToClient = "ClientManager/ClientGoalsLibrarySelector/CopyGoalsToClient",
            CopyLibraryGoals = "ClientManager/ClientGoalsLibrarySelector/CopyLibraryGoals"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'CopyGoalsToClient',
            'CopyLibraryGoals'
        ].forEach(x => {
            (<any>ClientGoalsLibrarySelectorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }

    export interface CopyLibraryGoalsRequest extends Serenity.ServiceRequest {
        ClientId?: number;
        EpisodeId?: number;
        Phase?: string;
        Ids?: number[];
    }
    export interface CopyLibraryGoalsResponse extends Serenity.ServiceResponse {
        Copied?: number;
        Skipped?: number;
        GoalIds?: number[];
    }
}
