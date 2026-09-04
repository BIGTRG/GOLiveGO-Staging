namespace GeniusOneAi.Reports {
    export interface ReportsForm {
        ReportName: Serenity.StringEditor;
        ReportDescription: Serenity.TextAreaEditor;
    }

    export class ReportsForm extends Serenity.PrefixedContext {
        static formKey = 'Reports.Reports';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReportsForm.init)  {
                ReportsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ReportsForm, [
                    'ReportName', w0,
                    'ReportDescription', w1
                ]);
            }
        }
    }
}
