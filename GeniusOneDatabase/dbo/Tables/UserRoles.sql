CREATE TABLE [dbo].[UserRoles] (
    [UserRoleId] BIGINT IDENTITY (1, 1) NOT NULL,
    [UserId]     INT    NOT NULL,
    [RoleId]     INT    NOT NULL,
    CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED ([UserRoleId] ASC),
    CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Roles] ([RoleId]),
    CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

