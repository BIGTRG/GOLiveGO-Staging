namespace GeniusOneAi.DocumentManager {
    export interface DocumentWorkflowTemplatesRow {
        WorkflowTemplateId?: number;
        DocumentId?: number;
        Name?: string;
        Description?: string;
        DocumentWorkflowStepsList?: DocumentWorkflowStepsTemplatesRow[];
    }

    export namespace DocumentWorkflowTemplatesRow {
        export const idProperty = 'WorkflowTemplateId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'DocumentManager.DocumentWorkflowTemplates';
        export const lookupKey = 'GeniusOneAi.DocumentWorkflows';

        export function getLookup(): Q.Lookup<DocumentWorkflowTemplatesRow> {
            return Q.getLookup<DocumentWorkflowTemplatesRow>('GeniusOneAi.DocumentWorkflows');
        }
        export const deletePermission = 'DocumentManager:WorkflowTemplates';
        export const insertPermission = 'DocumentManager:WorkflowTemplates';
        export const readPermission = 'DocumentManager:WorkflowTemplates';
        export const updatePermission = 'DocumentManager:WorkflowTemplates';

        export declare const enum Fields {
            WorkflowTemplateId = "WorkflowTemplateId",
            DocumentId = "DocumentId",
            Name = "Name",
            Description = "Description",
            DocumentWorkflowStepsList = "DocumentWorkflowStepsList"
        }
    }
}
