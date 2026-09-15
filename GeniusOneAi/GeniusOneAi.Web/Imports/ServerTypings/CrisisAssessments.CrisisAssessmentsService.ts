namespace GeniusOneAi.CrisisAssessments {
    export namespace CrisisAssessmentsService {
        export const baseUrl = 'CrisisAssessments/CrisisAssessments';

        export declare function Create(request: Serenity.SaveRequest<CrisisAssessmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CrisisAssessmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CrisisAssessmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Evaluate(request: EvaluateRequest, onSuccess?: (response: EvaluationResult) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Recommendations(request: Serenity.RetrieveRequest, onSuccess?: (response: EvaluationResult) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Complete(request: CompleteRequest, onSuccess?: (response: CompleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Sign(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CrisisAssessmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CrisisAssessments/CrisisAssessments/Create",
            Update = "CrisisAssessments/CrisisAssessments/Update",
            Delete = "CrisisAssessments/CrisisAssessments/Delete",
            Retrieve = "CrisisAssessments/CrisisAssessments/Retrieve",
            List = "CrisisAssessments/CrisisAssessments/List"
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Evaluate', 'Recommendations', 'Complete', 'Sign'].forEach(x => {
            (<any>CrisisAssessmentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

namespace GeniusOneAi.CrisisAssessments {
    export interface EvaluateRequest extends Serenity.ServiceRequest { Entity?: CrisisAssessmentsRow; }
    export interface HardStop { Title?: string; Instruction?: string; Source?: string; }
    export interface EvalNeed { NeedKey?: string; Label?: string; Category?: string; CategoryLabel?: string; Priority?: string; Sources?: string; E3E4Goals?: number; }
    export interface EvalGoal { LibraryGoalId?: number; Code?: string; Phase?: string; Description?: string; NeedKey?: string; IsProtocol?: boolean; Locked?: boolean; Preselected?: boolean; Source?: string; }
    export interface EvaluationResult extends Serenity.ServiceResponse {
        FormType?: string; Score?: number; ScoreCutoff?: number; ScoreReached?: boolean; Answered?: number; QuestionCount?: number; HighRisk?: boolean;
        HardStops?: HardStop[]; Needs?: EvalNeed[]; TonightGoals?: EvalGoal[]; FiredRuleIds?: number[];
        E2ProtocolGoals?: number; E5ProtocolGoals?: number; FollowUpGoals?: number; RepeatEpisode?: boolean; ProtocolResult?: string;
    }
    export interface DeclinedGoal { LibraryGoalId?: number; Reason?: string; }
    export interface CompleteRequest extends Serenity.ServiceRequest { AssessmentId?: number; NeedKeys?: string[]; GoalIds?: number[]; Declined?: DeclinedGoal[]; AssignedWorkerId?: number; }
    export interface CompleteResponse extends Serenity.ServiceResponse { EpisodeId?: number; EpisodeOpened?: boolean; NeedsCreated?: number; GoalsByPhase?: { [key: string]: number }; }
}
