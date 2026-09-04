CREATE TABLE [dbo].[ClientDocuments] (
    [DocumentId]    INT            IDENTITY (3, 1) NOT NULL,
    [ClientId]      INT            NOT NULL,
    [Title]         NVARCHAR (100) CONSTRAINT [DF__clientdocuments__title__6B24EA82] DEFAULT (NULL) NOT NULL,
    [FileName]      NVARCHAR (50)  CONSTRAINT [DF__clientdocuments__fileN__6C190EBB] DEFAULT (NULL) NOT NULL,
    [IsFinalized]   INT            CONSTRAINT [DF__clientdocuments__isFin__6EF57B66] DEFAULT ((0)) NOT NULL,
    [FinalizedDate] DATE           CONSTRAINT [DF__clientdocuments__origi__6FE99F9F] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_ClientDocuments_id] PRIMARY KEY CLUSTERED ([DocumentId] ASC)
);

