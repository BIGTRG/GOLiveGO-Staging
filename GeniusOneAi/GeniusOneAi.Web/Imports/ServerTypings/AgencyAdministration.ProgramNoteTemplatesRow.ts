namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramNoteTemplatesRow {
        ProgramNoteTemplateId?: number;
        Name?: string;
        Status?: boolean;
        Field01Label?: string;
        Field02Label?: string;
        Field03Label?: string;
        Field04Label?: string;
        Field05Label?: string;
        Field06Label?: string;
        Field07Label?: string;
        Field08Label?: string;
        Field09Label?: string;
        Field10Label?: string;
        Field01Status?: boolean;
        Field02Status?: boolean;
        Field03Status?: boolean;
        Field04Status?: boolean;
        Field05Status?: boolean;
        Field06Status?: boolean;
        Field07Status?: boolean;
        Field08Status?: boolean;
        Field09Status?: boolean;
        Field10Status?: boolean;
        Field01Type?: string;
        Field02Type?: string;
        Field03Type?: string;
        Field04Type?: string;
        Field05Type?: string;
        Field06Type?: string;
        Field07Type?: string;
        Field08Type?: string;
        Field09Type?: string;
        Field10Type?: string;
    }

    export namespace ProgramNoteTemplatesRow {
        export const idProperty = 'ProgramNoteTemplateId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.ProgramNoteTemplates';
        export const lookupKey = 'GeniusOneAi.ProgramNoteTemplates';

        export function getLookup(): Q.Lookup<ProgramNoteTemplatesRow> {
            return Q.getLookup<ProgramNoteTemplatesRow>('GeniusOneAi.ProgramNoteTemplates');
        }
        export const deletePermission = 'AgencyAdministration:NoteTemplates';
        export const insertPermission = 'AgencyAdministration:NoteTemplates';
        export const readPermission = 'AgencyAdministration:NoteTemplates';
        export const updatePermission = 'AgencyAdministration:NoteTemplates';

        export declare const enum Fields {
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            Name = "Name",
            Status = "Status",
            Field01Label = "Field01Label",
            Field02Label = "Field02Label",
            Field03Label = "Field03Label",
            Field04Label = "Field04Label",
            Field05Label = "Field05Label",
            Field06Label = "Field06Label",
            Field07Label = "Field07Label",
            Field08Label = "Field08Label",
            Field09Label = "Field09Label",
            Field10Label = "Field10Label",
            Field01Status = "Field01Status",
            Field02Status = "Field02Status",
            Field03Status = "Field03Status",
            Field04Status = "Field04Status",
            Field05Status = "Field05Status",
            Field06Status = "Field06Status",
            Field07Status = "Field07Status",
            Field08Status = "Field08Status",
            Field09Status = "Field09Status",
            Field10Status = "Field10Status",
            Field01Type = "Field01Type",
            Field02Type = "Field02Type",
            Field03Type = "Field03Type",
            Field04Type = "Field04Type",
            Field05Type = "Field05Type",
            Field06Type = "Field06Type",
            Field07Type = "Field07Type",
            Field08Type = "Field08Type",
            Field09Type = "Field09Type",
            Field10Type = "Field10Type"
        }
    }
}
