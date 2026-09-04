namespace GeniusOneAi.MiscEntities {
    export interface EventsRow {
        EventId?: number;
        Subject?: string;
        Description?: string;
        Start?: string;
        End?: string;
        ThemeColor?: string;
        IsFullDay?: boolean;
        UserId?: number;
    }

    export namespace EventsRow {
        export const idProperty = 'EventId';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'MiscEntities.Events';
        export const deletePermission = '';
        export const insertPermission = '';
        export const readPermission = '';
        export const updatePermission = '';

        export declare const enum Fields {
            EventId = "EventId",
            Subject = "Subject",
            Description = "Description",
            Start = "Start",
            End = "End",
            ThemeColor = "ThemeColor",
            IsFullDay = "IsFullDay",
            UserId = "UserId"
        }
    }
}
