CREATE TABLE [dbo].[Events] (
    [EventId]     INT            IDENTITY (1, 1) NOT NULL,
    [Subject]     NVARCHAR (100) NOT NULL,
    [Description] NVARCHAR (300) NULL,
    [Start]       DATETIME       NOT NULL,
    [End]         DATETIME       NULL,
    [ThemeColor]  NVARCHAR (10)  NULL,
    [IsFullDay]   BIT            NOT NULL,
    [UserId]      INT            CONSTRAINT [DF_Events_UserId] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Events] PRIMARY KEY CLUSTERED ([EventId] ASC)
);

