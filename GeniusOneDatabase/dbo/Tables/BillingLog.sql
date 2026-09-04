CREATE TABLE [dbo].[BillingLog] (
    [BillingId]            INT            IDENTITY (1, 1) NOT NULL,
    [ActivityId]           INT            NULL,
    [BillingResponseDate]  DATETIME2 (7)  NULL,
    [BillingResponse]      NVARCHAR (50)  NULL,
    [BillingResponseNotes] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_BillingLog] PRIMARY KEY CLUSTERED ([BillingId] ASC),
    CONSTRAINT [FK_BillingId_Activities] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[Activities] ([ActivityId])
);

