CREATE TABLE [dbo].[FormTypes] (
    [FormTypeId]  INT            IDENTITY (3, 1) NOT NULL,
    [Name]        NVARCHAR (100) CONSTRAINT [DF__FormTypes__Name__08B54D69] DEFAULT (NULL) NULL,
    [Description] NVARCHAR (255) CONSTRAINT [DF__FormTypes__Descr__09A971A2] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_worker_form_types_id] PRIMARY KEY CLUSTERED ([FormTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.worker_form_types', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'FormTypes';

