namespace GeniusOneAi.WorkerPortal {
    export interface ClientGoalsRow {
        ClientGoalId?: number;
        ClientId?: number;
        Goal?: string;
        Description?: string;
        CompletionDate?: string;
        Status?: string;
        TenantId?: number;
        OwnerCreateDate?: string;
        Owner?: number;
        EpisodeId?: number;
        Phase?: string;
        LibraryGoalId?: number;
        SourceRuleId?: number;
        IsProtocol?: boolean;
        NeedKey?: string;
        NeedLabel?: string;
        CarriedFromGoalId?: number;
        EffectivenessMeasure?: string;
    }

    export namespace ClientGoalsRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'Goal';
        export const localTextPrefix = 'WorkerPortal.ClientGoals';
        export const deletePermission = 'WorkerPortal:MyPatients';
        export const insertPermission = 'WorkerPortal:MyPatients';
        export const readPermission = 'WorkerPortal:MyPatients';
        export const updatePermission = 'WorkerPortal:MyPatients';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            ClientId = "ClientId",
            Goal = "Goal",
            Description = "Description",
            CompletionDate = "CompletionDate",
            Status = "Status",
            TenantId = "TenantId",
            OwnerCreateDate = "OwnerCreateDate",
            Owner = "Owner",
            EpisodeId = "EpisodeId",
            Phase = "Phase",
            LibraryGoalId = "LibraryGoalId",
            SourceRuleId = "SourceRuleId",
            IsProtocol = "IsProtocol",
            NeedKey = "NeedKey",
            NeedLabel = "NeedLabel",
            CarriedFromGoalId = "CarriedFromGoalId",
            EffectivenessMeasure = "EffectivenessMeasure"
        }
    }
}
