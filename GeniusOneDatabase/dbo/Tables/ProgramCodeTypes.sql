CREATE TABLE [dbo].[ProgramCodeTypes] (
    [ProgramCodeTypeId] INT             IDENTITY (24, 1) NOT NULL,
    [ProgramTypeId]     INT             CONSTRAINT [DF__programco__progr__7A672E12] DEFAULT (NULL) NULL,
    [BillCode]          NVARCHAR (25)   CONSTRAINT [DF__programco__progr__7B5B524B] DEFAULT (NULL) NULL,
    [Description]       NVARCHAR (100)  CONSTRAINT [DF__programco__progr__7C4F7684] DEFAULT (NULL) NULL,
    [InsuranceId]       INT             CONSTRAINT [DF__programco__progr__7D439ABD] DEFAULT (NULL) NULL,
    [BillRate]          DECIMAL (10, 2) NULL,
    [BillRateUnit]      NVARCHAR (25)   NULL,
    [TenantId]          INT             CONSTRAINT [DF__programco__tenan__797309D9] DEFAULT (NULL) NULL,
    [Mod1]              NVARCHAR (10)   NULL,
    [Mod2]              NVARCHAR (10)   NULL,
    [Mod3]              NVARCHAR (10)   NULL,
    [Mod4]              NVARCHAR (10)   NULL,
    [FundingSource]     NVARCHAR (100)  NULL,
    [RateEffective]     DATE            NULL,
    [RateEnd]           DATE            NULL,
    [SpecialtyName]     NVARCHAR (500)  NULL,
    CONSTRAINT [PK_programcodes_id] PRIMARY KEY CLUSTERED ([ProgramCodeTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.programcodes', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ProgramCodeTypes';

