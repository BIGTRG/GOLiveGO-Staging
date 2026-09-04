namespace GeniusOneAi.Workflows {
    export interface BillingActivitiesRow {
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

    export namespace BillingActivitiesRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'Workflows.BillingActivities';
        export const deletePermission = 'Workflows:Billing';
        export const insertPermission = 'Workflows:Billing';
        export const readPermission = 'Workflows:Billing';
        export const updatePermission = 'Workflows:Billing';

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
