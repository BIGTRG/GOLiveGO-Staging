namespace GeniusOneAi.WorkerPortal {
    export interface DocumentsRow {
        DocumentId?: number;
        Title?: string;
        Filename?: string;
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
        export const localTextPrefix = 'WorkerPortal.Documents';
        export const deletePermission = 'WorkerPortal:DocumentRepository';
        export const insertPermission = 'WorkerPortal:DocumentRepository';
        export const readPermission = 'WorkerPortal:DocumentRepository';
        export const updatePermission = 'WorkerPortal:DocumentRepository';

        export declare const enum Fields {
            DocumentId = "DocumentId",
            Title = "Title",
            Filename = "Filename",
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
