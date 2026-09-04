namespace GeniusOneAi.ClientManager {
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
        export const localTextPrefix = 'ClientManager.ClientDocuments';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

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
