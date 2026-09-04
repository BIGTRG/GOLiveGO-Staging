namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalsLibraryRow {
        ClientGoalId?: number;
        Description?: string;
        GoalType?: string;
        TenantId?: number;
        ClientInterventionsLibraryList?: ClientGoalInterventionsLibraryRow[];
    }

    export namespace ClientGoalsLibraryRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'AgencyAdministration.ClientGoalsLibrary';
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            Description = "Description",
            GoalType = "GoalType",
            TenantId = "TenantId",
            ClientInterventionsLibraryList = "ClientInterventionsLibraryList"
        }
    }
}
