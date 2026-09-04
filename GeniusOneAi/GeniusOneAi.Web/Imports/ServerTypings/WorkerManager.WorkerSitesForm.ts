namespace GeniusOneAi.WorkerManager {
    export interface WorkerSitesForm {
        UserId: Serenity.IntegerEditor;
        SiteTypeId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class WorkerSitesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerSites';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerSitesForm.init)  {
                WorkerSitesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(WorkerSitesForm, [
                    'UserId', w0,
                    'SiteTypeId', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

