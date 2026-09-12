CREATE TABLE [dbo].[Activities] (
    [ActivityId]             INT             IDENTITY (61, 1) NOT NULL,
    [UserId]                 INT             CONSTRAINT [DF__timesheet__worke__5CA1C101] DEFAULT (NULL) NULL,
    [ClientId]               INT             CONSTRAINT [DF__timesheet__clien__5D95E53A] DEFAULT (NULL) NULL,
    [Activity]               NVARCHAR (50)   CONSTRAINT [DF__timesheet__activ__5E8A0973] DEFAULT (NULL) NULL,
    [ActivityDate]           DATE            CONSTRAINT [DF__timesheet__logDa__5F7E2DAC] DEFAULT (NULL) NULL,
    [ActivityFromTime]       TIME (7)        CONSTRAINT [DF__timesheet__logTi__607251E5] DEFAULT (NULL) NULL,
    [ActivityToTime]         TIME (7)        CONSTRAINT [DF__timesheet__logTi__6166761E] DEFAULT (NULL) NULL,
    [IsBillable]             BIT             CONSTRAINT [DF__timesheet__isBil__625A9A57] DEFAULT ((0)) NULL,
    [BillableAmount]         DECIMAL (10, 2) CONSTRAINT [DF_Activities_BillableAmount] DEFAULT ((25.00)) NULL,
    [Status]                 NVARCHAR (25)   CONSTRAINT [DF__timesheet__logSt__634EBE90] DEFAULT (NULL) NULL,
    [Notes]                  NVARCHAR (500)  CONSTRAINT [DF__timesheet__notes__6442E2C9] DEFAULT (NULL) NULL,
    [InvoiceId]              INT             CONSTRAINT [DF__timesheet__invoi__65370702] DEFAULT (NULL) NULL,
    [ProgressNoteId]         INT             CONSTRAINT [DF__timesheet__progr__662B2B3B] DEFAULT (NULL) NULL,
    [ProgressNoteTemplateId] INT             CONSTRAINT [DF__timesheet__progr__671F4F74] DEFAULT (NULL) NULL,
    [ProgressNoteLocation]   INT             CONSTRAINT [DF__timesheet__progr__681373AD] DEFAULT (NULL) NULL,
    [ProgressNoteInOut]      NVARCHAR (100)  CONSTRAINT [DF__timesheet__progr__690797E6] DEFAULT (NULL) NULL,
    [BillCode]               NVARCHAR (100)  CONSTRAINT [DF__timesheet__billC__69FBBC1F] DEFAULT (NULL) NULL,
    [Hours]                  DECIMAL (10, 2) CONSTRAINT [DF__timesheet__hours__6AEFE058] DEFAULT (NULL) NULL,
    [AlertSent]              BIT             NULL,
    [AuthorizationId]        INT             CONSTRAINT [DF_Activities_ClientId1] DEFAULT (NULL) NULL,
    [TenantId]               INT             NULL,
    [EpisodeId]        INT            NULL,
    [Phase]            NVARCHAR (10)  NULL,
    CONSTRAINT [PK_timesheet_records_id] PRIMARY KEY CLUSTERED ([ActivityId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.timesheet_records', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Activities';

