CREATE TABLE [dbo].[ConsentTemplates] (
    [TemplateId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [Code] NVARCHAR(20) NOT NULL,
    [Title] NVARCHAR(200) NOT NULL,
    [Revision] NVARCHAR(20) NULL,
    [Citation] NVARCHAR(500) NULL,
    [Summary] NVARCHAR(1000) NULL,
    [BodyHtml] NVARCHAR(MAX) NULL,
    [FieldSchema] NVARCHAR(MAX) NULL,
    [SignerRoles] NVARCHAR(40) NOT NULL DEFAULT 'Client',
    [RequiredAtIntake] BIT NOT NULL DEFAULT 1,
    [SortOrder] INT NOT NULL DEFAULT 0,
    [IsActive] BIT NOT NULL DEFAULT 1,
    [TenantId] INT NULL
);
