-- Encounter engine Phase 1 (mirror of GeniusOneAi.Web/Migrations/DefaultDB/DefaultDB_20260912_1700_CrisisEpisodes.cs).
-- The app applies this automatically at startup through FluentMigrator; this script is for manual review / SSMS.
IF OBJECT_ID('dbo.CrisisEpisodes') IS NULL
BEGIN
    CREATE TABLE dbo.CrisisEpisodes (
        EpisodeId INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_CrisisEpisodes PRIMARY KEY,
        ClientId INT NOT NULL CONSTRAINT FK_CrisisEpisodes_Clients REFERENCES dbo.Clients(ClientId),
        TenantId INT NULL,
        OpenedAt DATETIME NOT NULL CONSTRAINT DF_CrisisEpisodes_OpenedAt DEFAULT GETDATE(),
        OpenedBy INT NULL,
        PresentingTrigger NVARCHAR(500) NULL,
        AssessmentId INT NULL,
        ClinicianId INT NULL,
        Phase NVARCHAR(10) NOT NULL CONSTRAINT DF_CrisisEpisodes_Phase DEFAULT 'E1',
        EncounterCount INT NOT NULL CONSTRAINT DF_CrisisEpisodes_EncounterCount DEFAULT 0,
        ProjectedDischarge DATE NULL,
        ClosedAt DATETIME NULL,
        Disposition NVARCHAR(50) NULL,
        Notes NVARCHAR(2000) NULL,
        Owner INT NULL,
        OwnerCreateDate DATETIME NULL
    );
    CREATE INDEX IX_CrisisEpisodes_Client_Open ON dbo.CrisisEpisodes(ClientId, ClosedAt);
END
IF COL_LENGTH('dbo.ClientGoals','EpisodeId') IS NULL ALTER TABLE dbo.ClientGoals ADD EpisodeId INT NULL;
IF COL_LENGTH('dbo.ClientGoals','Phase') IS NULL ALTER TABLE dbo.ClientGoals ADD Phase NVARCHAR(10) NULL;
IF COL_LENGTH('dbo.ClientGoals','LibraryGoalId') IS NULL ALTER TABLE dbo.ClientGoals ADD LibraryGoalId INT NULL;
IF COL_LENGTH('dbo.ClientGoals','SourceRuleId') IS NULL ALTER TABLE dbo.ClientGoals ADD SourceRuleId INT NULL;
IF COL_LENGTH('dbo.ClientGoals','IsProtocol') IS NULL ALTER TABLE dbo.ClientGoals ADD IsProtocol BIT NOT NULL CONSTRAINT DF_ClientGoals_IsProtocol DEFAULT 0;
IF COL_LENGTH('dbo.Activities','EpisodeId') IS NULL ALTER TABLE dbo.Activities ADD EpisodeId INT NULL;
IF COL_LENGTH('dbo.Activities','Phase') IS NULL ALTER TABLE dbo.Activities ADD Phase NVARCHAR(10) NULL;
IF COL_LENGTH('dbo.ProgramNotes','EpisodeId') IS NULL ALTER TABLE dbo.ProgramNotes ADD EpisodeId INT NULL;
IF COL_LENGTH('dbo.ProgramNotes','EncounterNo') IS NULL ALTER TABLE dbo.ProgramNotes ADD EncounterNo INT NULL;
IF COL_LENGTH('dbo.ProgramNotes','Phase') IS NULL ALTER TABLE dbo.ProgramNotes ADD Phase NVARCHAR(10) NULL;
