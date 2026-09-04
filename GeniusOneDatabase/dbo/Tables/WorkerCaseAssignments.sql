CREATE TABLE [dbo].[WorkerCaseAssignments] (
    [CaseAssignmentId]  INT            IDENTITY (23, 1) NOT NULL,
    [ClientId]          INT            CONSTRAINT [DF__staff_cas__clien__3B40CD36] DEFAULT (NULL) NULL,
    [AssignedDate]      DATE           CONSTRAINT [DF__staff_cas__dateA__3C34F16F] DEFAULT (NULL) NULL,
    [UnassignedDate]    DATE           CONSTRAINT [DF__staff_cas__dateU__3D2915A8] DEFAULT (NULL) NULL,
    [Notes]             NVARCHAR (500) CONSTRAINT [DF__staff_cas__notes__3E1D39E1] DEFAULT (NULL) NULL,
    [UserId]            INT            CONSTRAINT [DF__staff_cas__staff__40058253] DEFAULT (NULL) NULL,
    [ProgramCodeTypeId] INT            NULL,
    [AuthorizationId]   INT            CONSTRAINT [DF__staff_cas__autho__40F9A68C] DEFAULT (NULL) NULL,
    [TenantId]          INT            CONSTRAINT [DF__staff_cas__tenan__3F115E1A] DEFAULT (NULL) NULL,
    [IsTeamLead]        BIT            CONSTRAINT [DF_WorkerCaseAssignments_IsTeamLead] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_staff_caseload_id] PRIMARY KEY CLUSTERED ([CaseAssignmentId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_SSMA_SOURCE', @value = N'geniusone2x.staff_caseload', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'WorkerCaseAssignments';

