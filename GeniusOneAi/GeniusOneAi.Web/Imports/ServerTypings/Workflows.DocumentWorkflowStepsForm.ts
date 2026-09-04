namespace GeniusOneAi.Workflows {
    export interface DocumentWorkflowStepsForm {
        StepActionType: CustomEditors.StepTypeEditor;
        StepPerformerType: CustomEditors.PerformerTypeEditor;
        StepPerformerStaffId: Serenity.LookupEditor;
        StepPerformerPatientId: Serenity.LookupEditor;
        DueDate: Serenity.DateEditor;
    }

    export class DocumentWorkflowStepsForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.DocumentWorkflowSteps';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentWorkflowStepsForm.init)  {
                DocumentWorkflowStepsForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.StepTypeEditor;
                var w1 = CustomEditors.PerformerTypeEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;

                Q.initFormType(DocumentWorkflowStepsForm, [
                    'StepActionType', w0,
                    'StepPerformerType', w1,
                    'StepPerformerStaffId', w2,
                    'StepPerformerPatientId', w2,
                    'DueDate', w3
                ]);
            }
        }
    }
}
