CREATE TABLE [dbo].[ProgramTypes] (
    [ProgramTypeId]         INT            IDENTITY (12, 1) NOT NULL,
    [Name]                  NVARCHAR (100) CONSTRAINT [DF__programs__progra__7F2BE32F] DEFAULT (NULL) NULL,
    [Description]           NVARCHAR (255) CONSTRAINT [DF__programs__progra__00200768] DEFAULT (NULL) NULL,
    [Status]                BIT            CONSTRAINT [DF__programs__progra__01142BA1] DEFAULT ((0)) NULL,
    [ProgramNoteTemplateId] INT            CONSTRAINT [DF__programs__templa__02084FDA] DEFAULT (NULL) NULL,
    [TenantId]              INT            CONSTRAINT [DF__programs__tenant__7E37BEF6] DEFAULT (NULL) NULL,
    [DefaultApproverId]     INT            NULL,
    [BackupApproverId]      INT            NULL,
    [EscalationMetric]      INT            NULL,
    CONSTRAINT [PK_programs_id] PRIMARY KEY CLUSTERED ([ProgramTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.programs', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ProgramTypes';

