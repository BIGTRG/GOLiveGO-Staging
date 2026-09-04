CREATE TABLE [dbo].[WorkerSites] (
    [UserSiteId] INT IDENTITY (7, 1) NOT NULL,
    [UserId]     INT DEFAULT (NULL) NULL,
    [SiteTypeId] INT DEFAULT (NULL) NULL,
    [TenantId]   INT DEFAULT (NULL) NULL,
    CONSTRAINT [PK_staff_sites_id] PRIMARY KEY CLUSTERED ([UserSiteId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_sites', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerSites';

