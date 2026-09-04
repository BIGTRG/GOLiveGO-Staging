CREATE TABLE [dbo].[ClientGoalsLibrary] (
    [ClientGoalId] INT             IDENTITY (1, 1) NOT NULL,
    [GoalType]     NVARCHAR (100)  NULL,
    [Description]  NVARCHAR (2000) NULL,
    [TenantId]     INT             NULL,
    CONSTRAINT [PK_ClientGoalsLibrary] PRIMARY KEY CLUSTERED ([ClientGoalId] ASC)
);

