namespace GeniusOneAi.Archives {
    export interface ProgressNotesArchiveRow {
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

    export namespace ProgressNotesArchiveRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Archive.ProgressNotesArchive';
        export const deletePermission = 'Archives:ProgressNotes';
        export const insertPermission = 'Archives:ProgressNotes';
        export const readPermission = 'Archives:ProgressNotes';
        export const updatePermission = 'Archives:ProgressNotes';

        export declare const enum Fields {
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
