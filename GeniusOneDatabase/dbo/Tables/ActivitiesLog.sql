CREATE TABLE [dbo].[ActivitiesLog] (
    [ActivitiesLogId] INT            IDENTITY (1, 1) NOT NULL,
    [ActivityId]      INT            NULL,
    [Date]            DATETIME2 (7)  NULL,
    [RejectionReason] NVARCHAR (50)  NULL,
    [Notes]           NVARCHAR (MAX) NULL,
    [UserId]          INT            NULL,
    CONSTRAINT [PK_ActivityRejections] PRIMARY KEY CLUSTERED ([ActivitiesLogId] ASC),
    CONSTRAINT [FK_ActivityRejections_Activities] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[Activities] ([ActivityId]),
    CONSTRAINT [FK_ActivityRejections_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

