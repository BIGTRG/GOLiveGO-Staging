
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class FormTypesDialog extends Serenity.EntityDialog<FormTypesRow, any> {
        protected getFormKey() { return FormTypesForm.formKey; }
        protected getIdProperty() { return FormTypesRow.idProperty; }
        protected getLocalTextPrefix() { return FormTypesRow.localTextPrefix; }
        protected getNameProperty() { return FormTypesRow.nameProperty; }
        protected getService() { return FormTypesService.baseUrl; }
        protected getDeletePermission() { return FormTypesRow.deletePermission; }
        protected getInsertPermission() { return FormTypesRow.insertPermission; }
        protected getUpdatePermission() { return FormTypesRow.updatePermission; }

        protected form = new FormTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Form Type Editor';
            opt.width = 445;
            opt.height = 245;
            return opt;
        }
    }
}