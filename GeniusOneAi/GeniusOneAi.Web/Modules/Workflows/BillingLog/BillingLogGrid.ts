
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class BillingLogGrid extends Serenity.EntityGrid<BillingLogRow, any> {
        protected getColumnsKey() { return BillingLogColumns.columnsKey; }
        protected getDialogType() { return BillingLogDialog; }
        protected getIdProperty() { return BillingLogRow.idProperty; }
        protected getInsertPermission() { return BillingLogRow.insertPermission; }
        protected getLocalTextPrefix() { return BillingLogRow.localTextPrefix; }
        protected getService() { return BillingLogService.baseUrl; }

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
        set activityID(value: string) {
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