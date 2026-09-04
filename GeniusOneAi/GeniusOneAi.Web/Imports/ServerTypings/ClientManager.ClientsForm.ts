namespace GeniusOneAi.ClientManager {
    export interface ClientsForm {
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        OtherName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Gender: CustomEditors.GenderEditor;
        Race: CustomEditors.RaceEditor;
        Ethnicity: Serenity.StringEditor;
        MaritalStatus: CustomEditors.MaritalStatusEditor;
        SocialSecurityNum: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        County: Serenity.StringEditor;
        CountryOfBirth: Serenity.StringEditor;
        CellPhone: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        SecondaryPhone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        IsVeteran: Serenity.BooleanEditor;
        PrimaryLanguage: Serenity.StringEditor;
        NextOfKinName: Serenity.StringEditor;
        NextOfKinPhone: Serenity.StringEditor;
        MothersName: Serenity.StringEditor;
        FathersName: Serenity.StringEditor;
        LicenseStateId: Serenity.StringEditor;
        EmploymentStatus: CustomEditors.EmploymentStatusEditor;
        NumberInHouse: Serenity.IntegerEditor;
        LivingArrangements: CustomEditors.LivingArrangmentsEditor;
        GrossIncomeDollar: Serenity.MaskedEditor;
        GrossIncomePer: CustomEditors.IncomePerEditor;
        NumberDepenentIncome: Serenity.IntegerEditor;
        EducationLevel: Serenity.StringEditor;
        NameOfSchool: Serenity.StringEditor;
        EmergencyPerson: Serenity.StringEditor;
        EmergencyPhone: Serenity.StringEditor;
        PreferredPhysician: Serenity.StringEditor;
        PreferredPhysicianAddress: Serenity.StringEditor;
        PreferredPhysicianCounty: Serenity.StringEditor;
        PreferredPhysicianPhone: Serenity.StringEditor;
        PharmacyUsed: Serenity.StringEditor;
        PharmacyPhone: Serenity.StringEditor;
        Allergies: CustomEditors.YesNoEditor;
        AllergiesMoreInfo: Serenity.StringEditor;
        PrimaryInsuranceTypeId: Serenity.LookupEditor;
        PrimaryInsuranceNumber: Serenity.StringEditor;
        PrimaryInsuranceGroup: Serenity.StringEditor;
        PrimaryInsuranceHolder: Serenity.StringEditor;
        PrimaryInsuranceHolderDob: Serenity.DateEditor;
        PrimaryInsuranceRelationship: Serenity.StringEditor;
        PrimaryInsuranceAddress1: Serenity.StringEditor;
        PrimaryInsuranceCity: Serenity.StringEditor;
        PrimaryInsuranceState: Serenity.StringEditor;
        PrimaryInsuranceZipCode: Serenity.StringEditor;
        SecondaryInsuranceTypeId: Serenity.LookupEditor;
        SecondaryInsuranceNumber: Serenity.StringEditor;
        SecondaryInsuranceGroup: Serenity.StringEditor;
        SecondaryInsuranceHolder: Serenity.StringEditor;
        SecondaryInsuranceHolderDob: Serenity.DateEditor;
        SecondaryInsuranceRelationship: Serenity.StringEditor;
        SecondaryInsuranceAddress1: Serenity.StringEditor;
        SecondaryInsuranceCity: Serenity.StringEditor;
        SecondaryInsuranceState: Serenity.StringEditor;
        SecondaryInsuranceZipCode: Serenity.StringEditor;
        SiteTypeId: SitesTypesFormatter;
        OriginalServiceDate: Serenity.DateEditor;
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
        static formKey = 'ClientManager.Clients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientsForm.init)  {
                ClientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = CustomEditors.GenderEditor;
                var w3 = CustomEditors.RaceEditor;
                var w4 = CustomEditors.MaritalStatusEditor;
                var w5 = s.LookupEditor;
                var w6 = s.BooleanEditor;
                var w7 = CustomEditors.EmploymentStatusEditor;
                var w8 = s.IntegerEditor;
                var w9 = CustomEditors.LivingArrangmentsEditor;
                var w10 = s.MaskedEditor;
                var w11 = CustomEditors.IncomePerEditor;
                var w12 = CustomEditors.YesNoEditor;
                var w13 = SitesTypesFormatter;
                var w14 = CustomEditors.ReferralSourceEditor;
                var w15 = s.TextAreaEditor;
                var w16 = CustomEditors.SystemStatusEditor;

                Q.initFormType(ClientsForm, [
                    'FirstName', w0,
                    'MiddleName', w0,
                    'LastName', w0,
                    'MaidenName', w0,
                    'OtherName', w0,
                    'BirthDate', w1,
                    'Gender', w2,
                    'Race', w3,
                    'Ethnicity', w0,
                    'MaritalStatus', w4,
                    'SocialSecurityNum', w0,
                    'Address1', w0,
                    'Address2', w0,
                    'City', w0,
                    'State', w5,
                    'Zipcode', w0,
                    'County', w0,
                    'CountryOfBirth', w0,
                    'CellPhone', w0,
                    'PrimaryPhone', w0,
                    'SecondaryPhone', w0,
                    'Email', w0,
                    'IsVeteran', w6,
                    'PrimaryLanguage', w0,
                    'NextOfKinName', w0,
                    'NextOfKinPhone', w0,
                    'MothersName', w0,
                    'FathersName', w0,
                    'LicenseStateId', w0,
                    'EmploymentStatus', w7,
                    'NumberInHouse', w8,
                    'LivingArrangements', w9,
                    'GrossIncomeDollar', w10,
                    'GrossIncomePer', w11,
                    'NumberDepenentIncome', w8,
                    'EducationLevel', w0,
                    'NameOfSchool', w0,
                    'EmergencyPerson', w0,
                    'EmergencyPhone', w0,
                    'PreferredPhysician', w0,
                    'PreferredPhysicianAddress', w0,
                    'PreferredPhysicianCounty', w0,
                    'PreferredPhysicianPhone', w0,
                    'PharmacyUsed', w0,
                    'PharmacyPhone', w0,
                    'Allergies', w12,
                    'AllergiesMoreInfo', w0,
                    'PrimaryInsuranceTypeId', w5,
                    'PrimaryInsuranceNumber', w0,
                    'PrimaryInsuranceGroup', w0,
                    'PrimaryInsuranceHolder', w0,
                    'PrimaryInsuranceHolderDob', w1,
                    'PrimaryInsuranceRelationship', w0,
                    'PrimaryInsuranceAddress1', w0,
                    'PrimaryInsuranceCity', w0,
                    'PrimaryInsuranceState', w0,
                    'PrimaryInsuranceZipCode', w0,
                    'SecondaryInsuranceTypeId', w5,
                    'SecondaryInsuranceNumber', w0,
                    'SecondaryInsuranceGroup', w0,
                    'SecondaryInsuranceHolder', w0,
                    'SecondaryInsuranceHolderDob', w1,
                    'SecondaryInsuranceRelationship', w0,
                    'SecondaryInsuranceAddress1', w0,
                    'SecondaryInsuranceCity', w0,
                    'SecondaryInsuranceState', w0,
                    'SecondaryInsuranceZipCode', w0,
                    'SiteTypeId', w13,
                    'OriginalServiceDate', w1,
                    'RecordNumber', w0,
                    'Pcn', w0,
                    'DiagnosisDate', w1,
                    'PlanExpirationDate', w1,
                    'AdmissionDate', w1,
                    'DischargeDate', w1,
                    'ReferralDate', w1,
                    'ReferralSource', w14,
                    'DiagnosisNotes', w0,
                    'GuardianName', w0,
                    'Notes', w15,
                    'SystemStatus', w16,
                    'ClientStatus', w16
                ]);
            }
        }
    }
}
