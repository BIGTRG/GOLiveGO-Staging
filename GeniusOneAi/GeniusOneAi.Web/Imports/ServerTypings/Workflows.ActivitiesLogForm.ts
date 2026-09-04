namespace GeniusOneAi.Workflows {
    export interface ActivitiesLogForm {
        RejectionReason: CustomEditors.RejectionEditor;
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }

    export class ActivitiesLogForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.ActivitiesLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesLogForm.init)  {
                ActivitiesLogForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.RejectionEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(ActivitiesLogForm, [
                    'RejectionReason', w0,
                    'Notes', w1,
                    'ActivityId', w2
                ]);
            }
        }
    }
}
