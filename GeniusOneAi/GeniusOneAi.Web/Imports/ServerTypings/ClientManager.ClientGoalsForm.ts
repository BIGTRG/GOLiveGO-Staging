namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsForm {
        Phase: CustomEditors.EpisodePhaseEditor;
        IsProtocol: Serenity.BooleanEditor;
        EpisodeId: Serenity.IntegerEditor;
        LibraryGoalId: Serenity.IntegerEditor;
        NeedKey: Serenity.LookupEditor;
        CarriedFromGoalId: Serenity.IntegerEditor;
        GoalType: Serenity.LookupEditor;
        Goal: CustomEditors.GoalEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.GoalStatusEditor;
        CompletionDate: Serenity.DateEditor;
        EffectivenessMeasure: Serenity.TextAreaEditor;
        ClientInterventionsList: ClientGoalInterventionsEditor;
        OutcomesList: ClientGoalOutcomesEditor;
        ClientId: Serenity.IntegerEditor;
    }

    export class ClientGoalsForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientGoals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsForm.init)  {
                ClientGoalsForm.init = true;

                Q.initFormType(ClientGoalsForm, [
                    'Phase', CustomEditors.EpisodePhaseEditor,
                    'IsProtocol', Serenity.BooleanEditor,
                    'EpisodeId', Serenity.IntegerEditor,
                    'LibraryGoalId', Serenity.IntegerEditor,
                    'NeedKey', Serenity.LookupEditor,
                    'CarriedFromGoalId', Serenity.IntegerEditor,
                    'GoalType', Serenity.LookupEditor,
                    'Goal', CustomEditors.GoalEditor,
                    'Description', Serenity.TextAreaEditor,
                    'Status', CustomEditors.GoalStatusEditor,
                    'CompletionDate', Serenity.DateEditor,
                    'EffectivenessMeasure', Serenity.TextAreaEditor,
                    'ClientInterventionsList', ClientGoalInterventionsEditor,
                    'OutcomesList', ClientGoalOutcomesEditor,
                    'ClientId', Serenity.IntegerEditor
                ]);
            }
        }
    }
}
