CREATE TABLE [dbo].[Mail] (
    [MailId]            BIGINT           IDENTITY (1, 1) NOT NULL,
    [UID]               UNIQUEIDENTIFIER NOT NULL,
    [Subject]           NVARCHAR (400)   NOT NULL,
    [Body]              NVARCHAR (MAX)   NULL,
    [MailFrom]          NVARCHAR (100)   NULL,
    [MailTo]            NVARCHAR (2000)  NULL,
    [ReplyTo]           NVARCHAR (100)   NULL,
    [CC]                NVARCHAR (2000)  NULL,
    [BCC]               NVARCHAR (2000)  NULL,
    [Priority]          INT              CONSTRAINT [DF_Mail_Priority] DEFAULT ((2)) NOT NULL,
    [Status]            INT              CONSTRAINT [DF_Mail_Status] DEFAULT ((0)) NOT NULL,
    [RetryCount]        INT              CONSTRAINT [DF_Mail_RetryCount] DEFAULT ((0)) NOT NULL,
    [ErrorMessage]      NVARCHAR (MAX)   NULL,
    [LockExpiration]    DATETIME         NOT NULL,
    [SentDate]          DATETIME         NULL,
    [InsertUserId]      INT              NULL,
    [InsertDate]        DATETIME         NOT NULL,
    [SerializedMessage] VARBINARY (MAX)  NULL,
    CONSTRAINT [PK_Mail] PRIMARY KEY CLUSTERED ([MailId] ASC)
);

