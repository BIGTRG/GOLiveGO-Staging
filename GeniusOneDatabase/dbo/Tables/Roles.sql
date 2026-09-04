CREATE TABLE [dbo].[Roles] (
    [RoleId]   INT            IDENTITY (1, 1) NOT NULL,
    [RoleName] NVARCHAR (100) NOT NULL,
    [RoleKey]  NVARCHAR (100) NULL,
    CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED ([RoleId] ASC)
);

