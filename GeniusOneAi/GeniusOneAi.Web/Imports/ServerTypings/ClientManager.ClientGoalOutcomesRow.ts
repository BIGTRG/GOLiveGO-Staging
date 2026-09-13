namespace GeniusOneAi.ClientManager {
    export interface ClientGoalOutcomesRow {
        OutcomeId?: number;
        ClientGoalId?: number;
        LibraryOutcomeId?: number;
        SortOrder?: number;
        OutcomeText?: string;
        EffectivenessTemplate?: string;
        StatusRule?: string;
        SendsToCrisisPlan?: boolean;
        IsMet?: boolean;
        CheckedInNoteId?: number;
        CheckedAt?: string;
        Summary?: string;
        TenantId?: number;
        [key: string]: any;
    }

    export namespace ClientGoalOutcomesRow {
        export const idProperty = 'OutcomeId';
        export const nameProperty = 'OutcomeText';
        export const localTextPrefix = 'ClientManager.ClientGoalOutcomes';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            OutcomeId = "OutcomeId",
            ClientGoalId = "ClientGoalId",
            LibraryOutcomeId = "LibraryOutcomeId",
            SortOrder = "SortOrder",
            OutcomeText = "OutcomeText",
            EffectivenessTemplate = "EffectivenessTemplate",
            StatusRule = "StatusRule",
            SendsToCrisisPlan = "SendsToCrisisPlan",
            IsMet = "IsMet",
            CheckedInNoteId = "CheckedInNoteId",
            CheckedAt = "CheckedAt",
            Summary = "Summary",
            TenantId = "TenantId"
        }
    }
}
