
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesLogGrid extends Serenity.EntityGrid<ActivitiesLogRow, any> {
        protected getColumnsKey() { return ActivitiesLogColumns.columnsKey; }
        protected getDialogType() { return ActivitiesLogDialog; }
        protected getIdProperty() { return ActivitiesLogRow.idProperty; }
        protected getInsertPermission() { return ActivitiesLogRow.insertPermission; }
        protected getLocalTextPrefix() { return ActivitiesLogRow.localTextPrefix; }
        protected getService() { return ActivitiesLogService.baseUrl; }

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
        protected getColumns()
        {
            var columns = super.getColumns();
            //var fld = ActivitiesLogRow.Fields;
            //Q.first(columns, x => x.field === fld.ActivityNotes).format = ctx => `<a href="javascript:;" class="comments-link">${Q.htmlEncode(ctx.value)}</a>`;
            return columns
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number)
        {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var itemVal;
            var target = $(e.target);
            if (target.hasClass("comments-link"))
            {
                e.preventDefault();
                var dlg = new ActivitiesLogNotesDialog();
                dlg.loadByIdAndOpenDialog(item.ActivitiesLogId);
            }
        }

    }
}