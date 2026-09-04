namespace GeniusOneAi.WorkerPortal {
    export interface ClientsRow {
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

    export namespace ClientsRow {
        export const idProperty = 'ClientId';
        export const nameProperty = 'ClientFullName';
        export const localTextPrefix = 'WorkerPortal.Clients';
        export const deletePermission = 'WorkerPortal:MyPatients';
        export const insertPermission = 'WorkerPortal:MyPatients';
        export const readPermission = 'WorkerPortal:MyPatients';
        export const updatePermission = 'WorkerPortal:MyPatients';

        export declare const enum Fields {
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
