namespace GeniusOneAi.DocumentManager {
    export interface DocumentWorkflowStepsTemplatesForm {
        StepActionType: CustomEditors.StepTypeEditor;
        StepPerformerType: CustomEditors.PerformerTypeEditor;
    }

    export class DocumentWorkflowStepsTemplatesForm extends Serenity.PrefixedContext {
        static formKey = 'DocumentManager.DocumentWorkflowStepsTemplates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentWorkflowStepsTemplatesForm.init)  {
                DocumentWorkflowStepsTemplatesForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.StepTypeEditor;
                var w1 = CustomEditors.PerformerTypeEditor;

                Q.initFormType(DocumentWorkflowStepsTemplatesForm, [
                    'StepActionType', w0,
                    'StepPerformerType', w1
                ]);
            }
        }
    }
}
