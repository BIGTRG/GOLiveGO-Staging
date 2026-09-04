
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerFormsGrid extends Serenity.EntityGrid<WorkerFormsRow, any> {
        protected getColumnsKey() { return 'WorkerManager.WorkerForms'; }
        protected getDialogType() { return WorkerFormsDialog; }
        protected getIdProperty() { return WorkerFormsRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerFormsRow.localTextPrefix; }
        protected getService() { return WorkerFormsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.frozenColumn = 1;
            return opt;

        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Form',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Form"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getAddButtonCaption(): string { return "Add Form"; }
        protected addButtonClick() {
            this.editItem({ UserId: this.userID });
        }
        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.userID;
        }
        private _userID: string;
        get userID() {
            return this._userID;
        }
        set userID(value: string) {
            if (this._userID !== value) {
                this._userID = value;
                this.setEquality('UserId', value);
                this.refresh();
            }
        }
        protected createQuickSearchInput() { }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.UserFormId);
                }

            }

        }
    }
}