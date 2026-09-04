
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerSitesDialog extends Serenity.EntityDialog<WorkerSitesRow, any> {
        protected getFormKey() { return WorkerSitesForm.formKey; }
        protected getIdProperty() { return WorkerSitesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerSitesRow.localTextPrefix; }
        protected getService() { return WorkerSitesService.baseUrl; }
        protected form = new WorkerSitesForm(this.idPrefix);

    }
}