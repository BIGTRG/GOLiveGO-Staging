CREATE TABLE [dbo].[WorkerDelinquencies] (
    [UserDelinquencyId] INT             IDENTITY (4, 1) NOT NULL,
    [UserId]            INT             NOT NULL,
    [DelinquencyDate]   DATE            NOT NULL,
    [DelinquencyNotes]  NVARCHAR (2000) NOT NULL,
    [ResolutionDate]    DATE            CONSTRAINT [DF__staff_del__resol__41EDCAC5] DEFAULT (NULL) NULL,
    [ResolutionNotes]   NVARCHAR (2000) CONSTRAINT [DF__staff_del__resol__42E1EEFE] DEFAULT (NULL) NULL,
    [TenantId]          INT             NULL,
    CONSTRAINT [PK_staff_delinquency_id] PRIMARY KEY CLUSTERED ([UserDelinquencyId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_delinquency', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerDelinquencies';

