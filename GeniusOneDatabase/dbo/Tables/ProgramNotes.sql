CREATE TABLE [dbo].[ProgramNotes] (
    [ProgramNoteId]         INT            IDENTITY (28, 1) NOT NULL,
    [ActivityId]            INT            CONSTRAINT [DF__ProgramNo__Times__178D7CA5] DEFAULT (NULL) NULL,
    [ProgramNoteTemplateId] INT            CONSTRAINT [DF__ProgramNo__Progr__1881A0DE] DEFAULT (NULL) NULL,
    [Field00]               NVARCHAR (MAX) CONSTRAINT [DF_ProgramNotes_Field011] DEFAULT (NULL) NULL,
    [Field01]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1975C517] DEFAULT (NULL) NULL,
    [Field02]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1A69E950] DEFAULT (NULL) NULL,
    [Field03]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1B5E0D89] DEFAULT (NULL) NULL,
    [Field04]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1C5231C2] DEFAULT (NULL) NULL,
    [Field05]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1D4655FB] DEFAULT (NULL) NULL,
    [Field06]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1E3A7A34] DEFAULT (NULL) NULL,
    [Field07]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__1F2E9E6D] DEFAULT (NULL) NULL,
    [Field08]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__2022C2A6] DEFAULT (NULL) NULL,
    [Field09]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__2116E6DF] DEFAULT (NULL) NULL,
    [Field10]               NVARCHAR (MAX) CONSTRAINT [DF__ProgramNo__field__220B0B18] DEFAULT (NULL) NULL,
    [Status]                NVARCHAR (50)  CONSTRAINT [DF__ProgramNo__Statu__22FF2F51] DEFAULT (NULL) NULL,
    [OriginalSubmittalDate] DATETIME2 (7)  NULL,
    [DateSigned]            DATETIME2 (7)  NULL,
    [eSignaturePlainText]   NVARCHAR (255) NULL,
    [SignatureImage]        NVARCHAR (MAX) NULL,
    [SignatureGUID]         NVARCHAR (100) NULL,
    [FileName]              NVARCHAR (50)  NULL,
    [ApprovedBy]            NVARCHAR (200) NULL,
    [DateApproved]          DATETIME2 (7)  NULL,
    CONSTRAINT [PK_progressnotes_id] PRIMARY KEY CLUSTERED ([ProgramNoteId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.progressnotes', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ProgramNotes';

