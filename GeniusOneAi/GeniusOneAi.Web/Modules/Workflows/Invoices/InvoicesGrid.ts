
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey() { return 'Workflows.Invoices'; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getService() { return InvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Invoices";
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
                       
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
                    //Open viewer
                }

            }

        }
    }
}