CREATE TABLE [dbo].[CrisisEpisodeFollowUps] (
    [FollowUpId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [EpisodeId] INT NOT NULL,
    [Day] INT NOT NULL,
    [DueDate] DATE NOT NULL,
    [Status] NVARCHAR(20) NOT NULL DEFAULT 'Scheduled',
    [ActivityId] INT NULL,
    [ProgramNoteId] INT NULL,
    [Result] NVARCHAR(500) NULL,
    [TenantId] INT NULL
);
