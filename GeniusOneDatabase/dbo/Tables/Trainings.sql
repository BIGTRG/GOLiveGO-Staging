CREATE TABLE [dbo].[Trainings] (
    [TrainingId]     INT            IDENTITY (1, 1) NOT NULL,
    [TrainingTypeId] INT            NULL,
    [StartDate]      DATE           CONSTRAINT [DF__trainings__start__6BE40491] DEFAULT (NULL) NULL,
    [StartTime]      TIME (7)       CONSTRAINT [DF__trainings__start__6CD828CA] DEFAULT (NULL) NULL,
    [EndDate]        DATE           CONSTRAINT [DF__trainings__endDa__6DCC4D03] DEFAULT (NULL) NULL,
    [EndTime]        TIME (7)       CONSTRAINT [DF__trainings__endTi__6EC0713C] DEFAULT (NULL) NULL,
    [TrainerName]    NVARCHAR (100) CONSTRAINT [DF__trainings__train__6FB49575] DEFAULT (NULL) NULL,
    [Status]         NVARCHAR (50)  CONSTRAINT [DF__trainings__train__70A8B9AE] DEFAULT (NULL) NULL,
    [Location]       NVARCHAR (255) NULL,
    [TenantId]       INT            NULL,
    CONSTRAINT [PK_trainings_id] PRIMARY KEY CLUSTERED ([TrainingId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.trainings', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Trainings';

