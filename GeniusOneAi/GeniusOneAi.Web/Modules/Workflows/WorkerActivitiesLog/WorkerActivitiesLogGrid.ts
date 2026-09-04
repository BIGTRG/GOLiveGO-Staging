
namespace GeniusOneAi.WorkerPortal{

    @Serenity.Decorators.registerClass()
    export class WorkerActivitiesLogGrid extends Serenity.EntityGrid<WorkerActivitiesLogRow, any> {
        protected getColumnsKey() { return WorkerActivitiesLogColumns.columnsKey; }
        protected getDialogType() { return WorkerActivitiesLogDialog; }
        protected getIdProperty() { return WorkerActivitiesLogRow.idProperty; }
        protected getInsertPermission() { return WorkerActivitiesLogRow.insertPermission; }
        protected getLocalTextPrefix() { return WorkerActivitiesLogRow.localTextPrefix; }
        protected getService() { return WorkerActivitiesLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
      protected getGridCanLoad() {
                return super.getGridCanLoad() && !!this.activityID;
            }
            private _activityID: string;
            get activityID() {
                return this._activityID;
            }
            set activityID(value: string)
           {
                if (this._activityID !== value) {
                    this._activityID = value;
                    this.setEquality('ActivityId', value);
                    this.refresh();
                }
            }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getButtons() {
            var buttons = [];
            return buttons;
        }




    }
}