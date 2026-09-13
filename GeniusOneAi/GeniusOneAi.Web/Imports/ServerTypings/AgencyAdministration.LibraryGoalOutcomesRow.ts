namespace GeniusOneAi.AgencyAdministration {
    export interface LibraryGoalOutcomesRow {
        LibraryOutcomeId?: number;
        LibraryGoalId?: number;
        SortOrder?: number;
        OutcomeText?: string;
        EffectivenessTemplate?: string;
        StatusRule?: string;
        SendsToCrisisPlan?: boolean;
        TenantId?: number;
        [key: string]: any;
    }

    export namespace LibraryGoalOutcomesRow {
        export const idProperty = 'LibraryOutcomeId';
        export const nameProperty = 'OutcomeText';
        export const localTextPrefix = 'AgencyAdministration.LibraryGoalOutcomes';
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            LibraryOutcomeId = "LibraryOutcomeId",
            LibraryGoalId = "LibraryGoalId",
            SortOrder = "SortOrder",
            OutcomeText = "OutcomeText",
            EffectivenessTemplate = "EffectivenessTemplate",
            StatusRule = "StatusRule",
            SendsToCrisisPlan = "SendsToCrisisPlan",
            TenantId = "TenantId"
        }
    }
}
