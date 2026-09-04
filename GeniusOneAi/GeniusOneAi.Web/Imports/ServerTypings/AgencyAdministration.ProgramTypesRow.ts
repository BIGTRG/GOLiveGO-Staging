namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramTypesRow {
        ProgramTypeId?: number;
        Name?: string;
        ProgramNoteTemplateName?: string;
        Description?: string;
        Status?: boolean;
        ProgramNoteTemplateId?: number;
        TenantId?: number;
        DefaultApproverId?: number;
        BackupApproverId?: number;
        EscalationMetric?: number;
    }

    export namespace ProgramTypesRow {
        export const idProperty = 'ProgramTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.ProgramTypes';
        export const lookupKey = 'GeniusOneAi.ProgramTypes';

        export function getLookup(): Q.Lookup<ProgramTypesRow> {
            return Q.getLookup<ProgramTypesRow>('GeniusOneAi.ProgramTypes');
        }
        export const deletePermission = 'AgencyAdministration:AgencyTypes';
        export const insertPermission = 'AgencyAdministration:AgencyTypes';
        export const readPermission = 'AgencyAdministration:AgencyTypes';
        export const updatePermission = 'AgencyAdministration:AgencyTypes';

        export declare const enum Fields {
            ProgramTypeId = "ProgramTypeId",
            Name = "Name",
            ProgramNoteTemplateName = "ProgramNoteTemplateName",
            Description = "Description",
            Status = "Status",
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            TenantId = "TenantId",
            DefaultApproverId = "DefaultApproverId",
            BackupApproverId = "BackupApproverId",
            EscalationMetric = "EscalationMetric"
        }
    }
}
