namespace GeniusOneAi.AgencyAdministration {
    export interface LibraryGoalOutcomesForm {
        SortOrder: Serenity.IntegerEditor;
        StatusRule: CustomEditors.StatusRuleEditor;
        OutcomeText: Serenity.TextAreaEditor;
        EffectivenessTemplate: Serenity.TextAreaEditor;
        SendsToCrisisPlan: Serenity.BooleanEditor;
        QuestionsList: OutcomeQuestionsEditor;
    }

    export class LibraryGoalOutcomesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.LibraryGoalOutcomes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LibraryGoalOutcomesForm.init)  {
                LibraryGoalOutcomesForm.init = true;

                Q.initFormType(LibraryGoalOutcomesForm, [
                    'SortOrder', Serenity.IntegerEditor,
                    'StatusRule', CustomEditors.StatusRuleEditor,
                    'OutcomeText', Serenity.TextAreaEditor,
                    'EffectivenessTemplate', Serenity.TextAreaEditor,
                    'SendsToCrisisPlan', Serenity.BooleanEditor,
                    'QuestionsList', OutcomeQuestionsEditor
                ]);
            }
        }
    }
}
