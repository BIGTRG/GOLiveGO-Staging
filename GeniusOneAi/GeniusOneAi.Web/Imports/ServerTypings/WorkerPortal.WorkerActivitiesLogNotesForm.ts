namespace GeniusOneAi.WorkerPortal {
    export interface WorkerActivitiesLogNotesForm {
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }

    export class WorkerActivitiesLogNotesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.WorkerActivitiesLogNotes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerActivitiesLogNotesForm.init)  {
                WorkerActivitiesLogNotesForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(WorkerActivitiesLogNotesForm, [
                    'Notes', w0,
                    'ActivityId', w1
                ]);
            }
        }
    }
}
