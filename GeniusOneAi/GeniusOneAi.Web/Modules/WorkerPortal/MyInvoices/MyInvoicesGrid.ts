
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class MyInvoicesGrid extends Serenity.EntityGrid<MyInvoicesRow, any> {
        protected getColumnsKey() { return 'WorkerPortal.MyInvoices'; }
        protected getIdProperty() { return MyInvoicesRow.idProperty; }
        protected getInsertPermission() { return MyInvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return MyInvoicesRow.localTextPrefix; }
        protected getService() { return MyInvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "My Invoices";
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
          }
}