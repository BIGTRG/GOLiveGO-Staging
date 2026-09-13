CREATE TABLE [dbo].[CrisisNeeds] (
    [NeedId]        INT            IDENTITY (1, 1) NOT NULL,
    [NeedKey]       NVARCHAR (40)  NOT NULL,
    [Label]         NVARCHAR (120) NOT NULL,
    [Category]      NVARCHAR (40)  NOT NULL,
    [CategoryLabel] NVARCHAR (60)  NULL,
    [SortOrder]     INT            CONSTRAINT [DF_CrisisNeeds_SortOrder] DEFAULT ((0)) NOT NULL,
    [IsActive]      BIT            CONSTRAINT [DF_CrisisNeeds_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CrisisNeeds] PRIMARY KEY CLUSTERED ([NeedId] ASC)
);
GO
CREATE UNIQUE NONCLUSTERED INDEX [UX_CrisisNeeds_NeedKey] ON [dbo].[CrisisNeeds]([NeedKey] ASC);
