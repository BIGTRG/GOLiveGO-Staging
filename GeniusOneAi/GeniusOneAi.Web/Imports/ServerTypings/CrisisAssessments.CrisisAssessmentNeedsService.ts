namespace GeniusOneAi.CrisisAssessments {
    export namespace CrisisAssessmentNeedsService {
        export const baseUrl = 'CrisisAssessments/CrisisAssessmentNeeds';

        export declare function Create(request: Serenity.SaveRequest<CrisisAssessmentNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrisisAssessmentNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisAssessmentNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrisisAssessmentNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CrisisAssessments/CrisisAssessmentNeeds/Create",
            Update = "CrisisAssessments/CrisisAssessmentNeeds/Update",
            Delete = "CrisisAssessments/CrisisAssessmentNeeds/Delete",
            Retrieve = "CrisisAssessments/CrisisAssessmentNeeds/Retrieve",
            List = "CrisisAssessments/CrisisAssessmentNeeds/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>CrisisAssessmentNeedsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
