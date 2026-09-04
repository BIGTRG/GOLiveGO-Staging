namespace GeniusOneAi.Dashboards {
    export interface GlobalAgencyDashboardRow {
        TenantId?: number;
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

    export namespace GlobalAgencyDashboardRow {
        export const idProperty = 'TenantId';
        export const localTextPrefix = 'Dashboards.GlobalAgencyDashboard';
        export const deletePermission = 'Dashboard:MainAgency';
        export const insertPermission = 'Dashboard:MainAgency';
        export const readPermission = 'Dashboard:MainAgency';
        export const updatePermission = 'Dashboard:MainAgency';

        export declare const enum Fields {
            TenantId = "TenantId",
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
