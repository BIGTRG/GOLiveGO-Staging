namespace GeniusOneAi.MiscEntities {
    export interface PatientDetailsRow {
        PatientId?: number;
        PatientFirstName?: string;
        PatientMiddleName?: string;
        PatientLastName?: string;
        PatientFullName?: string;
        PatientBirthDate?: string;
        PatientPrimaryInsuranceNumber?: string;
        PatientMedicalRecordNumber?: string;
    }

    export namespace PatientDetailsRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'PatientFirstName';
        export const localTextPrefix = 'MiscEntities.PatientDetails';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            PatientId = "PatientId",
            PatientFirstName = "PatientFirstName",
            PatientMiddleName = "PatientMiddleName",
            PatientLastName = "PatientLastName",
            PatientFullName = "PatientFullName",
            PatientBirthDate = "PatientBirthDate",
            PatientPrimaryInsuranceNumber = "PatientPrimaryInsuranceNumber",
            PatientMedicalRecordNumber = "PatientMedicalRecordNumber"
        }
    }
}
