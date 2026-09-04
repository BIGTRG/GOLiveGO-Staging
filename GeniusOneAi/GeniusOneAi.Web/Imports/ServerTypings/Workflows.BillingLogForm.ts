namespace GeniusOneAi.Workflows {
    export interface BillingLogForm {
        BillingResponseDate: Serenity.DateEditor;
        BillingResponse: Serenity.StringEditor;
        BillingResponseNotes: Serenity.TextAreaEditor;
    }

    export class BillingLogForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.BillingLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillingLogForm.init)  {
                BillingLogForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(BillingLogForm, [
                    'BillingResponseDate', w0,
                    'BillingResponse', w1,
                    'BillingResponseNotes', w2
                ]);
            }
        }
    }
}
