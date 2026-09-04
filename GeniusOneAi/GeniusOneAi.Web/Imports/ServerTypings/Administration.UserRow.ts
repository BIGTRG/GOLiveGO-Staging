namespace GeniusOneAi.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        Type?: string;
        Classification?: string;
        EmployeeId?: string;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        PrimaryPhone?: string;
        SecondaryPhone?: string;
        HireDate?: string;
        EmergencyContact?: string;
        EmergencyContactPhone?: string;
        SocialSecurityNumber?: string;
        DriverLicenseNumber?: string;
        DriverLicenseState?: string;
        DriverLicenseExpiration?: string;
        Notes?: string;
        ESignatureBase64?: string;
        ESignaturePlainText?: string;
        SignatureVerified?: boolean;
        IsWorker?: boolean;
        RecAlerts?: boolean;
        TenantId?: number;
        BillRateAdmin?: number;
        BillRateTraining?: number;
        BillRateMeeting?: number;
        BillRateClientOnTime?: number;
        BillRateClientLate?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }
        export const deletePermission = 'AgencyAdministration:UserManagement';
        export const insertPermission = 'AgencyAdministration:UserManagement';
        export const readPermission = 'AgencyAdministration:UserManagement';
        export const updatePermission = 'AgencyAdministration:UserManagement';

        export declare const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            Type = "Type",
            Classification = "Classification",
            EmployeeId = "EmployeeId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            PrimaryPhone = "PrimaryPhone",
            SecondaryPhone = "SecondaryPhone",
            HireDate = "HireDate",
            EmergencyContact = "EmergencyContact",
            EmergencyContactPhone = "EmergencyContactPhone",
            SocialSecurityNumber = "SocialSecurityNumber",
            DriverLicenseNumber = "DriverLicenseNumber",
            DriverLicenseState = "DriverLicenseState",
            DriverLicenseExpiration = "DriverLicenseExpiration",
            Notes = "Notes",
            ESignatureBase64 = "ESignatureBase64",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureVerified = "SignatureVerified",
            IsWorker = "IsWorker",
            RecAlerts = "RecAlerts",
            TenantId = "TenantId",
            BillRateAdmin = "BillRateAdmin",
            BillRateTraining = "BillRateTraining",
            BillRateMeeting = "BillRateMeeting",
            BillRateClientOnTime = "BillRateClientOnTime",
            BillRateClientLate = "BillRateClientLate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
