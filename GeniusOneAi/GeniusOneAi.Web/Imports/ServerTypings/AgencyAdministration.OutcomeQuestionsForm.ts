namespace GeniusOneAi.AgencyAdministration {
    export interface OutcomeQuestionsForm {
        SortOrder: Serenity.IntegerEditor;
        AnswerType: CustomEditors.AnswerTypeEditor;
        Prompt: Serenity.StringEditor;
        Options: Serenity.StringEditor;
        ResourceType: CustomEditors.ResourceTypeEditor;
        ShowWhen: Serenity.StringEditor;
        SentenceTemplate: Serenity.TextAreaEditor;
        SendsToCrisisPlan: Serenity.BooleanEditor;
        IsRequired: Serenity.BooleanEditor;
    }

    export class OutcomeQuestionsForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.OutcomeQuestions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutcomeQuestionsForm.init)  {
                OutcomeQuestionsForm.init = true;

                Q.initFormType(OutcomeQuestionsForm, [
                    'SortOrder', Serenity.IntegerEditor,
                    'AnswerType', CustomEditors.AnswerTypeEditor,
                    'Prompt', Serenity.StringEditor,
                    'Options', Serenity.StringEditor,
                    'ResourceType', CustomEditors.ResourceTypeEditor,
                    'ShowWhen', Serenity.StringEditor,
                    'SentenceTemplate', Serenity.TextAreaEditor,
                    'SendsToCrisisPlan', Serenity.BooleanEditor,
                    'IsRequired', Serenity.BooleanEditor
                ]);
            }
        }
    }
}
