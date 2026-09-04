CREATE TABLE [dbo].[ProgramNoteTemplates] (
    [ProgramNoteTemplateId] INT            IDENTITY (2, 1) NOT NULL,
    [Name]                  NVARCHAR (100) CONSTRAINT [DF__progressn__templ__0F624AF8] DEFAULT (NULL) NULL,
    [Status]                BIT            NULL,
    [Field01Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__10566F31] DEFAULT (NULL) NULL,
    [Field02Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__114A936A] DEFAULT (NULL) NULL,
    [Field03Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__123EB7A3] DEFAULT (NULL) NULL,
    [Field04Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__1332DBDC] DEFAULT (NULL) NULL,
    [Field05Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__14270015] DEFAULT (NULL) NULL,
    [Field06Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__151B244E] DEFAULT (NULL) NULL,
    [Field07Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__160F4887] DEFAULT (NULL) NULL,
    [Field08Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__17036CC0] DEFAULT (NULL) NULL,
    [Field09Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__17F790F9] DEFAULT (NULL) NULL,
    [Field10Label]          NVARCHAR (255) CONSTRAINT [DF__progressn__field__18EBB532] DEFAULT (NULL) NULL,
    [Field01Status]         BIT            NULL,
    [Field02Status]         BIT            NULL,
    [Field03Status]         BIT            NULL,
    [Field04Status]         BIT            NULL,
    [Field05Status]         BIT            NULL,
    [Field06Status]         BIT            NULL,
    [Field07Status]         BIT            NULL,
    [Field08Status]         BIT            NULL,
    [Field09Status]         BIT            NULL,
    [Field10Status]         BIT            NULL,
    [Field01Type]           NVARCHAR (50)  NULL,
    [Field02Type]           NVARCHAR (50)  NULL,
    [Field03Type]           NVARCHAR (50)  NULL,
    [Field04Type]           NVARCHAR (50)  NULL,
    [Field05Type]           NVARCHAR (50)  NULL,
    [Field06Type]           NVARCHAR (50)  NULL,
    [Field07Type]           NVARCHAR (50)  NULL,
    [Field08Type]           NVARCHAR (50)  NULL,
    [Field09Type]           NVARCHAR (50)  NULL,
    [Field10Type]           NVARCHAR (50)  NULL,
    CONSTRAINT [PK_progressnotetemplates_id] PRIMARY KEY CLUSTERED ([ProgramNoteTemplateId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.progressnotetemplates', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ProgramNoteTemplates';

