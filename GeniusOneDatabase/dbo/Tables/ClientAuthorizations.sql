CREATE TABLE [dbo].[ClientAuthorizations] (
    [AuthorizationId]       INT            IDENTITY (4, 1) NOT NULL,
    [ClientId]              INT            CONSTRAINT [DF__client_au__clien__46E78A0C] DEFAULT (NULL) NULL,
    [StartDate]             DATE           CONSTRAINT [DF__client_au__start__47DBAE45] DEFAULT (NULL) NULL,
    [EndDate]               DATE           CONSTRAINT [DF__client_au__endDa__48CFD27E] DEFAULT (NULL) NULL,
    [UnitContactGranted]    INT            CONSTRAINT [DF__client_au__units__49C3F6B7] DEFAULT (NULL) NULL,
    [AuthorizationType]     NVARCHAR (10)  CONSTRAINT [DF__client_au__unitT__4AB81AF0] DEFAULT (NULL) NULL,
    [Status]                NVARCHAR (25)  CONSTRAINT [DF__client_au__statu__4BAC3F29] DEFAULT (NULL) NULL,
    [ApprovalStatus]        NVARCHAR (25)  CONSTRAINT [DF__client_au__appro__4CA06362] DEFAULT (NULL) NULL,
    [ApprovalDate]          DATE           CONSTRAINT [DF__client_au__appro__4D94879B] DEFAULT (NULL) NULL,
    [UnitCalculationMetric] DECIMAL (5, 2) NULL,
    [ProgramCodeTypeId]     INT            CONSTRAINT [DF_ClientAuthorizations_ProgramCodeTypeId] DEFAULT ((0)) NULL,
    [TenantId]              INT            CONSTRAINT [DF__client_au__tenan__45F365D3] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_client_authorizations_id] PRIMARY KEY CLUSTERED ([AuthorizationId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.client_authorizations', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'ClientAuthorizations';

