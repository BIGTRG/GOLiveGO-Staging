namespace GeniusOneAi.Workflows {
    export interface ActivitiesRow {
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

    export namespace ActivitiesRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Workflows.Activities';
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
