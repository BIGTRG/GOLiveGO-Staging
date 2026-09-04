namespace GeniusOneAi.Administration {
    export interface ProgramCodeTypesForm {
        ProgramTypeId: Serenity.LookupEditor;
        BillCode: Serenity.StringEditor;
        Mod1: Serenity.StringEditor;
        Mod2: Serenity.StringEditor;
        Mod3: Serenity.StringEditor;
        Mod4: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        BillRate: Serenity.DecimalEditor;
        BillRateUnit: CustomEditors.BillRateUnitEditor;
    }

    export class ProgramCodeTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.ProgramCodeTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramCodeTypesForm.init)  {
                ProgramCodeTypesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;
                var w4 = CustomEditors.BillRateUnitEditor;

                Q.initFormType(ProgramCodeTypesForm, [
                    'ProgramTypeId', w0,
                    'BillCode', w1,
                    'Mod1', w1,
                    'Mod2', w1,
                    'Mod3', w1,
                    'Mod4', w1,
                    'Description', w2,
                    'BillRate', w3,
                    'BillRateUnit', w4
                ]);
            }
        }
    }
}
