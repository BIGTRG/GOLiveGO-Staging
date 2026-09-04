CREATE TABLE [dbo].[InsuranceTypes] (
    [InsuranceTypeId] INT            IDENTITY (4, 1) NOT NULL,
    [Name]            NVARCHAR (100) CONSTRAINT [DF__insurance__insur__73BA3083] DEFAULT (NULL) NULL,
    [Description]     NVARCHAR (255) CONSTRAINT [DF__insurance__insur__74AE54BC] DEFAULT (NULL) NULL,
    [Address1]        NVARCHAR (50)  CONSTRAINT [DF_InsuranceTypes_Address1] DEFAULT (NULL) NULL,
    [Address2]        NVARCHAR (50)  CONSTRAINT [DF_InsuranceTypes_Address2] DEFAULT (NULL) NULL,
    [City]            NVARCHAR (50)  CONSTRAINT [DF_InsuranceTypes_City] DEFAULT (NULL) NULL,
    [State]           NVARCHAR (2)   CONSTRAINT [DF_InsuranceTypes_State] DEFAULT (NULL) NULL,
    [Zipcode]         NVARCHAR (10)  CONSTRAINT [DF_InsuranceTypes_Zipcode] DEFAULT (NULL) NULL,
    [County]          NVARCHAR (100) CONSTRAINT [DF_InsuranceTypes_County] DEFAULT (NULL) NULL,
    [PrimaryPhone]    NVARCHAR (15)  CONSTRAINT [DF_InsuranceTypes_PrimaryPhone] DEFAULT (NULL) NULL,
    [Type]            NVARCHAR (100) NULL,
    [PayerId]         NVARCHAR (255) CONSTRAINT [DF__insurance__insur__76969D2E] DEFAULT (NULL) NULL,
    [Status]          BIT            CONSTRAINT [DF__insurance__insur__75A278F5] DEFAULT (NULL) NULL,
    CONSTRAINT [PK_insurance_types_id] PRIMARY KEY CLUSTERED ([InsuranceTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.insurance_types', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'InsuranceTypes';

