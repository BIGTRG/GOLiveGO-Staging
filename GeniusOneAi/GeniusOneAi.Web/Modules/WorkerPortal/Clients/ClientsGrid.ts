
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class ClientsGrid extends Serenity.EntityGrid<ClientsRow, any> {
        protected getColumnsKey() { return 'WorkerPortal.Clients'; }
        protected getDialogType() { return ClientsDialog; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getInsertPermission() { return ClientsRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getService() { return ClientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "My Patients";
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Activity',
                name: '',
                format: ctx => '<a class="inline-action view-row" title="View Patients"><i class="fa fa-eye text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
           return columns;
        }
        protected getButtons() {
            var buttons = [];
            return buttons;
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
                if (target.hasClass('view-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ClientId);
                }
          
            }

        }
    }
}