namespace GeniusOneAi.Workflows {
    export namespace WorkerActivitiesService {
        export const baseUrl = 'Workflows/WorkerActivities';

        export declare function Update(request: Serenity.SaveRequest<WorkerActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Update = "Workflows/WorkerActivities/Update",
            Retrieve = "Workflows/WorkerActivities/Retrieve",
            List = "Workflows/WorkerActivities/List"
        }

        [
            'Update', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerActivitiesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
