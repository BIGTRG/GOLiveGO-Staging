CREATE TABLE [dbo].[InterventionLibrary] (
    [InterventionId]   INT            IDENTITY (1, 1) NOT NULL,
    [InterventionText] NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_InterventionLibrary] PRIMARY KEY CLUSTERED ([InterventionId] ASC)
);

