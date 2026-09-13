CREATE TABLE [dbo].[ClientCrisisPlans] (
    [PlanId]          INT            IDENTITY (1, 1) NOT NULL,
    [ClientId]        INT            NOT NULL,
    [EpisodeId]       INT            NULL,
    [Status]          NVARCHAR (20)  CONSTRAINT [DF_ClientCrisisPlans_Status] DEFAULT (N'Draft') NOT NULL,
    [CurrentRevision] INT            CONSTRAINT [DF_ClientCrisisPlans_CurrentRevision] DEFAULT ((1)) NOT NULL,
    [InitiatedAt]     DATETIME       CONSTRAINT [DF_ClientCrisisPlans_InitiatedAt] DEFAULT (getdate()) NOT NULL,
    [SignedAt]        DATETIME       NULL,
    [SignedBy]        NVARCHAR (200) NULL,
    [FinalizedAt]     DATETIME       NULL,
    [TenantId]        INT            NULL,
    [Owner]           INT            NULL,
    [OwnerCreateDate] DATETIME       NULL,
    CONSTRAINT [PK_ClientCrisisPlans] PRIMARY KEY CLUSTERED ([PlanId] ASC),
    CONSTRAINT [FK_ClientCrisisPlans_Clients] FOREIGN KEY ([ClientId]) REFERENCES [dbo].[Clients] ([ClientId])
);
GO
CREATE NONCLUSTERED INDEX [IX_ClientCrisisPlans_Client] ON [dbo].[ClientCrisisPlans]([ClientId] ASC);
