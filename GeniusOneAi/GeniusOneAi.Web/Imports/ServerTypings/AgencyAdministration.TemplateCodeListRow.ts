namespace GeniusOneAi.AgencyAdministration {
    export interface TemplateCodeListRow {
        TemplateCodeListId?: number;
        TemplateId?: number;
        QuestionId?: number;
        ValueText?: string;
    }

    export namespace TemplateCodeListRow {
        export const idProperty = 'TemplateCodeListId';
        export const nameProperty = 'ValueText';
        export const localTextPrefix = 'AgencyAdministration.TemplateCodeList';
        export const deletePermission = 'AgencyAdministration:NoteTemplates';
        export const insertPermission = 'AgencyAdministration:NoteTemplates';
        export const readPermission = 'AgencyAdministration:NoteTemplates';
        export const updatePermission = 'AgencyAdministration:NoteTemplates';

        export declare const enum Fields {
            TemplateCodeListId = "TemplateCodeListId",
            TemplateId = "TemplateId",
            QuestionId = "QuestionId",
            ValueText = "ValueText"
        }
    }
}
