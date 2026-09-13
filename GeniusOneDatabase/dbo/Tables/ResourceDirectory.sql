CREATE TABLE [dbo].[ResourceDirectory] (
    [ResourceId]      INT             IDENTITY (1, 1) NOT NULL,
    [TenantId]        INT             NULL,
    [ResourceType]    NVARCHAR (30)   NOT NULL,
    [Name]            NVARCHAR (200)  NOT NULL,
    [Phone]           NVARCHAR (40)   NULL,
    [Website]         NVARCHAR (200)  NULL,
    [Address]         NVARCHAR (300)  NULL,
    [City]            NVARCHAR (100)  NULL,
    [County]          NVARCHAR (100)  NULL,
    [Hours]           NVARCHAR (100)  NULL,
    [Notes]           NVARCHAR (1000) NULL,
    [IsActive]        BIT             CONSTRAINT [DF_ResourceDirectory_IsActive] DEFAULT ((1)) NOT NULL,
    [Owner]           INT             NULL,
    [OwnerCreateDate] DATETIME        NULL,
    CONSTRAINT [PK_ResourceDirectory] PRIMARY KEY CLUSTERED ([ResourceId] ASC)
);
GO
CREATE NONCLUSTERED INDEX [IX_ResourceDirectory_Type] ON [dbo].[ResourceDirectory]([ResourceType] ASC, [County] ASC);
