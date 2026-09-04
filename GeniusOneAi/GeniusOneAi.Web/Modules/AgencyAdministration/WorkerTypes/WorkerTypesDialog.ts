
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class WorkerTypesDialog extends Serenity.EntityDialog<WorkerTypesRow, any> {
        protected getFormKey() { return WorkerTypesForm.formKey; }
        protected getIdProperty() { return WorkerTypesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerTypesRow.localTextPrefix; }
        protected getNameProperty() { return WorkerTypesRow.nameProperty; }
        protected getService() { return WorkerTypesService.baseUrl; }
        protected getDeletePermission() { return WorkerTypesRow.deletePermission; }
        protected getInsertPermission() { return WorkerTypesRow.insertPermission; }
        protected getUpdatePermission() { return WorkerTypesRow.updatePermission; }

        protected form = new WorkerTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Worker Type Editor';
            opt.width = 445;
            opt.height = 245;
            return opt;
        }
    }
}