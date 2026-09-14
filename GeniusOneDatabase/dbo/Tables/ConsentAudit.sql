CREATE TABLE [dbo].[ConsentAudit] (
    [AuditId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [EpisodeId] INT NOT NULL,
    [RequestId] INT NULL,
    [Event] NVARCHAR(40) NOT NULL,
    [Detail] NVARCHAR(1000) NULL,
    [At] DATETIME NOT NULL,
    [UserId] INT NULL,
    [IpAddress] NVARCHAR(64) NULL
);
