namespace GeniusOneAi.ClientManager {
    export interface ClientGoalOutcomesForm {
        SortOrder: Serenity.IntegerEditor;
        StatusRule: CustomEditors.StatusRuleEditor;
        OutcomeText: Serenity.TextAreaEditor;
        IsMet: Serenity.BooleanEditor;
        CheckedAt: Serenity.DateTimeEditor;
        Summary: Serenity.TextAreaEditor;
        SendsToCrisisPlan: Serenity.BooleanEditor;
    }

    export class ClientGoalOutcomesForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientGoalOutcomes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalOutcomesForm.init)  {
                ClientGoalOutcomesForm.init = true;

                Q.initFormType(ClientGoalOutcomesForm, [
                    'SortOrder', Serenity.IntegerEditor,
                    'StatusRule', CustomEditors.StatusRuleEditor,
                    'OutcomeText', Serenity.TextAreaEditor,
                    'IsMet', Serenity.BooleanEditor,
                    'CheckedAt', Serenity.DateTimeEditor,
                    'Summary', Serenity.TextAreaEditor,
                    'SendsToCrisisPlan', Serenity.BooleanEditor
                ]);
            }
        }
    }
}
