namespace GeniusOneAi.WorkerManager {
    export interface ContractorRatesForm {
        BillCategory: CustomEditors.ContratorRateEditor;
        BillCode: Serenity.LookupEditor;
        BillRate: Serenity.MaskedEditor;
        BillRateMetric: CustomEditors.BillRateMetricEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class ContractorRatesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.ContractorRates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContractorRatesForm.init)  {
                ContractorRatesForm.init = true;

                var s = Serenity;
                var w0 = CustomEditors.ContratorRateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MaskedEditor;
                var w3 = CustomEditors.BillRateMetricEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(ContractorRatesForm, [
                    'BillCategory', w0,
                    'BillCode', w1,
                    'BillRate', w2,
                    'BillRateMetric', w3,
                    'UserId', w4
                ]);
            }
        }
    }
}
