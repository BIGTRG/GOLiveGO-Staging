namespace GeniusOneAi.WorkerManager {
    export interface WorkerInvoicesForm {
        UserId: Serenity.IntegerEditor;
        InvoiceNumber: Serenity.StringEditor;
        TotalDue: Serenity.DecimalEditor;
        DueDate: Serenity.DateEditor;
        PaymentTerms: Serenity.StringEditor;
        DateSent: Serenity.DateEditor;
        DatePaid: Serenity.DateEditor;
        TotalPaid: Serenity.DecimalEditor;
        Status: Serenity.StringEditor;
    }

    export class WorkerInvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerInvoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerInvoicesForm.init)  {
                WorkerInvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(WorkerInvoicesForm, [
                    'UserId', w0,
                    'InvoiceNumber', w1,
                    'TotalDue', w2,
                    'DueDate', w3,
                    'PaymentTerms', w1,
                    'DateSent', w3,
                    'DatePaid', w3,
                    'TotalPaid', w2,
                    'Status', w1
                ]);
            }
        }
    }
}

