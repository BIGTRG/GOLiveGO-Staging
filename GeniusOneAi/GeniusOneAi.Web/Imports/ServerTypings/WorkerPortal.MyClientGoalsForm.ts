namespace GeniusOneAi.WorkerPortal {
    export interface MyClientGoalsForm {
        ClientId: Serenity.IntegerEditor;
        Goal: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
    }

    export class MyClientGoalsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.MyClientGoals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MyClientGoalsForm.init)  {
                MyClientGoalsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = CustomEditors.ClientGoalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(MyClientGoalsForm, [
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
