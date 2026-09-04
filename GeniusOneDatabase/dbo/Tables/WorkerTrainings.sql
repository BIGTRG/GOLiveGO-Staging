CREATE TABLE [dbo].[WorkerTrainings] (
    [UserTrainingId] INT           IDENTITY (1, 1) NOT NULL,
    [UserId]         INT           DEFAULT (NULL) NULL,
    [TrainingId]     INT           DEFAULT (NULL) NULL,
    [Status]         NVARCHAR (50) DEFAULT (NULL) NULL,
    [DateCompleted]  DATE          DEFAULT (NULL) NULL,
    [TenantId]       INT           DEFAULT (NULL) NULL,
    CONSTRAINT [PK_staff_training_id] PRIMARY KEY CLUSTERED ([UserTrainingId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_training', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerTrainings';

