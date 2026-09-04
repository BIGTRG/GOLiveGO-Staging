
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class CredentialTypesDialog extends Serenity.EntityDialog<CredentialTypesRow, any> {
        protected getFormKey() { return CredentialTypesForm.formKey; }
        protected getIdProperty() { return CredentialTypesRow.idProperty; }
        protected getLocalTextPrefix() { return CredentialTypesRow.localTextPrefix; }
        protected getNameProperty() { return CredentialTypesRow.nameProperty; }
        protected getService() { return CredentialTypesService.baseUrl; }
        protected getDeletePermission() { return CredentialTypesRow.deletePermission; }
        protected getInsertPermission() { return CredentialTypesRow.insertPermission; }
        protected getUpdatePermission() { return CredentialTypesRow.updatePermission; }

        protected form = new CredentialTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Credential Type Editor';
            opt.width = 445;
            opt.height = 245;
            return opt;
        }
    }
}