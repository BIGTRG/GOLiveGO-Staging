CREATE TABLE [dbo].[ClientCrisisPlanEntries] (
    [EntryId]          INT             IDENTITY (1, 1) NOT NULL,
    [PlanId]           INT             NOT NULL,
    [Revision]         INT             CONSTRAINT [DF_ClientCrisisPlanEntries_Revision] DEFAULT ((1)) NOT NULL,
    [EntryType]        NVARCHAR (30)   NOT NULL,
    [EntryText]        NVARCHAR (2000) NOT NULL,
    [SourceGoalId]     INT             NULL,
    [SourceQuestionId] INT             NULL,
    [SourceNoteId]     INT             NULL,
    [CreatedAt]        DATETIME        CONSTRAINT [DF_ClientCrisisPlanEntries_CreatedAt] DEFAULT (getdate()) NOT NULL,
    [CreatedBy]        INT             NULL,
    [IsActive]         BIT             CONSTRAINT [DF_ClientCrisisPlanEntries_IsActive] DEFAULT ((1)) NOT NULL,
    [TenantId]         INT             NULL,
    CONSTRAINT [PK_ClientCrisisPlanEntries] PRIMARY KEY CLUSTERED ([EntryId] ASC),
    CONSTRAINT [FK_ClientCrisisPlanEntries_Plans] FOREIGN KEY ([PlanId]) REFERENCES [dbo].[ClientCrisisPlans] ([PlanId])
);
GO
CREATE NONCLUSTERED INDEX [IX_ClientCrisisPlanEntries_Plan] ON [dbo].[ClientCrisisPlanEntries]([PlanId] ASC);
