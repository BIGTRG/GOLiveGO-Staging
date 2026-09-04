namespace GeniusOneAi.WorkerPortal {
    export namespace WorkerCaseAssignmentsService {
        export const baseUrl = 'WorkerPortal/WorkerCaseAssignments';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "WorkerPortal/WorkerCaseAssignments/Retrieve",
            List = "WorkerPortal/WorkerCaseAssignments/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerCaseAssignmentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
