namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalsLibraryForm {
        Code: Serenity.StringEditor;
        GoalType: Serenity.LookupEditor;
        Phase: CustomEditors.EpisodePhaseEditor;
        NeedKey: Serenity.LookupEditor;
        Domain: Serenity.StringEditor;
        LeadRole: Serenity.StringEditor;
        TriggerKey: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        EffectivenessMeasure: Serenity.TextAreaEditor;
        Timeframe: Serenity.StringEditor;
        ResourceType: CustomEditors.ResourceTypeEditor;
        IsProtocol: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        Origin: CustomEditors.GoalOriginEditor;
        LinkedNextPhaseGoalId: Serenity.LookupEditor;
        ClientInterventionsLibraryList: ClientGoalInterventionsLibraryEditor;
        OutcomesList: LibraryGoalOutcomesEditor;
    }

    export class ClientGoalsLibraryForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ClientGoalsLibrary';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsLibraryForm.init)  {
                ClientGoalsLibraryForm.init = true;

                Q.initFormType(ClientGoalsLibraryForm, [
                    'Code', Serenity.StringEditor,
                    'GoalType', Serenity.LookupEditor,
                    'Phase', CustomEditors.EpisodePhaseEditor,
                    'NeedKey', Serenity.LookupEditor,
                    'Domain', Serenity.StringEditor,
                    'LeadRole', Serenity.StringEditor,
                    'TriggerKey', Serenity.TextAreaEditor,
                    'Description', Serenity.TextAreaEditor,
                    'EffectivenessMeasure', Serenity.TextAreaEditor,
                    'Timeframe', Serenity.StringEditor,
                    'ResourceType', CustomEditors.ResourceTypeEditor,
                    'IsProtocol', Serenity.BooleanEditor,
                    'IsActive', Serenity.BooleanEditor,
                    'Origin', CustomEditors.GoalOriginEditor,
                    'LinkedNextPhaseGoalId', Serenity.LookupEditor,
                    'ClientInterventionsLibraryList', ClientGoalInterventionsLibraryEditor,
                    'OutcomesList', LibraryGoalOutcomesEditor
                ]);
            }
        }
    }
}
