namespace GeniusOneAi.WorkerPortal {
    export interface WorkerActivitiesLogForm {
        RejectionReason: CustomEditors.RejectionEditor;
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }

    export class WorkerActivitiesLogForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.WorkerActivitiesLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerActivitiesLogForm.init)  {
                WorkerActivitiesLogForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.RejectionEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(WorkerActivitiesLogForm, [
                    'RejectionReason', w0,
                    'Notes', w1,
                    'ActivityId', w2
                ]);
            }
        }
    }
}
