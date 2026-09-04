namespace GeniusOneAi.WorkerPortal {
    export namespace ActivitiesLogService {
        export const baseUrl = 'WorkerPortal/ActivitiesLog';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "WorkerPortal/ActivitiesLog/Retrieve",
            List = "WorkerPortal/ActivitiesLog/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ActivitiesLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
