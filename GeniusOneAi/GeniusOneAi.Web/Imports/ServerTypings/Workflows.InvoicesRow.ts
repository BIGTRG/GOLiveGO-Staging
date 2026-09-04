namespace GeniusOneAi.Workflows {
    export interface InvoicesRow {
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

    export namespace InvoicesRow {
        export const idProperty = 'UserInvoiceId';
        export const nameProperty = 'InvoiceNumber';
        export const localTextPrefix = 'Workflows.Invoices';
        export const deletePermission = 'Workflows:ContractorInvoices';
        export const insertPermission = 'Workflows:ContractorInvoices';
        export const readPermission = 'Workflows:ContractorInvoices';
        export const updatePermission = 'Workflows:ContractorInvoices';

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
