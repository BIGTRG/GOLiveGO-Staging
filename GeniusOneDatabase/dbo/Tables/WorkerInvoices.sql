CREATE TABLE [dbo].[WorkerInvoices] (
    [UserInvoiceId] INT             IDENTITY (1, 1) NOT NULL,
    [UserId]        INT             DEFAULT (NULL) NULL,
    [InvoiceNumber] NVARCHAR (255)  DEFAULT (NULL) NULL,
    [TotalDue]      DECIMAL (10, 2) DEFAULT (NULL) NULL,
    [DueDate]       DATE            DEFAULT (NULL) NULL,
    [PaymentTerms]  NVARCHAR (25)   DEFAULT (NULL) NULL,
    [DateSent]      DATE            DEFAULT (NULL) NULL,
    [DatePaid]      DATE            DEFAULT (NULL) NULL,
    [TotalPaid]     DECIMAL (10, 2) DEFAULT (NULL) NULL,
    [Status]        NVARCHAR (25)   DEFAULT (NULL) NULL,
    [FileName]      NVARCHAR (100)  NULL,
    [TenantId]      INT             NULL,
    CONSTRAINT [PK_staff_invoices_id] PRIMARY KEY CLUSTERED ([UserInvoiceId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_invoices', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerInvoices';

