namespace GeniusOneAi.ClientManager {
    export interface ClientAuthorizationsForm {
        ProgramCodeTypeId: Serenity.LookupEditor;
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
        static formKey = 'ClientManager.ClientAuthorizations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientAuthorizationsForm.init)  {
                ClientAuthorizationsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = CustomEditors.AuthorizationTypeEditor;
                var w4 = CustomEditors.AuthorizationStatusEditor;
                var w5 = CustomEditors.AuthorizationApprovalEditor;

                Q.initFormType(ClientAuthorizationsForm, [
                    'ProgramCodeTypeId', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'UnitContactGranted', w2,
                    'AuthorizationType', w3,
                    'Status', w4,
                    'ApprovalStatus', w5,
                    'ApprovalDate', w1,
                    'ClientId', w2
                ]);
            }
        }
    }
}
