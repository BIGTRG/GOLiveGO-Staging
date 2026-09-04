
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerDelinquenciesDialog extends Serenity.EntityDialog<WorkerDelinquenciesRow, any> {
        protected getFormKey() { return WorkerDelinquenciesForm.formKey; }
        protected getIdProperty() { return WorkerDelinquenciesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerDelinquenciesRow.localTextPrefix; }
        protected getNameProperty() { return WorkerDelinquenciesRow.nameProperty; }
        protected getService() { return WorkerDelinquenciesService.baseUrl; }
        protected form = new WorkerDelinquenciesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Delinquencies';
            opt.width = 500;
            opt.height = 550;
            return opt;
        }
    }
}