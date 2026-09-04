namespace GeniusOneAi.Workflows {
    export interface DocumentWorkflowForm {
        Status: CustomEditors.WorkflowStatusEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DocumentWorkflowStepsList: DocumentWorkflowStepsEditor;
    }

    export class DocumentWorkflowForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.DocumentWorkflow';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentWorkflowForm.init)  {
                DocumentWorkflowForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.WorkflowStatusEditor;
                var w1 = s.StringEditor;
                var w2 = DocumentWorkflowStepsEditor;

                Q.initFormType(DocumentWorkflowForm, [
                    'Status', w0,
                    'Name', w1,
                    'Description', w1,
                    'DocumentWorkflowStepsList', w2
                ]);
            }
        }
    }
}
