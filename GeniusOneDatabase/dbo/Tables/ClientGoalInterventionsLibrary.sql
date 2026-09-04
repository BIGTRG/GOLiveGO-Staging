CREATE TABLE [dbo].[ClientGoalInterventionsLibrary] (
    [ClientGoalInterventionId] INT            IDENTITY (1, 1) NOT NULL,
    [ClientGoalId]             INT            NULL,
    [InterDesc]                NVARCHAR (MAX) NULL,
    [TenantId]                 INT            NULL,
    CONSTRAINT [PK_ClientGoalInterventionsLibrary] PRIMARY KEY CLUSTERED ([ClientGoalInterventionId] ASC),
    CONSTRAINT [FK_ClientGoalInterventionsLibrary_ClientGoals] FOREIGN KEY ([ClientGoalId]) REFERENCES [dbo].[ClientGoalsLibrary] ([ClientGoalId])
);

