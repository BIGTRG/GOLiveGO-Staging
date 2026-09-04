namespace GeniusOneAi.AgencyAdministration {
    export interface CredentialTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class CredentialTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.CredentialTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CredentialTypesForm.init)  {
                CredentialTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(CredentialTypesForm, [
                    'Name', w0,
                    'Description', w0,
                    'TenantId', w1
                ]);
            }
        }
    }
}

