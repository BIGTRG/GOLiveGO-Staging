namespace GeniusOneAi.Workflows {
    export interface BillingLogRow {
        BillingId?: number;
        ActivityId?: number;
        BillingResponseDate?: string;
        BillingResponse?: string;
        BillingResponseNotes?: string;
        ActivityUserId?: number;
        ActivityClientId?: number;
        Activity?: string;
        ActivityActivityDate?: string;
        ActivityActivityFromTime?: string;
        ActivityActivityToTime?: string;
        ActivityIsBillable?: boolean;
        ActivityBillableAmount?: number;
        ActivityStatus?: string;
        ActivityNotes?: string;
        ActivityInvoiceId?: number;
        ActivityProgressNoteId?: number;
        ActivityProgressNoteTemplateId?: number;
        ActivityProgressNoteLocation?: number;
        ActivityProgressNoteInOut?: string;
        ActivityBillCode?: string;
        ActivityHours?: number;
        ActivityAlertSent?: boolean;
        ActivityTenantId?: number;
    }

    export namespace BillingLogRow {
        export const idProperty = 'BillingId';
        export const nameProperty = 'BillingResponse';
        export const localTextPrefix = 'Workflows.BillingLog';
        export const deletePermission = 'Workflows:Billing';
        export const insertPermission = 'Workflows:Billing';
        export const readPermission = 'Workflows:Billing';
        export const updatePermission = 'Workflows:Billing';

        export declare const enum Fields {
            BillingId = "BillingId",
            ActivityId = "ActivityId",
            BillingResponseDate = "BillingResponseDate",
            BillingResponse = "BillingResponse",
            BillingResponseNotes = "BillingResponseNotes",
            ActivityUserId = "ActivityUserId",
            ActivityClientId = "ActivityClientId",
            Activity = "Activity",
            ActivityActivityDate = "ActivityActivityDate",
            ActivityActivityFromTime = "ActivityActivityFromTime",
            ActivityActivityToTime = "ActivityActivityToTime",
            ActivityIsBillable = "ActivityIsBillable",
            ActivityBillableAmount = "ActivityBillableAmount",
            ActivityStatus = "ActivityStatus",
            ActivityNotes = "ActivityNotes",
            ActivityInvoiceId = "ActivityInvoiceId",
            ActivityProgressNoteId = "ActivityProgressNoteId",
            ActivityProgressNoteTemplateId = "ActivityProgressNoteTemplateId",
            ActivityProgressNoteLocation = "ActivityProgressNoteLocation",
            ActivityProgressNoteInOut = "ActivityProgressNoteInOut",
            ActivityBillCode = "ActivityBillCode",
            ActivityHours = "ActivityHours",
            ActivityAlertSent = "ActivityAlertSent",
            ActivityTenantId = "ActivityTenantId"
        }
    }
}
