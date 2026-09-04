
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerCredentialsDialog extends Serenity.EntityDialog<WorkerCredentialsRow, any> {
        protected getFormKey() { return WorkerCredentialsForm.formKey; }
        protected getIdProperty() { return WorkerCredentialsRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerCredentialsRow.localTextPrefix; }
        protected getService() { return WorkerCredentialsService.baseUrl; }
        //protected getDeletePermission() { return WorkerCredentialsRow.deletePermission; }
        //protected getInsertPermission() { return WorkerCredentialsRow.insertPermission; }
        //protected getUpdatePermission() { return WorkerCredentialsRow.updatePermission; }

        protected form = new WorkerCredentialsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Credentials';
            opt.width = 600;
            opt.height = 300;
            return opt;
        }
    }
}