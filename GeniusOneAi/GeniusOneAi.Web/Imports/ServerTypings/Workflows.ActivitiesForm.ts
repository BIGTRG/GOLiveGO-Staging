namespace GeniusOneAi.Workflows {
    export interface ActivitiesForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusWorkflowEditor;
        Activity: CustomEditors.TimesheetActivityEditor;
    }

    export class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.Activities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesForm.init)  {
                ActivitiesForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = CustomEditors.TimesheetStatusWorkflowEditor;
                var w2 = CustomEditors.TimesheetActivityEditor;

                Q.initFormType(ActivitiesForm, [
                    'Notes', w0,
                    'Status', w1,
                    'Activity', w2
                ]);
            }
        }
    }
}
