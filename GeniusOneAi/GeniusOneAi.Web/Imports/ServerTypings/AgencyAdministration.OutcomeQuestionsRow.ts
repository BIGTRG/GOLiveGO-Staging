namespace GeniusOneAi.AgencyAdministration {
    export interface OutcomeQuestionsRow {
        QuestionId?: number;
        LibraryOutcomeId?: number;
        SortOrder?: number;
        Prompt?: string;
        AnswerType?: string;
        Options?: string;
        SentenceTemplate?: string;
        ResourceType?: string;
        SendsToCrisisPlan?: boolean;
        IsRequired?: boolean;
        ShowWhen?: string;
        TenantId?: number;
        [key: string]: any;
    }

    export namespace OutcomeQuestionsRow {
        export const idProperty = 'QuestionId';
        export const nameProperty = 'Prompt';
        export const localTextPrefix = 'AgencyAdministration.OutcomeQuestions';
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            QuestionId = "QuestionId",
            LibraryOutcomeId = "LibraryOutcomeId",
            SortOrder = "SortOrder",
            Prompt = "Prompt",
            AnswerType = "AnswerType",
            Options = "Options",
            SentenceTemplate = "SentenceTemplate",
            ResourceType = "ResourceType",
            SendsToCrisisPlan = "SendsToCrisisPlan",
            IsRequired = "IsRequired",
            ShowWhen = "ShowWhen",
            TenantId = "TenantId"
        }
    }
}
