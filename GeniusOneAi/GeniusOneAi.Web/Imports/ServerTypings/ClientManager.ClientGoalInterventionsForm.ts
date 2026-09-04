namespace GeniusOneAi.ClientManager {
    export interface ClientGoalInterventionsForm {
        IsActiveMonday: Serenity.BooleanEditor;
        IsActiveTuesday: Serenity.BooleanEditor;
        IsActiveWednesday: Serenity.BooleanEditor;
        IsActiveThursday: Serenity.BooleanEditor;
        IsActiveFriday: Serenity.BooleanEditor;
        IsActiveSaturday: Serenity.BooleanEditor;
        IsActiveSunday: Serenity.BooleanEditor;
        InterNumber: CustomEditors.NumberOrderEditor;
        InterDesc: Serenity.TextAreaEditor;
    }

    export class ClientGoalInterventionsForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientGoalInterventions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalInterventionsForm.init)  {
                ClientGoalInterventionsForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = CustomEditors.NumberOrderEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(ClientGoalInterventionsForm, [
                    'IsActiveMonday', w0,
                    'IsActiveTuesday', w0,
                    'IsActiveWednesday', w0,
                    'IsActiveThursday', w0,
                    'IsActiveFriday', w0,
                    'IsActiveSaturday', w0,
                    'IsActiveSunday', w0,
                    'InterNumber', w1,
                    'InterDesc', w2
                ]);
            }
        }
    }
}
