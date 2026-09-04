namespace GeniusOneAi.MiscEntities {
    export interface ApprovedBillingRow {
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

    export namespace ApprovedBillingRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'MiscEntities.ApprovedBilling';
        export const deletePermission = '';
        export const insertPermission = '';
        export const readPermission = '';
        export const updatePermission = '';

        export declare const enum Fields {
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
