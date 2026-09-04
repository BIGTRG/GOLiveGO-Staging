CREATE TABLE [dbo].[SitesTypes] (
    [SiteTypeId]   INT            IDENTITY (4, 1) NOT NULL,
    [Name]         NVARCHAR (100) CONSTRAINT [DF__sites__siteName__1AD3FDA4] DEFAULT (NULL) NULL,
    [Description]  NVARCHAR (500) CONSTRAINT [DF__sites__siteDescr__1BC821DD] DEFAULT (NULL) NULL,
    [NPI]          NVARCHAR (50)  NULL,
    [TaxId]        NVARCHAR (50)  NULL,
    [Taxonomy]     NVARCHAR (50)  NULL,
    [Address1]     NVARCHAR (50)  CONSTRAINT [DF_SitesTypes_Address1] DEFAULT (NULL) NULL,
    [Address2]     NVARCHAR (50)  CONSTRAINT [DF_SitesTypes_Address2] DEFAULT (NULL) NULL,
    [City]         NVARCHAR (50)  CONSTRAINT [DF_SitesTypes_City] DEFAULT (NULL) NULL,
    [State]        NVARCHAR (2)   CONSTRAINT [DF_SitesTypes_State] DEFAULT (NULL) NULL,
    [Zipcode]      NVARCHAR (10)  CONSTRAINT [DF_SitesTypes_Zipcode] DEFAULT (NULL) NULL,
    [PrimaryPhone] NVARCHAR (15)  CONSTRAINT [DF_SitesTypes_PrimaryPhone] DEFAULT (NULL) NULL,
    [Status]       BIT            CONSTRAINT [DF__sites__programSt__1CBC4616] DEFAULT (NULL) NULL,
    [TenantId]     INT            CONSTRAINT [DF__sites__tenantId__19DFD96B] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_sites_id] PRIMARY KEY CLUSTERED ([SiteTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.sites', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'SitesTypes';

