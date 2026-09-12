namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsForm {
        Phase: CustomEditors.EpisodePhaseEditor;
        IsProtocol: Serenity.BooleanEditor;
        EpisodeId: Serenity.IntegerEditor;
        LibraryGoalId: Serenity.IntegerEditor;
        GoalType: Serenity.LookupEditor;
        Goal: CustomEditors.GoalEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
        ClientInterventionsList: ClientGoalInterventionsEditor;
        ClientId: Serenity.IntegerEditor;
    }

    export class ClientGoalsForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientGoals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsForm.init)  {
                ClientGoalsForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.LookupEditor;
                var w2 = CustomEditors.GoalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = CustomEditors.ClientGoalEditor;
                var w5 = s.DateEditor;
                var w6 = ClientGoalInterventionsEditor;
                var w7 = s.IntegerEditor;
                var w8 = CustomEditors.EpisodePhaseEditor;

                Q.initFormType(ClientGoalsForm, [
                    'Phase', w8,
                    'IsProtocol', w0,
                    'EpisodeId', w7,
                    'LibraryGoalId', w7,
                    'GoalType', w1,
                    'Goal', w2,
                    'Description', w3,
                    'Status', w4,
                    'CompletionDate', w5,
                    'ClientInterventionsList', w6,
                    'ClientId', w7
                ]);
            }
        }
    }
}
