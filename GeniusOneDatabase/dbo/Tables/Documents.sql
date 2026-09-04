CREATE TABLE [dbo].[Documents] (
    [DocumentId]         INT            IDENTITY (3, 1) NOT NULL,
    [Title]              NVARCHAR (100) CONSTRAINT [DF__documents__title__6B24EA82] DEFAULT (NULL) NULL,
    [FileName]           NVARCHAR (50)  CONSTRAINT [DF__documents__fileN__6C190EBB] DEFAULT (NULL) NULL,
    [IsTemplate]         INT            CONSTRAINT [DF__documents__isTem__6D0D32F4] DEFAULT ((0)) NULL,
    [FileType]           NVARCHAR (50)  CONSTRAINT [DF__documents__fileT__6E01572D] DEFAULT (NULL) NULL,
    [IsFinalized]        INT            CONSTRAINT [DF__documents__isFin__6EF57B66] DEFAULT ((0)) NULL,
    [OriginalUploadDate] DATE           CONSTRAINT [DF__documents__origi__6FE99F9F] DEFAULT (NULL) NULL,
    [MajorVersion]       INT            CONSTRAINT [DF__documents__major__70DDC3D8] DEFAULT (NULL) NULL,
    [MinorVersion]       INT            CONSTRAINT [DF__documents__minor__71D1E811] DEFAULT (NULL) NULL,
    [RevisionVersion]    INT            CONSTRAINT [DF__documents__revis__72C60C4A] DEFAULT ((1)) NULL,
    [UserId]             INT            NULL,
    CONSTRAINT [PK_documents_id] PRIMARY KEY CLUSTERED ([DocumentId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.documents', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Documents';

