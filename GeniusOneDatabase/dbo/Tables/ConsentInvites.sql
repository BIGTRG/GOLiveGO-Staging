CREATE TABLE [dbo].[ConsentInvites] (
    [InviteId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [EpisodeId] INT NOT NULL,
    [Token] NVARCHAR(64) NOT NULL,
    [SentTo] NVARCHAR(200) NULL,
    [SentAt] DATETIME NULL,
    [ExpiresAt] DATETIME NOT NULL,
    [UsedAt] DATETIME NULL,
    [Attempts] INT NOT NULL DEFAULT 0,
    [LockedAt] DATETIME NULL,
    [RevokedAt] DATETIME NULL,
    [CreatedBy] INT NULL,
    [TenantId] INT NULL
);
