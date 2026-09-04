CREATE TABLE [dbo].[ContractorRates] (
    [UserContractorId] INT            IDENTITY (1, 1) NOT NULL,
    [UserId]           INT            NOT NULL,
    [BillCategory]     NVARCHAR (50)  NULL,
    [BillCode]         NVARCHAR (50)  NULL,
    [BillRate]         DECIMAL (5, 2) NULL,
    [BillRateMetric]   NVARCHAR (25)  NULL,
    CONSTRAINT [PK_ContractorRates] PRIMARY KEY CLUSTERED ([UserContractorId] ASC)
);

