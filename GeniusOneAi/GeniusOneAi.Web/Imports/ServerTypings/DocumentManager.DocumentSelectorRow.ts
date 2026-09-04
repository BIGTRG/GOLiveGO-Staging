namespace GeniusOneAi.DocumentManager {
    export interface DocumentSelectorRow {
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

    export namespace DocumentSelectorRow {
        export const idProperty = 'DocumentId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'DocumentManager.DocumentSelector';
        export const deletePermission = 'DocumentManager:ContentLibrary';
        export const insertPermission = 'DocumentManager:ContentLibrary';
        export const readPermission = 'DocumentManager:ContentLibrary';
        export const updatePermission = 'DocumentManager:ContentLibrary';

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
