CREATE TABLE [dbo].[Reports] (
    [ReportId]          INT            IDENTITY (1, 1) NOT NULL,
    [ReportName]        NVARCHAR (50)  NULL,
    [ReportDescription] NVARCHAR (500) NULL,
    [ReportType]        NVARCHAR (50)  NULL,
    [ReportFileName]    NVARCHAR (100) NULL,
    [TenantId]          INT            CONSTRAINT [DF_Reports_TenantId] DEFAULT ((-1)) NULL,
    CONSTRAINT [PK_Reports] PRIMARY KEY CLUSTERED ([ReportId] ASC)
);

