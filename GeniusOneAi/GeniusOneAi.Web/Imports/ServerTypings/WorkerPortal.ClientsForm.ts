namespace GeniusOneAi.WorkerPortal {
    export interface ClientsForm {
        SiteName: Serenity.StringEditor;
        OriginalServiceDate: Serenity.DateEditor;
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
        PrimaryInsuranceTypeId: Serenity.LookupEditor;
        PrimaryInsuranceNumber: Serenity.StringEditor;
        PrimaryInsuranceGroup: Serenity.StringEditor;
        PrimaryInsuranceHolder: Serenity.StringEditor;
        PrimaryInsuranceHolderDob: Serenity.StringEditor;
        PrimaryInsuranceRelationship: Serenity.StringEditor;
        PrimaryInsuranceAddress1: Serenity.StringEditor;
        PrimaryInsuranceCity: Serenity.StringEditor;
        PrimaryInsuranceState: Serenity.StringEditor;
        PrimaryInsuranceZipCode: Serenity.StringEditor;
        SecondaryInsuranceTypeId: Serenity.LookupEditor;
        SecondaryInsuranceNumber: Serenity.StringEditor;
        SecondaryInsuranceGroup: Serenity.StringEditor;
        SecondaryInsuranceHolder: Serenity.StringEditor;
        SecondaryInsuranceHolderDob: Serenity.StringEditor;
        SecondaryInsuranceRelationship: Serenity.StringEditor;
        SecondaryInsuranceAddress1: Serenity.StringEditor;
        SecondaryInsuranceCity: Serenity.StringEditor;
        SecondaryInsuranceState: Serenity.StringEditor;
        SecondaryInsuranceZipCode: Serenity.StringEditor;
        RecordNumber: Serenity.StringEditor;
        Pcn: Serenity.StringEditor;
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

    export class ClientsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerPortal.Clients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientsForm.init)  {
                ClientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = CustomEditors.RaceEditor;
                var w3 = CustomEditors.GenderEditor;
                var w4 = s.LookupEditor;
                var w5 = CustomEditors.ReferralSourceEditor;
                var w6 = s.TextAreaEditor;
                var w7 = CustomEditors.SystemStatusEditor;

                Q.initFormType(ClientsForm, [
                    'SiteName', w0,
                    'OriginalServiceDate', w1,
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
                    'PrimaryInsuranceTypeId', w4,
                    'PrimaryInsuranceNumber', w0,
                    'PrimaryInsuranceGroup', w0,
                    'PrimaryInsuranceHolder', w0,
                    'PrimaryInsuranceHolderDob', w0,
                    'PrimaryInsuranceRelationship', w0,
                    'PrimaryInsuranceAddress1', w0,
                    'PrimaryInsuranceCity', w0,
                    'PrimaryInsuranceState', w0,
                    'PrimaryInsuranceZipCode', w0,
                    'SecondaryInsuranceTypeId', w4,
                    'SecondaryInsuranceNumber', w0,
                    'SecondaryInsuranceGroup', w0,
                    'SecondaryInsuranceHolder', w0,
                    'SecondaryInsuranceHolderDob', w0,
                    'SecondaryInsuranceRelationship', w0,
                    'SecondaryInsuranceAddress1', w0,
                    'SecondaryInsuranceCity', w0,
                    'SecondaryInsuranceState', w0,
                    'SecondaryInsuranceZipCode', w0,
                    'RecordNumber', w0,
                    'Pcn', w0,
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
