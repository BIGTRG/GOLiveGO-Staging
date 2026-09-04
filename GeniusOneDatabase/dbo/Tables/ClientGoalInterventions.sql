CREATE TABLE [dbo].[ClientGoalInterventions] (
    [ClientGoalInterventionId] INT            IDENTITY (1, 1) NOT NULL,
    [ClientGoalId]             INT            NULL,
    [InterNumber]              INT            NULL,
    [InterDesc]                NVARCHAR (MAX) NULL,
    [IsActiveMonday]           BIT            NULL,
    [IsActiveTuesday]          BIT            NULL,
    [IsActiveWednesday]        BIT            NULL,
    [IsActiveThursday]         BIT            NULL,
    [IsActiveFriday]           BIT            NULL,
    [IsActiveSaturday]         BIT            NULL,
    [IsActiveSunday]           BIT            NULL,
    [TenantId]                 INT            NULL,
    CONSTRAINT [PK_ClientGoalInterventions] PRIMARY KEY CLUSTERED ([ClientGoalInterventionId] ASC),
    CONSTRAINT [FK_ClientGoalInterventions_ClientGoals] FOREIGN KEY ([ClientGoalId]) REFERENCES [dbo].[ClientGoals] ([ClientGoalId])
);

