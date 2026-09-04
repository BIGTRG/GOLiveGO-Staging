namespace GeniusOneAi.WorkerPortal {
    export interface ActivitiesForm {
        Activity: CustomEditors.TimesheetActivityEditor;
        ActivityDate: Serenity.DateEditor;
        ClientId: Serenity.LookupEditor;
        ProgressNoteLocation: CustomEditors.TimesheetLocationEditor;
        ProgressNoteInOut: CustomEditors.TimesheetInOutEditor;
        ActivityFromTime: Serenity.StringEditor;
        ActivityToTime: Serenity.StringEditor;
        IsBillable: Serenity.BooleanEditor;
        Hours: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusEditor;
    }

    export class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.MyActivities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesForm.init)  {
                ActivitiesForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.TimesheetActivityEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = CustomEditors.TimesheetLocationEditor;
                var w4 = CustomEditors.TimesheetInOutEditor;
                var w5 = s.StringEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.DecimalEditor;
                var w8 = s.TextAreaEditor;
                var w9 = CustomEditors.TimesheetStatusEditor;

                Q.initFormType(ActivitiesForm, [
                    'Activity', w0,
                    'ActivityDate', w1,
                    'ClientId', w2,
                    'ProgressNoteLocation', w3,
                    'ProgressNoteInOut', w4,
                    'ActivityFromTime', w5,
                    'ActivityToTime', w5,
                    'IsBillable', w6,
                    'Hours', w7,
                    'Notes', w8,
                    'Status', w9
                ]);
            }
        }
    }
}
