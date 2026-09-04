namespace GeniusOneAi.Workflows {
    export interface DocumentWorkflowStepsRow {
        DocumentStepId?: number;
        WorkflowId?: number;
        StepOrder?: number;
        StepActionType?: string;
        StepPerformerType?: string;
        StepPerformerStaffId?: number;
        StepPerformerPatientId?: number;
        DueDate?: string;
        DateCompleted?: string;
        PerformerName?: string;
        StepPerformerStaffFullName?: string;
        StepPerformerPatientFullName?: string;
    }

    export namespace DocumentWorkflowStepsRow {
        export const idProperty = 'DocumentStepId';
        export const nameProperty = 'StepActionType';
        export const localTextPrefix = 'Workflows.DocumentWorkflowSteps';
        export const deletePermission = 'Workflows:Documents';
        export const insertPermission = 'Workflows:Documents';
        export const readPermission = 'Workflows:Documents';
        export const updatePermission = 'Workflows:Documents';

        export declare const enum Fields {
            DocumentStepId = "DocumentStepId",
            WorkflowId = "WorkflowId",
            StepOrder = "StepOrder",
            StepActionType = "StepActionType",
            StepPerformerType = "StepPerformerType",
            StepPerformerStaffId = "StepPerformerStaffId",
            StepPerformerPatientId = "StepPerformerPatientId",
            DueDate = "DueDate",
            DateCompleted = "DateCompleted",
            PerformerName = "PerformerName",
            StepPerformerStaffFullName = "StepPerformerStaffFullName",
            StepPerformerPatientFullName = "StepPerformerPatientFullName"
        }
    }
}
