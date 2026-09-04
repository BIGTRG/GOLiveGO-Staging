CREATE TABLE [dbo].[ProgramNoteType] (
    [ProgramNoteTypeId]    INT            IDENTITY (1, 1) NOT NULL,
    [IsEnabled]            BIT            NULL,
    [ProgramNoteTypeName]  NVARCHAR (100) NOT NULL,
    [ProgramNoteTypeOrder] INT            CONSTRAINT [DF_ProgramNoteType_ProgramNoteTypeOrder] DEFAULT ((99)) NULL,
    [TenantId]             INT            NULL,
    CONSTRAINT [PK_ProgramNoteType] PRIMARY KEY CLUSTERED ([ProgramNoteTypeId] ASC)
);

