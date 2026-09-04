namespace GeniusOneAi.Workflows {
    export interface WorkerActivitiesRow {
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

    export namespace WorkerActivitiesRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Workflows.WorkerActivities';
        export const deletePermission = 'Worker:NotesReview';
        export const insertPermission = 'Worker:NotesReview';
        export const readPermission = 'Worker:NotesReview';
        export const updatePermission = 'Worker:NotesReview';

        export declare const enum Fields {
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
