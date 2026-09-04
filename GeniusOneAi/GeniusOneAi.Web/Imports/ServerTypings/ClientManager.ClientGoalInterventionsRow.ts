namespace GeniusOneAi.ClientManager {
    export interface ClientGoalInterventionsRow {
        ClientGoalInterventionId?: number;
        ClientGoalId?: number;
        InterNumber?: number;
        InterDesc?: string;
        TenantId?: number;
        ClientGoalClientId?: number;
        ClientGoalGoalType?: string;
        ClientGoalGoal?: string;
        ClientGoalDescription?: string;
        ClientGoalCompletionDate?: string;
        ClientGoalStatus?: string;
        ClientGoalIsActive?: boolean;
        ClientGoalTenantId?: number;
        IsActiveMonday?: boolean;
        IsActiveTuesday?: boolean;
        IsActiveWednesday?: boolean;
        IsActiveThursday?: boolean;
        IsActiveFriday?: boolean;
        IsActiveSaturday?: boolean;
        IsActiveSunday?: boolean;
    }

    export namespace ClientGoalInterventionsRow {
        export const idProperty = 'ClientGoalInterventionId';
        export const nameProperty = 'InterDesc';
        export const localTextPrefix = 'ClientManager.ClientGoalInterventions';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            ClientGoalInterventionId = "ClientGoalInterventionId",
            ClientGoalId = "ClientGoalId",
            InterNumber = "InterNumber",
            InterDesc = "InterDesc",
            TenantId = "TenantId",
            ClientGoalClientId = "ClientGoalClientId",
            ClientGoalGoalType = "ClientGoalGoalType",
            ClientGoalGoal = "ClientGoalGoal",
            ClientGoalDescription = "ClientGoalDescription",
            ClientGoalCompletionDate = "ClientGoalCompletionDate",
            ClientGoalStatus = "ClientGoalStatus",
            ClientGoalIsActive = "ClientGoalIsActive",
            ClientGoalTenantId = "ClientGoalTenantId",
            IsActiveMonday = "IsActiveMonday",
            IsActiveTuesday = "IsActiveTuesday",
            IsActiveWednesday = "IsActiveWednesday",
            IsActiveThursday = "IsActiveThursday",
            IsActiveFriday = "IsActiveFriday",
            IsActiveSaturday = "IsActiveSaturday",
            IsActiveSunday = "IsActiveSunday"
        }
    }
}
