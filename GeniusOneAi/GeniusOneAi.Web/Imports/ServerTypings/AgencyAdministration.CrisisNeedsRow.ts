namespace GeniusOneAi.AgencyAdministration {
    export interface CrisisNeedsRow {
        NeedId?: number;
        NeedKey?: string;
        Label?: string;
        Category?: string;
        CategoryLabel?: string;
        SortOrder?: number;
        IsActive?: boolean;
        [key: string]: any;
    }

    export namespace CrisisNeedsRow {
        export const idProperty = 'NeedId';
        export const nameProperty = 'Label';
        export const localTextPrefix = 'AgencyAdministration.CrisisNeeds';
        export const lookupKey = 'AgencyAdministration.CrisisNeeds';

        export function getLookup(): Q.Lookup<CrisisNeedsRow> {
            return Q.getLookup<CrisisNeedsRow>('AgencyAdministration.CrisisNeeds');
        }
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            NeedId = "NeedId",
            NeedKey = "NeedKey",
            Label = "Label",
            Category = "Category",
            CategoryLabel = "CategoryLabel",
            SortOrder = "SortOrder",
            IsActive = "IsActive"
        }
    }
}
