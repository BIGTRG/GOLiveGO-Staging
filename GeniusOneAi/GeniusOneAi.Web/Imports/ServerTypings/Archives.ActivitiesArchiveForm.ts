namespace GeniusOneAi.Archives {
    export interface ActivitiesArchiveForm {
        Notes: Serenity.TextAreaEditor;
    }

    export class ActivitiesArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Archive.Activities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesArchiveForm.init)  {
                ActivitiesArchiveForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;

                Q.initFormType(ActivitiesArchiveForm, [
                    'Notes', w0
                ]);
            }
        }
    }
}
