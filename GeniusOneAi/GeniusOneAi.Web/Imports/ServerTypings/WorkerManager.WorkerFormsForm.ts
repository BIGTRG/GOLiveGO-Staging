namespace GeniusOneAi.WorkerManager {
    export interface WorkerFormsForm {
        FormTypeId: Serenity.LookupEditor;
        DueDate: Serenity.DateEditor;
        AlertStatus: Serenity.BooleanEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class WorkerFormsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerForms';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerFormsForm.init)  {
                WorkerFormsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(WorkerFormsForm, [
                    'FormTypeId', w0,
                    'DueDate', w1,
                    'AlertStatus', w2,
                    'UserId', w3
                ]);
            }
        }
    }
}

