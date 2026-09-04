CREATE TABLE [dbo].[UserPermissions] (
    [UserPermissionId] BIGINT         IDENTITY (1, 1) NOT NULL,
    [UserId]           INT            NOT NULL,
    [PermissionKey]    NVARCHAR (100) NOT NULL,
    [Granted]          BIT            CONSTRAINT [DF_UserPermissions_Granted] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED ([UserPermissionId] ASC),
    CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

