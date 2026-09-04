namespace GeniusOneAi.WorkerPortal {
    export interface ClientDocumentsForm {
        ClientId: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        FileName: Serenity.ImageUploadEditor;
    }

    export class ClientDocumentsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.ClientDocuments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientDocumentsForm.init)  {
                ClientDocumentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(ClientDocumentsForm, [
                    'ClientId', w0,
                    'Title', w1,
                    'FileName', w2
                ]);
            }
        }
    }
}
