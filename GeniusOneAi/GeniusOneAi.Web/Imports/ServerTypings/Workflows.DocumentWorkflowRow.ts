namespace GeniusOneAi.Workflows {
    export interface DocumentWorkflowRow {
        WorkflowId?: number;
        DocumentWorkflowId?: number;
        Name?: string;
        Description?: string;
        FileName?: string;
        Status?: string;
        DocumentWorkflowStepsList?: DocumentWorkflowStepsRow[];
    }

    export namespace DocumentWorkflowRow {
        export const idProperty = 'WorkflowId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Workflows.DocumentWorkflow';
        export const deletePermission = 'Workflows:Documents';
        export const insertPermission = 'Workflows:Documents';
        export const readPermission = 'Workflows:Documents';
        export const updatePermission = 'Workflows:Documents';

        export declare const enum Fields {
            WorkflowId = "WorkflowId",
            DocumentWorkflowId = "DocumentWorkflowId",
            Name = "Name",
            Description = "Description",
            FileName = "FileName",
            Status = "Status",
            DocumentWorkflowStepsList = "DocumentWorkflowStepsList"
        }
    }
}
