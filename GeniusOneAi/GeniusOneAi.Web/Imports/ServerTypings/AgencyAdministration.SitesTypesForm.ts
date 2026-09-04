namespace GeniusOneAi.AgencyAdministration {
    export interface SitesTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Npi: Serenity.StringEditor;
        TaxId: Serenity.StringEditor;
        Taxonomy: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
    }

    export class SitesTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.SitesTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SitesTypesForm.init)  {
                SitesTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(SitesTypesForm, [
                    'Name', w0,
                    'Description', w1,
                    'Npi', w0,
                    'TaxId', w0,
                    'Taxonomy', w0,
                    'Address1', w0,
                    'Address2', w0,
                    'City', w0,
                    'State', w2,
                    'Zipcode', w0,
                    'PrimaryPhone', w0,
                    'Status', w3
                ]);
            }
        }
    }
}
