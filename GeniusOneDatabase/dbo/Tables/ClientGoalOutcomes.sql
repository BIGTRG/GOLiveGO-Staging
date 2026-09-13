CREATE TABLE [dbo].[ClientGoalOutcomes] (
    [OutcomeId]             INT             IDENTITY (1, 1) NOT NULL,
    [ClientGoalId]          INT             NOT NULL,
    [LibraryOutcomeId]      INT             NULL,
    [SortOrder]             INT             CONSTRAINT [DF_ClientGoalOutcomes_SortOrder] DEFAULT ((1)) NOT NULL,
    [OutcomeText]           NVARCHAR (1000) NOT NULL,
    [EffectivenessTemplate] NVARCHAR (2000) NULL,
    [StatusRule]            NVARCHAR (20)   CONSTRAINT [DF_ClientGoalOutcomes_StatusRule] DEFAULT (N'Required') NOT NULL,
    [SendsToCrisisPlan]     BIT             CONSTRAINT [DF_ClientGoalOutcomes_SendsToCrisisPlan] DEFAULT ((0)) NOT NULL,
    [IsMet]                 BIT             NULL,
    [CheckedInNoteId]       INT             NULL,
    [CheckedAt]             DATETIME        NULL,
    [Summary]               NVARCHAR (2000) NULL,
    [TenantId]              INT             NULL,
    CONSTRAINT [PK_ClientGoalOutcomes] PRIMARY KEY CLUSTERED ([OutcomeId] ASC),
    CONSTRAINT [FK_ClientGoalOutcomes_ClientGoals] FOREIGN KEY ([ClientGoalId]) REFERENCES [dbo].[ClientGoals] ([ClientGoalId])
);
GO
CREATE NONCLUSTERED INDEX [IX_ClientGoalOutcomes_Goal] ON [dbo].[ClientGoalOutcomes]([ClientGoalId] ASC);
