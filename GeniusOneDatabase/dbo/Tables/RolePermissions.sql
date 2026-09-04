CREATE TABLE [dbo].[RolePermissions] (
    [RolePermissionId] BIGINT         IDENTITY (1, 1) NOT NULL,
    [RoleId]           INT            NOT NULL,
    [PermissionKey]    NVARCHAR (100) NOT NULL,
    CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED ([RolePermissionId] ASC),
    CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Roles] ([RoleId])
);

