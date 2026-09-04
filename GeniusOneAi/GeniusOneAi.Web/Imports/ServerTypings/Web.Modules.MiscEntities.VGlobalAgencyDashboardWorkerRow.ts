namespace GeniusOneAi.Web.Modules.MiscEntities {
    export interface VGlobalAgencyDashboardWorkerRow {
        UserId?: number;
        RejectedProgressNotes?: number;
        SavedProgressNotes?: number;
        SubmittedProgressNotes?: number;
        ApprovedProgressNotes?: number;
        ActiveCases?: number;
        InActiveCases?: number;
        AuthorizationsExpiringThisMonth?: number;
        AuthorizationsExpiringNextMonth?: number;
        AppointmentsScheduled?: number;
        DocumentsPendingSignature?: number;
        DocumentsPendingReview?: number;
        CredentialsExpiringThisMonth?: number;
        InvoicesSubmitted?: number;
        InvoicesPaid?: number;
        TotalBilled?: number;
        TotalPaid?: number;
    }

    export namespace VGlobalAgencyDashboardWorkerRow {
        export const idProperty = 'UserId';
        export const localTextPrefix = 'WorkerPortal.VGlobalAgencyDashboardWorker';
        export const deletePermission = 'WorkerPortal:MyDashboard';
        export const insertPermission = 'WorkerPortal:MyDashboard';
        export const readPermission = 'WorkerPortal:MyDashboard';
        export const updatePermission = 'WorkerPortal:MyDashboard';

        export declare const enum Fields {
            UserId = "UserId",
            RejectedProgressNotes = "RejectedProgressNotes",
            SavedProgressNotes = "SavedProgressNotes",
            SubmittedProgressNotes = "SubmittedProgressNotes",
            ApprovedProgressNotes = "ApprovedProgressNotes",
            ActiveCases = "ActiveCases",
            InActiveCases = "InActiveCases",
            AuthorizationsExpiringThisMonth = "AuthorizationsExpiringThisMonth",
            AuthorizationsExpiringNextMonth = "AuthorizationsExpiringNextMonth",
            AppointmentsScheduled = "AppointmentsScheduled",
            DocumentsPendingSignature = "DocumentsPendingSignature",
            DocumentsPendingReview = "DocumentsPendingReview",
            CredentialsExpiringThisMonth = "CredentialsExpiringThisMonth",
            InvoicesSubmitted = "InvoicesSubmitted",
            InvoicesPaid = "InvoicesPaid",
            TotalBilled = "TotalBilled",
            TotalPaid = "TotalPaid"
        }
    }
}
