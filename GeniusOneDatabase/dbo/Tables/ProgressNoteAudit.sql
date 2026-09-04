CREATE TABLE [dbo].[ProgressNoteAudit] (
    [ProgressNoteAuditId] BIGINT         IDENTITY (1, 1) NOT NULL,
    [TimesheetId]         INT            NOT NULL,
    [UserId]              INT            NOT NULL,
    [AuditDate]           DATETIME2 (7)  NOT NULL,
    [AuditType]           NVARCHAR (50)  NOT NULL,
    [AuditMessage]        NVARCHAR (200) NOT NULL,
    CONSTRAINT [PK_ProgressNoteAudit] PRIMARY KEY CLUSTERED ([ProgressNoteAuditId] ASC)
);

