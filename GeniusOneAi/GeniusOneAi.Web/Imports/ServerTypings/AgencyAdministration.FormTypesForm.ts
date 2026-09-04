namespace GeniusOneAi.AgencyAdministration {
    export interface FormTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class FormTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.FormTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormTypesForm.init)  {
                FormTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FormTypesForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

