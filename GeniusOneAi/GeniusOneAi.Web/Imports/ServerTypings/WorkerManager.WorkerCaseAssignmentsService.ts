namespace GeniusOneAi.WorkerManager {
    export namespace WorkerCaseAssignmentsService {
        export const baseUrl = 'WorkerManager/WorkerCaseAssignments';

        export declare function Create(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "WorkerManager/WorkerCaseAssignments/Create",
            Update = "WorkerManager/WorkerCaseAssignments/Update",
            Delete = "WorkerManager/WorkerCaseAssignments/Delete",
            Retrieve = "WorkerManager/WorkerCaseAssignments/Retrieve",
            List = "WorkerManager/WorkerCaseAssignments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>WorkerCaseAssignmentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

