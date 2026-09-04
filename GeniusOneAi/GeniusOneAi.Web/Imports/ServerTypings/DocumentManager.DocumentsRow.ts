namespace GeniusOneAi.DocumentManager {
    export interface DocumentsRow {
        DocumentId?: number;
        Title?: string;
        FileName?: string;
        IsTemplate?: number;
        FileType?: string;
        IsFinalized?: number;
        OriginalUploadDate?: string;
        MajorVersion?: number;
        MinorVersion?: number;
        RevisionVersion?: number;
        UserId?: number;
    }

    export namespace DocumentsRow {
        export const idProperty = 'DocumentId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'DocumentManager.Documents';
        export const lookupKey = 'GeniusOneAi.Documents';

        export function getLookup(): Q.Lookup<DocumentsRow> {
            return Q.getLookup<DocumentsRow>('GeniusOneAi.Documents');
        }
        export const deletePermission = 'DocumentManager:ContentLibrary';
        export const insertPermission = 'DocumentManager:ContentLibrary';
        export const readPermission = 'DocumentManager:ContentLibrary';
        export const updatePermission = 'DocumentManager:ContentLibrary';

        export declare const enum Fields {
            DocumentId = "DocumentId",
            Title = "Title",
            FileName = "FileName",
            IsTemplate = "IsTemplate",
            FileType = "FileType",
            IsFinalized = "IsFinalized",
            OriginalUploadDate = "OriginalUploadDate",
            MajorVersion = "MajorVersion",
            MinorVersion = "MinorVersion",
            RevisionVersion = "RevisionVersion",
            UserId = "UserId"
        }
    }
}
