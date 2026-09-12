namespace GeniusOneAi.CrisisEpisodes {
    export interface CrisisEpisodesRow {
        EpisodeId?: number;
        ClientId?: number;
        ClientName?: string;
        ClientRecordNumber?: string;
        TenantId?: number;
        OpenedAt?: string;
        OpenedBy?: number;
        OpenedByName?: string;
        PresentingTrigger?: string;
        AssessmentId?: number;
        ClinicianId?: number;
        ClinicianName?: string;
        Phase?: string;
        EncounterCount?: number;
        ProjectedDischarge?: string;
        ClosedAt?: string;
        Disposition?: string;
        Notes?: string;
        Owner?: number;
        OwnerCreateDate?: string;
    }

    export namespace CrisisEpisodesRow {
        export const idProperty = 'EpisodeId';
        export const nameProperty = 'PresentingTrigger';
        export const localTextPrefix = 'CrisisEpisodes.CrisisEpisodes';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            EpisodeId = "EpisodeId",
            ClientId = "ClientId",
            ClientName = "ClientName",
            ClientRecordNumber = "ClientRecordNumber",
            TenantId = "TenantId",
            OpenedAt = "OpenedAt",
            OpenedBy = "OpenedBy",
            OpenedByName = "OpenedByName",
            PresentingTrigger = "PresentingTrigger",
            AssessmentId = "AssessmentId",
            ClinicianId = "ClinicianId",
            ClinicianName = "ClinicianName",
            Phase = "Phase",
            EncounterCount = "EncounterCount",
            ProjectedDischarge = "ProjectedDischarge",
            ClosedAt = "ClosedAt",
            Disposition = "Disposition",
            Notes = "Notes",
            Owner = "Owner",
            OwnerCreateDate = "OwnerCreateDate"
        }
    }
}
