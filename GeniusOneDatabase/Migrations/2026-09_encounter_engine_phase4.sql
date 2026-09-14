-- Plain SQL mirror of migration 20260914_1600 (Phase 4 encounter notes; for Malik / manual deploys)
IF OBJECT_ID('dbo.EncounterNoteGoals') IS NULL
BEGIN
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
CREATE INDEX IX_EncounterNoteGoals_ProgramNoteId ON dbo.EncounterNoteGoals(ProgramNoteId);
END
IF OBJECT_ID('dbo.EncounterNoteInterventions') IS NULL
BEGIN
CREATE TABLE [dbo].[EncounterNoteInterventions] (
    [NoteInterventionId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [ProgramNoteId] INT NOT NULL,
    [ClientGoalId] INT NOT NULL,
    [ClientGoalInterventionId] INT NOT NULL,
    [Provided] BIT NOT NULL DEFAULT 0,
    [Detail] NVARCHAR(1000) NULL,
    [TenantId] INT NULL
);
CREATE INDEX IX_EncounterNoteInterventions_ProgramNoteId ON dbo.EncounterNoteInterventions(ProgramNoteId);
END
IF OBJECT_ID('dbo.EncounterNoteAnswers') IS NULL
BEGIN
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
CREATE INDEX IX_EncounterNoteAnswers_ProgramNoteId ON dbo.EncounterNoteAnswers(ProgramNoteId);
END
IF OBJECT_ID('dbo.CrisisEpisodeFollowUps') IS NULL
BEGIN
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
CREATE INDEX IX_CrisisEpisodeFollowUps_EpisodeId ON dbo.CrisisEpisodeFollowUps(EpisodeId);
END
IF COL_LENGTH('dbo.ProgramNotes','SafetyConcern') IS NULL ALTER TABLE dbo.ProgramNotes ADD SafetyConcern BIT NULL;
IF COL_LENGTH('dbo.ProgramNotes','SafetyText') IS NULL ALTER TABLE dbo.ProgramNotes ADD SafetyText NVARCHAR(2000) NULL;
IF COL_LENGTH('dbo.ProgramNotes','GateComplete') IS NULL ALTER TABLE dbo.ProgramNotes ADD GateComplete BIT NOT NULL DEFAULT 0;
IF COL_LENGTH('dbo.ProgramNotes','Summary') IS NULL ALTER TABLE dbo.ProgramNotes ADD Summary NVARCHAR(MAX) NULL;
IF COL_LENGTH('dbo.ProgramNotes','FollowUpDay') IS NULL ALTER TABLE dbo.ProgramNotes ADD FollowUpDay INT NULL;
IF COL_LENGTH('dbo.ProgramNotes','ContactMethod') IS NULL ALTER TABLE dbo.ProgramNotes ADD ContactMethod NVARCHAR(40) NULL;
IF COL_LENGTH('dbo.ProgramNotes','LongTermAdmission') IS NULL ALTER TABLE dbo.ProgramNotes ADD LongTermAdmission BIT NULL;
IF COL_LENGTH('dbo.ProgramNotes','DischargeSummary') IS NULL ALTER TABLE dbo.ProgramNotes ADD DischargeSummary NVARCHAR(MAX) NULL;
IF NOT EXISTS (SELECT 1 FROM dbo.ProgramNoteTemplates WHERE Name = 'Mobile Crisis Management (MCM)')
INSERT INTO dbo.ProgramNoteTemplates (Name, Status,
  Field01Label, Field01Status, Field01Type,
  Field02Label, Field02Status, Field02Type,
  Field03Label, Field03Status, Field03Type,
  Field04Label, Field04Status, Field04Type,
  Field05Status, Field06Status, Field07Status, Field08Status, Field09Status, Field10Status)
VALUES ('Mobile Crisis Management (MCM)', 1,
  '1.) Purpose of Contact/Goals provided on Crisis Assessment only', 1, 'Text',
  '2.) Interventions/Activities provided (be specific)', 1, 'Text',
  '3.) Effectiveness of Intervention/Activity per Consumer (Note for each Intervention/Areas in Needed Continued Improvement)', 1, 'Text',
  'Were there any immediate safety concerns identified or reported? (If YES, explain and report to supervisor)', 1, 'Text',
  0, 0, 0, 0, 0, 0);
