CREATE TABLE [dbo].[EncounterNoteAnswers] (
    [AnswerId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [ProgramNoteId] INT NOT NULL,
    [ClientGoalId] INT NOT NULL,
    [OutcomeId] INT NOT NULL,
    [QuestionId] INT NOT NULL,
    [Answer] NVARCHAR(2000) NULL,
    [Sentence] NVARCHAR(2200) NULL,
    [AnsweredAt] DATETIME NULL,
    [TenantId] INT NULL
);
