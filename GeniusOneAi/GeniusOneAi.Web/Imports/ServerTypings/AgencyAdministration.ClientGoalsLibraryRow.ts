namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalsLibraryRow {
        ClientGoalId?: number;
        Description?: string;
        GoalType?: string;
        TenantId?: number;
        Code?: string;
        Phase?: string;
        NeedKey?: string;
        NeedLabel?: string;
        NeedCategoryLabel?: string;
        Domain?: string;
        TriggerKey?: string;
        EffectivenessMeasure?: string;
        Timeframe?: string;
        LeadRole?: string;
        ResourceType?: string;
        LinkedNextPhaseGoalId?: number;
        LinkedNextPhaseGoalCode?: string;
        IsProtocol?: boolean;
        Origin?: string;
        IsActive?: boolean;
        ClientInterventionsLibraryList?: ClientGoalInterventionsLibraryRow[];
        OutcomesList?: LibraryGoalOutcomesRow[];
    }

    export namespace ClientGoalsLibraryRow {
        export const idProperty = 'ClientGoalId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'AgencyAdministration.ClientGoalsLibrary';
        export const lookupKey = 'AgencyAdministration.ClientGoalsLibrary';

        export function getLookup(): Q.Lookup<ClientGoalsLibraryRow> {
            return Q.getLookup<ClientGoalsLibraryRow>('AgencyAdministration.ClientGoalsLibrary');
        }
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            ClientGoalId = "ClientGoalId",
            Description = "Description",
            GoalType = "GoalType",
            TenantId = "TenantId",
            Code = "Code",
            Phase = "Phase",
            NeedKey = "NeedKey",
            NeedLabel = "NeedLabel",
            NeedCategoryLabel = "NeedCategoryLabel",
            Domain = "Domain",
            TriggerKey = "TriggerKey",
            EffectivenessMeasure = "EffectivenessMeasure",
            Timeframe = "Timeframe",
            LeadRole = "LeadRole",
            ResourceType = "ResourceType",
            LinkedNextPhaseGoalId = "LinkedNextPhaseGoalId",
            LinkedNextPhaseGoalCode = "LinkedNextPhaseGoalCode",
            IsProtocol = "IsProtocol",
            Origin = "Origin",
            IsActive = "IsActive",
            ClientInterventionsLibraryList = "ClientInterventionsLibraryList",
            OutcomesList = "OutcomesList"
        }
    }
}
