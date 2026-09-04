
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkersGrid extends Serenity.EntityGrid<WorkersRow, any> {
        protected getColumnsKey() { return 'WorkerManager.Workers'; }
        protected getDialogType() { return WorkersDialog; }
        protected getIdProperty() { return WorkersRow.idProperty; }
      /*  protected getInsertPermission() { return WorkersRow.insertPermission; }*/
        protected getLocalTextPrefix() { return WorkersRow.localTextPrefix; }
        protected getService() { return WorkersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createQuickSearchInput() { }
        protected getButtons() {
            var buttons = [];
            return buttons;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Worker',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Worker"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
          return columns;
        }
        protected getInitialTitle() {
            return "Worker Manager";
        }
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
                    slf.editItem(item.UserId);
                }


            }

        }
    }
}