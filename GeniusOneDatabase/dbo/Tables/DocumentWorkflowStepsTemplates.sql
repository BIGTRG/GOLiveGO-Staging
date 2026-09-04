CREATE TABLE [dbo].[DocumentWorkflowStepsTemplates] (
    [DocumentStepId]     INT           IDENTITY (1, 1) NOT NULL,
    [WorkflowTemplateId] INT           NULL,
    [StepActionType]     NVARCHAR (50) NULL,
    [StepPerformerType]  NVARCHAR (25) NULL,
    CONSTRAINT [PK_DocumentWorkflowStepsTemplates] PRIMARY KEY CLUSTERED ([DocumentStepId] ASC)
);

