CREATE TABLE [dbo].[DocumentWorkflowSteps] (
    [DocumentStepId]         INT           IDENTITY (1, 1) NOT NULL,
    [WorkflowId]             INT           NULL,
    [StepActionType]         NVARCHAR (50) NULL,
    [StepPerformerType]      NVARCHAR (25) NULL,
    [StepPerformerStaffId]   INT           NULL,
    [StepPerformerPatientId] INT           NULL,
    [DueDate]                DATETIME      NULL,
    [DateCompleted]          DATETIME      NULL,
    CONSTRAINT [PK_DocumentWorkflowSteps] PRIMARY KEY CLUSTERED ([DocumentStepId] ASC)
);

