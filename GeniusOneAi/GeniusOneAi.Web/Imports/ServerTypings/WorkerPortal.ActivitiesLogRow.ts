namespace GeniusOneAi.WorkerPortal {
    export interface ActivitiesLogRow {
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

    export namespace ActivitiesLogRow {
        export const idProperty = 'ActivitiesLogId';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'WorkerPortal.ActivitiesLog';
        export const deletePermission = 'WorkerPortal:MyActivities';
        export const insertPermission = 'WorkerPortal:MyActivities';
        export const readPermission = 'WorkerPortal:MyActivities';
        export const updatePermission = 'WorkerPortal:MyActivities';

        export declare const enum Fields {
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
