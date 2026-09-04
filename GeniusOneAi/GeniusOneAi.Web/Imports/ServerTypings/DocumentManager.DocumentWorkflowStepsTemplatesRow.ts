namespace GeniusOneAi.DocumentManager {
    export interface DocumentWorkflowStepsTemplatesRow {
        DocumentStepId?: number;
        WorkflowTemplateId?: number;
        StepOrder?: number;
        StepActionType?: string;
        StepPerformerType?: string;
    }

    export namespace DocumentWorkflowStepsTemplatesRow {
        export const idProperty = 'DocumentStepId';
        export const nameProperty = 'StepActionType';
        export const localTextPrefix = 'DocumentManager.DocumentWorkflowStepsTemplates';
        export const deletePermission = 'DocumentManager:WorkflowTemplates';
        export const insertPermission = 'DocumentManager:WorkflowTemplates';
        export const readPermission = 'DocumentManager:WorkflowTemplates';
        export const updatePermission = 'DocumentManager:WorkflowTemplates';

        export declare const enum Fields {
            DocumentStepId = "DocumentStepId",
            WorkflowTemplateId = "WorkflowTemplateId",
            StepOrder = "StepOrder",
            StepActionType = "StepActionType",
            StepPerformerType = "StepPerformerType"
        }
    }
}
