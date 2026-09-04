namespace GeniusOneAi.WorkerPortal {
    export interface ActivitiesLogNotesForm {
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }

    export class ActivitiesLogNotesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.ActivitiesLogNotes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesLogNotesForm.init)  {
                ActivitiesLogNotesForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ActivitiesLogNotesForm, [
                    'Notes', w0,
                    'ActivityId', w1
                ]);
            }
        }
    }
}
