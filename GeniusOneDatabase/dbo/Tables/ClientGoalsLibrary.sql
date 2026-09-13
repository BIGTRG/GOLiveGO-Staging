CREATE TABLE [dbo].[ClientGoalsLibrary] (
    [ClientGoalId] INT             IDENTITY (1, 1) NOT NULL,
    [GoalType]     NVARCHAR (100)  NULL,
    [Description]  NVARCHAR (2000) NULL,
    [TenantId]     INT             NULL,
    [Code]                  NVARCHAR (20)   NULL,
    [Phase]                 NVARCHAR (10)   NULL,
    [NeedKey]               NVARCHAR (40)   NULL,
    [Domain]                NVARCHAR (100)  NULL,
    [TriggerKey]            NVARCHAR (500)  NULL,
    [EffectivenessMeasure]  NVARCHAR (500)  NULL,
    [Timeframe]             NVARCHAR (100)  NULL,
    [LeadRole]              NVARCHAR (50)   NULL,
    [ResourceType]          NVARCHAR (30)   NULL,
    [LinkedNextPhaseGoalId] INT             NULL,
    [IsProtocol]            BIT             CONSTRAINT [DF_ClientGoalsLibrary_IsProtocol] DEFAULT ((0)) NOT NULL,
    [Origin]                NVARCHAR (20)   CONSTRAINT [DF_ClientGoalsLibrary_Origin] DEFAULT (N'Seed') NOT NULL,
    [IsActive]              BIT             CONSTRAINT [DF_ClientGoalsLibrary_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_ClientGoalsLibrary] PRIMARY KEY CLUSTERED ([ClientGoalId] ASC)
);

