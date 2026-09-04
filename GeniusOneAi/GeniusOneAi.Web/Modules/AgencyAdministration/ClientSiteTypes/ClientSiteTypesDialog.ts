
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ClientSiteTypesDialog extends Serenity.EntityDialog<ClientSiteTypesRow, any> {
        protected getFormKey() { return ClientSiteTypesForm.formKey; }
        protected getIdProperty() { return ClientSiteTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ClientSiteTypesRow.localTextPrefix; }
        protected getService() { return ClientSiteTypesService.baseUrl; }
        protected getDeletePermission() { return ClientSiteTypesRow.deletePermission; }
        protected getInsertPermission() { return ClientSiteTypesRow.insertPermission; }
        protected getUpdatePermission() { return ClientSiteTypesRow.updatePermission; }

        protected form = new ClientSiteTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Client Site Type Editor';
            opt.width = 445;
            opt.height = 245;
            return opt;
        }
    }
}