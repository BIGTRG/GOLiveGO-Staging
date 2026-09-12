CREATE TABLE [dbo].[CrisisEpisodes] (
    [EpisodeId]          INT            IDENTITY (1, 1) NOT NULL,
    [ClientId]           INT            NOT NULL,
    [TenantId]           INT            NULL,
    [OpenedAt]           DATETIME       CONSTRAINT [DF_CrisisEpisodes_OpenedAt] DEFAULT (GETDATE()) NOT NULL,
    [OpenedBy]           INT            NULL,
    [PresentingTrigger]  NVARCHAR (500) NULL,
    [AssessmentId]       INT            NULL,
    [ClinicianId]        INT            NULL,
    [Phase]              NVARCHAR (10)  CONSTRAINT [DF_CrisisEpisodes_Phase] DEFAULT ('E1') NOT NULL,
    [EncounterCount]     INT            CONSTRAINT [DF_CrisisEpisodes_EncounterCount] DEFAULT ((0)) NOT NULL,
    [ProjectedDischarge] DATE           NULL,
    [ClosedAt]           DATETIME       NULL,
    [Disposition]        NVARCHAR (50)  NULL,
    [Notes]              NVARCHAR (2000) NULL,
    [Owner]              INT            NULL,
    [OwnerCreateDate]    DATETIME       NULL,
    CONSTRAINT [PK_CrisisEpisodes] PRIMARY KEY CLUSTERED ([EpisodeId] ASC),
    CONSTRAINT [FK_CrisisEpisodes_Clients] FOREIGN KEY ([ClientId]) REFERENCES [dbo].[Clients] ([ClientId])
);
GO
CREATE NONCLUSTERED INDEX [IX_CrisisEpisodes_Client_Open] ON [dbo].[CrisisEpisodes] ([ClientId] ASC, [ClosedAt] ASC);
