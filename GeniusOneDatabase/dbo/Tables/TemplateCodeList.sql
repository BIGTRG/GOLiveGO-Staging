CREATE TABLE [dbo].[TemplateCodeList] (
    [TemplateCodeListId] INT            IDENTITY (1, 1) NOT NULL,
    [TemplateId]         INT            NOT NULL,
    [QuestionId]         INT            NOT NULL,
    [ValueText]          NVARCHAR (100) NOT NULL,
    CONSTRAINT [PK_TemplateCodeList] PRIMARY KEY CLUSTERED ([TemplateCodeListId] ASC)
);

