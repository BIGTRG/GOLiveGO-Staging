namespace GeniusOneAi.AgencyAdministration {
    export namespace OutcomeQuestionsService {
        export const baseUrl = 'AgencyAdministration/OutcomeQuestions';

        export declare function Create(request: Serenity.SaveRequest<OutcomeQuestionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutcomeQuestionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutcomeQuestionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutcomeQuestionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/OutcomeQuestions/Create",
            Update = "AgencyAdministration/OutcomeQuestions/Update",
            Delete = "AgencyAdministration/OutcomeQuestions/Delete",
            Retrieve = "AgencyAdministration/OutcomeQuestions/Retrieve",
            List = "AgencyAdministration/OutcomeQuestions/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>OutcomeQuestionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
