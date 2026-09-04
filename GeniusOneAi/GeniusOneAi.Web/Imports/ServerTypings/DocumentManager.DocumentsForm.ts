namespace GeniusOneAi.DocumentManager {
    export interface DocumentsForm {
        Title: Serenity.StringEditor;
        FileType: CustomEditors.DocumentTypeEditor;
        FileName: Serenity.ImageUploadEditor;
        IsTemplate: Serenity.BooleanEditor;
        MajorVersion: Serenity.IntegerEditor;
        MinorVersion: Serenity.IntegerEditor;
    }

    export class DocumentsForm extends Serenity.PrefixedContext {
        static formKey = 'DocumentManager.Documents';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentsForm.init)  {
                DocumentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = CustomEditors.DocumentTypeEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(DocumentsForm, [
                    'Title', w0,
                    'FileType', w1,
                    'FileName', w2,
                    'IsTemplate', w3,
                    'MajorVersion', w4,
                    'MinorVersion', w4
                ]);
            }
        }
    }
}
