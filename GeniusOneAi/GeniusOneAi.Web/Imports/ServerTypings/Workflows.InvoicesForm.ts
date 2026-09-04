namespace GeniusOneAi.Workflows {
    export interface InvoicesForm {
        InvoiceNumber: Serenity.StringEditor;
        TotalDue: Serenity.DecimalEditor;
        TotalPaid: Serenity.DecimalEditor;
        Status: CustomEditors.InvoiceStatusEditor;
    }

    export class InvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'Workflows.Invoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicesForm.init)  {
                InvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = CustomEditors.InvoiceStatusEditor;

                Q.initFormType(InvoicesForm, [
                    'InvoiceNumber', w0,
                    'TotalDue', w1,
                    'TotalPaid', w1,
                    'Status', w2
                ]);
            }
        }
    }
}
