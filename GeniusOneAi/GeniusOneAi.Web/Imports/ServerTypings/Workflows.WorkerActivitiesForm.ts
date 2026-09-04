namespace GeniusOneAi.Workflows {
    export interface WorkerActivitiesForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusWorkflowEditor;
        Activity: CustomEditors.TimesheetActivityEditor;
    }

    export class WorkerActivitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.WorkerActivities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerActivitiesForm.init)  {
                WorkerActivitiesForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = CustomEditors.TimesheetStatusWorkflowEditor;
                var w2 = CustomEditors.TimesheetActivityEditor;

                Q.initFormType(WorkerActivitiesForm, [
                    'Notes', w0,
                    'Status', w1,
                    'Activity', w2
                ]);
            }
        }
    }
}
