namespace GeniusOneAi.ClientManager {
    export interface ClientsEligibilityForm {
        RecordNumber: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Race: CustomEditors.RaceEditor;
        Gender: CustomEditors.GenderEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        County: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        SecondaryPhone: Serenity.StringEditor;
        DiagnosisDate: Serenity.DateEditor;
        PlanExpirationDate: Serenity.DateEditor;
        AdmissionDate: Serenity.DateEditor;
        DischargeDate: Serenity.DateEditor;
        ReferralDate: Serenity.DateEditor;
        ReferralSource: CustomEditors.ReferralSourceEditor;
        DiagnosisNotes: Serenity.StringEditor;
        GuardianName: Serenity.StringEditor;
        Notes: Serenity.TextAreaEditor;
        SystemStatus: CustomEditors.SystemStatusEditor;
        ClientStatus: CustomEditors.SystemStatusEditor;
    }

    export class ClientsEligibilityForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.ClientEligibility';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientsEligibilityForm.init)  {
                ClientsEligibilityForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = CustomEditors.RaceEditor;
                var w3 = CustomEditors.GenderEditor;
                var w4 = s.LookupEditor;
                var w5 = CustomEditors.ReferralSourceEditor;
                var w6 = s.TextAreaEditor;
                var w7 = CustomEditors.SystemStatusEditor;

                Q.initFormType(ClientsEligibilityForm, [
                    'RecordNumber', w0,
                    'FirstName', w0,
                    'MiddleName', w0,
                    'LastName', w0,
                    'BirthDate', w1,
                    'Race', w2,
                    'Gender', w3,
                    'Address1', w0,
                    'Address2', w0,
                    'City', w0,
                    'State', w4,
                    'Zipcode', w0,
                    'County', w0,
                    'PrimaryPhone', w0,
                    'SecondaryPhone', w0,
                    'DiagnosisDate', w1,
                    'PlanExpirationDate', w1,
                    'AdmissionDate', w1,
                    'DischargeDate', w1,
                    'ReferralDate', w1,
                    'ReferralSource', w5,
                    'DiagnosisNotes', w0,
                    'GuardianName', w0,
                    'Notes', w6,
                    'SystemStatus', w7,
                    'ClientStatus', w7
                ]);
            }
        }
    }
}
