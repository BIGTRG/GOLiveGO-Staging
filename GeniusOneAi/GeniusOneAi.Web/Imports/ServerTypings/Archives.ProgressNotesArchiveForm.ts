namespace GeniusOneAi.Archives {
    export interface ProgressNotesArchiveForm {
        Notes: Serenity.TextAreaEditor;
    }

    export class ProgressNotesArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Archive.ProgressNotes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgressNotesArchiveForm.init)  {
                ProgressNotesArchiveForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;

                Q.initFormType(ProgressNotesArchiveForm, [
                    'Notes', w0
                ]);
            }
        }
    }
}
