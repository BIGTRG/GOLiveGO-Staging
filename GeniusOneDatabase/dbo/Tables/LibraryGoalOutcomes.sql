CREATE TABLE [dbo].[LibraryGoalOutcomes] (
    [LibraryOutcomeId]      INT             IDENTITY (1, 1) NOT NULL,
    [LibraryGoalId]         INT             NOT NULL,
    [SortOrder]             INT             CONSTRAINT [DF_LibraryGoalOutcomes_SortOrder] DEFAULT ((1)) NOT NULL,
    [OutcomeText]           NVARCHAR (1000) NOT NULL,
    [EffectivenessTemplate] NVARCHAR (2000) NULL,
    [StatusRule]            NVARCHAR (20)   CONSTRAINT [DF_LibraryGoalOutcomes_StatusRule] DEFAULT (N'Required') NOT NULL,
    [SendsToCrisisPlan]     BIT             CONSTRAINT [DF_LibraryGoalOutcomes_SendsToCrisisPlan] DEFAULT ((0)) NOT NULL,
    [TenantId]              INT             NULL,
    CONSTRAINT [PK_LibraryGoalOutcomes] PRIMARY KEY CLUSTERED ([LibraryOutcomeId] ASC),
    CONSTRAINT [FK_LibraryGoalOutcomes_ClientGoalsLibrary] FOREIGN KEY ([LibraryGoalId]) REFERENCES [dbo].[ClientGoalsLibrary] ([ClientGoalId])
);
GO
CREATE NONCLUSTERED INDEX [IX_LibraryGoalOutcomes_Goal] ON [dbo].[LibraryGoalOutcomes]([LibraryGoalId] ASC);
