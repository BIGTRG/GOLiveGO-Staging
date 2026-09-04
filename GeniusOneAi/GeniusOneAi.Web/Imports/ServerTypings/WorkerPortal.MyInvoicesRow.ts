namespace GeniusOneAi.WorkerPortal {
    export interface MyInvoicesRow {
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
        FileName?: string;
    }

    export namespace MyInvoicesRow {
        export const idProperty = 'UserInvoiceId';
        export const nameProperty = 'InvoiceNumber';
        export const localTextPrefix = 'WorkerPortal.MyInvoices';
        export const deletePermission = 'WorkerPortal:MyInvoices';
        export const insertPermission = 'WorkerPortal:MyInvoices';
        export const readPermission = 'WorkerPortal:MyInvoices';
        export const updatePermission = 'WorkerPortal:MyInvoices';

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
            Status = "Status",
            FileName = "FileName"
        }
    }
}
