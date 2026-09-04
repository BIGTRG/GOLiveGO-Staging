CREATE TABLE [dbo].[DocumentWorkflowTemplates] (
    [WorkflowTemplateId] INT            IDENTITY (1, 1) NOT NULL,
    [DocumentId]         INT            NOT NULL,
    [Name]               NVARCHAR (100) NOT NULL,
    [Description]        NVARCHAR (100) NOT NULL,
    CONSTRAINT [PK_DocumentWorkflowTemplates] PRIMARY KEY CLUSTERED ([WorkflowTemplateId] ASC)
);

