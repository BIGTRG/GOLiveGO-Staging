namespace GeniusOneAi.WorkerPortal {
    export interface ClientDocumentsRow {
        DocumentId?: number;
        ClientId?: number;
        Title?: string;
        FileName?: string;
        IsFinalized?: number;
        FinalizedDate?: string;
    }

    export namespace ClientDocumentsRow {
        export const idProperty = 'DocumentId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'WorkerPortal.ClientDocuments';
        export const deletePermission = 'WorkerPortal:MyPatients';
        export const insertPermission = 'WorkerPortal:MyPatients';
        export const readPermission = 'WorkerPortal:MyPatients';
        export const updatePermission = 'WorkerPortal:MyPatients';

        export declare const enum Fields {
            DocumentId = "DocumentId",
            ClientId = "ClientId",
            Title = "Title",
            FileName = "FileName",
            IsFinalized = "IsFinalized",
            FinalizedDate = "FinalizedDate"
        }
    }
}
