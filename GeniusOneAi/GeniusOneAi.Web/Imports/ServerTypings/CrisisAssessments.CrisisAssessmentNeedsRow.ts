namespace GeniusOneAi.CrisisAssessments {
    export interface CrisisAssessmentNeedsRow {
        NeedRecId?: number;
        AssessmentId?: number;
        EpisodeId?: number;
        ClientId?: number;
        TenantId?: number;
        NeedKey?: string;
        Priority?: string;
        Source?: string;
        Accepted?: boolean;
        Status?: string;
        SortOrder?: number;
        GoalsCreated?: number;
        NeedLabel?: string;
        CategoryLabel?: string;
        [key: string]: any;
    }

    export namespace CrisisAssessmentNeedsRow {
        export const idProperty = 'NeedRecId';
        export const nameProperty = 'NeedKey';
        export const localTextPrefix = 'CrisisAssessments.CrisisAssessmentNeeds';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            NeedRecId = "NeedRecId",
            AssessmentId = "AssessmentId",
            EpisodeId = "EpisodeId",
            ClientId = "ClientId",
            TenantId = "TenantId",
            NeedKey = "NeedKey",
            Priority = "Priority",
            Source = "Source",
            Accepted = "Accepted",
            Status = "Status",
            SortOrder = "SortOrder",
            GoalsCreated = "GoalsCreated"
        }
    }
}
