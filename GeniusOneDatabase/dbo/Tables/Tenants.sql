CREATE TABLE [dbo].[Tenants] (
    [TenantId]           INT            IDENTITY (2, 1) NOT NULL,
    [Name]               NVARCHAR (255) NULL,
    [Address1]           NVARCHAR (50)  NULL,
    [Address2]           NVARCHAR (50)  CONSTRAINT [DF__tenants__tenantA__58D1301D] DEFAULT (NULL) NULL,
    [City]               NVARCHAR (50)  NULL,
    [State]              NVARCHAR (2)   NULL,
    [Zipcode]            NVARCHAR (10)  NULL,
    [PrimaryPhone]       NVARCHAR (15)  NULL,
    [SecondaryPhone]     NVARCHAR (15)  CONSTRAINT [DF__tenants__tenantS__59C55456] DEFAULT (NULL) NULL,
    [ContactName]        NVARCHAR (100) NULL,
    [EmployerIdNumber]   NVARCHAR (25)  CONSTRAINT [DF__tenants__tenantE__5AB9788F] DEFAULT (NULL) NULL,
    [Notes]              NVARCHAR (255) CONSTRAINT [DF__tenants__tenantN__5BAD9CC8] DEFAULT (NULL) NULL,
    [TotalBranchOffices] TINYINT        NULL,
    [Npi]                NVARCHAR (100) NULL,
    [TaxId]              NVARCHAR (100) NULL,
    [TaxIdType]          NVARCHAR (25)  NULL,
    CONSTRAINT [PK_tenants_id] PRIMARY KEY CLUSTERED ([TenantId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.tenants', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Tenants';

