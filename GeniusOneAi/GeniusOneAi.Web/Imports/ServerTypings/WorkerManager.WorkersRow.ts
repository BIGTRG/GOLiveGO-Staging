namespace GeniusOneAi.WorkerManager {
    export interface WorkersRow {
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

    export namespace WorkersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'WorkerFullName';
        export const localTextPrefix = 'WorkerManager.Workers';
        export const lookupKey = 'GeniusOneAi.Workers';

        export function getLookup(): Q.Lookup<WorkersRow> {
            return Q.getLookup<WorkersRow>('GeniusOneAi.Workers');
        }
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
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
