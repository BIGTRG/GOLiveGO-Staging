CREATE TABLE [dbo].[WorkerForms] (
    [UserFormId]  INT           IDENTITY (8, 1) NOT NULL,
    [UserId]      INT           NULL,
    [DueDate]     DATE          NULL,
    [AlertStatus] NVARCHAR (10) NULL,
    [FormTypeId]  INT           CONSTRAINT [DF__staff_for__formT__44CA3770] DEFAULT (NULL) NULL,
    [TenantId]    INT           CONSTRAINT [DF__staff_for__tenan__43D61337] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_staff_forms_id] PRIMARY KEY CLUSTERED ([UserFormId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_forms', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerForms';

