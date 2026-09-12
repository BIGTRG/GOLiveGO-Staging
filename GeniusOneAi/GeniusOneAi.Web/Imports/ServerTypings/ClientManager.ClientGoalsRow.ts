namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsRow {
        ClientGoalId?: number;
        ClientId?: number;
        Goal?: string;
        Description?: string;
        WorkerFullName?: string;
        CompletionDate?: string;
        OwnerCreateDate?: string;
        Owner?: number;
        Status?: string;
        GoalType?: string;
        TenantId?: number;
        ClientInterventionsList?: ClientGoalInterventionsRow[];
        IsActiveMonday?: boolean;
        IsActiveTuesday?: boolean;
        IsActiveWednesday?: boolean;
        IsActiveThursday?: boolean;
        IsActiveFriday?: boolean;
        IsActiveSaturday?: boolean;
        IsActiveSunday?: boolean;
        EpisodeId?: number;
        Phase?: string;
        LibraryGoalId?: number;
        SourceRuleId?: number;
        IsProtocol?: boolean;
    }

    export namespace ClientGoalsRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'Goal';
        export const localTextPrefix = 'ClientManager.ClientGoals';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            ClientId = "ClientId",
            Goal = "Goal",
            Description = "Description",
            WorkerFullName = "WorkerFullName",
            CompletionDate = "CompletionDate",
            OwnerCreateDate = "OwnerCreateDate",
            Owner = "Owner",
            Status = "Status",
            GoalType = "GoalType",
            TenantId = "TenantId",
            ClientInterventionsList = "ClientInterventionsList",
            IsActiveMonday = "IsActiveMonday",
            IsActiveTuesday = "IsActiveTuesday",
            IsActiveWednesday = "IsActiveWednesday",
            IsActiveThursday = "IsActiveThursday",
            IsActiveFriday = "IsActiveFriday",
            IsActiveSaturday = "IsActiveSaturday",
            IsActiveSunday = "IsActiveSunday",
            EpisodeId = "EpisodeId",
            Phase = "Phase",
            LibraryGoalId = "LibraryGoalId",
            SourceRuleId = "SourceRuleId",
            IsProtocol = "IsProtocol"
        }
    }
}
