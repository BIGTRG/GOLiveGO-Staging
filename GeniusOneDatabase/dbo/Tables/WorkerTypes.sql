CREATE TABLE [dbo].[WorkerTypes] (
    [UserTypeId]  INT            IDENTITY (5, 1) NOT NULL,
    [Name]        NVARCHAR (50)  DEFAULT (NULL) NULL,
    [Description] NVARCHAR (100) DEFAULT (NULL) NULL,
    [TenantId]    INT            DEFAULT (NULL) NULL,
    CONSTRAINT [PK_worker_types_id] PRIMARY KEY CLUSTERED ([UserTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.worker_types', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerTypes';

