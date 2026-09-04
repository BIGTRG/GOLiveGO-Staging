namespace GeniusOneAi.Archives {
    export interface ActivitiesArchiveRow {
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

    export namespace ActivitiesArchiveRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Archive.ActivitiesArchive';
        export const deletePermission = 'Archives:Activities';
        export const insertPermission = 'Archives:Activities';
        export const readPermission = 'Archives:Activities';
        export const updatePermission = 'Archives:Activities';

        export declare const enum Fields {
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
