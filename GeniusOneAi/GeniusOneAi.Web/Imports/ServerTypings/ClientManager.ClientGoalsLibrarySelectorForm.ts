namespace GeniusOneAi.ClientManager {
    export interface ClientGoalsLibrarySelectorForm {
        GoalType: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class ClientGoalsLibrarySelectorForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientGoalsLibrarySelector';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsLibrarySelectorForm.init)  {
                ClientGoalsLibrarySelectorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ClientGoalsLibrarySelectorForm, [
                    'GoalType', w0,
                    'Description', w0,
                    'TenantId', w1
                ]);
            }
        }
    }
}
