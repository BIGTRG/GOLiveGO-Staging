namespace GeniusOneAi.WorkerManager {
    export interface WorkerInvoicesRow {
        UserInvoiceId?: number;
        UserId?: number;
        InvoiceNumber?: string;
        TotalDue?: number;
        DueDate?: string;
        PaymentTerms?: string;
        DateSent?: string;
        DatePaid?: string;
        TotalPaid?: number;
        Status?: string;
    }

    export namespace WorkerInvoicesRow {
        export const idProperty = 'UserInvoiceId';
        export const nameProperty = 'InvoiceNumber';
        export const localTextPrefix = 'WorkerManager.WorkerInvoices';
        export const deletePermission = 'WorkerManager:Workers';
        export const insertPermission = 'WorkerManager:Workers';
        export const readPermission = 'WorkerManager:Workers';
        export const updatePermission = 'WorkerManager:Workers';

        export declare const enum Fields {
            UserInvoiceId = "UserInvoiceId",
            UserId = "UserId",
            InvoiceNumber = "InvoiceNumber",
            TotalDue = "TotalDue",
            DueDate = "DueDate",
            PaymentTerms = "PaymentTerms",
            DateSent = "DateSent",
            DatePaid = "DatePaid",
            TotalPaid = "TotalPaid",
            Status = "Status"
        }
    }
}
