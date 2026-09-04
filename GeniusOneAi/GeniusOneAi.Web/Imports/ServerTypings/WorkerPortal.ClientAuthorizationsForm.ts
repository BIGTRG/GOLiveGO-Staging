namespace GeniusOneAi.WorkerPortal {
    export interface ClientAuthorizationsForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        UnitContactGranted: Serenity.IntegerEditor;
        AuthorizationType: CustomEditors.AuthorizationTypeEditor;
        Status: CustomEditors.AuthorizationStatusEditor;
        ApprovalStatus: CustomEditors.AuthorizationApprovalEditor;
        ApprovalDate: Serenity.DateEditor;
        ClientId: Serenity.IntegerEditor;
    }

    export class ClientAuthorizationsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.ClientAuthorizations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientAuthorizationsForm.init)  {
                ClientAuthorizationsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = CustomEditors.AuthorizationTypeEditor;
                var w3 = CustomEditors.AuthorizationStatusEditor;
                var w4 = CustomEditors.AuthorizationApprovalEditor;

                Q.initFormType(ClientAuthorizationsForm, [
                    'StartDate', w0,
                    'EndDate', w0,
                    'UnitContactGranted', w1,
                    'AuthorizationType', w2,
                    'Status', w3,
                    'ApprovalStatus', w4,
                    'ApprovalDate', w0,
                    'ClientId', w1
                ]);
            }
        }
    }
}
