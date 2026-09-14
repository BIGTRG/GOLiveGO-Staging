namespace GeniusOneAi.CrisisAssessments {
    export interface CrisisAssessmentGoalDecisionsRow {
        DecisionId?: number;
        AssessmentId?: number;
        EpisodeId?: number;
        LibraryGoalId?: number;
        Code?: string;
        Description?: string;
        Source?: string;
        Kept?: boolean;
        Reason?: string;
        ClientGoalId?: number;
        [key: string]: any;
    }

    export namespace CrisisAssessmentGoalDecisionsRow {
        export const idProperty = 'DecisionId';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'CrisisAssessments.CrisisAssessmentGoalDecisions';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            DecisionId = "DecisionId",
            AssessmentId = "AssessmentId",
            EpisodeId = "EpisodeId",
            LibraryGoalId = "LibraryGoalId",
            Code = "Code",
            Description = "Description",
            Source = "Source",
            Kept = "Kept",
            Reason = "Reason",
            ClientGoalId = "ClientGoalId"
        }
    }
}
