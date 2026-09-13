CREATE TABLE [dbo].[OutcomeQuestions] (
    [QuestionId]        INT             IDENTITY (1, 1) NOT NULL,
    [LibraryOutcomeId]  INT             NOT NULL,
    [SortOrder]         INT             CONSTRAINT [DF_OutcomeQuestions_SortOrder] DEFAULT ((1)) NOT NULL,
    [Prompt]            NVARCHAR (500)  NOT NULL,
    [AnswerType]        NVARCHAR (20)   CONSTRAINT [DF_OutcomeQuestions_AnswerType] DEFAULT (N'YesNo') NOT NULL,
    [Options]           NVARCHAR (1000) NULL,
    [SentenceTemplate]  NVARCHAR (1000) NULL,
    [ResourceType]      NVARCHAR (30)   NULL,
    [SendsToCrisisPlan] BIT             CONSTRAINT [DF_OutcomeQuestions_SendsToCrisisPlan] DEFAULT ((0)) NOT NULL,
    [IsRequired]        BIT             CONSTRAINT [DF_OutcomeQuestions_IsRequired] DEFAULT ((0)) NOT NULL,
    [ShowWhen]          NVARCHAR (100)  NULL,
    [TenantId]          INT             NULL,
    CONSTRAINT [PK_OutcomeQuestions] PRIMARY KEY CLUSTERED ([QuestionId] ASC),
    CONSTRAINT [FK_OutcomeQuestions_LibraryGoalOutcomes] FOREIGN KEY ([LibraryOutcomeId]) REFERENCES [dbo].[LibraryGoalOutcomes] ([LibraryOutcomeId])
);
GO
CREATE NONCLUSTERED INDEX [IX_OutcomeQuestions_Outcome] ON [dbo].[OutcomeQuestions]([LibraryOutcomeId] ASC);
