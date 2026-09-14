namespace GeniusOneAi.CrisisAssessments {
    export namespace CrisisAssessmentGoalDecisionsService {
        export const baseUrl = 'CrisisAssessments/CrisisAssessmentGoalDecisions';

        export declare function Create(request: Serenity.SaveRequest<CrisisAssessmentGoalDecisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrisisAssessmentGoalDecisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisAssessmentGoalDecisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrisisAssessmentGoalDecisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CrisisAssessments/CrisisAssessmentGoalDecisions/Create",
            Update = "CrisisAssessments/CrisisAssessmentGoalDecisions/Update",
            Delete = "CrisisAssessments/CrisisAssessmentGoalDecisions/Delete",
            Retrieve = "CrisisAssessments/CrisisAssessmentGoalDecisions/Retrieve",
            List = "CrisisAssessments/CrisisAssessmentGoalDecisions/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>CrisisAssessmentGoalDecisionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
