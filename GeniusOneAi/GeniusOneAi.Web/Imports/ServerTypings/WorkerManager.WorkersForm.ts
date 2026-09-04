namespace GeniusOneAi.WorkerManager {
    export interface WorkersForm {
        EmployeeId: Serenity.StringEditor;
        Npi: Serenity.StringEditor;
        Taxonomy: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        SecondaryPhone: Serenity.StringEditor;
        HireDate: Serenity.DateEditor;
        EmergencyContact: Serenity.StringEditor;
        EmergencyContactPhone: Serenity.StringEditor;
        SocialSecurityNumber: Serenity.StringEditor;
        DriverLicenseNumber: Serenity.StringEditor;
        DriverLicenseState: Serenity.LookupEditor;
        DriverLicenseExpiration: Serenity.DateEditor;
        Type: Serenity.LookupEditor;
        Classification: CustomEditors.WorkerClassificationEditor;
        Notes: Serenity.TextAreaEditor;
        ESignaturePlainText: Serenity.StringEditor;
        ESignatureBase64: Serenity.StringEditor;
        SignatureVerified: Serenity.BooleanEditor;
    }

    export class WorkersForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.Workers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkersForm.init)  {
                WorkersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = CustomEditors.WorkerClassificationEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(WorkersForm, [
                    'EmployeeId', w0,
                    'Npi', w0,
                    'Taxonomy', w0,
                    'FirstName', w0,
                    'MiddleName', w0,
                    'LastName', w0,
                    'Address1', w0,
                    'Address2', w0,
                    'City', w0,
                    'State', w1,
                    'Zipcode', w0,
                    'PrimaryPhone', w0,
                    'SecondaryPhone', w0,
                    'HireDate', w2,
                    'EmergencyContact', w0,
                    'EmergencyContactPhone', w0,
                    'SocialSecurityNumber', w0,
                    'DriverLicenseNumber', w0,
                    'DriverLicenseState', w1,
                    'DriverLicenseExpiration', w2,
                    'Type', w1,
                    'Classification', w3,
                    'Notes', w4,
                    'ESignaturePlainText', w0,
                    'ESignatureBase64', w0,
                    'SignatureVerified', w5
                ]);
            }
        }
    }
}
