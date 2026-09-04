namespace GeniusOneAi.WorkerPortal {
    export namespace WorkerActivitiesLogService {
        export const baseUrl = 'Workflows/WorkerActivitiesLog';

        export declare function Create(request: Serenity.SaveRequest<WorkerActivitiesLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Workflows/WorkerActivitiesLog/Create",
            Retrieve = "Workflows/WorkerActivitiesLog/Retrieve",
            List = "Workflows/WorkerActivitiesLog/List"
        }

        [
            'Create', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerActivitiesLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
