CREATE TABLE [dbo].[EncounterNoteInterventions] (
    [NoteInterventionId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [ProgramNoteId] INT NOT NULL,
    [ClientGoalId] INT NOT NULL,
    [ClientGoalInterventionId] INT NOT NULL,
    [Provided] BIT NOT NULL DEFAULT 0,
    [Detail] NVARCHAR(1000) NULL,
    [TenantId] INT NULL
);
