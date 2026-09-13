-- Encounter engine Phase 2 (mirror of FluentMigrator 20260913_0100). Safe to re-run.
IF COL_LENGTH('dbo.ClientGoalsLibrary','Code') IS NULL ALTER TABLE dbo.ClientGoalsLibrary ADD
    Code NVARCHAR(20) NULL, Phase NVARCHAR(10) NULL, NeedKey NVARCHAR(40) NULL, Domain NVARCHAR(100) NULL,
    TriggerKey NVARCHAR(500) NULL, EffectivenessMeasure NVARCHAR(500) NULL, Timeframe NVARCHAR(100) NULL,
    LeadRole NVARCHAR(50) NULL, ResourceType NVARCHAR(30) NULL, LinkedNextPhaseGoalId INT NULL,
    IsProtocol BIT NOT NULL CONSTRAINT DF_ClientGoalsLibrary_IsProtocol DEFAULT(0),
    Origin NVARCHAR(20) NOT NULL CONSTRAINT DF_ClientGoalsLibrary_Origin DEFAULT(N'Seed'),
    IsActive BIT NOT NULL CONSTRAINT DF_ClientGoalsLibrary_IsActive DEFAULT(1);
IF COL_LENGTH('dbo.ClientGoals','NeedKey') IS NULL ALTER TABLE dbo.ClientGoals ADD NeedKey NVARCHAR(40) NULL, CarriedFromGoalId INT NULL, EffectivenessMeasure NVARCHAR(500) NULL;
GO
IF OBJECT_ID('dbo.CrisisNeeds') IS NULL
BEGIN
CREATE TABLE [dbo].[CrisisNeeds] (
    [NeedId]        INT            IDENTITY (1, 1) NOT NULL,
    [NeedKey]       NVARCHAR (40)  NOT NULL,
    [Label]         NVARCHAR (120) NOT NULL,
    [Category]      NVARCHAR (40)  NOT NULL,
    [CategoryLabel] NVARCHAR (60)  NULL,
    [SortOrder]     INT            CONSTRAINT [DF_CrisisNeeds_SortOrder] DEFAULT ((0)) NOT NULL,
    [IsActive]      BIT            CONSTRAINT [DF_CrisisNeeds_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CrisisNeeds] PRIMARY KEY CLUSTERED ([NeedId] ASC)
);
CREATE UNIQUE NONCLUSTERED INDEX [UX_CrisisNeeds_NeedKey] ON [dbo].[CrisisNeeds]([NeedKey] ASC);
END
GO
IF OBJECT_ID('dbo.LibraryGoalOutcomes') IS NULL
BEGIN
CREATE TABLE [dbo].[LibraryGoalOutcomes] (
    [LibraryOutcomeId]      INT             IDENTITY (1, 1) NOT NULL,
    [LibraryGoalId]         INT             NOT NULL,
    [SortOrder]             INT             CONSTRAINT [DF_LibraryGoalOutcomes_SortOrder] DEFAULT ((1)) NOT NULL,
    [OutcomeText]           NVARCHAR (1000) NOT NULL,
    [EffectivenessTemplate] NVARCHAR (2000) NULL,
    [StatusRule]            NVARCHAR (20)   CONSTRAINT [DF_LibraryGoalOutcomes_StatusRule] DEFAULT (N'Required') NOT NULL,
    [SendsToCrisisPlan]     BIT             CONSTRAINT [DF_LibraryGoalOutcomes_SendsToCrisisPlan] DEFAULT ((0)) NOT NULL,
    [TenantId]              INT             NULL,
    CONSTRAINT [PK_LibraryGoalOutcomes] PRIMARY KEY CLUSTERED ([LibraryOutcomeId] ASC),
    CONSTRAINT [FK_LibraryGoalOutcomes_ClientGoalsLibrary] FOREIGN KEY ([LibraryGoalId]) REFERENCES [dbo].[ClientGoalsLibrary] ([ClientGoalId])
);
CREATE NONCLUSTERED INDEX [IX_LibraryGoalOutcomes_Goal] ON [dbo].[LibraryGoalOutcomes]([LibraryGoalId] ASC);
END
GO
IF OBJECT_ID('dbo.OutcomeQuestions') IS NULL
BEGIN
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
CREATE NONCLUSTERED INDEX [IX_OutcomeQuestions_Outcome] ON [dbo].[OutcomeQuestions]([LibraryOutcomeId] ASC);
END
GO
IF OBJECT_ID('dbo.ClientGoalOutcomes') IS NULL
BEGIN
CREATE TABLE [dbo].[ClientGoalOutcomes] (
    [OutcomeId]             INT             IDENTITY (1, 1) NOT NULL,
    [ClientGoalId]          INT             NOT NULL,
    [LibraryOutcomeId]      INT             NULL,
    [SortOrder]             INT             CONSTRAINT [DF_ClientGoalOutcomes_SortOrder] DEFAULT ((1)) NOT NULL,
    [OutcomeText]           NVARCHAR (1000) NOT NULL,
    [EffectivenessTemplate] NVARCHAR (2000) NULL,
    [StatusRule]            NVARCHAR (20)   CONSTRAINT [DF_ClientGoalOutcomes_StatusRule] DEFAULT (N'Required') NOT NULL,
    [SendsToCrisisPlan]     BIT             CONSTRAINT [DF_ClientGoalOutcomes_SendsToCrisisPlan] DEFAULT ((0)) NOT NULL,
    [IsMet]                 BIT             NULL,
    [CheckedInNoteId]       INT             NULL,
    [CheckedAt]             DATETIME        NULL,
    [Summary]               NVARCHAR (2000) NULL,
    [TenantId]              INT             NULL,
    CONSTRAINT [PK_ClientGoalOutcomes] PRIMARY KEY CLUSTERED ([OutcomeId] ASC),
    CONSTRAINT [FK_ClientGoalOutcomes_ClientGoals] FOREIGN KEY ([ClientGoalId]) REFERENCES [dbo].[ClientGoals] ([ClientGoalId])
);
CREATE NONCLUSTERED INDEX [IX_ClientGoalOutcomes_Goal] ON [dbo].[ClientGoalOutcomes]([ClientGoalId] ASC);
END
GO
IF OBJECT_ID('dbo.ResourceDirectory') IS NULL
BEGIN
CREATE TABLE [dbo].[ResourceDirectory] (
    [ResourceId]      INT             IDENTITY (1, 1) NOT NULL,
    [TenantId]        INT             NULL,
    [ResourceType]    NVARCHAR (30)   NOT NULL,
    [Name]            NVARCHAR (200)  NOT NULL,
    [Phone]           NVARCHAR (40)   NULL,
    [Website]         NVARCHAR (200)  NULL,
    [Address]         NVARCHAR (300)  NULL,
    [City]            NVARCHAR (100)  NULL,
    [County]          NVARCHAR (100)  NULL,
    [Hours]           NVARCHAR (100)  NULL,
    [Notes]           NVARCHAR (1000) NULL,
    [IsActive]        BIT             CONSTRAINT [DF_ResourceDirectory_IsActive] DEFAULT ((1)) NOT NULL,
    [Owner]           INT             NULL,
    [OwnerCreateDate] DATETIME        NULL,
    CONSTRAINT [PK_ResourceDirectory] PRIMARY KEY CLUSTERED ([ResourceId] ASC)
);
CREATE NONCLUSTERED INDEX [IX_ResourceDirectory_Type] ON [dbo].[ResourceDirectory]([ResourceType] ASC, [County] ASC);
END
GO
IF OBJECT_ID('dbo.ClientCrisisPlans') IS NULL
BEGIN
CREATE TABLE [dbo].[ClientCrisisPlans] (
    [PlanId]          INT            IDENTITY (1, 1) NOT NULL,
    [ClientId]        INT            NOT NULL,
    [EpisodeId]       INT            NULL,
    [Status]          NVARCHAR (20)  CONSTRAINT [DF_ClientCrisisPlans_Status] DEFAULT (N'Draft') NOT NULL,
    [CurrentRevision] INT            CONSTRAINT [DF_ClientCrisisPlans_CurrentRevision] DEFAULT ((1)) NOT NULL,
    [InitiatedAt]     DATETIME       CONSTRAINT [DF_ClientCrisisPlans_InitiatedAt] DEFAULT (getdate()) NOT NULL,
    [SignedAt]        DATETIME       NULL,
    [SignedBy]        NVARCHAR (200) NULL,
    [FinalizedAt]     DATETIME       NULL,
    [TenantId]        INT            NULL,
    [Owner]           INT            NULL,
    [OwnerCreateDate] DATETIME       NULL,
    CONSTRAINT [PK_ClientCrisisPlans] PRIMARY KEY CLUSTERED ([PlanId] ASC),
    CONSTRAINT [FK_ClientCrisisPlans_Clients] FOREIGN KEY ([ClientId]) REFERENCES [dbo].[Clients] ([ClientId])
);
CREATE NONCLUSTERED INDEX [IX_ClientCrisisPlans_Client] ON [dbo].[ClientCrisisPlans]([ClientId] ASC);
END
GO
IF OBJECT_ID('dbo.ClientCrisisPlanEntries') IS NULL
BEGIN
CREATE TABLE [dbo].[ClientCrisisPlanEntries] (
    [EntryId]          INT             IDENTITY (1, 1) NOT NULL,
    [PlanId]           INT             NOT NULL,
    [Revision]         INT             CONSTRAINT [DF_ClientCrisisPlanEntries_Revision] DEFAULT ((1)) NOT NULL,
    [EntryType]        NVARCHAR (30)   NOT NULL,
    [EntryText]        NVARCHAR (2000) NOT NULL,
    [SourceGoalId]     INT             NULL,
    [SourceQuestionId] INT             NULL,
    [SourceNoteId]     INT             NULL,
    [CreatedAt]        DATETIME        CONSTRAINT [DF_ClientCrisisPlanEntries_CreatedAt] DEFAULT (getdate()) NOT NULL,
    [CreatedBy]        INT             NULL,
    [IsActive]         BIT             CONSTRAINT [DF_ClientCrisisPlanEntries_IsActive] DEFAULT ((1)) NOT NULL,
    [TenantId]         INT             NULL,
    CONSTRAINT [PK_ClientCrisisPlanEntries] PRIMARY KEY CLUSTERED ([EntryId] ASC),
    CONSTRAINT [FK_ClientCrisisPlanEntries_Plans] FOREIGN KEY ([PlanId]) REFERENCES [dbo].[ClientCrisisPlans] ([PlanId])
);
CREATE NONCLUSTERED INDEX [IX_ClientCrisisPlanEntries_Plan] ON [dbo].[ClientCrisisPlanEntries]([PlanId] ASC);
END
GO