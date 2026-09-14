CREATE TABLE [dbo].[CrisisAssessmentNeeds] (
    [NeedRecId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [AssessmentId] INT NOT NULL,
    [EpisodeId] INT NULL,
    [ClientId] INT NOT NULL,
    [TenantId] INT NULL,
    [NeedKey] NVARCHAR(40) NOT NULL,
    [Priority] NVARCHAR(10) NULL,
    [Source] NVARCHAR(1000) NULL,
    [Accepted] BIT NOT NULL DEFAULT 1,
    [Status] NVARCHAR(30) NOT NULL DEFAULT 'Identified',
    [SortOrder] INT NULL,
    [GoalsCreated] INT NULL
);
