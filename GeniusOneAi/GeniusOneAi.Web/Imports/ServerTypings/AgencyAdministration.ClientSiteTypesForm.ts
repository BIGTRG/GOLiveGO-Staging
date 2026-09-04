namespace GeniusOneAi.AgencyAdministration {
    export interface ClientSiteTypesForm {
        SiteTypeId: Serenity.IntegerEditor;
        ClientId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class ClientSiteTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ClientSiteTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientSiteTypesForm.init)  {
                ClientSiteTypesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(ClientSiteTypesForm, [
                    'SiteTypeId', w0,
                    'ClientId', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

