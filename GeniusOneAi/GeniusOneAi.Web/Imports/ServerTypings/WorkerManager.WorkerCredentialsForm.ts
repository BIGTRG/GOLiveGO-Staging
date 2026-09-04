namespace GeniusOneAi.WorkerManager {
    export interface WorkerCredentialsForm {
        CredentialTypeId: Serenity.LookupEditor;
        EffectiveDate: Serenity.DateEditor;
        ExpirationDate: Serenity.DateEditor;
        AlertStatus: Serenity.BooleanEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class WorkerCredentialsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerCredentials';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerCredentialsForm.init)  {
                WorkerCredentialsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(WorkerCredentialsForm, [
                    'CredentialTypeId', w0,
                    'EffectiveDate', w1,
                    'ExpirationDate', w1,
                    'AlertStatus', w2,
                    'UserId', w3
                ]);
            }
        }
    }
}

