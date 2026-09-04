namespace GeniusOneAi.WorkerPortal {
    export interface WorkersPortalRow {
        UserId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        ESignatureBase64?: string;
        ESignaturePlainText?: string;
        SignatureVerified?: boolean;
        IsWorker?: boolean;
        TenantId?: number;
    }

    export namespace WorkersPortalRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'FirstName';
        export const localTextPrefix = 'WorkerPortal.WorkersPortal';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            UserId = "UserId",
            FirstName = "FirstName",
            MiddleName = "MiddleName",
            LastName = "LastName",
            ESignatureBase64 = "ESignatureBase64",
            ESignaturePlainText = "ESignaturePlainText",
            SignatureVerified = "SignatureVerified",
            IsWorker = "IsWorker",
            TenantId = "TenantId"
        }
    }
}
