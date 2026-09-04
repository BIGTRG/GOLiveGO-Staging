namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramNoteTypeRow {
        ProgramNoteTypeId?: number;
        IsEnabled?: boolean;
        ProgramNoteTypeName?: string;
        ProgramNoteTypeOrder?: number;
        TenantId?: number;
    }

    export namespace ProgramNoteTypeRow {
        export const idProperty = 'ProgramNoteTypeId';
        export const nameProperty = 'ProgramNoteTypeName';
        export const localTextPrefix = 'AgencyAdministration.ProgramNoteType';
        export const deletePermission = 'AgencyAdministration:NoteTypes';
        export const insertPermission = 'AgencyAdministration:NoteTypes';
        export const readPermission = 'AgencyAdministration:NoteTypes';
        export const updatePermission = 'AgencyAdministration:NoteTypes';

        export declare const enum Fields {
            ProgramNoteTypeId = "ProgramNoteTypeId",
            IsEnabled = "IsEnabled",
            ProgramNoteTypeName = "ProgramNoteTypeName",
            ProgramNoteTypeOrder = "ProgramNoteTypeOrder",
            TenantId = "TenantId"
        }
    }
}
