namespace GeniusOneAi.Reports {
    export interface ReportsRow {
        ReportId?: number;
        ReportName?: string;
        ReportDescription?: string;
        ReportType?: string;
        ReportFileName?: string;
        TenantId?: number;
    }

    export namespace ReportsRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'ReportName';
        export const localTextPrefix = 'Reports.Reports';
        export const deletePermission = 'Reporting:Standard';
        export const insertPermission = 'Reporting:Standard';
        export const readPermission = 'Reporting:Standard';
        export const updatePermission = 'Reporting:Standard';

        export declare const enum Fields {
            ReportId = "ReportId",
            ReportName = "ReportName",
            ReportDescription = "ReportDescription",
            ReportType = "ReportType",
            ReportFileName = "ReportFileName",
            TenantId = "TenantId"
        }
    }
}
