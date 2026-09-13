namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsLibrarySelectorRow {
        ClientGoalId?: number;
        GoalType?: string;
        Description?: string;
        TenantId?: number;
        Code?: string;
        Phase?: string;
        NeedKey?: string;
        NeedLabel?: string;
        Domain?: string;
        TriggerKey?: string;
        Timeframe?: string;
        IsProtocol?: boolean;
        IsActive?: boolean;
    }

    export namespace ClientGoalsLibrarySelectorRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'ClientManager.ClientGoalsLibrarySelector';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            GoalType = "GoalType",
            Description = "Description",
            TenantId = "TenantId",
            Code = "Code",
            Phase = "Phase",
            NeedKey = "NeedKey",
            NeedLabel = "NeedLabel",
            Domain = "Domain",
            TriggerKey = "TriggerKey",
            Timeframe = "Timeframe",
            IsProtocol = "IsProtocol",
            IsActive = "IsActive"
        }
    }
}
