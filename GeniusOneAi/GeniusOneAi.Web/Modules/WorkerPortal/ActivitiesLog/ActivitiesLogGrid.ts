
namespace GeniusOneAi.WorkerPortal
{

    @Serenity.Decorators.registerClass()
    export class ActivitiesLogGrid extends Serenity.EntityGrid<ActivitiesLogRow, any> {
        protected getColumnsKey() { return ActivitiesLogColumns.columnsKey; }
        protected getDialogType() { return ActivitiesLogDialog; }
        protected getIdProperty() { return ActivitiesLogRow.idProperty; }
        protected getInsertPermission() { return ActivitiesLogRow.insertPermission; }
        protected getLocalTextPrefix() { return ActivitiesLogRow.localTextPrefix; }
        protected getService() { return ActivitiesLogService.baseUrl; }

        constructor(container: JQuery)
        {
            super(container);
        }
        protected getGridCanLoad()
        {
            return super.getGridCanLoad() && !!this.activityID;
        }
        private _activityID: string;
        get activityID()
        {
            return this._activityID;
        }
        set activityID(value: string)
        {
            if (this._activityID !== value)
            {
                this._activityID = value;
                this.setEquality('ActivityId', value);
                this.refresh();
            }
        }

        protected createToolbarExtensions()
        {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getSlickOptions()
        {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getButtons()
        {
            var buttons = [];
            return buttons;
        }




    }
}