/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.extensions" />
declare namespace GeniusOneAi.Administration {
    class BillingColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface BillingRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        ClientFullName?: string;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
    }
    namespace BillingRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Administration.Billing";
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            ClientFullName = "ClientFullName",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace BillingService {
        const baseUrl = "Administration/Billing";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Administration/Billing/Retrieve",
            List = "Administration/Billing/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    class InsuranceTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface InsuranceTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.LookupEditor;
        Zipcode: Serenity.StringEditor;
        County: Serenity.StringEditor;
        PrimaryPhone: Serenity.StringEditor;
        Type: CustomEditors.InsuranceEntityTypeEditor;
        PayerId: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
    }
    class InsuranceTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Administration {
    interface InsuranceTypesRow {
        InsuranceTypeId?: number;
        Name?: string;
        Description?: string;
        PayerId?: string;
        Status?: boolean;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        County?: string;
        PrimaryPhone?: string;
        Type?: string;
    }
    namespace InsuranceTypesRow {
        const idProperty = "InsuranceTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.InsuranceTypes";
        const lookupKey = "GeniusOneAi.InsuranceTypes";
        function getLookup(): Q.Lookup<InsuranceTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            InsuranceTypeId = "InsuranceTypeId",
            Name = "Name",
            Description = "Description",
            PayerId = "PayerId",
            Status = "Status",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            County = "County",
            PrimaryPhone = "PrimaryPhone",
            Type = "Type"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace InsuranceTypesService {
        const baseUrl = "Administration/InsuranceTypes";
        function Create(request: Serenity.SaveRequest<InsuranceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InsuranceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InsuranceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InsuranceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/InsuranceTypes/Create",
            Update = "Administration/InsuranceTypes/Update",
            Delete = "Administration/InsuranceTypes/Delete",
            Retrieve = "Administration/InsuranceTypes/Retrieve",
            List = "Administration/InsuranceTypes/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace PermissionKeys {
        const Translation = "Administration:Translation";
        const View = "Administration:View";
        const Modify = "Administration:Modify";
    }
}
declare namespace GeniusOneAi.Administration {
    class ProgramCodeTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface ProgramCodeTypesForm {
        ProgramTypeId: Serenity.LookupEditor;
        BillCode: Serenity.StringEditor;
        Mod1: Serenity.StringEditor;
        Mod2: Serenity.StringEditor;
        Mod3: Serenity.StringEditor;
        Mod4: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        BillRate: Serenity.DecimalEditor;
        BillRateUnit: CustomEditors.BillRateUnitEditor;
    }
    class ProgramCodeTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Administration {
    interface ProgramCodeTypesRow {
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        BillCode?: string;
        Mod1?: string;
        Mod2?: string;
        Mod3?: string;
        Mod4?: string;
        FundingSource?: string;
        Description?: string;
        InsuranceId?: number;
        BillRate?: number;
        BillRateUnit?: string;
        TenantId?: number;
        RateEffective?: string;
        RateEnd?: string;
        SpecialtyName?: string;
        BillCodeWithMods?: string;
        ProgramName?: string;
    }
    namespace ProgramCodeTypesRow {
        const idProperty = "ProgramCodeTypeId";
        const nameProperty = "BillCode";
        const localTextPrefix = "AgencyAdministration.ProgramCodeTypes";
        const lookupKey = "GeniusOneAi.ProgramCodeTypes";
        function getLookup(): Q.Lookup<ProgramCodeTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            BillCode = "BillCode",
            Mod1 = "Mod1",
            Mod2 = "Mod2",
            Mod3 = "Mod3",
            Mod4 = "Mod4",
            FundingSource = "FundingSource",
            Description = "Description",
            InsuranceId = "InsuranceId",
            BillRate = "BillRate",
            BillRateUnit = "BillRateUnit",
            TenantId = "TenantId",
            RateEffective = "RateEffective",
            RateEnd = "RateEnd",
            SpecialtyName = "SpecialtyName",
            BillCodeWithMods = "BillCodeWithMods",
            ProgramName = "ProgramName"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace ProgramCodeTypesService {
        const baseUrl = "Administration/ProgramCodeTypes";
        function Create(request: Serenity.SaveRequest<ProgramCodeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramCodeTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramCodeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramCodeTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/ProgramCodeTypes/Create",
            Update = "Administration/ProgramCodeTypes/Update",
            Delete = "Administration/ProgramCodeTypes/Delete",
            Retrieve = "Administration/ProgramCodeTypes/Retrieve",
            List = "Administration/ProgramCodeTypes/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GeniusOneAi.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "AgencyAdministration:UserManagement";
        const insertPermission = "AgencyAdministration:UserManagement";
        const readPermission = "AgencyAdministration:UserManagement";
        const updatePermission = "AgencyAdministration:UserManagement";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GeniusOneAi.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "AgencyAdministration:UserManagement";
        const insertPermission = "AgencyAdministration:UserManagement";
        const readPermission = "AgencyAdministration:UserManagement";
        const updatePermission = "AgencyAdministration:UserManagement";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GeniusOneAi.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace GeniusOneAi.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        IsWorker: Serenity.BooleanEditor;
        RecAlerts: Serenity.BooleanEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "AgencyAdministration:UserManagement";
        const insertPermission = "AgencyAdministration:UserManagement";
        const readPermission = "AgencyAdministration:UserManagement";
        const updatePermission = "AgencyAdministration:UserManagement";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "AgencyAdministration:UserManagement";
        const insertPermission = "AgencyAdministration:UserManagement";
        const readPermission = "AgencyAdministration:UserManagement";
        const updatePermission = "AgencyAdministration:UserManagement";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GeniusOneAi.Administration {
    interface UserRow {
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
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "AgencyAdministration:UserManagement";
        const insertPermission = "AgencyAdministration:UserManagement";
        const readPermission = "AgencyAdministration:UserManagement";
        const updatePermission = "AgencyAdministration:UserManagement";
        const enum Fields {
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
declare namespace GeniusOneAi.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalInterventionsLibraryColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientGoalInterventionsLibraryForm {
        InterDesc: Serenity.TextAreaEditor;
    }
    class ClientGoalInterventionsLibraryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientGoalInterventionsLibraryRow {
        ClientGoalInterventionId?: number;
        ClientGoalId?: number;
        InterDesc?: string;
        TenantId?: number;
    }
    namespace ClientGoalInterventionsLibraryRow {
        const idProperty = "ClientGoalInterventionId";
        const nameProperty = "InterDesc";
        const localTextPrefix = "AgencyAdministration.ClientGoalInterventionsLibrary";
        const deletePermission = "AgencyAdministration:GoalLibrary";
        const insertPermission = "AgencyAdministration:GoalLibrary";
        const readPermission = "AgencyAdministration:GoalLibrary";
        const updatePermission = "AgencyAdministration:GoalLibrary";
        const enum Fields {
            ClientGoalInterventionId = "ClientGoalInterventionId",
            ClientGoalId = "ClientGoalId",
            InterDesc = "InterDesc",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ClientGoalInterventionsLibraryService {
        const baseUrl = "AgencyAdministration/ClientGoalInterventionsLibrary";
        function Create(request: Serenity.SaveRequest<ClientGoalInterventionsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalInterventionsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalInterventionsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalInterventionsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ClientGoalInterventionsLibrary/Create",
            Update = "AgencyAdministration/ClientGoalInterventionsLibrary/Update",
            Delete = "AgencyAdministration/ClientGoalInterventionsLibrary/Delete",
            Retrieve = "AgencyAdministration/ClientGoalInterventionsLibrary/Retrieve",
            List = "AgencyAdministration/ClientGoalInterventionsLibrary/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalsLibraryColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientGoalsLibraryForm {
        GoalType: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        ClientInterventionsLibraryList: ClientGoalInterventionsLibraryEditor;
    }
    class ClientGoalsLibraryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientGoalsLibraryRow {
        ClientGoalId?: number;
        Description?: string;
        GoalType?: string;
        TenantId?: number;
        ClientInterventionsLibraryList?: ClientGoalInterventionsLibraryRow[];
    }
    namespace ClientGoalsLibraryRow {
        const idProperty = "ClientGoalId";
        const nameProperty = "Description";
        const localTextPrefix = "AgencyAdministration.ClientGoalsLibrary";
        const deletePermission = "AgencyAdministration:GoalLibrary";
        const insertPermission = "AgencyAdministration:GoalLibrary";
        const readPermission = "AgencyAdministration:GoalLibrary";
        const updatePermission = "AgencyAdministration:GoalLibrary";
        const enum Fields {
            ClientGoalId = "ClientGoalId",
            Description = "Description",
            GoalType = "GoalType",
            TenantId = "TenantId",
            ClientInterventionsLibraryList = "ClientInterventionsLibraryList"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ClientGoalsLibraryService {
        const baseUrl = "AgencyAdministration/ClientGoalsLibrary";
        function Create(request: Serenity.SaveRequest<ClientGoalsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalsLibraryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsLibraryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ClientGoalsLibrary/Create",
            Update = "AgencyAdministration/ClientGoalsLibrary/Update",
            Delete = "AgencyAdministration/ClientGoalsLibrary/Delete",
            Retrieve = "AgencyAdministration/ClientGoalsLibrary/Retrieve",
            List = "AgencyAdministration/ClientGoalsLibrary/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientSiteTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientSiteTypesForm {
        SiteTypeId: Serenity.IntegerEditor;
        ClientId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class ClientSiteTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ClientSiteTypesRow {
        ClientSiteTypeId?: number;
        SiteTypeId?: number;
        ClientId?: number;
        TenantId?: number;
    }
    namespace ClientSiteTypesRow {
        const idProperty = "ClientSiteTypeId";
        const localTextPrefix = "AgencyAdministration.ClientSiteTypes";
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            ClientSiteTypeId = "ClientSiteTypeId",
            SiteTypeId = "SiteTypeId",
            ClientId = "ClientId",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ClientSiteTypesService {
        const baseUrl = "AgencyAdministration/ClientSiteTypes";
        function Create(request: Serenity.SaveRequest<ClientSiteTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientSiteTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientSiteTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientSiteTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ClientSiteTypes/Create",
            Update = "AgencyAdministration/ClientSiteTypes/Update",
            Delete = "AgencyAdministration/ClientSiteTypes/Delete",
            Retrieve = "AgencyAdministration/ClientSiteTypes/Retrieve",
            List = "AgencyAdministration/ClientSiteTypes/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class CredentialTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface CredentialTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class CredentialTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface CredentialTypesRow {
        CredentialTypeId?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
    }
    namespace CredentialTypesRow {
        const idProperty = "CredentialTypeId";
        const nameProperty = "Description";
        const localTextPrefix = "AgencyAdministration.CredentialTypes";
        const lookupKey = "GeniusOneAi.CredentialTypes";
        function getLookup(): Q.Lookup<CredentialTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            CredentialTypeId = "CredentialTypeId",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace CredentialTypesService {
        const baseUrl = "AgencyAdministration/CredentialTypes";
        function Create(request: Serenity.SaveRequest<CredentialTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CredentialTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CredentialTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CredentialTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/CredentialTypes/Create",
            Update = "AgencyAdministration/CredentialTypes/Update",
            Delete = "AgencyAdministration/CredentialTypes/Delete",
            Retrieve = "AgencyAdministration/CredentialTypes/Retrieve",
            List = "AgencyAdministration/CredentialTypes/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class FormTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface FormTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class FormTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface FormTypesRow {
        FormTypeId?: number;
        Name?: string;
        Description?: string;
    }
    namespace FormTypesRow {
        const idProperty = "FormTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "AgencyAdministration.FormTypes";
        const lookupKey = "GeniusOneAi.FormTypes";
        function getLookup(): Q.Lookup<FormTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            FormTypeId = "FormTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace FormTypesService {
        const baseUrl = "AgencyAdministration/FormTypes";
        function Create(request: Serenity.SaveRequest<FormTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FormTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/FormTypes/Create",
            Update = "AgencyAdministration/FormTypes/Update",
            Delete = "AgencyAdministration/FormTypes/Delete",
            Retrieve = "AgencyAdministration/FormTypes/Retrieve",
            List = "AgencyAdministration/FormTypes/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace PermissionKeys {
        const UserManagement = "AgencyAdministration:UserManagement";
        const NoteTemplates = "AgencyAdministration:NoteTemplates";
        const NoteTypes = "AgencyAdministration:NoteTypes";
        const GoalLibrary = "AgencyAdministration:GoalLibrary";
        const AgencyTypes = "AgencyAdministration:AgencyTypes";
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTemplatesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramNoteTemplatesForm {
        Name: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        Field01Label: Serenity.StringEditor;
        Field01Type: CustomEditors.FormTypeEditor;
        Field01Status: Serenity.BooleanEditor;
        Field02Label: Serenity.StringEditor;
        Field02Type: CustomEditors.FormTypeEditor;
        Field02Status: Serenity.BooleanEditor;
        Field03Label: Serenity.StringEditor;
        Field03Type: CustomEditors.FormTypeEditor;
        Field03Status: Serenity.BooleanEditor;
        Field04Label: Serenity.StringEditor;
        Field04Type: CustomEditors.FormTypeEditor;
        Field04Status: Serenity.BooleanEditor;
        Field05Label: Serenity.StringEditor;
        Field05Type: CustomEditors.FormTypeEditor;
        Field05Status: Serenity.BooleanEditor;
        Field06Label: Serenity.StringEditor;
        Field06Type: CustomEditors.FormTypeEditor;
        Field06Status: Serenity.BooleanEditor;
        Field07Label: Serenity.StringEditor;
        Field07Type: CustomEditors.FormTypeEditor;
        Field07Status: Serenity.BooleanEditor;
        Field08Label: Serenity.StringEditor;
        Field08Type: CustomEditors.FormTypeEditor;
        Field08Status: Serenity.BooleanEditor;
        Field09Label: Serenity.StringEditor;
        Field09Type: CustomEditors.FormTypeEditor;
        Field09Status: Serenity.BooleanEditor;
        Field10Label: Serenity.StringEditor;
        Field10Type: CustomEditors.FormTypeEditor;
        Field10Status: Serenity.BooleanEditor;
    }
    class ProgramNoteTemplatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramNoteTemplatesRow {
        ProgramNoteTemplateId?: number;
        Name?: string;
        Status?: boolean;
        Field01Label?: string;
        Field02Label?: string;
        Field03Label?: string;
        Field04Label?: string;
        Field05Label?: string;
        Field06Label?: string;
        Field07Label?: string;
        Field08Label?: string;
        Field09Label?: string;
        Field10Label?: string;
        Field01Status?: boolean;
        Field02Status?: boolean;
        Field03Status?: boolean;
        Field04Status?: boolean;
        Field05Status?: boolean;
        Field06Status?: boolean;
        Field07Status?: boolean;
        Field08Status?: boolean;
        Field09Status?: boolean;
        Field10Status?: boolean;
        Field01Type?: string;
        Field02Type?: string;
        Field03Type?: string;
        Field04Type?: string;
        Field05Type?: string;
        Field06Type?: string;
        Field07Type?: string;
        Field08Type?: string;
        Field09Type?: string;
        Field10Type?: string;
    }
    namespace ProgramNoteTemplatesRow {
        const idProperty = "ProgramNoteTemplateId";
        const nameProperty = "Name";
        const localTextPrefix = "AgencyAdministration.ProgramNoteTemplates";
        const lookupKey = "GeniusOneAi.ProgramNoteTemplates";
        function getLookup(): Q.Lookup<ProgramNoteTemplatesRow>;
        const deletePermission = "AgencyAdministration:NoteTemplates";
        const insertPermission = "AgencyAdministration:NoteTemplates";
        const readPermission = "AgencyAdministration:NoteTemplates";
        const updatePermission = "AgencyAdministration:NoteTemplates";
        const enum Fields {
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            Name = "Name",
            Status = "Status",
            Field01Label = "Field01Label",
            Field02Label = "Field02Label",
            Field03Label = "Field03Label",
            Field04Label = "Field04Label",
            Field05Label = "Field05Label",
            Field06Label = "Field06Label",
            Field07Label = "Field07Label",
            Field08Label = "Field08Label",
            Field09Label = "Field09Label",
            Field10Label = "Field10Label",
            Field01Status = "Field01Status",
            Field02Status = "Field02Status",
            Field03Status = "Field03Status",
            Field04Status = "Field04Status",
            Field05Status = "Field05Status",
            Field06Status = "Field06Status",
            Field07Status = "Field07Status",
            Field08Status = "Field08Status",
            Field09Status = "Field09Status",
            Field10Status = "Field10Status",
            Field01Type = "Field01Type",
            Field02Type = "Field02Type",
            Field03Type = "Field03Type",
            Field04Type = "Field04Type",
            Field05Type = "Field05Type",
            Field06Type = "Field06Type",
            Field07Type = "Field07Type",
            Field08Type = "Field08Type",
            Field09Type = "Field09Type",
            Field10Type = "Field10Type"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ProgramNoteTemplatesService {
        const baseUrl = "AgencyAdministration/ProgramNoteTemplates";
        function Create(request: Serenity.SaveRequest<ProgramNoteTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramNoteTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNoteTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNoteTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ProgramNoteTemplates/Create",
            Update = "AgencyAdministration/ProgramNoteTemplates/Update",
            Delete = "AgencyAdministration/ProgramNoteTemplates/Delete",
            Retrieve = "AgencyAdministration/ProgramNoteTemplates/Retrieve",
            List = "AgencyAdministration/ProgramNoteTemplates/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTypeColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramNoteTypeForm {
        IsEnabled: Serenity.BooleanEditor;
        ProgramNoteTypeName: Serenity.StringEditor;
    }
    class ProgramNoteTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramNoteTypeRow {
        ProgramNoteTypeId?: number;
        IsEnabled?: boolean;
        ProgramNoteTypeName?: string;
        ProgramNoteTypeOrder?: number;
        TenantId?: number;
    }
    namespace ProgramNoteTypeRow {
        const idProperty = "ProgramNoteTypeId";
        const nameProperty = "ProgramNoteTypeName";
        const localTextPrefix = "AgencyAdministration.ProgramNoteType";
        const deletePermission = "AgencyAdministration:NoteTypes";
        const insertPermission = "AgencyAdministration:NoteTypes";
        const readPermission = "AgencyAdministration:NoteTypes";
        const updatePermission = "AgencyAdministration:NoteTypes";
        const enum Fields {
            ProgramNoteTypeId = "ProgramNoteTypeId",
            IsEnabled = "IsEnabled",
            ProgramNoteTypeName = "ProgramNoteTypeName",
            ProgramNoteTypeOrder = "ProgramNoteTypeOrder",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ProgramNoteTypeService {
        const baseUrl = "AgencyAdministration/ProgramNoteType";
        function Create(request: Serenity.SaveRequest<ProgramNoteTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramNoteTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNoteTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNoteTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ProgramNoteType/Create",
            Update = "AgencyAdministration/ProgramNoteType/Update",
            Delete = "AgencyAdministration/ProgramNoteType/Delete",
            Retrieve = "AgencyAdministration/ProgramNoteType/Retrieve",
            List = "AgencyAdministration/ProgramNoteType/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        ProgramNoteTemplateId: Serenity.LookupEditor;
        BackupApproverId: WorkerManager.WorkersLookup;
        EscalationMetric: Serenity.IntegerEditor;
    }
    class ProgramTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface ProgramTypesRow {
        ProgramTypeId?: number;
        Name?: string;
        ProgramNoteTemplateName?: string;
        Description?: string;
        Status?: boolean;
        ProgramNoteTemplateId?: number;
        TenantId?: number;
        DefaultApproverId?: number;
        BackupApproverId?: number;
        EscalationMetric?: number;
    }
    namespace ProgramTypesRow {
        const idProperty = "ProgramTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "AgencyAdministration.ProgramTypes";
        const lookupKey = "GeniusOneAi.ProgramTypes";
        function getLookup(): Q.Lookup<ProgramTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            ProgramTypeId = "ProgramTypeId",
            Name = "Name",
            ProgramNoteTemplateName = "ProgramNoteTemplateName",
            Description = "Description",
            Status = "Status",
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            TenantId = "TenantId",
            DefaultApproverId = "DefaultApproverId",
            BackupApproverId = "BackupApproverId",
            EscalationMetric = "EscalationMetric"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace ProgramTypesService {
        const baseUrl = "AgencyAdministration/ProgramTypes";
        function Create(request: Serenity.SaveRequest<ProgramTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/ProgramTypes/Create",
            Update = "AgencyAdministration/ProgramTypes/Update",
            Delete = "AgencyAdministration/ProgramTypes/Delete",
            Retrieve = "AgencyAdministration/ProgramTypes/Retrieve",
            List = "AgencyAdministration/ProgramTypes/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class SitesTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface SitesTypesForm {
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
    class SitesTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface SitesTypesRow {
        SiteTypeId?: number;
        Name?: string;
        Description?: string;
        Npi?: string;
        TaxId?: string;
        Taxonomy?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        PrimaryPhone?: string;
        Status?: boolean;
        TenantId?: number;
    }
    namespace SitesTypesRow {
        const idProperty = "SiteTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "AgencyAdministration.SitesTypes";
        const lookupKey = "GeniusOneAi.SiteTypes";
        function getLookup(): Q.Lookup<SitesTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            SiteTypeId = "SiteTypeId",
            Name = "Name",
            Description = "Description",
            Npi = "Npi",
            TaxId = "TaxId",
            Taxonomy = "Taxonomy",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            PrimaryPhone = "PrimaryPhone",
            Status = "Status",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace SitesTypesService {
        const baseUrl = "AgencyAdministration/SitesTypes";
        function Create(request: Serenity.SaveRequest<SitesTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SitesTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SitesTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SitesTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/SitesTypes/Create",
            Update = "AgencyAdministration/SitesTypes/Update",
            Delete = "AgencyAdministration/SitesTypes/Delete",
            Retrieve = "AgencyAdministration/SitesTypes/Retrieve",
            List = "AgencyAdministration/SitesTypes/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class TemplateCodeListColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface TemplateCodeListForm {
        TemplateId: Serenity.IntegerEditor;
        QuestionId: Serenity.IntegerEditor;
        ValueText: Serenity.StringEditor;
    }
    class TemplateCodeListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface TemplateCodeListRow {
        TemplateCodeListId?: number;
        TemplateId?: number;
        QuestionId?: number;
        ValueText?: string;
    }
    namespace TemplateCodeListRow {
        const idProperty = "TemplateCodeListId";
        const nameProperty = "ValueText";
        const localTextPrefix = "AgencyAdministration.TemplateCodeList";
        const deletePermission = "AgencyAdministration:NoteTemplates";
        const insertPermission = "AgencyAdministration:NoteTemplates";
        const readPermission = "AgencyAdministration:NoteTemplates";
        const updatePermission = "AgencyAdministration:NoteTemplates";
        const enum Fields {
            TemplateCodeListId = "TemplateCodeListId",
            TemplateId = "TemplateId",
            QuestionId = "QuestionId",
            ValueText = "ValueText"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace TemplateCodeListService {
        const baseUrl = "AgencyAdministration/TemplateCodeList";
        function Create(request: Serenity.SaveRequest<TemplateCodeListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemplateCodeListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateCodeListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateCodeListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/TemplateCodeList/Create",
            Update = "AgencyAdministration/TemplateCodeList/Update",
            Delete = "AgencyAdministration/TemplateCodeList/Delete",
            Retrieve = "AgencyAdministration/TemplateCodeList/Retrieve",
            List = "AgencyAdministration/TemplateCodeList/List"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class WorkerTypesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface WorkerTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class WorkerTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    interface WorkerTypesRow {
        UserTypeId?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
    }
    namespace WorkerTypesRow {
        const idProperty = "UserTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "AgencyAdministration.WorkerTypes";
        const lookupKey = "GeniusOneAi.WorkerTypes";
        function getLookup(): Q.Lookup<WorkerTypesRow>;
        const deletePermission = "AgencyAdministration:AgencyTypes";
        const insertPermission = "AgencyAdministration:AgencyTypes";
        const readPermission = "AgencyAdministration:AgencyTypes";
        const updatePermission = "AgencyAdministration:AgencyTypes";
        const enum Fields {
            UserTypeId = "UserTypeId",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    namespace WorkerTypesService {
        const baseUrl = "AgencyAdministration/WorkerTypes";
        function Create(request: Serenity.SaveRequest<WorkerTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AgencyAdministration/WorkerTypes/Create",
            Update = "AgencyAdministration/WorkerTypes/Update",
            Delete = "AgencyAdministration/WorkerTypes/Delete",
            Retrieve = "AgencyAdministration/WorkerTypes/Retrieve",
            List = "AgencyAdministration/WorkerTypes/List"
        }
    }
}
declare namespace GeniusOneAi.Archives {
    class ActivitiesArchiveColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Archives {
    interface ActivitiesArchiveForm {
        Notes: Serenity.TextAreaEditor;
    }
    class ActivitiesArchiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Archives {
    interface ActivitiesArchiveRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        Activity?: string;
        ClientFullName?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
        AuthorizationId?: number;
        ProgramNoteFileName?: string;
    }
    namespace ActivitiesArchiveRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Archive.ActivitiesArchive";
        const deletePermission = "Archives:Activities";
        const insertPermission = "Archives:Activities";
        const readPermission = "Archives:Activities";
        const updatePermission = "Archives:Activities";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            Activity = "Activity",
            ClientFullName = "ClientFullName",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId",
            AuthorizationId = "AuthorizationId",
            ProgramNoteFileName = "ProgramNoteFileName"
        }
    }
}
declare namespace GeniusOneAi.Archives {
    namespace ActivitiesArchiveService {
        const baseUrl = "Archive/Activities";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Archive/Activities/Retrieve",
            List = "Archive/Activities/List"
        }
    }
}
declare namespace GeniusOneAi.Archives {
    namespace PermissionKeys {
        const Activities = "Archives:Activities";
        const ProgressNotes = "Archives:ProgressNotes";
    }
}
declare namespace GeniusOneAi.Archives {
    class ProgressNotesArchiveColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Archives {
    interface ProgressNotesArchiveForm {
        Notes: Serenity.TextAreaEditor;
    }
    class ProgressNotesArchiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Archives {
    interface ProgressNotesArchiveRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        Activity?: string;
        WorkerFullName?: string;
        ClientFullName?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
        AuthorizationId?: number;
        ProgramNoteFileName?: string;
        ProgramNoteField00?: string;
        PrimaryInsuranceType?: string;
    }
    namespace ProgressNotesArchiveRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Archive.ProgressNotesArchive";
        const deletePermission = "Archives:ProgressNotes";
        const insertPermission = "Archives:ProgressNotes";
        const readPermission = "Archives:ProgressNotes";
        const updatePermission = "Archives:ProgressNotes";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            Activity = "Activity",
            WorkerFullName = "WorkerFullName",
            ClientFullName = "ClientFullName",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId",
            AuthorizationId = "AuthorizationId",
            ProgramNoteFileName = "ProgramNoteFileName",
            ProgramNoteField00 = "ProgramNoteField00",
            PrimaryInsuranceType = "PrimaryInsuranceType"
        }
    }
}
declare namespace GeniusOneAi.Archives {
    namespace ProgressNotesArchiveService {
        const baseUrl = "Archive/ProgressNotes";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgressNotesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgressNotesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Archive/ProgressNotes/Retrieve",
            List = "Archive/ProgressNotes/List"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientAuthorizationsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientAuthorizationsForm {
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
    class ClientAuthorizationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientAuthorizationsRow {
        AuthorizationId?: number;
        ClientId?: number;
        StartDate?: string;
        EndDate?: string;
        UnitContactGranted?: number;
        AuthorizationType?: string;
        Status?: string;
        ApprovalStatus?: string;
        ApprovalDate?: string;
        UnitCalculationMetric?: number;
        TenantId?: number;
        AuthDateRange?: string;
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        BillCode?: string;
    }
    namespace ClientAuthorizationsRow {
        const idProperty = "AuthorizationId";
        const nameProperty = "AuthDateRange";
        const localTextPrefix = "ClientManager.ClientAuthorizations";
        const lookupKey = "GeniusOneAi.ClientAuthorizations";
        function getLookup(): Q.Lookup<ClientAuthorizationsRow>;
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            AuthorizationId = "AuthorizationId",
            ClientId = "ClientId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            UnitContactGranted = "UnitContactGranted",
            AuthorizationType = "AuthorizationType",
            Status = "Status",
            ApprovalStatus = "ApprovalStatus",
            ApprovalDate = "ApprovalDate",
            UnitCalculationMetric = "UnitCalculationMetric",
            TenantId = "TenantId",
            AuthDateRange = "AuthDateRange",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            BillCode = "BillCode"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientAuthorizationsService {
        const baseUrl = "ClientManager/ClientAuthorizations";
        function Create(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/ClientAuthorizations/Create",
            Update = "ClientManager/ClientAuthorizations/Update",
            Delete = "ClientManager/ClientAuthorizations/Delete",
            Retrieve = "ClientManager/ClientAuthorizations/Retrieve",
            List = "ClientManager/ClientAuthorizations/List"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientDocumentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientDocumentsForm {
        ClientId: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        FileName: Serenity.ImageUploadEditor;
    }
    class ClientDocumentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientDocumentsRow {
        DocumentId?: number;
        ClientId?: number;
        Title?: string;
        FileName?: string;
        IsFinalized?: number;
        FinalizedDate?: string;
    }
    namespace ClientDocumentsRow {
        const idProperty = "DocumentId";
        const nameProperty = "Title";
        const localTextPrefix = "ClientManager.ClientDocuments";
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            DocumentId = "DocumentId",
            ClientId = "ClientId",
            Title = "Title",
            FileName = "FileName",
            IsFinalized = "IsFinalized",
            FinalizedDate = "FinalizedDate"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientDocumentsService {
        const baseUrl = "ClientManager/ClientDocuments";
        function Create(request: Serenity.SaveRequest<ClientDocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientDocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientDocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientDocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/ClientDocuments/Create",
            Update = "ClientManager/ClientDocuments/Update",
            Delete = "ClientManager/ClientDocuments/Delete",
            Retrieve = "ClientManager/ClientDocuments/Retrieve",
            List = "ClientManager/ClientDocuments/List"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalInterventionsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalInterventionsForm {
        IsActiveMonday: Serenity.BooleanEditor;
        IsActiveTuesday: Serenity.BooleanEditor;
        IsActiveWednesday: Serenity.BooleanEditor;
        IsActiveThursday: Serenity.BooleanEditor;
        IsActiveFriday: Serenity.BooleanEditor;
        IsActiveSaturday: Serenity.BooleanEditor;
        IsActiveSunday: Serenity.BooleanEditor;
        InterNumber: CustomEditors.NumberOrderEditor;
        InterDesc: Serenity.TextAreaEditor;
    }
    class ClientGoalInterventionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalInterventionsRow {
        ClientGoalInterventionId?: number;
        ClientGoalId?: number;
        InterNumber?: number;
        InterDesc?: string;
        TenantId?: number;
        ClientGoalClientId?: number;
        ClientGoalGoalType?: string;
        ClientGoalGoal?: string;
        ClientGoalDescription?: string;
        ClientGoalCompletionDate?: string;
        ClientGoalStatus?: string;
        ClientGoalIsActive?: boolean;
        ClientGoalTenantId?: number;
        IsActiveMonday?: boolean;
        IsActiveTuesday?: boolean;
        IsActiveWednesday?: boolean;
        IsActiveThursday?: boolean;
        IsActiveFriday?: boolean;
        IsActiveSaturday?: boolean;
        IsActiveSunday?: boolean;
    }
    namespace ClientGoalInterventionsRow {
        const idProperty = "ClientGoalInterventionId";
        const nameProperty = "InterDesc";
        const localTextPrefix = "ClientManager.ClientGoalInterventions";
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            ClientGoalInterventionId = "ClientGoalInterventionId",
            ClientGoalId = "ClientGoalId",
            InterNumber = "InterNumber",
            InterDesc = "InterDesc",
            TenantId = "TenantId",
            ClientGoalClientId = "ClientGoalClientId",
            ClientGoalGoalType = "ClientGoalGoalType",
            ClientGoalGoal = "ClientGoalGoal",
            ClientGoalDescription = "ClientGoalDescription",
            ClientGoalCompletionDate = "ClientGoalCompletionDate",
            ClientGoalStatus = "ClientGoalStatus",
            ClientGoalIsActive = "ClientGoalIsActive",
            ClientGoalTenantId = "ClientGoalTenantId",
            IsActiveMonday = "IsActiveMonday",
            IsActiveTuesday = "IsActiveTuesday",
            IsActiveWednesday = "IsActiveWednesday",
            IsActiveThursday = "IsActiveThursday",
            IsActiveFriday = "IsActiveFriday",
            IsActiveSaturday = "IsActiveSaturday",
            IsActiveSunday = "IsActiveSunday"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientGoalInterventionsService {
        const baseUrl = "ClientManager/ClientGoalInterventions";
        function Create(request: Serenity.SaveRequest<ClientGoalInterventionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalInterventionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalInterventionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalInterventionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/ClientGoalInterventions/Create",
            Update = "ClientManager/ClientGoalInterventions/Update",
            Delete = "ClientManager/ClientGoalInterventions/Delete",
            Retrieve = "ClientManager/ClientGoalInterventions/Retrieve",
            List = "ClientManager/ClientGoalInterventions/List"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalsForm {
        IsActiveMonday: Serenity.BooleanEditor;
        IsActiveTuesday: Serenity.BooleanEditor;
        IsActiveWednesday: Serenity.BooleanEditor;
        IsActiveThursday: Serenity.BooleanEditor;
        IsActiveFriday: Serenity.BooleanEditor;
        IsActiveSaturday: Serenity.BooleanEditor;
        IsActiveSunday: Serenity.BooleanEditor;
        GoalType: Serenity.LookupEditor;
        Goal: CustomEditors.GoalEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
        ClientInterventionsList: ClientGoalInterventionsEditor;
        ClientId: Serenity.IntegerEditor;
    }
    class ClientGoalsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsLibrarySelectorColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalsLibrarySelectorForm {
        GoalType: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class ClientGoalsLibrarySelectorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalsLibrarySelectorRow {
        ClientGoalId?: number;
        GoalType?: string;
        Description?: string;
        TenantId?: number;
    }
    namespace ClientGoalsLibrarySelectorRow {
        const idProperty = "ClientGoalId";
        const nameProperty = "GoalType";
        const localTextPrefix = "ClientManager.ClientGoalsLibrarySelector";
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            ClientGoalId = "ClientGoalId",
            GoalType = "GoalType",
            Description = "Description",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientGoalsLibrarySelectorService {
        const baseUrl = "ClientManager/ClientGoalsLibrarySelector";
        function Create(request: Serenity.SaveRequest<ClientGoalsLibrarySelectorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalsLibrarySelectorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsLibrarySelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsLibrarySelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CopyGoalsToClient(request: Modules.Common.CustomClasses.BaseRecsRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/ClientGoalsLibrarySelector/Create",
            Update = "ClientManager/ClientGoalsLibrarySelector/Update",
            Delete = "ClientManager/ClientGoalsLibrarySelector/Delete",
            Retrieve = "ClientManager/ClientGoalsLibrarySelector/Retrieve",
            List = "ClientManager/ClientGoalsLibrarySelector/List",
            CopyGoalsToClient = "ClientManager/ClientGoalsLibrarySelector/CopyGoalsToClient"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientGoalsRow {
        ClientGoalId?: number;
        ClientId?: number;
        Goal?: string;
        Description?: string;
        WorkerFullName?: string;
        CompletionDate?: string;
        OwnerCreateDate?: string;
        Owner?: number;
        Status?: string;
        GoalType?: string;
        TenantId?: number;
        ClientInterventionsList?: ClientGoalInterventionsRow[];
        IsActiveMonday?: boolean;
        IsActiveTuesday?: boolean;
        IsActiveWednesday?: boolean;
        IsActiveThursday?: boolean;
        IsActiveFriday?: boolean;
        IsActiveSaturday?: boolean;
        IsActiveSunday?: boolean;
    }
    namespace ClientGoalsRow {
        const idProperty = "ClientGoalId";
        const nameProperty = "Goal";
        const localTextPrefix = "ClientManager.ClientGoals";
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            ClientGoalId = "ClientGoalId",
            ClientId = "ClientId",
            Goal = "Goal",
            Description = "Description",
            WorkerFullName = "WorkerFullName",
            CompletionDate = "CompletionDate",
            OwnerCreateDate = "OwnerCreateDate",
            Owner = "Owner",
            Status = "Status",
            GoalType = "GoalType",
            TenantId = "TenantId",
            ClientInterventionsList = "ClientInterventionsList",
            IsActiveMonday = "IsActiveMonday",
            IsActiveTuesday = "IsActiveTuesday",
            IsActiveWednesday = "IsActiveWednesday",
            IsActiveThursday = "IsActiveThursday",
            IsActiveFriday = "IsActiveFriday",
            IsActiveSaturday = "IsActiveSaturday",
            IsActiveSunday = "IsActiveSunday"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientGoalsService {
        const baseUrl = "ClientManager/ClientGoals";
        function Create(request: Serenity.SaveRequest<ClientGoalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/ClientGoals/Create",
            Update = "ClientManager/ClientGoals/Update",
            Delete = "ClientManager/ClientGoals/Delete",
            Retrieve = "ClientManager/ClientGoals/Retrieve",
            List = "ClientManager/ClientGoals/List"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientsEligibilityForm {
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
    class ClientsEligibilityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientsForm {
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
    class ClientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface ClientsRow {
        ClientId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        MaidenName?: string;
        OtherName?: string;
        BirthDate?: string;
        Race?: string;
        Gender?: string;
        Ethnicity?: string;
        MaritalStatus?: string;
        SocialSecurityNum?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        County?: string;
        PrimaryPhone?: string;
        SecondaryPhone?: string;
        CellPhone?: string;
        Email?: string;
        CountryOfBirth?: string;
        IsVeteran?: number;
        PrimaryLanguage?: string;
        NextOfKinName?: string;
        NextOfKinPhone?: string;
        MothersName?: string;
        FathersName?: string;
        LicenseStateId?: string;
        EmploymentStatus?: string;
        NumberInHouse?: number;
        LivingArrangements?: string;
        GrossIncomeDollar?: number;
        GrossIncomePer?: string;
        NumberDepenentIncome?: string;
        EducationLevel?: string;
        NameOfSchool?: string;
        PrimaryInsuranceTypeId?: number;
        PrimaryInsuranceNumber?: string;
        PrimaryInsuranceGroup?: string;
        PrimaryInsuranceHolder?: string;
        PrimaryInsuranceHolderDob?: string;
        PrimaryInsuranceRelationship?: string;
        PrimaryInsuranceAddress1?: string;
        PrimaryInsuranceCity?: string;
        PrimaryInsuranceState?: string;
        PrimaryInsuranceZipCode?: string;
        SecondaryInsuranceTypeId?: number;
        SecondaryInsuranceNumber?: string;
        SecondaryInsuranceGroup?: string;
        SecondaryInsuranceHolder?: string;
        SecondaryInsuranceHolderDob?: string;
        SecondaryInsuranceRelationship?: string;
        SecondaryInsuranceAddress1?: string;
        SecondaryInsuranceCity?: string;
        SecondaryInsuranceState?: string;
        SecondaryInsuranceZipCode?: string;
        DischargeDate?: string;
        DiagnosisDate?: string;
        PlanExpirationDate?: string;
        AdmissionDate?: string;
        ReferralDate?: string;
        ReferralSource?: string;
        DiagnosisNotes?: string;
        GuardianName?: string;
        Notes?: string;
        SystemStatus?: string;
        ClientStatus?: string;
        SiteTypeId?: number;
        TenantId?: number;
        RecordNumber?: string;
        Pcn?: string;
        OriginalServiceDate?: string;
        ClientFullName?: string;
        EmergencyPerson?: string;
        EmergencyPhone?: string;
        PreferredPhysician?: string;
        PreferredPhysicianAddress?: string;
        PreferredPhysicianCounty?: string;
        PreferredPhysicianPhone?: string;
        PharmacyUsed?: string;
        PharmacyPhone?: string;
        Allergies?: string;
        AllergiesMoreInfo?: string;
    }
    namespace ClientsRow {
        const idProperty = "ClientId";
        const nameProperty = "ClientFullName";
        const localTextPrefix = "ClientManager.Clients";
        const lookupKey = "GeniusOneAi.Clients";
        function getLookup(): Q.Lookup<ClientsRow>;
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            ClientId = "ClientId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            MaidenName = "MaidenName",
            OtherName = "OtherName",
            BirthDate = "BirthDate",
            Race = "Race",
            Gender = "Gender",
            Ethnicity = "Ethnicity",
            MaritalStatus = "MaritalStatus",
            SocialSecurityNum = "SocialSecurityNum",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            County = "County",
            PrimaryPhone = "PrimaryPhone",
            SecondaryPhone = "SecondaryPhone",
            CellPhone = "CellPhone",
            Email = "Email",
            CountryOfBirth = "CountryOfBirth",
            IsVeteran = "IsVeteran",
            PrimaryLanguage = "PrimaryLanguage",
            NextOfKinName = "NextOfKinName",
            NextOfKinPhone = "NextOfKinPhone",
            MothersName = "MothersName",
            FathersName = "FathersName",
            LicenseStateId = "LicenseStateId",
            EmploymentStatus = "EmploymentStatus",
            NumberInHouse = "NumberInHouse",
            LivingArrangements = "LivingArrangements",
            GrossIncomeDollar = "GrossIncomeDollar",
            GrossIncomePer = "GrossIncomePer",
            NumberDepenentIncome = "NumberDepenentIncome",
            EducationLevel = "EducationLevel",
            NameOfSchool = "NameOfSchool",
            PrimaryInsuranceTypeId = "PrimaryInsuranceTypeId",
            PrimaryInsuranceNumber = "PrimaryInsuranceNumber",
            PrimaryInsuranceGroup = "PrimaryInsuranceGroup",
            PrimaryInsuranceHolder = "PrimaryInsuranceHolder",
            PrimaryInsuranceHolderDob = "PrimaryInsuranceHolderDob",
            PrimaryInsuranceRelationship = "PrimaryInsuranceRelationship",
            PrimaryInsuranceAddress1 = "PrimaryInsuranceAddress1",
            PrimaryInsuranceCity = "PrimaryInsuranceCity",
            PrimaryInsuranceState = "PrimaryInsuranceState",
            PrimaryInsuranceZipCode = "PrimaryInsuranceZipCode",
            SecondaryInsuranceTypeId = "SecondaryInsuranceTypeId",
            SecondaryInsuranceNumber = "SecondaryInsuranceNumber",
            SecondaryInsuranceGroup = "SecondaryInsuranceGroup",
            SecondaryInsuranceHolder = "SecondaryInsuranceHolder",
            SecondaryInsuranceHolderDob = "SecondaryInsuranceHolderDob",
            SecondaryInsuranceRelationship = "SecondaryInsuranceRelationship",
            SecondaryInsuranceAddress1 = "SecondaryInsuranceAddress1",
            SecondaryInsuranceCity = "SecondaryInsuranceCity",
            SecondaryInsuranceState = "SecondaryInsuranceState",
            SecondaryInsuranceZipCode = "SecondaryInsuranceZipCode",
            DischargeDate = "DischargeDate",
            DiagnosisDate = "DiagnosisDate",
            PlanExpirationDate = "PlanExpirationDate",
            AdmissionDate = "AdmissionDate",
            ReferralDate = "ReferralDate",
            ReferralSource = "ReferralSource",
            DiagnosisNotes = "DiagnosisNotes",
            GuardianName = "GuardianName",
            Notes = "Notes",
            SystemStatus = "SystemStatus",
            ClientStatus = "ClientStatus",
            SiteTypeId = "SiteTypeId",
            TenantId = "TenantId",
            RecordNumber = "RecordNumber",
            Pcn = "Pcn",
            OriginalServiceDate = "OriginalServiceDate",
            ClientFullName = "ClientFullName",
            EmergencyPerson = "EmergencyPerson",
            EmergencyPhone = "EmergencyPhone",
            PreferredPhysician = "PreferredPhysician",
            PreferredPhysicianAddress = "PreferredPhysicianAddress",
            PreferredPhysicianCounty = "PreferredPhysicianCounty",
            PreferredPhysicianPhone = "PreferredPhysicianPhone",
            PharmacyUsed = "PharmacyUsed",
            PharmacyPhone = "PharmacyPhone",
            Allergies = "Allergies",
            AllergiesMoreInfo = "AllergiesMoreInfo"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace ClientsService {
        const baseUrl = "ClientManager/Clients";
        function Create(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CheckPatientEligibility(request: Modules.Common.CustomClasses.EligibilityRequest, onSuccess?: (response: Modules.Common.CustomClasses.EligibilityResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/Clients/Create",
            Update = "ClientManager/Clients/Update",
            Delete = "ClientManager/Clients/Delete",
            Retrieve = "ClientManager/Clients/Retrieve",
            List = "ClientManager/Clients/List",
            CheckPatientEligibility = "ClientManager/Clients/CheckPatientEligibility"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace PermissionKeys {
        const Patients = "PatientManager:Patients";
    }
}
declare namespace GeniusOneAi.ClientManager {
    class TeamAssignmentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class WorkerCaseAssignmentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface WorkerCaseAssignmentsForm {
        UserId: WorkerManager.WorkersLookup;
        IsTeamLead: Serenity.BooleanEditor;
        AuthorizationId: ClientAuthorizationLookup;
        AssignedDate: Serenity.DateEditor;
        UnassignedDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        ClientId: Serenity.IntegerEditor;
    }
    class WorkerCaseAssignmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.ClientManager {
    interface WorkerCaseAssignmentsRow {
        CaseAssignmentId?: number;
        ClientId?: number;
        AssignedDate?: string;
        UnassignedDate?: string;
        AuthorizationStartDate?: string;
        AuthorizationEndDate?: string;
        AuthorizationUnitContactGranted?: number;
        Notes?: string;
        BillCode?: string;
        AuthorizationStatus?: string;
        WorkerDisplayName?: string;
        ClientFullName?: string;
        UserId?: number;
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        AuthorizationId?: number;
        TenantId?: number;
        IsTeamLead?: boolean;
    }
    namespace WorkerCaseAssignmentsRow {
        const idProperty = "CaseAssignmentId";
        const nameProperty = "AssignedDate";
        const localTextPrefix = "ClientManager.WorkerCaseAssignments";
        const deletePermission = "PatientManager:Patients";
        const insertPermission = "PatientManager:Patients";
        const readPermission = "PatientManager:Patients";
        const updatePermission = "PatientManager:Patients";
        const enum Fields {
            CaseAssignmentId = "CaseAssignmentId",
            ClientId = "ClientId",
            AssignedDate = "AssignedDate",
            UnassignedDate = "UnassignedDate",
            AuthorizationStartDate = "AuthorizationStartDate",
            AuthorizationEndDate = "AuthorizationEndDate",
            AuthorizationUnitContactGranted = "AuthorizationUnitContactGranted",
            Notes = "Notes",
            BillCode = "BillCode",
            AuthorizationStatus = "AuthorizationStatus",
            WorkerDisplayName = "WorkerDisplayName",
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId",
            IsTeamLead = "IsTeamLead"
        }
    }
}
declare namespace GeniusOneAi.ClientManager {
    namespace WorkerCaseAssignmentsService {
        const baseUrl = "ClientManager/WorkerCaseAssignments";
        function Create(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ClientManager/WorkerCaseAssignments/Create",
            Update = "ClientManager/WorkerCaseAssignments/Update",
            Delete = "ClientManager/WorkerCaseAssignments/Delete",
            Retrieve = "ClientManager/WorkerCaseAssignments/Retrieve",
            List = "ClientManager/WorkerCaseAssignments/List"
        }
    }
}
declare namespace GeniusOneAi.Dashboards {
    interface GlobalAgencyDashboardRow {
        TenantId?: number;
        RejectedProgressNotes?: number;
        SavedProgressNotes?: number;
        SubmittedProgressNotes?: number;
        ApprovedProgressNotes?: number;
        ActiveCases?: number;
        InActiveCases?: number;
        AuthorizationsExpiringThisMonth?: number;
        AuthorizationsExpiringNextMonth?: number;
        AppointmentsScheduled?: number;
        DocumentsPendingSignature?: number;
        DocumentsPendingReview?: number;
        CredentialsExpiringThisMonth?: number;
        InvoicesSubmitted?: number;
        InvoicesPaid?: number;
        TotalBilled?: number;
        TotalPaid?: number;
    }
    namespace GlobalAgencyDashboardRow {
        const idProperty = "TenantId";
        const localTextPrefix = "Dashboards.GlobalAgencyDashboard";
        const deletePermission = "Dashboard:MainAgency";
        const insertPermission = "Dashboard:MainAgency";
        const readPermission = "Dashboard:MainAgency";
        const updatePermission = "Dashboard:MainAgency";
        const enum Fields {
            TenantId = "TenantId",
            RejectedProgressNotes = "RejectedProgressNotes",
            SavedProgressNotes = "SavedProgressNotes",
            SubmittedProgressNotes = "SubmittedProgressNotes",
            ApprovedProgressNotes = "ApprovedProgressNotes",
            ActiveCases = "ActiveCases",
            InActiveCases = "InActiveCases",
            AuthorizationsExpiringThisMonth = "AuthorizationsExpiringThisMonth",
            AuthorizationsExpiringNextMonth = "AuthorizationsExpiringNextMonth",
            AppointmentsScheduled = "AppointmentsScheduled",
            DocumentsPendingSignature = "DocumentsPendingSignature",
            DocumentsPendingReview = "DocumentsPendingReview",
            CredentialsExpiringThisMonth = "CredentialsExpiringThisMonth",
            InvoicesSubmitted = "InvoicesSubmitted",
            InvoicesPaid = "InvoicesPaid",
            TotalBilled = "TotalBilled",
            TotalPaid = "TotalPaid"
        }
    }
}
declare namespace GeniusOneAi.Dashboards {
    namespace PermissionKeys {
        const MainAgency = "Dashboard:MainAgency";
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentSelectorColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentSelectorRow {
        DocumentId?: number;
        Title?: string;
        Filename?: string;
        IsTemplate?: number;
        FileType?: string;
        IsFinalized?: number;
        OriginalUploadDate?: string;
        MajorVersion?: number;
        MinorVersion?: number;
        RevisionVersion?: number;
        UserId?: number;
    }
    namespace DocumentSelectorRow {
        const idProperty = "DocumentId";
        const nameProperty = "Title";
        const localTextPrefix = "DocumentManager.DocumentSelector";
        const deletePermission = "DocumentManager:ContentLibrary";
        const insertPermission = "DocumentManager:ContentLibrary";
        const readPermission = "DocumentManager:ContentLibrary";
        const updatePermission = "DocumentManager:ContentLibrary";
        const enum Fields {
            DocumentId = "DocumentId",
            Title = "Title",
            Filename = "Filename",
            IsTemplate = "IsTemplate",
            FileType = "FileType",
            IsFinalized = "IsFinalized",
            OriginalUploadDate = "OriginalUploadDate",
            MajorVersion = "MajorVersion",
            MinorVersion = "MinorVersion",
            RevisionVersion = "RevisionVersion",
            UserId = "UserId"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    namespace DocumentSelectorService {
        const baseUrl = "DocumentManager/DocumentSelector";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentSelectorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CopyDocumentsToClient(request: Modules.Common.CustomClasses.BaseRecsRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "DocumentManager/DocumentSelector/List",
            CopyDocumentsToClient = "DocumentManager/DocumentSelector/CopyDocumentsToClient"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowStepsTemplatesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentWorkflowStepsTemplatesForm {
        StepActionType: CustomEditors.StepTypeEditor;
        StepPerformerType: CustomEditors.PerformerTypeEditor;
    }
    class DocumentWorkflowStepsTemplatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentWorkflowStepsTemplatesRow {
        DocumentStepId?: number;
        WorkflowTemplateId?: number;
        StepOrder?: number;
        StepActionType?: string;
        StepPerformerType?: string;
    }
    namespace DocumentWorkflowStepsTemplatesRow {
        const idProperty = "DocumentStepId";
        const nameProperty = "StepActionType";
        const localTextPrefix = "DocumentManager.DocumentWorkflowStepsTemplates";
        const deletePermission = "DocumentManager:WorkflowTemplates";
        const insertPermission = "DocumentManager:WorkflowTemplates";
        const readPermission = "DocumentManager:WorkflowTemplates";
        const updatePermission = "DocumentManager:WorkflowTemplates";
        const enum Fields {
            DocumentStepId = "DocumentStepId",
            WorkflowTemplateId = "WorkflowTemplateId",
            StepOrder = "StepOrder",
            StepActionType = "StepActionType",
            StepPerformerType = "StepPerformerType"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    namespace DocumentWorkflowStepsTemplatesService {
        const baseUrl = "DocumentManager/DocumentWorkflowStepsTemplates";
        function Create(request: Serenity.SaveRequest<DocumentWorkflowStepsTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentWorkflowStepsTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowStepsTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowStepsTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DocumentManager/DocumentWorkflowStepsTemplates/Create",
            Update = "DocumentManager/DocumentWorkflowStepsTemplates/Update",
            Delete = "DocumentManager/DocumentWorkflowStepsTemplates/Delete",
            Retrieve = "DocumentManager/DocumentWorkflowStepsTemplates/Retrieve",
            List = "DocumentManager/DocumentWorkflowStepsTemplates/List"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowTemplatesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentWorkflowTemplatesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DocumentId: Serenity.LookupEditor;
        DocumentWorkflowStepsList: DocumentWorkflowStepsTemplatesEditor;
    }
    class DocumentWorkflowTemplatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentWorkflowTemplatesRow {
        WorkflowTemplateId?: number;
        DocumentId?: number;
        Name?: string;
        Description?: string;
        DocumentWorkflowStepsList?: DocumentWorkflowStepsTemplatesRow[];
    }
    namespace DocumentWorkflowTemplatesRow {
        const idProperty = "WorkflowTemplateId";
        const nameProperty = "Name";
        const localTextPrefix = "DocumentManager.DocumentWorkflowTemplates";
        const lookupKey = "GeniusOneAi.DocumentWorkflows";
        function getLookup(): Q.Lookup<DocumentWorkflowTemplatesRow>;
        const deletePermission = "DocumentManager:WorkflowTemplates";
        const insertPermission = "DocumentManager:WorkflowTemplates";
        const readPermission = "DocumentManager:WorkflowTemplates";
        const updatePermission = "DocumentManager:WorkflowTemplates";
        const enum Fields {
            WorkflowTemplateId = "WorkflowTemplateId",
            DocumentId = "DocumentId",
            Name = "Name",
            Description = "Description",
            DocumentWorkflowStepsList = "DocumentWorkflowStepsList"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    namespace DocumentWorkflowTemplatesService {
        const baseUrl = "DocumentManager/DocumentWorkflowTemplates";
        function Create(request: Serenity.SaveRequest<DocumentWorkflowTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentWorkflowTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DocumentManager/DocumentWorkflowTemplates/Create",
            Update = "DocumentManager/DocumentWorkflowTemplates/Update",
            Delete = "DocumentManager/DocumentWorkflowTemplates/Delete",
            Retrieve = "DocumentManager/DocumentWorkflowTemplates/Retrieve",
            List = "DocumentManager/DocumentWorkflowTemplates/List"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentsForm {
        Title: Serenity.StringEditor;
        FileType: CustomEditors.DocumentTypeEditor;
        FileName: Serenity.ImageUploadEditor;
        IsTemplate: Serenity.BooleanEditor;
        MajorVersion: Serenity.IntegerEditor;
        MinorVersion: Serenity.IntegerEditor;
    }
    class DocumentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.DocumentManager {
    interface DocumentsRow {
        DocumentId?: number;
        Title?: string;
        FileName?: string;
        IsTemplate?: number;
        FileType?: string;
        IsFinalized?: number;
        OriginalUploadDate?: string;
        MajorVersion?: number;
        MinorVersion?: number;
        RevisionVersion?: number;
        UserId?: number;
    }
    namespace DocumentsRow {
        const idProperty = "DocumentId";
        const nameProperty = "Title";
        const localTextPrefix = "DocumentManager.Documents";
        const lookupKey = "GeniusOneAi.Documents";
        function getLookup(): Q.Lookup<DocumentsRow>;
        const deletePermission = "DocumentManager:ContentLibrary";
        const insertPermission = "DocumentManager:ContentLibrary";
        const readPermission = "DocumentManager:ContentLibrary";
        const updatePermission = "DocumentManager:ContentLibrary";
        const enum Fields {
            DocumentId = "DocumentId",
            Title = "Title",
            FileName = "FileName",
            IsTemplate = "IsTemplate",
            FileType = "FileType",
            IsFinalized = "IsFinalized",
            OriginalUploadDate = "OriginalUploadDate",
            MajorVersion = "MajorVersion",
            MinorVersion = "MinorVersion",
            RevisionVersion = "RevisionVersion",
            UserId = "UserId"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    namespace DocumentsService {
        const baseUrl = "DocumentManager/Documents";
        function Create(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Unfinal(request: Serenity.SaveRequest<DocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DocumentManager/Documents/Create",
            Update = "DocumentManager/Documents/Update",
            Delete = "DocumentManager/Documents/Delete",
            Retrieve = "DocumentManager/Documents/Retrieve",
            Unfinal = "DocumentManager/Documents/Unfinal",
            List = "DocumentManager/Documents/List"
        }
    }
}
declare namespace GeniusOneAi.DocumentManager {
    namespace PermissionKeys {
        const ContentLibrary = "DocumentManager:ContentLibrary";
        const WorkflowTemplates = "DocumentManager:WorkflowTemplates";
    }
}
declare namespace GeniusOneAi.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GeniusOneAi.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GeniusOneAi.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace GeniusOneAi.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GeniusOneAi.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface ApprovedBillingRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        AlertSent?: boolean;
        AuthorizationId?: number;
        TenantId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        PrimaryInsuranceTypeId?: number;
        PrimaryInsuranceNumber?: string;
        PrimaryInsuranceGroup?: string;
        PrimaryInsuranceHolder?: string;
        PrimaryInsuranceHolderDob?: string;
        PrimaryInsuranceRelationship?: string;
        PrimaryInsuranceAddress1?: string;
        PrimaryInsuranceCity?: string;
        PrimaryInsuranceState?: string;
        PrimaryInsuranceZipCode?: string;
        SecondaryInsuranceTypeId?: number;
        SecondaryInsuranceNumber?: string;
        SecondaryInsuranceGroup?: string;
        SecondaryInsuranceHolder?: string;
        SecondaryInsuranceHolderDob?: string;
        SecondaryInsuranceRelationship?: string;
        SecondaryInsuranceAddress1?: string;
        SecondaryInsuranceCity?: string;
        SecondaryInsuranceState?: string;
        SecondaryInsuranceZipCode?: string;
        RecordNumber?: string;
        SocialSecurityNum?: string;
        BirthDate?: string;
        Race?: string;
        Gender?: string;
        OtherName?: string;
        PrimaryInsuranceName?: string;
        SecondaryInsuranceName?: string;
    }
    namespace ApprovedBillingRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "MiscEntities.ApprovedBilling";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            AlertSent = "AlertSent",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            PrimaryInsuranceTypeId = "PrimaryInsuranceTypeId",
            PrimaryInsuranceNumber = "PrimaryInsuranceNumber",
            PrimaryInsuranceGroup = "PrimaryInsuranceGroup",
            PrimaryInsuranceHolder = "PrimaryInsuranceHolder",
            PrimaryInsuranceHolderDob = "PrimaryInsuranceHolderDob",
            PrimaryInsuranceRelationship = "PrimaryInsuranceRelationship",
            PrimaryInsuranceAddress1 = "PrimaryInsuranceAddress1",
            PrimaryInsuranceCity = "PrimaryInsuranceCity",
            PrimaryInsuranceState = "PrimaryInsuranceState",
            PrimaryInsuranceZipCode = "PrimaryInsuranceZipCode",
            SecondaryInsuranceTypeId = "SecondaryInsuranceTypeId",
            SecondaryInsuranceNumber = "SecondaryInsuranceNumber",
            SecondaryInsuranceGroup = "SecondaryInsuranceGroup",
            SecondaryInsuranceHolder = "SecondaryInsuranceHolder",
            SecondaryInsuranceHolderDob = "SecondaryInsuranceHolderDob",
            SecondaryInsuranceRelationship = "SecondaryInsuranceRelationship",
            SecondaryInsuranceAddress1 = "SecondaryInsuranceAddress1",
            SecondaryInsuranceCity = "SecondaryInsuranceCity",
            SecondaryInsuranceState = "SecondaryInsuranceState",
            SecondaryInsuranceZipCode = "SecondaryInsuranceZipCode",
            RecordNumber = "RecordNumber",
            SocialSecurityNum = "SocialSecurityNum",
            BirthDate = "BirthDate",
            Race = "Race",
            Gender = "Gender",
            OtherName = "OtherName",
            PrimaryInsuranceName = "PrimaryInsuranceName",
            SecondaryInsuranceName = "SecondaryInsuranceName"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface ClientAssignmentsRow {
        ClientFullName?: string;
        UserId?: number;
        ClientId?: number;
        BillCode?: string;
        AuthorizationId?: number;
        StartDate?: string;
        EndDate?: string;
        ProgramName?: string;
    }
    namespace ClientAssignmentsRow {
        const idProperty = "ClientId";
        const nameProperty = "ClientFullName";
        const localTextPrefix = "MiscEntities.ClientAssignments";
        const lookupKey = "GeniusOneAi.ClientAssignments";
        function getLookup(): Q.Lookup<ClientAssignmentsRow>;
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ClientId = "ClientId",
            BillCode = "BillCode",
            AuthorizationId = "AuthorizationId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            ProgramName = "ProgramName"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface EventsRow {
        EventId?: number;
        Subject?: string;
        Description?: string;
        Start?: string;
        End?: string;
        ThemeColor?: string;
        IsFullDay?: boolean;
        UserId?: number;
    }
    namespace EventsRow {
        const idProperty = "EventId";
        const nameProperty = "Subject";
        const localTextPrefix = "MiscEntities.Events";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            EventId = "EventId",
            Subject = "Subject",
            Description = "Description",
            Start = "Start",
            End = "End",
            ThemeColor = "ThemeColor",
            IsFullDay = "IsFullDay",
            UserId = "UserId"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface InsuranceTypesRow {
        InsuranceTypeId?: number;
        Name?: string;
        Description?: string;
        PayerId?: string;
        Status?: boolean;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        County?: string;
        PrimaryPhone?: string;
        Type?: string;
    }
    namespace InsuranceTypesRow {
        const idProperty = "InsuranceTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.InsuranceTypes";
        const lookupKey = "GeniusOneAi.InsuranceMiscTypes";
        function getLookup(): Q.Lookup<InsuranceTypesRow>;
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            InsuranceTypeId = "InsuranceTypeId",
            Name = "Name",
            Description = "Description",
            PayerId = "PayerId",
            Status = "Status",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            County = "County",
            PrimaryPhone = "PrimaryPhone",
            Type = "Type"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface PatientDetailsRow {
        PatientId?: number;
        PatientFirstName?: string;
        PatientMiddleName?: string;
        PatientLastName?: string;
        PatientFullName?: string;
        PatientBirthDate?: string;
        PatientPrimaryInsuranceNumber?: string;
        PatientMedicalRecordNumber?: string;
    }
    namespace PatientDetailsRow {
        const idProperty = "PatientId";
        const nameProperty = "PatientFirstName";
        const localTextPrefix = "MiscEntities.PatientDetails";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            PatientId = "PatientId",
            PatientFirstName = "PatientFirstName",
            PatientMiddleName = "PatientMiddleName",
            PatientLastName = "PatientLastName",
            PatientFullName = "PatientFullName",
            PatientBirthDate = "PatientBirthDate",
            PatientPrimaryInsuranceNumber = "PatientPrimaryInsuranceNumber",
            PatientMedicalRecordNumber = "PatientMedicalRecordNumber"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface SitesTypesRow {
        SiteTypeId?: number;
        Name?: string;
        Description?: string;
        Npi?: string;
        TaxId?: string;
        Taxonomy?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        PrimaryPhone?: string;
        Status?: boolean;
        TenantId?: number;
    }
    namespace SitesTypesRow {
        const idProperty = "SiteTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "MiscEntities.SitesTypes";
        const lookupKey = "GeniusOneAi.MiscEntities.SiteTypes";
        function getLookup(): Q.Lookup<SitesTypesRow>;
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            SiteTypeId = "SiteTypeId",
            Name = "Name",
            Description = "Description",
            Npi = "Npi",
            TaxId = "TaxId",
            Taxonomy = "Taxonomy",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            PrimaryPhone = "PrimaryPhone",
            Status = "Status",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface TimesheetNoteDataRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: string;
        ProgressNoteInOut?: string;
        BillCode?: string;
        BillingModifier1?: string;
        BillingModifier2?: string;
        BillingModifier3?: string;
        BillingModifier4?: string;
        Hours?: number;
        TenantId?: number;
        AuthorizationId?: number;
        WorkerFirstName?: string;
        WorkerMiddleName?: string;
        WorkerLastName?: string;
        WorkerType?: string;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        BirthDate?: string;
        Race?: string;
        Gender?: string;
        PrimaryInsuranceTypeId?: number;
        PrimaryInsuranceNumber?: string;
        SecondaryInsuranceTypeId?: number;
        SecondaryInsuranceNumber?: string;
        PrimaryInsuranceName?: string;
        PrimaryInsurancePayerId?: string;
        SecondaryInsuranceName?: string;
        SecondaryInsurancePayerId?: string;
        RecordNumber?: string;
        ProgramNoteTemplateId?: number;
        Field00?: string;
        Field01?: string;
        Field02?: string;
        Field03?: string;
        Field04?: string;
        Field05?: string;
        Field06?: string;
        Field07?: string;
        Field08?: string;
        Field09?: string;
        Field10?: string;
        NotesStatus?: string;
        OriginalSubmittalDate?: string;
        DateSigned?: string;
        ESignaturePlainText?: string;
        SignatureImage?: string;
        SignatureGuid?: string;
        FileName?: string;
        Field01Label?: string;
        Field02Label?: string;
        Field03Label?: string;
        Field04Label?: string;
        Field05Label?: string;
        Field06Label?: string;
        Field07Label?: string;
        Field08Label?: string;
        Field09Label?: string;
        Field10Label?: string;
        Field01Status?: boolean;
        Field02Status?: boolean;
        Field03Status?: boolean;
        Field04Status?: boolean;
        Field05Status?: boolean;
        Field06Status?: boolean;
        Field07Status?: boolean;
        Field08Status?: boolean;
        Field09Status?: boolean;
        Field10Status?: boolean;
        Field01Type?: string;
        Field02Type?: string;
        Field03Type?: string;
        Field04Type?: string;
        Field05Type?: string;
        Field06Type?: string;
        Field07Type?: string;
        Field08Type?: string;
        Field09Type?: string;
        Field10Type?: string;
        ProgramName?: string;
        SiteName?: string;
        ApprovedBy?: string;
        DateApproved?: string;
        GoalData?: string;
        InterventionData?: string;
    }
    namespace TimesheetNoteDataRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "MiscEntities.TimesheetNoteData";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            BillingModifier1 = "BillingModifier1",
            BillingModifier2 = "BillingModifier2",
            BillingModifier3 = "BillingModifier3",
            BillingModifier4 = "BillingModifier4",
            Hours = "Hours",
            TenantId = "TenantId",
            AuthorizationId = "AuthorizationId",
            WorkerFirstName = "WorkerFirstName",
            WorkerMiddleName = "WorkerMiddleName",
            WorkerLastName = "WorkerLastName",
            WorkerType = "WorkerType",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            BirthDate = "BirthDate",
            Race = "Race",
            Gender = "Gender",
            PrimaryInsuranceTypeId = "PrimaryInsuranceTypeId",
            PrimaryInsuranceNumber = "PrimaryInsuranceNumber",
            SecondaryInsuranceTypeId = "SecondaryInsuranceTypeId",
            SecondaryInsuranceNumber = "SecondaryInsuranceNumber",
            PrimaryInsuranceName = "PrimaryInsuranceName",
            PrimaryInsurancePayerId = "PrimaryInsurancePayerId",
            SecondaryInsuranceName = "SecondaryInsuranceName",
            SecondaryInsurancePayerId = "SecondaryInsurancePayerId",
            RecordNumber = "RecordNumber",
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            Field00 = "Field00",
            Field01 = "Field01",
            Field02 = "Field02",
            Field03 = "Field03",
            Field04 = "Field04",
            Field05 = "Field05",
            Field06 = "Field06",
            Field07 = "Field07",
            Field08 = "Field08",
            Field09 = "Field09",
            Field10 = "Field10",
            NotesStatus = "NotesStatus",
            OriginalSubmittalDate = "OriginalSubmittalDate",
            DateSigned = "DateSigned",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureImage = "SignatureImage",
            SignatureGuid = "SignatureGuid",
            FileName = "FileName",
            Field01Label = "Field01Label",
            Field02Label = "Field02Label",
            Field03Label = "Field03Label",
            Field04Label = "Field04Label",
            Field05Label = "Field05Label",
            Field06Label = "Field06Label",
            Field07Label = "Field07Label",
            Field08Label = "Field08Label",
            Field09Label = "Field09Label",
            Field10Label = "Field10Label",
            Field01Status = "Field01Status",
            Field02Status = "Field02Status",
            Field03Status = "Field03Status",
            Field04Status = "Field04Status",
            Field05Status = "Field05Status",
            Field06Status = "Field06Status",
            Field07Status = "Field07Status",
            Field08Status = "Field08Status",
            Field09Status = "Field09Status",
            Field10Status = "Field10Status",
            Field01Type = "Field01Type",
            Field02Type = "Field02Type",
            Field03Type = "Field03Type",
            Field04Type = "Field04Type",
            Field05Type = "Field05Type",
            Field06Type = "Field06Type",
            Field07Type = "Field07Type",
            Field08Type = "Field08Type",
            Field09Type = "Field09Type",
            Field10Type = "Field10Type",
            ProgramName = "ProgramName",
            SiteName = "SiteName",
            ApprovedBy = "ApprovedBy",
            DateApproved = "DateApproved",
            GoalData = "GoalData",
            InterventionData = "InterventionData"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface UsStateTypesRow {
        Id?: number;
        State?: string;
        StateCode?: string;
    }
    namespace UsStateTypesRow {
        const idProperty = "Id";
        const nameProperty = "State";
        const localTextPrefix = "MiscEntities.UsStateTypes";
        const lookupKey = "GeniusOneAi.UsStateTypes";
        function getLookup(): Q.Lookup<UsStateTypesRow>;
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            Id = "Id",
            State = "State",
            StateCode = "StateCode"
        }
    }
}
declare namespace GeniusOneAi.MiscEntities {
    interface WorkerClientBillRatesRow {
        UserId?: number;
        AuthorizationId?: number;
        BillRatePercent?: number;
        BillRate?: number;
        BillRateMetric?: number;
        BillRateUnit?: string;
        CalculatedBillRate?: number;
    }
    namespace WorkerClientBillRatesRow {
        const idProperty = "UserId";
        const nameProperty = "BillRateUnit";
        const localTextPrefix = "MiscEntities.WorkerClientBillRates";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            UserId = "UserId",
            AuthorizationId = "AuthorizationId",
            BillRatePercent = "BillRatePercent",
            BillRate = "BillRate",
            BillRateMetric = "BillRateMetric",
            BillRateUnit = "BillRateUnit",
            CalculatedBillRate = "CalculatedBillRate"
        }
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface BaseRecRequest extends Serenity.ServiceRequest {
        Id?: number;
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface BaseRecsRequest extends Serenity.ServiceRequest {
        Recs?: string;
        Ids?: string[];
        clientId?: number;
        workerId?: number;
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface BaseResponse extends Serenity.ServiceResponse {
        Response?: string;
        ResponseType?: string;
        isError?: boolean;
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface EligibilityRequest extends Serenity.ServiceRequest {
        FirstName?: string;
        LastName?: string;
        InsuranceId?: string;
        ServiceDate?: string;
        SiteTypeId?: string;
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface EligibilityResponse extends Serenity.ServiceResponse {
        Response?: string;
        isError?: boolean;
        PolicyNumber?: string;
        GroupNumber?: string;
        PlanNumber?: string;
        insDob?: string;
        insGender?: string;
        insAddress1?: string;
        insCity?: string;
        insState?: string;
        insZipcode?: string;
    }
}
declare namespace GeniusOneAi.Modules.Common.CustomClasses {
    interface GetSignageResponse extends Serenity.ServiceResponse {
        signatureText?: string;
        signatureImage?: string;
        signatureGuid?: string;
        signatureVerified?: boolean;
    }
}
declare namespace GeniusOneAi.ProgramNoteManager {
    namespace PermissionKeys {
        const ManageNotes = "ProgramNotes:ManageNotes";
    }
}
declare namespace GeniusOneAi.ProgramNoteManager {
    interface ProgramNotesRow {
        ProgramNoteId?: number;
        ActivityId?: number;
        ProgramNoteTemplateId?: number;
        Field00?: string;
        Field01?: string;
        Field02?: string;
        Field03?: string;
        Field04?: string;
        Field05?: string;
        Field06?: string;
        Field07?: string;
        Field08?: string;
        Field09?: string;
        Field10?: string;
        Status?: string;
        NoteUpdateStatus?: string;
        DateSigned?: string;
        ESignaturePlainText?: string;
        SignatureImage?: string;
        SignatureGuid?: string;
        FileName?: string;
    }
    namespace ProgramNotesRow {
        const idProperty = "ProgramNoteId";
        const nameProperty = "ProgramNoteTemplateId";
        const localTextPrefix = "ProgramNoteManager.ProgramNotes";
        const deletePermission = "ProgramNotes:ManageNotes";
        const insertPermission = "ProgramNotes:ManageNotes";
        const readPermission = "ProgramNotes:ManageNotes";
        const updatePermission = "ProgramNotes:ManageNotes";
        const enum Fields {
            ProgramNoteId = "ProgramNoteId",
            ActivityId = "ActivityId",
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            Field00 = "Field00",
            Field01 = "Field01",
            Field02 = "Field02",
            Field03 = "Field03",
            Field04 = "Field04",
            Field05 = "Field05",
            Field06 = "Field06",
            Field07 = "Field07",
            Field08 = "Field08",
            Field09 = "Field09",
            Field10 = "Field10",
            Status = "Status",
            NoteUpdateStatus = "NoteUpdateStatus",
            DateSigned = "DateSigned",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureImage = "SignatureImage",
            SignatureGuid = "SignatureGuid",
            FileName = "FileName"
        }
    }
}
declare namespace GeniusOneAi.ProgramNoteManager {
    namespace ProgramNotesService {
        const baseUrl = "ProgramNoteManager/ProgramNotes";
        function Create(request: Serenity.SaveRequest<ProgramNotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramNotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetSignageData(request: Serenity.ServiceRequest, onSuccess?: (response: Modules.Common.CustomClasses.GetSignageResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ProgramNoteManager/ProgramNotes/Create",
            Update = "ProgramNoteManager/ProgramNotes/Update",
            Delete = "ProgramNoteManager/ProgramNotes/Delete",
            Retrieve = "ProgramNoteManager/ProgramNotes/Retrieve",
            List = "ProgramNoteManager/ProgramNotes/List",
            GetSignageData = "ProgramNoteManager/ProgramNotes/GetSignageData"
        }
    }
}
declare namespace GeniusOneAi.Reports {
    namespace PermissionKeys {
        const Standard = "Reporting:Standard";
    }
}
declare namespace GeniusOneAi.Reports {
    class ReportsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Reports {
    interface ReportsForm {
        ReportName: Serenity.StringEditor;
        ReportDescription: Serenity.TextAreaEditor;
    }
    class ReportsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Reports {
    interface ReportsRow {
        ReportId?: number;
        ReportName?: string;
        ReportDescription?: string;
        ReportType?: string;
        ReportFileName?: string;
        TenantId?: number;
    }
    namespace ReportsRow {
        const idProperty = "ReportId";
        const nameProperty = "ReportName";
        const localTextPrefix = "Reports.Reports";
        const deletePermission = "Reporting:Standard";
        const insertPermission = "Reporting:Standard";
        const readPermission = "Reporting:Standard";
        const updatePermission = "Reporting:Standard";
        const enum Fields {
            ReportId = "ReportId",
            ReportName = "ReportName",
            ReportDescription = "ReportDescription",
            ReportType = "ReportType",
            ReportFileName = "ReportFileName",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Reports {
    namespace ReportsService {
        const baseUrl = "Reports";
        function Create(request: Serenity.SaveRequest<ReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Reports/Create",
            Update = "Reports/Update",
            Delete = "Reports/Delete",
            Retrieve = "Reports/Retrieve",
            List = "Reports/List"
        }
    }
}
declare namespace GeniusOneAi {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace GeniusOneAi.Texts {
}
declare namespace GeniusOneAi.Web.Modules.MiscEntities {
    interface VGlobalAgencyDashboardWorkerRow {
        UserId?: number;
        RejectedProgressNotes?: number;
        SavedProgressNotes?: number;
        SubmittedProgressNotes?: number;
        ApprovedProgressNotes?: number;
        ActiveCases?: number;
        InActiveCases?: number;
        AuthorizationsExpiringThisMonth?: number;
        AuthorizationsExpiringNextMonth?: number;
        AppointmentsScheduled?: number;
        DocumentsPendingSignature?: number;
        DocumentsPendingReview?: number;
        CredentialsExpiringThisMonth?: number;
        InvoicesSubmitted?: number;
        InvoicesPaid?: number;
        TotalBilled?: number;
        TotalPaid?: number;
    }
    namespace VGlobalAgencyDashboardWorkerRow {
        const idProperty = "UserId";
        const localTextPrefix = "WorkerPortal.VGlobalAgencyDashboardWorker";
        const deletePermission = "WorkerPortal:MyDashboard";
        const insertPermission = "WorkerPortal:MyDashboard";
        const readPermission = "WorkerPortal:MyDashboard";
        const updatePermission = "WorkerPortal:MyDashboard";
        const enum Fields {
            UserId = "UserId",
            RejectedProgressNotes = "RejectedProgressNotes",
            SavedProgressNotes = "SavedProgressNotes",
            SubmittedProgressNotes = "SubmittedProgressNotes",
            ApprovedProgressNotes = "ApprovedProgressNotes",
            ActiveCases = "ActiveCases",
            InActiveCases = "InActiveCases",
            AuthorizationsExpiringThisMonth = "AuthorizationsExpiringThisMonth",
            AuthorizationsExpiringNextMonth = "AuthorizationsExpiringNextMonth",
            AppointmentsScheduled = "AppointmentsScheduled",
            DocumentsPendingSignature = "DocumentsPendingSignature",
            DocumentsPendingReview = "DocumentsPendingReview",
            CredentialsExpiringThisMonth = "CredentialsExpiringThisMonth",
            InvoicesSubmitted = "InvoicesSubmitted",
            InvoicesPaid = "InvoicesPaid",
            TotalBilled = "TotalBilled",
            TotalPaid = "TotalPaid"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class ContractorRatesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface ContractorRatesForm {
        BillCategory: CustomEditors.ContratorRateEditor;
        BillCode: Serenity.LookupEditor;
        BillRate: Serenity.MaskedEditor;
        BillRateMetric: CustomEditors.BillRateMetricEditor;
        UserId: Serenity.IntegerEditor;
    }
    class ContractorRatesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface ContractorRatesRow {
        UserContractorId?: number;
        UserId?: number;
        BillCategory?: string;
        BillCode?: string;
        BillRate?: number;
        BillRateMetric?: string;
    }
    namespace ContractorRatesRow {
        const idProperty = "UserContractorId";
        const nameProperty = "BillCategory";
        const localTextPrefix = "WorkerManager.ContractorRates";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserContractorId = "UserContractorId",
            UserId = "UserId",
            BillCategory = "BillCategory",
            BillCode = "BillCode",
            BillRate = "BillRate",
            BillRateMetric = "BillRateMetric"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace ContractorRatesService {
        const baseUrl = "WorkerManager/ContractorRates";
        function Create(request: Serenity.SaveRequest<ContractorRatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContractorRatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContractorRatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContractorRatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/ContractorRates/Create",
            Update = "WorkerManager/ContractorRates/Update",
            Delete = "WorkerManager/ContractorRates/Delete",
            Retrieve = "WorkerManager/ContractorRates/Retrieve",
            List = "WorkerManager/ContractorRates/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace PermissionKeys {
        const Workers = "WorkerManager:Workers";
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCaseAssignmentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerCaseAssignmentsForm {
        ClientId: Serenity.LookupEditor;
        IsTeamLead: Serenity.BooleanEditor;
        AuthorizationId: Serenity.LookupEditor;
        AssignedDate: Serenity.DateEditor;
        UnassignedDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
    }
    class WorkerCaseAssignmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerCaseAssignmentsRow {
        CaseAssignmentId?: number;
        ClientId?: number;
        AssignedDate?: string;
        UnassignedDate?: string;
        AuthorizationStartDate?: string;
        AuthorizationEndDate?: string;
        AuthorizationUnitContactGranted?: number;
        Notes?: string;
        BillCode?: string;
        AuthorizationStatus?: string;
        WorkerDisplayName?: string;
        ClientFullName?: string;
        UserId?: number;
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        AuthorizationId?: number;
        TenantId?: number;
        IsTeamLead?: boolean;
    }
    namespace WorkerCaseAssignmentsRow {
        const idProperty = "CaseAssignmentId";
        const nameProperty = "AssignedDate";
        const localTextPrefix = "WorkerManager.WorkerCaseAssignments";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            CaseAssignmentId = "CaseAssignmentId",
            ClientId = "ClientId",
            AssignedDate = "AssignedDate",
            UnassignedDate = "UnassignedDate",
            AuthorizationStartDate = "AuthorizationStartDate",
            AuthorizationEndDate = "AuthorizationEndDate",
            AuthorizationUnitContactGranted = "AuthorizationUnitContactGranted",
            Notes = "Notes",
            BillCode = "BillCode",
            AuthorizationStatus = "AuthorizationStatus",
            WorkerDisplayName = "WorkerDisplayName",
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId",
            IsTeamLead = "IsTeamLead"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerCaseAssignmentsService {
        const baseUrl = "WorkerManager/WorkerCaseAssignments";
        function Create(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerCaseAssignmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerCaseAssignments/Create",
            Update = "WorkerManager/WorkerCaseAssignments/Update",
            Delete = "WorkerManager/WorkerCaseAssignments/Delete",
            Retrieve = "WorkerManager/WorkerCaseAssignments/Retrieve",
            List = "WorkerManager/WorkerCaseAssignments/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCredentialsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerCredentialsForm {
        CredentialTypeId: Serenity.LookupEditor;
        EffectiveDate: Serenity.DateEditor;
        ExpirationDate: Serenity.DateEditor;
        AlertStatus: Serenity.BooleanEditor;
        UserId: Serenity.IntegerEditor;
    }
    class WorkerCredentialsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerCredentialsRow {
        UserCredentialId?: number;
        CredentialTypeId?: number;
        CredentialName?: string;
        UserId?: number;
        EffectiveDate?: string;
        ExpirationDate?: string;
        AlertStatus?: boolean;
        TenantId?: number;
    }
    namespace WorkerCredentialsRow {
        const idProperty = "UserCredentialId";
        const nameProperty = "ExpirationDate";
        const localTextPrefix = "WorkerManager.WorkerCredentials";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserCredentialId = "UserCredentialId",
            CredentialTypeId = "CredentialTypeId",
            CredentialName = "CredentialName",
            UserId = "UserId",
            EffectiveDate = "EffectiveDate",
            ExpirationDate = "ExpirationDate",
            AlertStatus = "AlertStatus",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerCredentialsService {
        const baseUrl = "WorkerManager/WorkerCredentials";
        function Create(request: Serenity.SaveRequest<WorkerCredentialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerCredentialsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCredentialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCredentialsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerCredentials/Create",
            Update = "WorkerManager/WorkerCredentials/Update",
            Delete = "WorkerManager/WorkerCredentials/Delete",
            Retrieve = "WorkerManager/WorkerCredentials/Retrieve",
            List = "WorkerManager/WorkerCredentials/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerDelinquenciesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerDelinquenciesForm {
        DelinquencyDate: Serenity.DateEditor;
        DelinquencyNotes: Serenity.TextAreaEditor;
        ResolutionDate: Serenity.DateEditor;
        ResolutionNotes: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
    }
    class WorkerDelinquenciesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerDelinquenciesRow {
        UserDelinquencyId?: number;
        UserId?: number;
        DelinquencyDate?: string;
        DelinquencyNotes?: string;
        ResolutionDate?: string;
        ResolutionNotes?: string;
        TenantId?: number;
    }
    namespace WorkerDelinquenciesRow {
        const idProperty = "UserDelinquencyId";
        const nameProperty = "DelinquencyNotes";
        const localTextPrefix = "WorkerManager.WorkerDelinquencies";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserDelinquencyId = "UserDelinquencyId",
            UserId = "UserId",
            DelinquencyDate = "DelinquencyDate",
            DelinquencyNotes = "DelinquencyNotes",
            ResolutionDate = "ResolutionDate",
            ResolutionNotes = "ResolutionNotes",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerDelinquenciesService {
        const baseUrl = "WorkerManager/WorkerDelinquencies";
        function Create(request: Serenity.SaveRequest<WorkerDelinquenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerDelinquenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerDelinquenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerDelinquenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerDelinquencies/Create",
            Update = "WorkerManager/WorkerDelinquencies/Update",
            Delete = "WorkerManager/WorkerDelinquencies/Delete",
            Retrieve = "WorkerManager/WorkerDelinquencies/Retrieve",
            List = "WorkerManager/WorkerDelinquencies/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerFormsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerFormsForm {
        FormTypeId: Serenity.LookupEditor;
        DueDate: Serenity.DateEditor;
        AlertStatus: Serenity.BooleanEditor;
        UserId: Serenity.IntegerEditor;
    }
    class WorkerFormsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerFormsRow {
        UserFormId?: number;
        UserId?: number;
        DueDate?: string;
        AlertStatus?: string;
        FormName?: string;
        FormTypeId?: number;
        TenantId?: number;
    }
    namespace WorkerFormsRow {
        const idProperty = "UserFormId";
        const nameProperty = "FormName";
        const localTextPrefix = "WorkerManager.WorkerForms";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserFormId = "UserFormId",
            UserId = "UserId",
            DueDate = "DueDate",
            AlertStatus = "AlertStatus",
            FormName = "FormName",
            FormTypeId = "FormTypeId",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerFormsService {
        const baseUrl = "WorkerManager/WorkerForms";
        function Create(request: Serenity.SaveRequest<WorkerFormsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerFormsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerFormsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerFormsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerForms/Create",
            Update = "WorkerManager/WorkerForms/Update",
            Delete = "WorkerManager/WorkerForms/Delete",
            Retrieve = "WorkerManager/WorkerForms/Retrieve",
            List = "WorkerManager/WorkerForms/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerInvoicesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerInvoicesForm {
        UserId: Serenity.IntegerEditor;
        InvoiceNumber: Serenity.StringEditor;
        TotalDue: Serenity.DecimalEditor;
        DueDate: Serenity.DateEditor;
        PaymentTerms: Serenity.StringEditor;
        DateSent: Serenity.DateEditor;
        DatePaid: Serenity.DateEditor;
        TotalPaid: Serenity.DecimalEditor;
        Status: Serenity.StringEditor;
    }
    class WorkerInvoicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerInvoicesRow {
        UserInvoiceId?: number;
        UserId?: number;
        InvoiceNumber?: string;
        TotalDue?: number;
        DueDate?: string;
        PaymentTerms?: string;
        DateSent?: string;
        DatePaid?: string;
        TotalPaid?: number;
        Status?: string;
    }
    namespace WorkerInvoicesRow {
        const idProperty = "UserInvoiceId";
        const nameProperty = "InvoiceNumber";
        const localTextPrefix = "WorkerManager.WorkerInvoices";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserInvoiceId = "UserInvoiceId",
            UserId = "UserId",
            InvoiceNumber = "InvoiceNumber",
            TotalDue = "TotalDue",
            DueDate = "DueDate",
            PaymentTerms = "PaymentTerms",
            DateSent = "DateSent",
            DatePaid = "DatePaid",
            TotalPaid = "TotalPaid",
            Status = "Status"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerInvoicesService {
        const baseUrl = "WorkerManager/WorkerInvoices";
        function Create(request: Serenity.SaveRequest<WorkerInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerInvoices/Create",
            Update = "WorkerManager/WorkerInvoices/Update",
            Delete = "WorkerManager/WorkerInvoices/Delete",
            Retrieve = "WorkerManager/WorkerInvoices/Retrieve",
            List = "WorkerManager/WorkerInvoices/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerSitesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerSitesForm {
        UserId: Serenity.IntegerEditor;
        SiteTypeId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class WorkerSitesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkerSitesRow {
        UserSiteId?: number;
        UserId?: number;
        SiteTypeId?: number;
        TenantId?: number;
    }
    namespace WorkerSitesRow {
        const idProperty = "UserSiteId";
        const localTextPrefix = "WorkerManager.WorkerSites";
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserSiteId = "UserSiteId",
            UserId = "UserId",
            SiteTypeId = "SiteTypeId",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkerSitesService {
        const baseUrl = "WorkerManager/WorkerSites";
        function Create(request: Serenity.SaveRequest<WorkerSitesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkerSitesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerSitesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerSitesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/WorkerSites/Create",
            Update = "WorkerManager/WorkerSites/Update",
            Delete = "WorkerManager/WorkerSites/Delete",
            Retrieve = "WorkerManager/WorkerSites/Retrieve",
            List = "WorkerManager/WorkerSites/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkersColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkersForm {
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
    class WorkersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    interface WorkersRow {
        UserId?: number;
        Type?: string;
        Classification?: string;
        EmployeeId?: string;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        Email?: string;
        State?: number;
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
        TenantId?: number;
        BillRateAdmin?: number;
        BillRateTraining?: number;
        BillRateMeeting?: number;
        BillRateClientOnTime?: number;
        BillRateClientLate?: number;
        WorkerFullName?: string;
        Username?: string;
        Npi?: string;
        Taxonomy?: string;
    }
    namespace WorkersRow {
        const idProperty = "UserId";
        const nameProperty = "WorkerFullName";
        const localTextPrefix = "WorkerManager.Workers";
        const lookupKey = "GeniusOneAi.Workers";
        function getLookup(): Q.Lookup<WorkersRow>;
        const deletePermission = "WorkerManager:Workers";
        const insertPermission = "WorkerManager:Workers";
        const readPermission = "WorkerManager:Workers";
        const updatePermission = "WorkerManager:Workers";
        const enum Fields {
            UserId = "UserId",
            Type = "Type",
            Classification = "Classification",
            EmployeeId = "EmployeeId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            Email = "Email",
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
            TenantId = "TenantId",
            BillRateAdmin = "BillRateAdmin",
            BillRateTraining = "BillRateTraining",
            BillRateMeeting = "BillRateMeeting",
            BillRateClientOnTime = "BillRateClientOnTime",
            BillRateClientLate = "BillRateClientLate",
            WorkerFullName = "WorkerFullName",
            Username = "Username",
            Npi = "Npi",
            Taxonomy = "Taxonomy"
        }
    }
}
declare namespace GeniusOneAi.WorkerManager {
    namespace WorkersService {
        const baseUrl = "WorkerManager/Workers";
        function Create(request: Serenity.SaveRequest<WorkersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerManager/Workers/Create",
            Update = "WorkerManager/Workers/Update",
            Delete = "WorkerManager/Workers/Delete",
            Retrieve = "WorkerManager/Workers/Retrieve",
            List = "WorkerManager/Workers/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ActivitiesForm {
        Activity: CustomEditors.TimesheetActivityEditor;
        ActivityDate: Serenity.DateEditor;
        ClientId: Serenity.LookupEditor;
        ProgressNoteLocation: CustomEditors.TimesheetLocationEditor;
        ProgressNoteInOut: CustomEditors.TimesheetInOutEditor;
        ActivityFromTime: Serenity.StringEditor;
        ActivityToTime: Serenity.StringEditor;
        IsBillable: Serenity.BooleanEditor;
        Hours: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusEditor;
    }
    class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesLogColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ActivitiesLogNotesForm {
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }
    class ActivitiesLogNotesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ActivitiesLogRow {
        ActivitiesLogId?: number;
        ActivityId?: number;
        Date?: string;
        RejectionReason?: string;
        Notes?: string;
        UserId?: number;
        ActivityUserId?: number;
        ActivityClientId?: number;
        Activity?: string;
        ActivityActivityDate?: string;
        ActivityActivityFromTime?: string;
        ActivityActivityToTime?: string;
        ActivityIsBillable?: boolean;
        ActivityStatus?: string;
        ActivityNotes?: string;
        ActivityInvoiceId?: number;
        ActivityProgressNoteId?: number;
        ActivityProgressNoteTemplateId?: number;
        ActivityProgressNoteLocation?: number;
        ActivityProgressNoteInOut?: string;
        ActivityBillCode?: string;
        ActivityHours?: number;
        ActivityTenantId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserType?: string;
        UserEmployeeId?: string;
        UserFirstName?: string;
        UserMiddleName?: string;
        UserLastName?: string;
        UserAddress1?: string;
        UserAddress2?: string;
        UserCity?: string;
        UserState?: string;
        UserZipcode?: string;
        UserPrimaryPhone?: string;
        UserSecondaryPhone?: string;
        UserHireDate?: string;
        UserEmergencyContact?: string;
        UserEmergencyContactPhone?: string;
        UserSocialSecurityNumber?: string;
        UserDriverLicenseNumber?: string;
        UserDriverLicenseState?: string;
        UserDriverLicenseExpiration?: string;
        UserNotes?: string;
        UserESignatureBase64?: string;
        UserESignaturePlainText?: string;
        UserSignatureVerified?: boolean;
        UserIsWorker?: boolean;
        UserTenantId?: number;
        UserBillRateAdmin?: number;
        UserBillRateTraining?: number;
        UserBillRateMeeting?: number;
        UserBillRateClientOnTime?: number;
        UserBillRateClientLate?: number;
    }
    namespace ActivitiesLogRow {
        const idProperty = "ActivitiesLogId";
        const nameProperty = "Notes";
        const localTextPrefix = "WorkerPortal.ActivitiesLog";
        const deletePermission = "WorkerPortal:MyActivities";
        const insertPermission = "WorkerPortal:MyActivities";
        const readPermission = "WorkerPortal:MyActivities";
        const updatePermission = "WorkerPortal:MyActivities";
        const enum Fields {
            ActivitiesLogId = "ActivitiesLogId",
            ActivityId = "ActivityId",
            Date = "Date",
            RejectionReason = "RejectionReason",
            Notes = "Notes",
            UserId = "UserId",
            ActivityUserId = "ActivityUserId",
            ActivityClientId = "ActivityClientId",
            Activity = "Activity",
            ActivityActivityDate = "ActivityActivityDate",
            ActivityActivityFromTime = "ActivityActivityFromTime",
            ActivityActivityToTime = "ActivityActivityToTime",
            ActivityIsBillable = "ActivityIsBillable",
            ActivityStatus = "ActivityStatus",
            ActivityNotes = "ActivityNotes",
            ActivityInvoiceId = "ActivityInvoiceId",
            ActivityProgressNoteId = "ActivityProgressNoteId",
            ActivityProgressNoteTemplateId = "ActivityProgressNoteTemplateId",
            ActivityProgressNoteLocation = "ActivityProgressNoteLocation",
            ActivityProgressNoteInOut = "ActivityProgressNoteInOut",
            ActivityBillCode = "ActivityBillCode",
            ActivityHours = "ActivityHours",
            ActivityTenantId = "ActivityTenantId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserType = "UserType",
            UserEmployeeId = "UserEmployeeId",
            UserFirstName = "UserFirstName",
            UserMiddleName = "UserMiddleName",
            UserLastName = "UserLastName",
            UserAddress1 = "UserAddress1",
            UserAddress2 = "UserAddress2",
            UserCity = "UserCity",
            UserState = "UserState",
            UserZipcode = "UserZipcode",
            UserPrimaryPhone = "UserPrimaryPhone",
            UserSecondaryPhone = "UserSecondaryPhone",
            UserHireDate = "UserHireDate",
            UserEmergencyContact = "UserEmergencyContact",
            UserEmergencyContactPhone = "UserEmergencyContactPhone",
            UserSocialSecurityNumber = "UserSocialSecurityNumber",
            UserDriverLicenseNumber = "UserDriverLicenseNumber",
            UserDriverLicenseState = "UserDriverLicenseState",
            UserDriverLicenseExpiration = "UserDriverLicenseExpiration",
            UserNotes = "UserNotes",
            UserESignatureBase64 = "UserESignatureBase64",
            UserESignaturePlainText = "UserESignaturePlainText",
            UserSignatureVerified = "UserSignatureVerified",
            UserIsWorker = "UserIsWorker",
            UserTenantId = "UserTenantId",
            UserBillRateAdmin = "UserBillRateAdmin",
            UserBillRateTraining = "UserBillRateTraining",
            UserBillRateMeeting = "UserBillRateMeeting",
            UserBillRateClientOnTime = "UserBillRateClientOnTime",
            UserBillRateClientLate = "UserBillRateClientLate"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ActivitiesLogService {
        const baseUrl = "WorkerPortal/ActivitiesLog";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "WorkerPortal/ActivitiesLog/Retrieve",
            List = "WorkerPortal/ActivitiesLog/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ActivitiesRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        Activity?: string;
        ClientFullName?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
        AuthorizationId?: number;
        ProgramNoteFileName?: string;
    }
    namespace ActivitiesRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "WorkerPortal.Activities";
        const deletePermission = "WorkerPortal:MyActivities";
        const insertPermission = "WorkerPortal:MyActivities";
        const readPermission = "WorkerPortal:MyActivities";
        const updatePermission = "WorkerPortal:MyActivities";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            Activity = "Activity",
            ClientFullName = "ClientFullName",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId",
            AuthorizationId = "AuthorizationId",
            ProgramNoteFileName = "ProgramNoteFileName"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ActivitiesService {
        const baseUrl = "WorkerPortal/Activities";
        function Create(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerPortal/Activities/Create",
            Update = "WorkerPortal/Activities/Update",
            Delete = "WorkerPortal/Activities/Delete",
            Retrieve = "WorkerPortal/Activities/Retrieve",
            List = "WorkerPortal/Activities/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientAuthorizationsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientAuthorizationsForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        UnitContactGranted: Serenity.IntegerEditor;
        AuthorizationType: CustomEditors.AuthorizationTypeEditor;
        Status: CustomEditors.AuthorizationStatusEditor;
        ApprovalStatus: CustomEditors.AuthorizationApprovalEditor;
        ApprovalDate: Serenity.DateEditor;
        ClientId: Serenity.IntegerEditor;
    }
    class ClientAuthorizationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientAuthorizationsRow {
        AuthorizationId?: number;
        ClientId?: number;
        StartDate?: string;
        EndDate?: string;
        UnitContactGranted?: number;
        AuthorizationType?: string;
        Status?: string;
        ApprovalStatus?: string;
        ApprovalDate?: string;
        UnitCalculationMetric?: number;
        TenantId?: number;
        AuthDateRange?: string;
    }
    namespace ClientAuthorizationsRow {
        const idProperty = "AuthorizationId";
        const nameProperty = "AuthDateRange";
        const localTextPrefix = "WorkerPortal.ClientAuthorizations";
        const deletePermission = "WorkerPortal:MyPatients";
        const insertPermission = "WorkerPortal:MyPatients";
        const readPermission = "WorkerPortal:MyPatients";
        const updatePermission = "WorkerPortal:MyPatients";
        const enum Fields {
            AuthorizationId = "AuthorizationId",
            ClientId = "ClientId",
            StartDate = "StartDate",
            EndDate = "EndDate",
            UnitContactGranted = "UnitContactGranted",
            AuthorizationType = "AuthorizationType",
            Status = "Status",
            ApprovalStatus = "ApprovalStatus",
            ApprovalDate = "ApprovalDate",
            UnitCalculationMetric = "UnitCalculationMetric",
            TenantId = "TenantId",
            AuthDateRange = "AuthDateRange"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ClientAuthorizationsService {
        const baseUrl = "WorkerPortal/ClientAuthorizations";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientAuthorizationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Create(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientAuthorizationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "WorkerPortal/ClientAuthorizations/Retrieve",
            List = "WorkerPortal/ClientAuthorizations/List",
            Create = "WorkerPortal/ClientAuthorizations/Create",
            Update = "WorkerPortal/ClientAuthorizations/Update"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientDocumentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientDocumentsForm {
        ClientId: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        FileName: Serenity.ImageUploadEditor;
    }
    class ClientDocumentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientDocumentsRow {
        DocumentId?: number;
        ClientId?: number;
        Title?: string;
        FileName?: string;
        IsFinalized?: number;
        FinalizedDate?: string;
    }
    namespace ClientDocumentsRow {
        const idProperty = "DocumentId";
        const nameProperty = "Title";
        const localTextPrefix = "WorkerPortal.ClientDocuments";
        const deletePermission = "WorkerPortal:MyPatients";
        const insertPermission = "WorkerPortal:MyPatients";
        const readPermission = "WorkerPortal:MyPatients";
        const updatePermission = "WorkerPortal:MyPatients";
        const enum Fields {
            DocumentId = "DocumentId",
            ClientId = "ClientId",
            Title = "Title",
            FileName = "FileName",
            IsFinalized = "IsFinalized",
            FinalizedDate = "FinalizedDate"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ClientDocumentsService {
        const baseUrl = "WorkerPortal/ClientDocuments";
        function Create(request: Serenity.SaveRequest<ClientDocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientDocumentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientDocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientDocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerPortal/ClientDocuments/Create",
            Update = "WorkerPortal/ClientDocuments/Update",
            Delete = "WorkerPortal/ClientDocuments/Delete",
            Retrieve = "WorkerPortal/ClientDocuments/Retrieve",
            List = "WorkerPortal/ClientDocuments/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientGoalsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientGoalsForm {
        ClientId: Serenity.IntegerEditor;
        Goal: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
    }
    class ClientGoalsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientGoalsRow {
        ClientGoalId?: number;
        ClientId?: number;
        Goal?: string;
        Description?: string;
        CompletionDate?: string;
        Status?: string;
        TenantId?: number;
        OwnerCreateDate?: string;
        Owner?: number;
    }
    namespace ClientGoalsRow {
        const idProperty = "ClientGoalId";
        const nameProperty = "Goal";
        const localTextPrefix = "WorkerPortal.ClientGoals";
        const deletePermission = "WorkerPortal:MyPatients";
        const insertPermission = "WorkerPortal:MyPatients";
        const readPermission = "WorkerPortal:MyPatients";
        const updatePermission = "WorkerPortal:MyPatients";
        const enum Fields {
            ClientGoalId = "ClientGoalId",
            ClientId = "ClientId",
            Goal = "Goal",
            Description = "Description",
            CompletionDate = "CompletionDate",
            Status = "Status",
            TenantId = "TenantId",
            OwnerCreateDate = "OwnerCreateDate",
            Owner = "Owner"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ClientGoalsService {
        const baseUrl = "WorkerPortal/ClientGoals";
        function Create(request: Serenity.SaveRequest<ClientGoalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientGoalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientGoalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientGoalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerPortal/ClientGoals/Create",
            Update = "WorkerPortal/ClientGoals/Update",
            Delete = "WorkerPortal/ClientGoals/Delete",
            Retrieve = "WorkerPortal/ClientGoals/Retrieve",
            List = "WorkerPortal/ClientGoals/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientsForm {
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
    class ClientsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface ClientsRow {
        ClientId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        MaidenName?: string;
        OtherName?: string;
        BirthDate?: string;
        Race?: string;
        Gender?: string;
        Ethnicity?: string;
        MaritalStatus?: string;
        SocialSecurityNum?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zipcode?: string;
        County?: string;
        PrimaryPhone?: string;
        SecondaryPhone?: string;
        CellPhone?: string;
        Email?: string;
        CountryOfBirth?: string;
        IsVeteran?: number;
        PrimaryLanguage?: string;
        NextOfKinName?: string;
        NextOfKinPhone?: string;
        MothersName?: string;
        FathersName?: string;
        LicenseStateId?: string;
        EmploymentStatus?: string;
        NumberInHouse?: number;
        LivingArrangements?: string;
        GrossIncomeDollar?: number;
        GrossIncomePer?: string;
        NumberDepenentIncome?: string;
        EducationLevel?: string;
        NameOfSchool?: string;
        PrimaryInsuranceTypeId?: number;
        PrimaryInsuranceNumber?: string;
        PrimaryInsuranceGroup?: string;
        PrimaryInsuranceHolder?: string;
        PrimaryInsuranceHolderDob?: string;
        PrimaryInsuranceRelationship?: string;
        PrimaryInsuranceAddress1?: string;
        PrimaryInsuranceCity?: string;
        PrimaryInsuranceState?: string;
        PrimaryInsuranceZipCode?: string;
        SecondaryInsuranceTypeId?: number;
        SecondaryInsuranceNumber?: string;
        SecondaryInsuranceGroup?: string;
        SecondaryInsuranceHolder?: string;
        SecondaryInsuranceHolderDob?: string;
        SecondaryInsuranceRelationship?: string;
        SecondaryInsuranceAddress1?: string;
        SecondaryInsuranceCity?: string;
        SecondaryInsuranceState?: string;
        SecondaryInsuranceZipCode?: string;
        DischargeDate?: string;
        DiagnosisDate?: string;
        PlanExpirationDate?: string;
        AdmissionDate?: string;
        ReferralDate?: string;
        ReferralSource?: string;
        DiagnosisNotes?: string;
        GuardianName?: string;
        Notes?: string;
        SystemStatus?: string;
        ClientStatus?: string;
        SiteTypeId?: number;
        TenantId?: number;
        RecordNumber?: string;
        Pcn?: string;
        UserId?: number;
        OriginalServiceDate?: string;
        ClientFullName?: string;
        SiteName?: string;
    }
    namespace ClientsRow {
        const idProperty = "ClientId";
        const nameProperty = "ClientFullName";
        const localTextPrefix = "WorkerPortal.Clients";
        const deletePermission = "WorkerPortal:MyPatients";
        const insertPermission = "WorkerPortal:MyPatients";
        const readPermission = "WorkerPortal:MyPatients";
        const updatePermission = "WorkerPortal:MyPatients";
        const enum Fields {
            ClientId = "ClientId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            MaidenName = "MaidenName",
            OtherName = "OtherName",
            BirthDate = "BirthDate",
            Race = "Race",
            Gender = "Gender",
            Ethnicity = "Ethnicity",
            MaritalStatus = "MaritalStatus",
            SocialSecurityNum = "SocialSecurityNum",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zipcode = "Zipcode",
            County = "County",
            PrimaryPhone = "PrimaryPhone",
            SecondaryPhone = "SecondaryPhone",
            CellPhone = "CellPhone",
            Email = "Email",
            CountryOfBirth = "CountryOfBirth",
            IsVeteran = "IsVeteran",
            PrimaryLanguage = "PrimaryLanguage",
            NextOfKinName = "NextOfKinName",
            NextOfKinPhone = "NextOfKinPhone",
            MothersName = "MothersName",
            FathersName = "FathersName",
            LicenseStateId = "LicenseStateId",
            EmploymentStatus = "EmploymentStatus",
            NumberInHouse = "NumberInHouse",
            LivingArrangements = "LivingArrangements",
            GrossIncomeDollar = "GrossIncomeDollar",
            GrossIncomePer = "GrossIncomePer",
            NumberDepenentIncome = "NumberDepenentIncome",
            EducationLevel = "EducationLevel",
            NameOfSchool = "NameOfSchool",
            PrimaryInsuranceTypeId = "PrimaryInsuranceTypeId",
            PrimaryInsuranceNumber = "PrimaryInsuranceNumber",
            PrimaryInsuranceGroup = "PrimaryInsuranceGroup",
            PrimaryInsuranceHolder = "PrimaryInsuranceHolder",
            PrimaryInsuranceHolderDob = "PrimaryInsuranceHolderDob",
            PrimaryInsuranceRelationship = "PrimaryInsuranceRelationship",
            PrimaryInsuranceAddress1 = "PrimaryInsuranceAddress1",
            PrimaryInsuranceCity = "PrimaryInsuranceCity",
            PrimaryInsuranceState = "PrimaryInsuranceState",
            PrimaryInsuranceZipCode = "PrimaryInsuranceZipCode",
            SecondaryInsuranceTypeId = "SecondaryInsuranceTypeId",
            SecondaryInsuranceNumber = "SecondaryInsuranceNumber",
            SecondaryInsuranceGroup = "SecondaryInsuranceGroup",
            SecondaryInsuranceHolder = "SecondaryInsuranceHolder",
            SecondaryInsuranceHolderDob = "SecondaryInsuranceHolderDob",
            SecondaryInsuranceRelationship = "SecondaryInsuranceRelationship",
            SecondaryInsuranceAddress1 = "SecondaryInsuranceAddress1",
            SecondaryInsuranceCity = "SecondaryInsuranceCity",
            SecondaryInsuranceState = "SecondaryInsuranceState",
            SecondaryInsuranceZipCode = "SecondaryInsuranceZipCode",
            DischargeDate = "DischargeDate",
            DiagnosisDate = "DiagnosisDate",
            PlanExpirationDate = "PlanExpirationDate",
            AdmissionDate = "AdmissionDate",
            ReferralDate = "ReferralDate",
            ReferralSource = "ReferralSource",
            DiagnosisNotes = "DiagnosisNotes",
            GuardianName = "GuardianName",
            Notes = "Notes",
            SystemStatus = "SystemStatus",
            ClientStatus = "ClientStatus",
            SiteTypeId = "SiteTypeId",
            TenantId = "TenantId",
            RecordNumber = "RecordNumber",
            Pcn = "Pcn",
            UserId = "UserId",
            OriginalServiceDate = "OriginalServiceDate",
            ClientFullName = "ClientFullName",
            SiteName = "SiteName"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace ClientsService {
        const baseUrl = "WorkerPortal/Clients";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "WorkerPortal/Clients/Retrieve",
            List = "WorkerPortal/Clients/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class DocumentRepositoryColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface DocumentsRow {
        DocumentId?: number;
        Title?: string;
        Filename?: string;
        IsTemplate?: number;
        FileType?: string;
        IsFinalized?: number;
        OriginalUploadDate?: string;
        MajorVersion?: number;
        MinorVersion?: number;
        RevisionVersion?: number;
        UserId?: number;
    }
    namespace DocumentsRow {
        const idProperty = "DocumentId";
        const nameProperty = "Title";
        const localTextPrefix = "WorkerPortal.Documents";
        const deletePermission = "WorkerPortal:DocumentRepository";
        const insertPermission = "WorkerPortal:DocumentRepository";
        const readPermission = "WorkerPortal:DocumentRepository";
        const updatePermission = "WorkerPortal:DocumentRepository";
        const enum Fields {
            DocumentId = "DocumentId",
            Title = "Title",
            Filename = "Filename",
            IsTemplate = "IsTemplate",
            FileType = "FileType",
            IsFinalized = "IsFinalized",
            OriginalUploadDate = "OriginalUploadDate",
            MajorVersion = "MajorVersion",
            MinorVersion = "MinorVersion",
            RevisionVersion = "RevisionVersion",
            UserId = "UserId"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace DocumentsService {
        const baseUrl = "WorkerPortal/Documents";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "WorkerPortal/Documents/Retrieve",
            List = "WorkerPortal/Documents/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientAuthorizationsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface MyClientAuthorizationsForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        UnitContactGranted: Serenity.IntegerEditor;
        AuthorizationType: CustomEditors.AuthorizationTypeEditor;
        Status: CustomEditors.AuthorizationStatusEditor;
        ApprovalStatus: CustomEditors.AuthorizationApprovalEditor;
        ApprovalDate: Serenity.DateEditor;
        ClientId: Serenity.IntegerEditor;
    }
    class MyClientAuthorizationsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientGoalsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface MyClientGoalsForm {
        ClientId: Serenity.IntegerEditor;
        Goal: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Status: CustomEditors.ClientGoalEditor;
        CompletionDate: Serenity.DateEditor;
    }
    class MyClientGoalsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyInvoicesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface MyInvoicesRow {
        UserInvoiceId?: number;
        UserId?: number;
        InvoiceNumber?: string;
        TotalDue?: number;
        DueDate?: string;
        PaymentTerms?: string;
        DateSent?: string;
        DatePaid?: string;
        TotalPaid?: number;
        Status?: string;
        FileName?: string;
    }
    namespace MyInvoicesRow {
        const idProperty = "UserInvoiceId";
        const nameProperty = "InvoiceNumber";
        const localTextPrefix = "WorkerPortal.MyInvoices";
        const deletePermission = "WorkerPortal:MyInvoices";
        const insertPermission = "WorkerPortal:MyInvoices";
        const readPermission = "WorkerPortal:MyInvoices";
        const updatePermission = "WorkerPortal:MyInvoices";
        const enum Fields {
            UserInvoiceId = "UserInvoiceId",
            UserId = "UserId",
            InvoiceNumber = "InvoiceNumber",
            TotalDue = "TotalDue",
            DueDate = "DueDate",
            PaymentTerms = "PaymentTerms",
            DateSent = "DateSent",
            DatePaid = "DatePaid",
            TotalPaid = "TotalPaid",
            Status = "Status",
            FileName = "FileName"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace MyInvoicesService {
        const baseUrl = "WorkerPortal/MyInvoices";
        function Create(request: Serenity.SaveRequest<MyInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MyInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MyInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MyInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "WorkerPortal/MyInvoices/Create",
            Update = "WorkerPortal/MyInvoices/Update",
            Delete = "WorkerPortal/MyInvoices/Delete",
            Retrieve = "WorkerPortal/MyInvoices/Retrieve",
            List = "WorkerPortal/MyInvoices/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace PermissionKeys {
        const MyDashboard = "WorkerPortal:MyDashboard";
        const MyActivities = "WorkerPortal:MyActivities";
        const MyPatients = "WorkerPortal:MyPatients";
        const MyInvoices = "WorkerPortal:MyInvoices";
        const DocumentRepository = "WorkerPortal:DocumentRepository";
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class TeamAssignmentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class TimesheetsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerActivitiesLogColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface WorkerActivitiesLogForm {
        RejectionReason: CustomEditors.RejectionEditor;
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }
    class WorkerActivitiesLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface WorkerActivitiesLogNotesForm {
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }
    class WorkerActivitiesLogNotesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface WorkerActivitiesLogRow {
        ActivitiesLogId?: number;
        ActivityId?: number;
        Date?: string;
        RejectionReason?: string;
        Notes?: string;
        UserId?: number;
        ActivityUserId?: number;
        ActivityClientId?: number;
        Activity?: string;
        ActivityActivityDate?: string;
        ActivityActivityFromTime?: string;
        ActivityActivityToTime?: string;
        ActivityIsBillable?: boolean;
        ActivityStatus?: string;
        ActivityNotes?: string;
        ActivityInvoiceId?: number;
        ActivityProgressNoteId?: number;
        ActivityProgressNoteTemplateId?: number;
        ActivityProgressNoteLocation?: number;
        ActivityProgressNoteInOut?: string;
        ActivityBillCode?: string;
        ActivityHours?: number;
        ActivityTenantId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserType?: string;
        UserEmployeeId?: string;
        UserFirstName?: string;
        UserMiddleName?: string;
        UserLastName?: string;
        UserAddress1?: string;
        UserAddress2?: string;
        UserCity?: string;
        UserState?: string;
        UserZipcode?: string;
        UserPrimaryPhone?: string;
        UserSecondaryPhone?: string;
        UserHireDate?: string;
        UserEmergencyContact?: string;
        UserEmergencyContactPhone?: string;
        UserSocialSecurityNumber?: string;
        UserDriverLicenseNumber?: string;
        UserDriverLicenseState?: string;
        UserDriverLicenseExpiration?: string;
        UserNotes?: string;
        UserESignatureBase64?: string;
        UserESignaturePlainText?: string;
        UserSignatureVerified?: boolean;
        UserIsWorker?: boolean;
        UserTenantId?: number;
        UserBillRateAdmin?: number;
        UserBillRateTraining?: number;
        UserBillRateMeeting?: number;
        UserBillRateClientOnTime?: number;
        UserBillRateClientLate?: number;
    }
    namespace WorkerActivitiesLogRow {
        const idProperty = "ActivitiesLogId";
        const nameProperty = "Notes";
        const localTextPrefix = "Workflows.WorkerActivitiesLog";
        const deletePermission = "Worker:NotesReview";
        const insertPermission = "Worker:NotesReview";
        const readPermission = "Worker:NotesReview";
        const updatePermission = "Worker:NotesReview";
        const enum Fields {
            ActivitiesLogId = "ActivitiesLogId",
            ActivityId = "ActivityId",
            Date = "Date",
            RejectionReason = "RejectionReason",
            Notes = "Notes",
            UserId = "UserId",
            ActivityUserId = "ActivityUserId",
            ActivityClientId = "ActivityClientId",
            Activity = "Activity",
            ActivityActivityDate = "ActivityActivityDate",
            ActivityActivityFromTime = "ActivityActivityFromTime",
            ActivityActivityToTime = "ActivityActivityToTime",
            ActivityIsBillable = "ActivityIsBillable",
            ActivityStatus = "ActivityStatus",
            ActivityNotes = "ActivityNotes",
            ActivityInvoiceId = "ActivityInvoiceId",
            ActivityProgressNoteId = "ActivityProgressNoteId",
            ActivityProgressNoteTemplateId = "ActivityProgressNoteTemplateId",
            ActivityProgressNoteLocation = "ActivityProgressNoteLocation",
            ActivityProgressNoteInOut = "ActivityProgressNoteInOut",
            ActivityBillCode = "ActivityBillCode",
            ActivityHours = "ActivityHours",
            ActivityTenantId = "ActivityTenantId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserType = "UserType",
            UserEmployeeId = "UserEmployeeId",
            UserFirstName = "UserFirstName",
            UserMiddleName = "UserMiddleName",
            UserLastName = "UserLastName",
            UserAddress1 = "UserAddress1",
            UserAddress2 = "UserAddress2",
            UserCity = "UserCity",
            UserState = "UserState",
            UserZipcode = "UserZipcode",
            UserPrimaryPhone = "UserPrimaryPhone",
            UserSecondaryPhone = "UserSecondaryPhone",
            UserHireDate = "UserHireDate",
            UserEmergencyContact = "UserEmergencyContact",
            UserEmergencyContactPhone = "UserEmergencyContactPhone",
            UserSocialSecurityNumber = "UserSocialSecurityNumber",
            UserDriverLicenseNumber = "UserDriverLicenseNumber",
            UserDriverLicenseState = "UserDriverLicenseState",
            UserDriverLicenseExpiration = "UserDriverLicenseExpiration",
            UserNotes = "UserNotes",
            UserESignatureBase64 = "UserESignatureBase64",
            UserESignaturePlainText = "UserESignaturePlainText",
            UserSignatureVerified = "UserSignatureVerified",
            UserIsWorker = "UserIsWorker",
            UserTenantId = "UserTenantId",
            UserBillRateAdmin = "UserBillRateAdmin",
            UserBillRateTraining = "UserBillRateTraining",
            UserBillRateMeeting = "UserBillRateMeeting",
            UserBillRateClientOnTime = "UserBillRateClientOnTime",
            UserBillRateClientLate = "UserBillRateClientLate"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace WorkerActivitiesLogService {
        const baseUrl = "Workflows/WorkerActivitiesLog";
        function Create(request: Serenity.SaveRequest<WorkerActivitiesLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/WorkerActivitiesLog/Create",
            Retrieve = "Workflows/WorkerActivitiesLog/Retrieve",
            List = "Workflows/WorkerActivitiesLog/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerCaseAssignmentsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface WorkerCaseAssignmentsRow {
        CaseAssignmentId?: number;
        ClientId?: number;
        AssignedDate?: string;
        UnassignedDate?: string;
        AuthorizationStartDate?: string;
        AuthorizationEndDate?: string;
        AuthorizationUnitContactGranted?: number;
        Notes?: string;
        BillCode?: string;
        AuthorizationStatus?: string;
        WorkerDisplayName?: string;
        ClientFullName?: string;
        UserId?: number;
        ProgramCodeTypeId?: number;
        ProgramTypeId?: number;
        AuthorizationId?: number;
        TenantId?: number;
        IsTeamLead?: boolean;
    }
    namespace WorkerCaseAssignmentsRow {
        const idProperty = "CaseAssignmentId";
        const nameProperty = "AssignedDate";
        const localTextPrefix = "WorkerPortal.WorkerCaseAssignments";
        const deletePermission = "WorkerPortal:MyPatients";
        const insertPermission = "WorkerPortal:MyPatients";
        const readPermission = "WorkerPortal:MyPatients";
        const updatePermission = "WorkerPortal:MyPatients";
        const enum Fields {
            CaseAssignmentId = "CaseAssignmentId",
            ClientId = "ClientId",
            AssignedDate = "AssignedDate",
            UnassignedDate = "UnassignedDate",
            AuthorizationStartDate = "AuthorizationStartDate",
            AuthorizationEndDate = "AuthorizationEndDate",
            AuthorizationUnitContactGranted = "AuthorizationUnitContactGranted",
            Notes = "Notes",
            BillCode = "BillCode",
            AuthorizationStatus = "AuthorizationStatus",
            WorkerDisplayName = "WorkerDisplayName",
            ClientFullName = "ClientFullName",
            UserId = "UserId",
            ProgramCodeTypeId = "ProgramCodeTypeId",
            ProgramTypeId = "ProgramTypeId",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId",
            IsTeamLead = "IsTeamLead"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace WorkerCaseAssignmentsService {
        const baseUrl = "WorkerPortal/WorkerCaseAssignments";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerCaseAssignmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "WorkerPortal/WorkerCaseAssignments/Retrieve",
            List = "WorkerPortal/WorkerCaseAssignments/List"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    interface WorkersPortalRow {
        UserId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        ESignatureBase64?: string;
        ESignaturePlainText?: string;
        SignatureVerified?: boolean;
        IsWorker?: boolean;
        TenantId?: number;
    }
    namespace WorkersPortalRow {
        const idProperty = "UserId";
        const nameProperty = "FirstName";
        const localTextPrefix = "WorkerPortal.WorkersPortal";
        const deletePermission = "*";
        const insertPermission = "*";
        const readPermission = "*";
        const updatePermission = "*";
        const enum Fields {
            UserId = "UserId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            ESignatureBase64 = "ESignatureBase64",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureVerified = "SignatureVerified",
            IsWorker = "IsWorker",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    namespace WorkersService {
        const baseUrl = "WorkerPortal/Workers";
        function Update(request: Serenity.SaveRequest<WorkersPortalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "WorkerPortal/Workers/Update"
        }
    }
}
declare namespace GeniusOneAi.WorkerPortal.Workflows {
    namespace PermissionKeys {
        const NotesReview = "Worker:NotesReview";
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesArchiveColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesArchiveForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.BillingStatusEditor;
        Activity: Serenity.StringEditor;
    }
    class ActivitiesArchiveForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesArchiveRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        ClientFullName?: string;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
    }
    namespace ActivitiesArchiveRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Workflows.ActivitiesArchive";
        const deletePermission = "Workflows:Activities";
        const insertPermission = "Workflows:Activities";
        const readPermission = "Workflows:Activities";
        const updatePermission = "Workflows:Activities";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            ClientFullName = "ClientFullName",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace ActivitiesArchiveService {
        const baseUrl = "Workflows/ActivitiesArchive";
        function Create(request: Serenity.SaveRequest<ActivitiesArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivitiesArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/ActivitiesArchive/Create",
            Update = "Workflows/ActivitiesArchive/Update",
            Delete = "Workflows/ActivitiesArchive/Delete",
            Retrieve = "Workflows/ActivitiesArchive/Retrieve",
            List = "Workflows/ActivitiesArchive/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusWorkflowEditor;
        Activity: CustomEditors.TimesheetActivityEditor;
    }
    class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesLogColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesLogForm {
        RejectionReason: CustomEditors.RejectionEditor;
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }
    class ActivitiesLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesLogNotesForm {
        Notes: Serenity.TextAreaEditor;
        ActivityId: Serenity.IntegerEditor;
    }
    class ActivitiesLogNotesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesLogRow {
        ActivitiesLogId?: number;
        ActivityId?: number;
        Date?: string;
        RejectionReason?: string;
        Notes?: string;
        UserId?: number;
        ActivityUserId?: number;
        ActivityClientId?: number;
        Activity?: string;
        ActivityActivityDate?: string;
        ActivityActivityFromTime?: string;
        ActivityActivityToTime?: string;
        ActivityIsBillable?: boolean;
        ActivityStatus?: string;
        ActivityNotes?: string;
        ActivityInvoiceId?: number;
        ActivityProgressNoteId?: number;
        ActivityProgressNoteTemplateId?: number;
        ActivityProgressNoteLocation?: number;
        ActivityProgressNoteInOut?: string;
        ActivityBillCode?: string;
        ActivityHours?: number;
        ActivityTenantId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserType?: string;
        UserEmployeeId?: string;
        UserFirstName?: string;
        UserMiddleName?: string;
        UserLastName?: string;
        UserAddress1?: string;
        UserAddress2?: string;
        UserCity?: string;
        UserState?: string;
        UserZipcode?: string;
        UserPrimaryPhone?: string;
        UserSecondaryPhone?: string;
        UserHireDate?: string;
        UserEmergencyContact?: string;
        UserEmergencyContactPhone?: string;
        UserSocialSecurityNumber?: string;
        UserDriverLicenseNumber?: string;
        UserDriverLicenseState?: string;
        UserDriverLicenseExpiration?: string;
        UserNotes?: string;
        UserESignatureBase64?: string;
        UserESignaturePlainText?: string;
        UserSignatureVerified?: boolean;
        UserIsWorker?: boolean;
        UserTenantId?: number;
        UserBillRateAdmin?: number;
        UserBillRateTraining?: number;
        UserBillRateMeeting?: number;
        UserBillRateClientOnTime?: number;
        UserBillRateClientLate?: number;
    }
    namespace ActivitiesLogRow {
        const idProperty = "ActivitiesLogId";
        const nameProperty = "Notes";
        const localTextPrefix = "Workflows.ActivitiesLog";
        const deletePermission = "Workflows:Activities";
        const insertPermission = "Workflows:Activities";
        const readPermission = "Workflows:Activities";
        const updatePermission = "Workflows:Activities";
        const enum Fields {
            ActivitiesLogId = "ActivitiesLogId",
            ActivityId = "ActivityId",
            Date = "Date",
            RejectionReason = "RejectionReason",
            Notes = "Notes",
            UserId = "UserId",
            ActivityUserId = "ActivityUserId",
            ActivityClientId = "ActivityClientId",
            Activity = "Activity",
            ActivityActivityDate = "ActivityActivityDate",
            ActivityActivityFromTime = "ActivityActivityFromTime",
            ActivityActivityToTime = "ActivityActivityToTime",
            ActivityIsBillable = "ActivityIsBillable",
            ActivityStatus = "ActivityStatus",
            ActivityNotes = "ActivityNotes",
            ActivityInvoiceId = "ActivityInvoiceId",
            ActivityProgressNoteId = "ActivityProgressNoteId",
            ActivityProgressNoteTemplateId = "ActivityProgressNoteTemplateId",
            ActivityProgressNoteLocation = "ActivityProgressNoteLocation",
            ActivityProgressNoteInOut = "ActivityProgressNoteInOut",
            ActivityBillCode = "ActivityBillCode",
            ActivityHours = "ActivityHours",
            ActivityTenantId = "ActivityTenantId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserType = "UserType",
            UserEmployeeId = "UserEmployeeId",
            UserFirstName = "UserFirstName",
            UserMiddleName = "UserMiddleName",
            UserLastName = "UserLastName",
            UserAddress1 = "UserAddress1",
            UserAddress2 = "UserAddress2",
            UserCity = "UserCity",
            UserState = "UserState",
            UserZipcode = "UserZipcode",
            UserPrimaryPhone = "UserPrimaryPhone",
            UserSecondaryPhone = "UserSecondaryPhone",
            UserHireDate = "UserHireDate",
            UserEmergencyContact = "UserEmergencyContact",
            UserEmergencyContactPhone = "UserEmergencyContactPhone",
            UserSocialSecurityNumber = "UserSocialSecurityNumber",
            UserDriverLicenseNumber = "UserDriverLicenseNumber",
            UserDriverLicenseState = "UserDriverLicenseState",
            UserDriverLicenseExpiration = "UserDriverLicenseExpiration",
            UserNotes = "UserNotes",
            UserESignatureBase64 = "UserESignatureBase64",
            UserESignaturePlainText = "UserESignaturePlainText",
            UserSignatureVerified = "UserSignatureVerified",
            UserIsWorker = "UserIsWorker",
            UserTenantId = "UserTenantId",
            UserBillRateAdmin = "UserBillRateAdmin",
            UserBillRateTraining = "UserBillRateTraining",
            UserBillRateMeeting = "UserBillRateMeeting",
            UserBillRateClientOnTime = "UserBillRateClientOnTime",
            UserBillRateClientLate = "UserBillRateClientLate"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace ActivitiesLogService {
        const baseUrl = "Workflows/ActivitiesLog";
        function Create(request: Serenity.SaveRequest<ActivitiesLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivitiesLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/ActivitiesLog/Create",
            Update = "Workflows/ActivitiesLog/Update",
            Delete = "Workflows/ActivitiesLog/Delete",
            Retrieve = "Workflows/ActivitiesLog/Retrieve",
            List = "Workflows/ActivitiesLog/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    interface ActivitiesRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        ClientFullName?: string;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: string;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        AuthorizationId?: number;
        TenantId?: number;
    }
    namespace ActivitiesRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Workflows.Activities";
        const deletePermission = "Workflows:Activities";
        const insertPermission = "Workflows:Activities";
        const readPermission = "Workflows:Activities";
        const updatePermission = "Workflows:Activities";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            ClientFullName = "ClientFullName",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace ActivitiesService {
        const baseUrl = "Workflows/Activities";
        function Create(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/Activities/Create",
            Update = "Workflows/Activities/Update",
            Delete = "Workflows/Activities/Delete",
            Retrieve = "Workflows/Activities/Retrieve",
            List = "Workflows/Activities/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class BillingActivitiesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface BillingActivitiesRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        ClientFullName?: string;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        Status?: string;
        Notes?: string;
        InvoiceId?: number;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        TenantId?: number;
    }
    namespace BillingActivitiesRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Workflows.BillingActivities";
        const deletePermission = "Workflows:Billing";
        const insertPermission = "Workflows:Billing";
        const readPermission = "Workflows:Billing";
        const updatePermission = "Workflows:Billing";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            ClientFullName = "ClientFullName",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace BillingActivitiesService {
        const baseUrl = "Workflows/BillingActivities";
        function Create(request: Serenity.SaveRequest<BillingActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillingActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillingActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillingActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/BillingActivities/Create",
            Update = "Workflows/BillingActivities/Update",
            Delete = "Workflows/BillingActivities/Delete",
            Retrieve = "Workflows/BillingActivities/Retrieve",
            List = "Workflows/BillingActivities/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class BillingLogColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface BillingLogForm {
        BillingResponseDate: Serenity.DateEditor;
        BillingResponse: Serenity.StringEditor;
        BillingResponseNotes: Serenity.TextAreaEditor;
    }
    class BillingLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface BillingLogRow {
        BillingId?: number;
        ActivityId?: number;
        BillingResponseDate?: string;
        BillingResponse?: string;
        BillingResponseNotes?: string;
        ActivityUserId?: number;
        ActivityClientId?: number;
        Activity?: string;
        ActivityActivityDate?: string;
        ActivityActivityFromTime?: string;
        ActivityActivityToTime?: string;
        ActivityIsBillable?: boolean;
        ActivityBillableAmount?: number;
        ActivityStatus?: string;
        ActivityNotes?: string;
        ActivityInvoiceId?: number;
        ActivityProgressNoteId?: number;
        ActivityProgressNoteTemplateId?: number;
        ActivityProgressNoteLocation?: number;
        ActivityProgressNoteInOut?: string;
        ActivityBillCode?: string;
        ActivityHours?: number;
        ActivityAlertSent?: boolean;
        ActivityTenantId?: number;
    }
    namespace BillingLogRow {
        const idProperty = "BillingId";
        const nameProperty = "BillingResponse";
        const localTextPrefix = "Workflows.BillingLog";
        const deletePermission = "Workflows:Billing";
        const insertPermission = "Workflows:Billing";
        const readPermission = "Workflows:Billing";
        const updatePermission = "Workflows:Billing";
        const enum Fields {
            BillingId = "BillingId",
            ActivityId = "ActivityId",
            BillingResponseDate = "BillingResponseDate",
            BillingResponse = "BillingResponse",
            BillingResponseNotes = "BillingResponseNotes",
            ActivityUserId = "ActivityUserId",
            ActivityClientId = "ActivityClientId",
            Activity = "Activity",
            ActivityActivityDate = "ActivityActivityDate",
            ActivityActivityFromTime = "ActivityActivityFromTime",
            ActivityActivityToTime = "ActivityActivityToTime",
            ActivityIsBillable = "ActivityIsBillable",
            ActivityBillableAmount = "ActivityBillableAmount",
            ActivityStatus = "ActivityStatus",
            ActivityNotes = "ActivityNotes",
            ActivityInvoiceId = "ActivityInvoiceId",
            ActivityProgressNoteId = "ActivityProgressNoteId",
            ActivityProgressNoteTemplateId = "ActivityProgressNoteTemplateId",
            ActivityProgressNoteLocation = "ActivityProgressNoteLocation",
            ActivityProgressNoteInOut = "ActivityProgressNoteInOut",
            ActivityBillCode = "ActivityBillCode",
            ActivityHours = "ActivityHours",
            ActivityAlertSent = "ActivityAlertSent",
            ActivityTenantId = "ActivityTenantId"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace BillingLogService {
        const baseUrl = "Workflows/BillingLog";
        function Create(request: Serenity.SaveRequest<BillingLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillingLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillingLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillingLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/BillingLog/Create",
            Update = "Workflows/BillingLog/Update",
            Delete = "Workflows/BillingLog/Delete",
            Retrieve = "Workflows/BillingLog/Retrieve",
            List = "Workflows/BillingLog/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface DocumentWorkflowCreationForm {
        DocumentWorkflowId: Serenity.LookupEditor;
    }
    class DocumentWorkflowCreationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface DocumentWorkflowForm {
        Status: CustomEditors.WorkflowStatusEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DocumentWorkflowStepsList: DocumentWorkflowStepsEditor;
    }
    class DocumentWorkflowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface DocumentWorkflowRow {
        WorkflowId?: number;
        DocumentWorkflowId?: number;
        Name?: string;
        Description?: string;
        FileName?: string;
        Status?: string;
        DocumentWorkflowStepsList?: DocumentWorkflowStepsRow[];
    }
    namespace DocumentWorkflowRow {
        const idProperty = "WorkflowId";
        const nameProperty = "Name";
        const localTextPrefix = "Workflows.DocumentWorkflow";
        const deletePermission = "Workflows:Documents";
        const insertPermission = "Workflows:Documents";
        const readPermission = "Workflows:Documents";
        const updatePermission = "Workflows:Documents";
        const enum Fields {
            WorkflowId = "WorkflowId",
            DocumentWorkflowId = "DocumentWorkflowId",
            Name = "Name",
            Description = "Description",
            FileName = "FileName",
            Status = "Status",
            DocumentWorkflowStepsList = "DocumentWorkflowStepsList"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace DocumentWorkflowService {
        const baseUrl = "Workflows/DocumentWorkflow";
        function Create(request: Serenity.SaveRequest<DocumentWorkflowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentWorkflowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function IssueNewDocumentWorkflow(request: Modules.Common.CustomClasses.BaseRecRequest, onSuccess?: (response: Modules.Common.CustomClasses.BaseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/DocumentWorkflow/Create",
            Update = "Workflows/DocumentWorkflow/Update",
            Delete = "Workflows/DocumentWorkflow/Delete",
            Retrieve = "Workflows/DocumentWorkflow/Retrieve",
            List = "Workflows/DocumentWorkflow/List",
            IssueNewDocumentWorkflow = "Workflows/DocumentWorkflow/IssueNewDocumentWorkflow"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowStepsColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface DocumentWorkflowStepsForm {
        StepActionType: CustomEditors.StepTypeEditor;
        StepPerformerType: CustomEditors.PerformerTypeEditor;
        StepPerformerStaffId: Serenity.LookupEditor;
        StepPerformerPatientId: Serenity.LookupEditor;
        DueDate: Serenity.DateEditor;
    }
    class DocumentWorkflowStepsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface DocumentWorkflowStepsRow {
        DocumentStepId?: number;
        WorkflowId?: number;
        StepOrder?: number;
        StepActionType?: string;
        StepPerformerType?: string;
        StepPerformerStaffId?: number;
        StepPerformerPatientId?: number;
        DueDate?: string;
        DateCompleted?: string;
        PerformerName?: string;
        StepPerformerStaffFullName?: string;
        StepPerformerPatientFullName?: string;
    }
    namespace DocumentWorkflowStepsRow {
        const idProperty = "DocumentStepId";
        const nameProperty = "StepActionType";
        const localTextPrefix = "Workflows.DocumentWorkflowSteps";
        const deletePermission = "Workflows:Documents";
        const insertPermission = "Workflows:Documents";
        const readPermission = "Workflows:Documents";
        const updatePermission = "Workflows:Documents";
        const enum Fields {
            DocumentStepId = "DocumentStepId",
            WorkflowId = "WorkflowId",
            StepOrder = "StepOrder",
            StepActionType = "StepActionType",
            StepPerformerType = "StepPerformerType",
            StepPerformerStaffId = "StepPerformerStaffId",
            StepPerformerPatientId = "StepPerformerPatientId",
            DueDate = "DueDate",
            DateCompleted = "DateCompleted",
            PerformerName = "PerformerName",
            StepPerformerStaffFullName = "StepPerformerStaffFullName",
            StepPerformerPatientFullName = "StepPerformerPatientFullName"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace DocumentWorkflowStepsService {
        const baseUrl = "Workflows/DocumentWorkflowSteps";
        function Create(request: Serenity.SaveRequest<DocumentWorkflowStepsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentWorkflowStepsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentWorkflowStepsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentWorkflowStepsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/DocumentWorkflowSteps/Create",
            Update = "Workflows/DocumentWorkflowSteps/Update",
            Delete = "Workflows/DocumentWorkflowSteps/Delete",
            Retrieve = "Workflows/DocumentWorkflowSteps/Retrieve",
            List = "Workflows/DocumentWorkflowSteps/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    class InvoicesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface InvoicesForm {
        InvoiceNumber: Serenity.StringEditor;
        TotalDue: Serenity.DecimalEditor;
        TotalPaid: Serenity.DecimalEditor;
        Status: CustomEditors.InvoiceStatusEditor;
    }
    class InvoicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface InvoicesRow {
        UserInvoiceId?: number;
        UserId?: number;
        InvoiceNumber?: string;
        TotalDue?: number;
        DueDate?: string;
        PaymentTerms?: string;
        DateSent?: string;
        DatePaid?: string;
        TotalPaid?: number;
        Status?: string;
        FileName?: string;
    }
    namespace InvoicesRow {
        const idProperty = "UserInvoiceId";
        const nameProperty = "InvoiceNumber";
        const localTextPrefix = "Workflows.Invoices";
        const deletePermission = "Workflows:ContractorInvoices";
        const insertPermission = "Workflows:ContractorInvoices";
        const readPermission = "Workflows:ContractorInvoices";
        const updatePermission = "Workflows:ContractorInvoices";
        const enum Fields {
            UserInvoiceId = "UserInvoiceId",
            UserId = "UserId",
            InvoiceNumber = "InvoiceNumber",
            TotalDue = "TotalDue",
            DueDate = "DueDate",
            PaymentTerms = "PaymentTerms",
            DateSent = "DateSent",
            DatePaid = "DatePaid",
            TotalPaid = "TotalPaid",
            Status = "Status",
            FileName = "FileName"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace InvoicesService {
        const baseUrl = "Workflows/Invoices";
        function Create(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Workflows/Invoices/Create",
            Update = "Workflows/Invoices/Update",
            Delete = "Workflows/Invoices/Delete",
            Retrieve = "Workflows/Invoices/Retrieve",
            List = "Workflows/Invoices/List"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace PermissionKeys {
        const WorkerReviews = "Workflows:WorkerReviews";
        const Activities = "Workflows:Activities";
        const Billing = "Workflows:Billing";
        const ContractorInvoices = "Workflows:ContractorInvoices";
        const DocumentWorkflows = "Workflows:Documents";
    }
}
declare namespace GeniusOneAi.Workflows {
    class WorkerActivitiesColumns {
        static columnsKey: string;
    }
}
declare namespace GeniusOneAi.Workflows {
    interface WorkerActivitiesForm {
        Notes: Serenity.TextAreaEditor;
        Status: CustomEditors.TimesheetStatusWorkflowEditor;
        Activity: CustomEditors.TimesheetActivityEditor;
    }
    class WorkerActivitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GeniusOneAi.Workflows {
    interface WorkerActivitiesRow {
        ActivityId?: number;
        UserId?: number;
        ClientId?: number;
        ClientFullName?: string;
        Activity?: string;
        ActivityDate?: string;
        ActivityFromTime?: string;
        ActivityToTime?: string;
        IsBillable?: boolean;
        BillableAmount?: number;
        Status?: string;
        Notes?: string;
        InvoiceId?: string;
        ProgressNoteId?: number;
        ProgressNoteTemplateId?: number;
        ProgressNoteLocation?: number;
        ProgressNoteInOut?: string;
        BillCode?: string;
        Hours?: number;
        AuthorizationId?: number;
        TenantId?: number;
    }
    namespace WorkerActivitiesRow {
        const idProperty = "ActivityId";
        const nameProperty = "Activity";
        const localTextPrefix = "Workflows.WorkerActivities";
        const deletePermission = "Worker:NotesReview";
        const insertPermission = "Worker:NotesReview";
        const readPermission = "Worker:NotesReview";
        const updatePermission = "Worker:NotesReview";
        const enum Fields {
            ActivityId = "ActivityId",
            UserId = "UserId",
            ClientId = "ClientId",
            ClientFullName = "ClientFullName",
            Activity = "Activity",
            ActivityDate = "ActivityDate",
            ActivityFromTime = "ActivityFromTime",
            ActivityToTime = "ActivityToTime",
            IsBillable = "IsBillable",
            BillableAmount = "BillableAmount",
            Status = "Status",
            Notes = "Notes",
            InvoiceId = "InvoiceId",
            ProgressNoteId = "ProgressNoteId",
            ProgressNoteTemplateId = "ProgressNoteTemplateId",
            ProgressNoteLocation = "ProgressNoteLocation",
            ProgressNoteInOut = "ProgressNoteInOut",
            BillCode = "BillCode",
            Hours = "Hours",
            AuthorizationId = "AuthorizationId",
            TenantId = "TenantId"
        }
    }
}
declare namespace GeniusOneAi.Workflows {
    namespace WorkerActivitiesService {
        const baseUrl = "Workflows/WorkerActivities";
        function Update(request: Serenity.SaveRequest<WorkerActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkerActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkerActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Workflows/WorkerActivities/Update",
            Retrieve = "Workflows/WorkerActivities/Retrieve",
            List = "Workflows/WorkerActivities/List"
        }
    }
}
declare namespace GeniusOneAi.Administration {
    class BillingGrid extends Serenity.EntityGrid<BillingRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace GeniusOneAi.Administration {
    class InsuranceTypesDialog extends Serenity.EntityDialog<InsuranceTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InsuranceTypesForm;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GeniusOneAi.Administration {
    class InsuranceTypesGrid extends Serenity.EntityGrid<InsuranceTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InsuranceTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GeniusOneAi.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace GeniusOneAi.Administration {
    class ProgramCodeTypesDialog extends Serenity.EntityDialog<ProgramCodeTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProgramCodeTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Administration {
    class ProgramCodeTypesGrid extends Serenity.EntityGrid<ProgramCodeTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramCodeTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GeniusOneAi.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GeniusOneAi.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GeniusOneAi.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogButtons(): ({
            text: string;
            cssClass: string;
            click: (e: any) => void;
        } | {
            text: string;
            click: () => void;
            cssClass?: undefined;
        })[];
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GeniusOneAi.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GeniusOneAi.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogButtons(): Serenity.DialogButton[];
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalInterventionsLibraryDialog extends Serenity.Extensions.GridEditorDialog<ClientGoalInterventionsLibraryRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientGoalInterventionsLibraryForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalInterventionsLibraryEditor extends Serenity.Extensions.GridEditorBase<ClientGoalInterventionsLibraryRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalInterventionsLibraryDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalInterventionsLibraryGrid extends Serenity.EntityGrid<ClientGoalInterventionsLibraryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalInterventionsLibraryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalsLibraryDialog extends Serenity.EntityDialog<ClientGoalsLibraryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientGoalsLibraryForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
        protected updateInterface(): void;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientGoalsLibraryGrid extends Serenity.EntityGrid<ClientGoalsLibraryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalsLibraryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
        protected getAddButtonCaption(): string;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientSiteTypesDialog extends Serenity.EntityDialog<ClientSiteTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClientSiteTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ClientSiteTypesGrid extends Serenity.EntityGrid<ClientSiteTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientSiteTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class CredentialTypesDialog extends Serenity.EntityDialog<CredentialTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CredentialTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class CredentialTypesGrid extends Serenity.EntityGrid<CredentialTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CredentialTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class FormTypesDialog extends Serenity.EntityDialog<FormTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FormTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class FormTypesGrid extends Serenity.EntityGrid<FormTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FormTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTemplatesDialog extends Serenity.EntityDialog<ProgramNoteTemplatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProgramNoteTemplatesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTemplatesGrid extends Serenity.EntityGrid<ProgramNoteTemplatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramNoteTemplatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected updateInterface(): void;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTypeDialog extends Serenity.EntityDialog<ProgramNoteTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProgramNoteTypeForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramNoteTypeGrid extends Serenity.EntityGrid<ProgramNoteTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramNoteTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramTypesDialog extends Serenity.EntityDialog<ProgramTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProgramTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class ProgramTypesGrid extends Serenity.EntityGrid<ProgramTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class SitesTypesDialog extends Serenity.EntityDialog<SitesTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SitesTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class SitesTypesGrid extends Serenity.EntityGrid<SitesTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SitesTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class TemplateCodeListDialog extends Serenity.EntityDialog<TemplateCodeListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TemplateCodeListForm;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class TemplateCodeListGrid extends Serenity.EntityGrid<TemplateCodeListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateCodeListDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class WorkerTypesDialog extends Serenity.EntityDialog<WorkerTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WorkerTypesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.AgencyAdministration {
    class WorkerTypesGrid extends Serenity.EntityGrid<WorkerTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getInitialTitle(): string;
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.Archives {
    class ActivitiesArchiveDialog extends Serenity.EntityDialog<ActivitiesArchiveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
        protected form: ActivitiesArchiveForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Archives {
    class ActivitiesArchiveGrid extends Serenity.EntityGrid<ActivitiesArchiveRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Archives {
    class ProgressNotesArchiveDialog extends Serenity.EntityDialog<ProgressNotesArchiveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
        protected form: ProgressNotesArchiveForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Archives {
    class ProgressNotesArchiveGrid extends Serenity.EntityGrid<ProgressNotesArchiveRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        private formatSubmission;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientAuthorizationsDialog extends Serenity.EntityDialog<ClientAuthorizationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientAuthorizationsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientAuthorizationsGrid extends Serenity.EntityGrid<ClientAuthorizationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientAuthorizationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientDocumentsDialog extends Serenity.EntityDialog<ClientDocumentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientDocumentsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientDocumentsGrid extends Serenity.EntityGrid<ClientDocumentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalInterventionsDialog extends Serenity.Extensions.GridEditorDialog<ClientGoalInterventionsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientGoalInterventionsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalInterventionsEditor extends Serenity.Extensions.GridEditorBase<ClientGoalInterventionsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalInterventionsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalInterventionsGrid extends Serenity.EntityGrid<ClientGoalInterventionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalInterventionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsDialog extends Serenity.EntityDialog<ClientGoalsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientGoalsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
        protected updateInterface(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsGrid extends Serenity.EntityGrid<ClientGoalsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsLibrarySelectorDialog extends Serenity.TemplatedDialog<any> {
        private goalsGrid;
        clientID: number;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientGoalsLibrarySelectorGrid extends Serenity.EntityGrid<ClientGoalsLibrarySelectorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalsLibrarySelectorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private authorizationsGrid;
        private goalsGrid;
        private documentsGrid;
        private teamAssignmentGrid;
        private duplicateRecordNumber;
        private lastCheckedRecordNumber;
        private recordNumberCheckSequence;
        protected form: ClientsForm;
        constructor();
        private checkRecordNumber;
        protected validateBeforeSave(): boolean;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateTitle(): void;
        protected updateForm(): void;
        protected updateInterface(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        loadEntity(entity: ClientsRow): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsEligibilityDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClientsForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected getClientInfo(): void;
        protected updateTitle(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsGrid extends Serenity.EntityGrid<ClientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class TeamAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getGridCanLoad(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected addButtonClick(): void;
        protected getAddButtonCaption(): string;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class WorkerCaseAssignmentsDialog extends Serenity.EntityDialog<WorkerCaseAssignmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerCaseAssignmentsForm;
        clientID: number;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateInterface(): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class WorkerCaseAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerCaseAssignmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.LanguageList {
    function getValue(): string[][];
}
declare namespace GeniusOneAi.ScriptInitialization {
}
declare namespace GeniusOneAi.CustomEditors {
    class AuthorizationApprovalEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class AuthorizationStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class AuthorizationTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class CustomBaseEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class BillRateMetricEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class BillRateUnitEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class BillingStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class ClientGoalEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class ContratorRateEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class DocumentTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class EmploymentStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class FormTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class FundingSourceEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class GenderEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class GoalEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class IncomePerEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class InsuranceEntityTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class InvoiceStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class LivingArrangmentsEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class MaritalStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class NumberOrderEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class PerformerTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class RaceEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class ReferralSourceEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class RejectionEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class StepTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class SystemStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class TimesheetActivityEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class TimesheetInOutEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class TimesheetLocationEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class TimesheetStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
    class TimesheetStatusWorkflowEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class WorkerClassificationEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class WorkflowStatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.CustomEditors {
    class YesNoEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientAuthorizationLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ClientAuthorizationsRow> {
        clientId: number;
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<ClientAuthorizationsRow>): ClientAuthorizationsRow[];
        protected getItemText(item: ClientAuthorizationsRow, lookup: Q.Lookup<ClientAuthorizationsRow>): string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ClientsRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<ClientsRow>): ClientsRow[];
        protected getItemText(item: ClientsRow, lookup: Q.Lookup<ClientsRow>): string;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class SitesTypesFormatter extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, MiscEntities.SitesTypesRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<MiscEntities.SitesTypesRow>): MiscEntities.SitesTypesRow[];
        protected getItemText(item: MiscEntities.SitesTypesRow, lookup: Q.Lookup<MiscEntities.SitesTypesRow>): string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkersLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, WorkersRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<WorkersRow>): WorkersRow[];
        protected getItemText(item: WorkersRow, lookup: Q.Lookup<WorkersRow>): string;
    }
}
declare namespace GeniusOneAi.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentSelectorDialog extends Serenity.TemplatedDialog<any> {
        private documentsGrid;
        clientID: number;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentSelectorGrid extends Serenity.EntityGrid<DocumentSelectorRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowStepsTemplatesDialog extends Serenity.Extensions.GridEditorDialog<DocumentWorkflowStepsTemplatesRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentWorkflowStepsTemplatesForm;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowStepsTemplatesEditor extends Serenity.Extensions.GridEditorBase<DocumentWorkflowStepsTemplatesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentWorkflowStepsTemplatesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowTemplatesDialog extends Serenity.EntityDialog<DocumentWorkflowTemplatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentWorkflowTemplatesForm;
        constructor();
        protected updateInterface(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentWorkflowTemplatesGrid extends Serenity.EntityGrid<DocumentWorkflowTemplatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentWorkflowTemplatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: DocumentManager.DocumentWorkflowTemplatesRow, index: number): string;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentsDialog extends Serenity.EntityDialog<DocumentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.DocumentManager {
    class DocumentsGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: DocumentManager.DocumentsRow, index: number): string;
    }
}
declare namespace GeniusOneAi.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace GeniusOneAi.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace GeniusOneAi.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.Reports {
    class ReportsDialog extends Serenity.EntityDialog<ReportsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReportsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Reports {
    class ReportsGrid extends Serenity.EntityGrid<ReportsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: ReportsRow, index: number): string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class ContractorRatesDialog extends Serenity.EntityDialog<ContractorRatesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContractorRatesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class ContractorRatesGrid extends Serenity.EntityGrid<ContractorRatesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContractorRatesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.ClientManager {
    class ClientsLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ClientsRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<ClientsRow>): ClientsRow[];
        protected getItemText(item: ClientsRow, lookup: Q.Lookup<ClientsRow>): string;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCaseAssignmentsDialog extends Serenity.EntityDialog<WorkerCaseAssignmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerCaseAssignmentsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCaseAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerCaseAssignmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCredentialsDialog extends Serenity.EntityDialog<WorkerCredentialsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: WorkerCredentialsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerCredentialsGrid extends Serenity.EntityGrid<WorkerCredentialsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerCredentialsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerDelinquenciesDialog extends Serenity.EntityDialog<WorkerDelinquenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerDelinquenciesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerDelinquenciesGrid extends Serenity.EntityGrid<WorkerDelinquenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerDelinquenciesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerFormsDialog extends Serenity.EntityDialog<WorkerFormsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerFormsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerFormsGrid extends Serenity.EntityGrid<WorkerFormsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerFormsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerInvoicesDialog extends Serenity.EntityDialog<WorkerInvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerInvoicesForm;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerInvoicesGrid extends Serenity.EntityGrid<WorkerInvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerInvoicesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerSitesDialog extends Serenity.EntityDialog<WorkerSitesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: WorkerSitesForm;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkerSitesGrid extends Serenity.EntityGrid<WorkerSitesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerSitesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkersDialog extends Serenity.EntityDialog<WorkersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private WorkerCaseAssignmentsGrid;
        private WorkerFormsGrid;
        private WorkerCredentialsGrid;
        private WorkerDelinquenciesGrid;
        private ContractorRatesGrid;
        constructor();
        protected form: WorkersForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        loadEntity(entity: WorkersRow): void;
        protected afterLoadEntity(): void;
        checkClassificationType(): void;
    }
}
declare namespace GeniusOneAi.WorkerManager {
    class WorkersGrid extends Serenity.EntityGrid<WorkersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesDialog extends Serenity.EntityDialog<ActivitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ActivitiesForm;
        constructor();
        protected updateInterface(): void;
        getToolbarButtons(): any[];
        checkActivityType(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: ActivitiesRow, index: number): string;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesLogDialog extends Serenity.TemplatedDialog<any> {
        private ActivitiesLogGrid;
        constructor(actId?: number);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesLogGrid extends Serenity.EntityGrid<ActivitiesLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActivitiesLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _activityID;
        get activityID(): string;
        set activityID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ActivitiesLogNotesDialog extends Serenity.EntityDialog<ActivitiesLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ActivitiesLogNotesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientAuthorizationsDialog extends Serenity.EntityDialog<ClientAuthorizationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientAuthorizationsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientAuthorizationsGrid extends Serenity.EntityGrid<ClientAuthorizationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientAuthorizationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientDocumentsDialog extends Serenity.EntityDialog<ClientDocumentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientDocumentsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientDocumentsGrid extends Serenity.EntityGrid<ClientDocumentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientGoalsDialog extends Serenity.EntityDialog<ClientGoalsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientGoalsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientGoalsGrid extends Serenity.EntityGrid<ClientGoalsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientGoalsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientsForm;
        private authorizationsGrid;
        private goalsGrid;
        private teamAssignmentGrid;
        private documentGrid;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateTitle(): void;
        protected updateInterface(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        loadEntity(entity: ClientsRow): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class ClientsGrid extends Serenity.EntityGrid<ClientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientAuthorizationsDialog extends Serenity.EntityDialog<ClientAuthorizationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientAuthorizationsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientAuthorizationsGrid extends Serenity.EntityGrid<ClientAuthorizationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MyClientAuthorizationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientGoalsDialog extends Serenity.EntityDialog<ClientGoalsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MyClientGoalsForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected updateTitle(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyClientGoalsGrid extends Serenity.EntityGrid<ClientGoalsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MyClientGoalsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getAddButtonCaption(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    import WorkerCaseAssignmentsRow = WorkerPortal.WorkerCaseAssignmentsRow;
    class TeamAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getGridCanLoad(): boolean;
        protected getButtons(): any[];
        private _clientID;
        get clientID(): string;
        set clientID(value: string);
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class DocumentRepositoryGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class MyInvoicesGrid extends Serenity.EntityGrid<MyInvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerCaseAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getAddButtonCaption(): string;
        protected addButtonClick(): void;
        protected getGridCanLoad(): boolean;
        private _userID;
        get userID(): string;
        set userID(value: string);
        protected createQuickSearchInput(): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesDialog extends Serenity.EntityDialog<ActivitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        constructor();
        protected form: ActivitiesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected approve(): void;
        protected reject(): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getColumns(): Slick.Column[];
        private formatSubmission;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: ActivitiesRow, index: number): string;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesArchiveDialog extends Serenity.EntityDialog<ActivitiesArchiveRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        constructor();
        protected form: ActivitiesArchiveForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesArchiveGrid extends Serenity.EntityGrid<ActivitiesArchiveRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: ActivitiesArchiveRow, index: number): string;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesLogCommentsDialog extends Serenity.TemplatedDialog<any> {
        private ActivitiesLogGrid;
        protected form: ActivitiesLogForm;
        constructor(actId?: number);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesLogDialog extends Serenity.EntityDialog<ActivitiesLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ActivitiesLogForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesLogGrid extends Serenity.EntityGrid<ActivitiesLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActivitiesLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _activityID;
        get activityID(): string;
        set activityID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class ActivitiesLogNotesDialog extends Serenity.EntityDialog<ActivitiesLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ActivitiesLogNotesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class BillingActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getItemCssClass(item: ActivitiesRow, index: number): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class BillingLogDialog extends Serenity.TemplatedDialog<any> {
        private BillingLogGrid;
        protected form: BillingLogForm;
        constructor(actId?: number);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class BillingLogGrid extends Serenity.EntityGrid<BillingLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillingLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _activityID;
        get activityID(): string;
        set activityID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowCreationDialog extends Serenity.EntityDialog<DocumentWorkflowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentWorkflowCreationForm;
        constructor();
        getToolbarButtons(): any[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowDialog extends Serenity.EntityDialog<DocumentWorkflowRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentWorkflowForm;
        constructor();
        protected updateInterface(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowGrid extends Serenity.EntityGrid<DocumentWorkflowRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentWorkflowDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: Workflows.DocumentWorkflowRow, index: number): string;
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowStepsDialog extends Serenity.Extensions.GridEditorDialog<DocumentWorkflowStepsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentWorkflowStepsForm;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
        checkPerformerType(): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class DocumentWorkflowStepsEditor extends Serenity.Extensions.GridEditorBase<DocumentWorkflowStepsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentWorkflowStepsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getAddButtonCaption(): string;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InvoicesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GeniusOneAi.Workflows {
    class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getButtons(): any[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class WorkerActivitiesDialog extends Serenity.EntityDialog<WorkerActivitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
        protected form: ActivitiesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected approve(): void;
        protected reject(): void;
    }
}
declare namespace GeniusOneAi.Workflows {
    class WorkerActivitiesGrid extends Serenity.EntityGrid<WorkerActivitiesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getInitialTitle(): string;
        protected getColumns(): Slick.Column[];
        private formatSubmission;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getItemCssClass(item: ActivitiesRow, index: number): string;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerActivitiesLogCommentsDialog extends Serenity.TemplatedDialog<any> {
        private WorkerActivitiesLogGrid;
        protected form: WorkerActivitiesLogForm;
        constructor(actId?: number);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
        protected onDialogOpen(): void;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerActivitiesLogDialog extends Serenity.EntityDialog<WorkerActivitiesLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerActivitiesLogForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerActivitiesLogGrid extends Serenity.EntityGrid<WorkerActivitiesLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkerActivitiesLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _activityID;
        get activityID(): string;
        set activityID(value: string);
        protected createToolbarExtensions(): void;
        protected createQuickSearchInput(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): any[];
    }
}
declare namespace GeniusOneAi.WorkerPortal {
    class WorkerActivitiesLogNotesDialog extends Serenity.EntityDialog<WorkerActivitiesLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WorkerActivitiesLogNotesForm;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        getToolbarButtons(): any[];
    }
}
