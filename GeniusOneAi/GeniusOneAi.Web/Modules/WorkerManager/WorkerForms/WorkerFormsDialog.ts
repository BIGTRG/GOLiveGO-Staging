
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerFormsDialog extends Serenity.EntityDialog<WorkerFormsRow, any> {
        protected getFormKey() { return WorkerFormsForm.formKey; }
        protected getIdProperty() { return WorkerFormsRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerFormsRow.localTextPrefix; }
        protected getNameProperty() { return WorkerFormsRow.nameProperty; }
        protected getService() { return WorkerFormsService.baseUrl; }
        protected form = new WorkerFormsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Form';
            opt.width = 500;
            opt.height = 250;
            return opt;
        }
    }
}