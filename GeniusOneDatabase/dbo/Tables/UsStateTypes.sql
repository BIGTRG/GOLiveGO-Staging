CREATE TABLE [dbo].[UsStateTypes] (
    [id]        INT            IDENTITY (52, 1) NOT NULL,
    [state]     NVARCHAR (22)  NOT NULL,
    [stateCode] NVARCHAR (255) NOT NULL,
    CONSTRAINT [PK_states_id] PRIMARY KEY CLUSTERED ([id] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.states', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'UsStateTypes';

