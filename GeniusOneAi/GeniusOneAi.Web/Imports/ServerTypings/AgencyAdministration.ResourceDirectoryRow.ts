namespace GeniusOneAi.AgencyAdministration {
    export interface ResourceDirectoryRow {
        ResourceId?: number;
        TenantId?: number;
        ResourceType?: string;
        Name?: string;
        Phone?: string;
        Website?: string;
        Address?: string;
        City?: string;
        County?: string;
        Hours?: string;
        Notes?: string;
        IsActive?: boolean;
        Owner?: number;
        OwnerCreateDate?: string;
        [key: string]: any;
    }

    export namespace ResourceDirectoryRow {
        export const idProperty = 'ResourceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AgencyAdministration.ResourceDirectory';
        export const deletePermission = 'AgencyAdministration:GoalLibrary';
        export const insertPermission = 'AgencyAdministration:GoalLibrary';
        export const readPermission = 'AgencyAdministration:GoalLibrary';
        export const updatePermission = 'AgencyAdministration:GoalLibrary';

        export declare const enum Fields {
            ResourceId = "ResourceId",
            TenantId = "TenantId",
            ResourceType = "ResourceType",
            Name = "Name",
            Phone = "Phone",
            Website = "Website",
            Address = "Address",
            City = "City",
            County = "County",
            Hours = "Hours",
            Notes = "Notes",
            IsActive = "IsActive",
            Owner = "Owner",
            OwnerCreateDate = "OwnerCreateDate"
        }
    }
}
