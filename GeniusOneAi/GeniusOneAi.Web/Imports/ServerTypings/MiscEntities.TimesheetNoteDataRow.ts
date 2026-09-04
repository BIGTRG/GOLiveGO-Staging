namespace GeniusOneAi.MiscEntities {
    export interface TimesheetNoteDataRow {
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

    export namespace TimesheetNoteDataRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'MiscEntities.TimesheetNoteData';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

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
