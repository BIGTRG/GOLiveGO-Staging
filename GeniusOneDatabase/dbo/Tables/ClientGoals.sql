CREATE TABLE [dbo].[ClientGoals] (
    [ClientGoalId]      INT             IDENTITY (1, 1) NOT NULL,
    [ClientId]          INT             NULL,
    [GoalType]          NVARCHAR (100)  NULL,
    [Goal]              NVARCHAR (200)  NULL,
    [Description]       NVARCHAR (2000) NULL,
    [CompletionDate]    DATE            NULL,
    [Status]            NVARCHAR (25)   NULL,
    [IsActiveMonday]    BIT             NULL,
    [IsActiveTuesday]   BIT             NULL,
    [IsActiveWednesday] BIT             NULL,
    [IsActiveThursday]  BIT             NULL,
    [IsActiveFriday]    BIT             NULL,
    [IsActiveSaturday]  BIT             NULL,
    [IsActiveSunday]    BIT             NULL,
    [TenantId]          INT             NULL,
    [Owner]             INT             NULL,
    [OwnerCreateDate]   DATETIME        NULL,
    [EpisodeId]        INT            NULL,
    [Phase]            NVARCHAR (10)  NULL,
    [LibraryGoalId]    INT            NULL,
    [SourceRuleId]     INT            NULL,
    [IsProtocol]       BIT            CONSTRAINT [DF_ClientGoals_IsProtocol] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_client_goals_id] PRIMARY KEY CLUSTERED ([ClientGoalId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.client_goals', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ClientGoals';

