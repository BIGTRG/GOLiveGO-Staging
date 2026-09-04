namespace GeniusOneAi.AgencyAdministration {
    export interface TemplateCodeListForm {
        TemplateId: Serenity.IntegerEditor;
        QuestionId: Serenity.IntegerEditor;
        ValueText: Serenity.StringEditor;
    }

    export class TemplateCodeListForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.TemplateCodeList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TemplateCodeListForm.init)  {
                TemplateCodeListForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TemplateCodeListForm, [
                    'TemplateId', w0,
                    'QuestionId', w0,
                    'ValueText', w1
                ]);
            }
        }
    }
}
