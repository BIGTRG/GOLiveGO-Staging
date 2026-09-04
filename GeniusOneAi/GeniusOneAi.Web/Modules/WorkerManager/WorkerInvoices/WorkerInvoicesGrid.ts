
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerInvoicesGrid extends Serenity.EntityGrid<WorkerInvoicesRow, any> {
        protected getColumnsKey() { return 'WorkerManager.WorkerInvoices'; }
        protected getDialogType() { return WorkerInvoicesDialog; }
        protected getIdProperty() { return WorkerInvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerInvoicesRow.localTextPrefix; }
        protected getService() { return WorkerInvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}