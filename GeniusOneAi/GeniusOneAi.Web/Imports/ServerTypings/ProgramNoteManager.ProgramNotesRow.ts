namespace GeniusOneAi.ProgramNoteManager {
    export interface ProgramNotesRow {
        ProgramNoteId?: number;
        ActivityId?: number;
        ProgramNoteTemplateId?: number;
        Field00?: string;
        Field01?: string;
        Field02?: string;
        Field03?: string;
        Field04?: string;
        Field05?: string;
        Field06?: string;
        Field07?: string;
        Field08?: string;
        Field09?: string;
        Field10?: string;
        Status?: string;
        NoteUpdateStatus?: string;
        DateSigned?: string;
        ESignaturePlainText?: string;
        SignatureImage?: string;
        SignatureGuid?: string;
        FileName?: string;
    }

    export namespace ProgramNotesRow {
        export const idProperty = 'ProgramNoteId';
        export const nameProperty = 'ProgramNoteTemplateId';
        export const localTextPrefix = 'ProgramNoteManager.ProgramNotes';
        export const deletePermission = 'ProgramNotes:ManageNotes';
        export const insertPermission = 'ProgramNotes:ManageNotes';
        export const readPermission = 'ProgramNotes:ManageNotes';
        export const updatePermission = 'ProgramNotes:ManageNotes';

        export declare const enum Fields {
            ProgramNoteId = "ProgramNoteId",
            ActivityId = "ActivityId",
            ProgramNoteTemplateId = "ProgramNoteTemplateId",
            Field00 = "Field00",
            Field01 = "Field01",
            Field02 = "Field02",
            Field03 = "Field03",
            Field04 = "Field04",
            Field05 = "Field05",
            Field06 = "Field06",
            Field07 = "Field07",
            Field08 = "Field08",
            Field09 = "Field09",
            Field10 = "Field10",
            Status = "Status",
            NoteUpdateStatus = "NoteUpdateStatus",
            DateSigned = "DateSigned",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureImage = "SignatureImage",
            SignatureGuid = "SignatureGuid",
            FileName = "FileName"
        }
    }
}
