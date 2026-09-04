namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsLibrarySelectorRow {
        ClientGoalId?: number;
        GoalType?: string;
        Description?: string;
        TenantId?: number;
    }

    export namespace ClientGoalsLibrarySelectorRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'GoalType';
        export const localTextPrefix = 'ClientManager.ClientGoalsLibrarySelector';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            GoalType = "GoalType",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
