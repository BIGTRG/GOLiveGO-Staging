namespace GeniusOneAi.Workflows {
    export interface ActivitiesArchiveRow {
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

    export namespace ActivitiesArchiveRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Workflows.ActivitiesArchive';
        export const deletePermission = 'Workflows:Activities';
        export const insertPermission = 'Workflows:Activities';
        export const readPermission = 'Workflows:Activities';
        export const updatePermission = 'Workflows:Activities';

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
