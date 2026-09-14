CREATE TABLE [dbo].[EncounterNoteGoals] (
    [NoteGoalId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [ProgramNoteId] INT NOT NULL,
    [ClientGoalId] INT NOT NULL,
    [SortOrder] INT NULL,
    [Status] NVARCHAR(30) NULL,
    [StatusOverride] BIT NOT NULL DEFAULT 0,
    [OutcomeText] NVARCHAR(MAX) NULL,
    [EffectivenessText] NVARCHAR(MAX) NULL,
    [WorkerNote] NVARCHAR(2000) NULL,
    [IsCarried] BIT NOT NULL DEFAULT 0,
    [TenantId] INT NULL
);
