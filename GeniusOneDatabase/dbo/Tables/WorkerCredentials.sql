CREATE TABLE [dbo].[WorkerCredentials] (
    [UserCredentialId] INT  IDENTITY (13, 1) NOT NULL,
    [UserId]           INT  NOT NULL,
    [EffectiveDate]    DATE NOT NULL,
    [ExpirationDate]   DATE NOT NULL,
    [AlertStatus]      BIT  NOT NULL,
    [CredentialTypeId] INT  NOT NULL,
    [TenantId]         INT  NULL,
    CONSTRAINT [PK_staff_credentials_id] PRIMARY KEY CLUSTERED ([UserCredentialId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_credentials', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerCredentials';

