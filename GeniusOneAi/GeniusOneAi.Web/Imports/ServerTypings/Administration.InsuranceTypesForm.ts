namespace GeniusOneAi.Administration {
    export interface InsuranceTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        County: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        Type: CustomEditors.InsuranceEntityTypeEditor;
        PayerId: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
    }

    export class InsuranceTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.InsuranceTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InsuranceTypesForm.init)  {
                InsuranceTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = CustomEditors.InsuranceEntityTypeEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(InsuranceTypesForm, [
                    'Name', w0,
                    'Description', w1,
                    'Address1', w0,
                    'Address2', w0,
                    'City', w0,
                    'State', w2,
                    'Zipcode', w0,
                    'County', w0,
                    'PrimaryPhone', w0,
                    'Type', w3,
                    'PayerId', w0,
                    'Status', w4
                ]);
            }
        }
    }
}
