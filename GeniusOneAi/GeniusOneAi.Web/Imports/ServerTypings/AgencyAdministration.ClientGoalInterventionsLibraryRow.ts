namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalInterventionsLibraryRow {
        ClientGoalInterventionId?: number;
        ClientGoalId?: number;
        InterDesc?: string;
        TenantId?: number;
    }

    export namespace ClientGoalInterventionsLibraryRow {
        export const idProperty = 'ClientGoalInterventionId';
        export const nameProperty = 'InterDesc';
        export const localTextPrefix = 'AgencyAdministration.ClientGoalInterventionsLibrary';
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            ClientGoalInterventionId = "ClientGoalInterventionId",
            ClientGoalId = "ClientGoalId",
            InterDesc = "InterDesc",
            TenantId = "TenantId"
        }
    }
}
