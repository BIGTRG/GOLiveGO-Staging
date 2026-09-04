
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerInvoicesDialog extends Serenity.EntityDialog<WorkerInvoicesRow, any> {
        protected getFormKey() { return WorkerInvoicesForm.formKey; }
        protected getIdProperty() { return WorkerInvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerInvoicesRow.localTextPrefix; }
        protected getNameProperty() { return WorkerInvoicesRow.nameProperty; }
        protected getService() { return WorkerInvoicesService.baseUrl; }
        protected form = new WorkerInvoicesForm(this.idPrefix);

    }
}