namespace GeniusOneAi.WorkerPortal {
    export interface ClientGoalsForm {
        ClientId: Serenity.IntegerEditor;
        Goal: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
    }

    export class ClientGoalsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.ClientGoals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsForm.init)  {
                ClientGoalsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = CustomEditors.ClientGoalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ClientGoalsForm, [
                    'ClientId', w0,
                    'Goal', w1,
                    'Description', w2,
                    'Status', w3,
                    'CompletionDate', w4
                ]);
            }
        }
    }
}
