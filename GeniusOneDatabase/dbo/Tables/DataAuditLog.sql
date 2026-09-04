CREATE TABLE [dbo].[DataAuditLog] (
    [LogId]     INT            IDENTITY (1, 1) NOT NULL,
    [LogType]   SMALLINT       NOT NULL,
    [LogDate]   DATETIME       NOT NULL,
    [UserId]    INT            NULL,
    [TableName] NVARCHAR (50)  NOT NULL,
    [RecordId]  NVARCHAR (50)  NOT NULL,
    [FieldName] NVARCHAR (50)  NULL,
    [OldValue]  NVARCHAR (MAX) NULL,
    [NewValue]  NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_DataAuditLog] PRIMARY KEY CLUSTERED ([LogId] ASC),
    CONSTRAINT [FK_AuditLog_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

