namespace GeniusOneAi.AgencyAdministration {
    export interface WorkerTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class WorkerTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.WorkerTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerTypesForm.init)  {
                WorkerTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(WorkerTypesForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

