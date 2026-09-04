namespace GeniusOneAi.Workflows {
    export interface DocumentWorkflowCreationForm {
        DocumentWorkflowId: Serenity.LookupEditor;
    }

    export class DocumentWorkflowCreationForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.DocumentWorkflowCreation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentWorkflowCreationForm.init)  {
                DocumentWorkflowCreationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(DocumentWorkflowCreationForm, [
                    'DocumentWorkflowId', w0
                ]);
            }
        }
    }
}
