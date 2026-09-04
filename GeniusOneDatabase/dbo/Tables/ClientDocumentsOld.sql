CREATE TABLE [dbo].[ClientDocumentsOld] (
    [ClientDocId]      INT           IDENTITY (1, 1) NOT NULL,
    [FileName]         NVARCHAR (50) NOT NULL,
    [WorkflowId]       INT           NULL,
    [WorkflowLastStep] INT           NULL,
    [WorkflowStatus]   NVARCHAR (25) NULL,
    CONSTRAINT [PK_ClientDocuments] PRIMARY KEY CLUSTERED ([ClientDocId] ASC)
);

