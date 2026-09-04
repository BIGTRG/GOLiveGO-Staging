CREATE TABLE [dbo].[ClientSite] (
    [ClientSiteId] INT IDENTITY (2, 1) NOT NULL,
    [SiteTypeId]   INT CONSTRAINT [DF__client_si__siteI__5165187F] DEFAULT (NULL) NULL,
    [ClientId]     INT CONSTRAINT [DF__client_si__clien__534D60F1] DEFAULT (NULL) NULL,
    [TenantId]     INT CONSTRAINT [DF__client_si__tenan__52593CB8] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_client_sites_id] PRIMARY KEY CLUSTERED ([ClientSiteId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.client_sites', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ClientSite';

