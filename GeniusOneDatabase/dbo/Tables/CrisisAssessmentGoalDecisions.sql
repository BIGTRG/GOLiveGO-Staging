CREATE TABLE [dbo].[CrisisAssessmentGoalDecisions] (
    [DecisionId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [AssessmentId] INT NOT NULL,
    [EpisodeId] INT NULL,
    [LibraryGoalId] INT NOT NULL,
    [Code] NVARCHAR(20) NULL,
    [Description] NVARCHAR(1000) NULL,
    [Source] NVARCHAR(1000) NULL,
    [Kept] BIT NOT NULL DEFAULT 1,
    [Reason] NVARCHAR(500) NULL,
    [ClientGoalId] INT NULL
);
