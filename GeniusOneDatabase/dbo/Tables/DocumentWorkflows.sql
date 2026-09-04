CREATE TABLE [dbo].[DocumentWorkflows] (
    [WorkflowId]  INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (100) NOT NULL,
    [Description] NVARCHAR (100) NOT NULL,
    [FileName]    NVARCHAR (200) NOT NULL,
    [Status]      NVARCHAR (25)  NULL,
    CONSTRAINT [PK_DocumentWorkflows] PRIMARY KEY CLUSTERED ([WorkflowId] ASC)
);

