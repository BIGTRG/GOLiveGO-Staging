namespace GeniusOneAi.Workflows {
    export interface ActivitiesArchiveForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.BillingStatusEditor;
        Activity: Serenity.StringEditor;
    }

    export class ActivitiesArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.ActivitiesArchive';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesArchiveForm.init)  {
                ActivitiesArchiveForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = CustomEditors.BillingStatusEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ActivitiesArchiveForm, [
                    'Notes', w0,
                    'Status', w1,
                    'Activity', w2
                ]);
            }
        }
    }
}
