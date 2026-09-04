namespace GeniusOneAi.DocumentManager {
    export interface DocumentWorkflowTemplatesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DocumentId: Serenity.LookupEditor;
        DocumentWorkflowStepsList: DocumentWorkflowStepsTemplatesEditor;
    }

    export class DocumentWorkflowTemplatesForm extends Serenity.PrefixedContext {
        static formKey = 'DocumentManager.DocumentWorkflowTemplates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentWorkflowTemplatesForm.init)  {
                DocumentWorkflowTemplatesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = DocumentWorkflowStepsTemplatesEditor;

                Q.initFormType(DocumentWorkflowTemplatesForm, [
                    'Name', w0,
                    'Description', w0,
                    'DocumentId', w1,
                    'DocumentWorkflowStepsList', w2
                ]);
            }
        }
    }
}
